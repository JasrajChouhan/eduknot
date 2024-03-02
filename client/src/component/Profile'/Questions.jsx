import React, { useEffect, useState } from 'react';
import Qc from '../Card/Qc.jsx';
import Sidebar from './Sidebar.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../../store/reducers/User.reducer.jsx';
import { useClerk } from '@clerk/clerk-react';
import axios from 'axios';

const Questions = () => {
  const { user } = useClerk();
  const userDetails = useSelector((state) => state.user.userDetails);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

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
    const fetchPosts = async () => {
      try {
        const userId = userDetails.userId;
        console.log(userId);
        if (userId) {
          const response = await axios.get(`/api/posts/user/${userId}`);
          setPosts(response.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    console.log(userDetails);
    console.log(userDetails.userId);

    if (userDetails && userDetails.userId) {
      fetchPosts();
    }

    // fetchPosts();
  }, [userDetails]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user || !user.fullName) {
    return <p>Loading.......</p>;
  }

  return (
    <>
      <Sidebar />
      <div className="absolute ml-64 w-auto top-24 z-[0]">
        <div className=' mt-16 w-[80vw] z-100'>
          {posts.map(post => (
            <Qc key={post._id} name={"@" + user.firstName} question={post.content} />
          ))}
        </div>
      </div>

    
    </>
  );
};

export default Questions;
