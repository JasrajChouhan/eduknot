import { NavLink } from "react-router-dom";

import axios from 'axios';
import parse from 'html-react-parser'; // Ensure you're sanitizing any user-generated content
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../store/reducers/User.reducer';
import { useNavigate } from 'react-router-dom';
const UniversitySide = () => {
  const userDetails = useSelector((state) => state.user.userDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setUserDetails(""));
    localStorage.removeItem('userDetails');
    navigate("/");
    window.location.reload();
  }

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

  return (
    <aside className="relative top-20 flex h-screen w-52 flex-col border-r bg-transparent px-10 py-10 z-0">
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="space-y-6">
          <div className="space-y-3">
            <NavLink
              className="flex items-center rounded-lg px-2 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to={`/universitydashboard`}
            >
              <i className="fa-solid fa-user"></i>
              <span className="mx-2 text-sm font-medium">Profile</span>
            </NavLink>
            <NavLink
              className="flex items-center rounded-lg px-2 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to={`/news`}
            >
              <i className="fa-regular fa-newspaper"></i>
              <span className="mx-2 text-sm font-medium">News</span>
            </NavLink>
          </div>
          <button
            className="flex items-center rounded-lg px-2 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            onClick={handleLogout}
          >
            <i className="fa-solid fa-link"></i>
            <span className="mx-2 text-sm font-medium">Log Out</span>
          </button>
        </nav>
      </div>
    </aside>
  );
}

export default UniversitySide;
