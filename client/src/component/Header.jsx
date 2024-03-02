import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, useClerk } from '@clerk/clerk-react'; // Import useClerk
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../store/reducers/User.reducer';

function Header() {
  const [loading, setLoading] = useState(true);
  const [isUniversity, setIsUniversity] = useState(false);

  const userDetails = useSelector((state) => state.user.userDetails);
  const dispatch = useDispatch();
  const { user } = useClerk(); // Use the useClerk hook here

  useEffect(() => {
    const loadUserDetails = async () => {
      try {
        const userDetailsFromLocalStorage = JSON.parse(localStorage.getItem('userDetails'));
        if (userDetailsFromLocalStorage) {
          dispatch(setUserDetails(userDetailsFromLocalStorage));
          if(userDetailsFromLocalStorage.universityName !== undefined){
            setIsUniversity(true);
          } else{
            setIsUniversity(false);
          };
          console.log(userDetails);
          console.log(setIsUniversity);
        }
      } catch (error) {
        console.error('Error loading user details:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserDetails();
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>; // Display a loading spinner or message
  }

  return (
    <header className="bg-white res text-black body-font h-24 w-full top-0 shadow-sm rounded-2xl  md:h-24  sm:h-64">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img src="/logo.jpeg" alt="Logo" className="  text-white p-2 h-[50px] " />
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-indigo-300">Home</Link>
          <Link to="/aboutus" className="mr-5 hover:text-indigo-300">About Us</Link>
        </nav>
        {!isUniversity && (
          <div className="">
            <SignedOut>
              <SignInButton mode="modal" redirectUrl="/verify" className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 mr-3">
                Sign In
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link to="/dashboard" className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 mx-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 mr-3">
                Dashboard
              </Link>
              <Link to="/news" className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 mx-3  focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0">
                News
              </Link>
              <Link to="/profile" className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0">
                Profile
              </Link>
            </SignedIn>
          </div>

        )}
        {isUniversity && (
           <Link to="/universitydashboard" className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 mx-3  focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0">
           Dashboard
         </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
