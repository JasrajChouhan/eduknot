import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../store/reducers/User.reducer';
import UniversityAccount from './UniversiryAccount';


const UniversityProfile = () => {
  const userDetails = useSelector((state) => state.user.userDetails);
  const dispatch = useDispatch();
 
  

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

 
  console.log(userDetails);
 
  return (
    <>
      
      <UniversityAccount id =  {` ${userDetails.universityID}`}  env = {` ${userDetails.universityName
    }`} user_name = {`${userDetails.universityName}`} full_name ={`${userDetails.universityName}`} uni = {`${userDetails.universityName}`}  mail = {`${userDetails.universityEmail}`}/>
      {/* Render user details */}

    </>
  );
};

export default UniversityProfile;
