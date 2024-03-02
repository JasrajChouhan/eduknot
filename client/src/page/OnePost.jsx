import React, { useState , useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import parse from 'html-react-parser'
import Replies from '../component/Replies';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../store/reducers/User.reducer';
function OnePost() {
  const { _id } = useParams();
  const userDetails = useSelector((state) => state.user.userDetails);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const [post, setPost] = useState(null);
  const [showReply, setShowReply] = useState(false);
  const [replyContent, setReplyContent] = useState('');
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
    axios.get(`/api/posts/${_id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  }, [_id]);

  const handleUpvote = async () => {
    try {
      const response = await axios.put(`/api/posts/${_id}/upvote`);
      setPost(prevPost => ({ ...prevPost, upvotes: response.data.upvotes }));
      alert('Data received from upvote or server');
    } catch (error) {
      console.error('Error upvoting post:', error);
      alert('Error upvoting post');
    }
  };

  const handleReply = () => {
    setShowReply(true);
  };

  const handlePostReply = async (event) => {
    event.preventDefault(); 
    try {
      await axios.post(`/api/replies`, { 
        content: replyContent,
        postId: _id, 
        userId: userDetails.userId,
      });
      setShowReply(false);
      setReplyContent('');
      
      alert('Reply posted successfully');
    } catch (error) {
      console.error('Error posting reply:', error);
      alert('Error posting reply');
    }
  };
  

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[80%] mx-auto bg-white shadow-md rounded-md p-6 mt-6">
      <h1 className="text-2xl font-semibold mb-6">{post.title}</h1>
      <div>{parse(post.content)}</div>
      <div className="mt-4">
        <button onClick={handleUpvote} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mr-2">
          Upvote ({post.upvotes})
        </button>
        <button onClick={handleReply} className="border border-black hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded">
          Answer
        </button>
      </div>
      {showReply && (
        <form onSubmit={handlePostReply} className="mt-4">
          <textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            placeholder="Write your reply here..."
            className="w-full px-3 py-2 border rounded-md"
            rows={4}
          />
          <button type="submit" className="mt-2  bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Post Reply
          </button>
        </form>
      )}
      
      
      <Replies postId={_id} /> 
    
    </div>
  );
}

export default OnePost;
