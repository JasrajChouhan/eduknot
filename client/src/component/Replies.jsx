import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../store/reducers/User.reducer';
import { useClerk } from '@clerk/clerk-react';

function Replies({ postId }) {
  const {user} = useClerk();
  const userDetails = useSelector((state) => state.user.userDetails);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [replies, setReplies] = useState([]);
  const [newReplyContent, setNewReplyContent] = useState('');

  useEffect(() => {
    const loadUserDetails = async () => {
      try {
        const userDetailsFromLocalStorage = JSON.parse(localStorage.getItem('userDetails'));
        if (userDetailsFromLocalStorage) {
          dispatch(setUserDetails(userDetailsFromLocalStorage));
        }
      } catch (error) {
        console.error('Error loading user details:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserDetails();
  }, [dispatch]);

  useEffect(() => {
    const fetchReplies = async () => {
      try {
        const response = await axios.get(`/api/replies/${postId}`);
        setReplies(response.data.reverse()); // Reverse the order of replies
      } catch (error) {
        console.error('Error fetching replies:', error);
      }
    };
    fetchReplies();
  }, [postId]);

  const handleReplySubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/replies/${postId}`, { content: newReplyContent });
      const updatedReplies = [{ ...response.data }, ...replies]; // Add new reply at the beginning
      setReplies(updatedReplies);
      setNewReplyContent('');
    } catch (error) {
      console.error('Error adding reply:', error);
    }
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user || !user.fullName) {
    return <p>Loading.......</p>;
  }
  return (
    <div>
      <form onSubmit={handleReplySubmit}>
        <textarea
          value={newReplyContent}
          onChange={(e) => setNewReplyContent(e.target.value)}
          placeholder="Type your reply here..."
          className="border hidden p-2 mb-2 w-full"
        ></textarea>
        <button type="submit" className=" hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Reply
        </button>
      </form>
      {replies.map((reply) => (
        <div key={reply._id} className="border border-black p-4 my-8 rounded-md">
          <div className='flex flex-row items-center gap-2 mb-4 border-b pb-2 border-black'>
          <p className='font-bold'>{`@${user.firstName}`}</p>
          <p className='font-bold'>{`#${userDetails.university}`}</p>
          
          </div>
          <p>A reply by {`${user.fullName}`} </p>
          <p className='pb-4'>{parse(reply.content)}</p>
          <div className='flex pt-4 mt-2 border-t border-black gap-3'>
          <p className=" text-gray-500">Replied on: {reply.updatedAt.split('T')[0]}</p>
          <p>Time : {reply.updatedAt.split('T')[1].split('.')[0]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Replies;
