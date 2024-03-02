import React, { useEffect, useState } from 'react';
import Ac from '../AnswerCard/Ac.jsx';
import Sidebar from './Sidebar.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../../store/reducers/User.reducer.jsx';
import { useClerk } from '@clerk/clerk-react';
import axios from 'axios';
const Answer = () => {
   const { user } = useClerk();
   const userDetails = useSelector((state) => state.user.userDetails);
   const dispatch = useDispatch();
   const [loading, setLoading] = useState(true);
   const [answer, setAnswer] = useState([]);
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
      const fetchAnswers = async () => {
        try {
          const userId = userDetails.userId;
          console.log(userId);
          if (userId) {
            const response = await axios.get(`/api/replies/user/${userId}`);
            setAnswer(response.data);
          }
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };
  
      console.log(userDetails);
      console.log(userDetails.userId);
  
      if (userDetails && userDetails.userId) {
        fetchAnswers();
      }
  
   
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
          {answer.map(answer => (
            <Ac key={answer._id} name={"@" + user.firstName} Answer={answer.content} />
          ))}
        </div>
      </div>

    
   
       </>
    );
}

export default Answer;
