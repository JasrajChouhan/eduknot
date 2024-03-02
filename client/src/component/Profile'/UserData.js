// UserData.js
import { useState } from "react";
let userData = {}; 

// Function to set user data
export const setUserData = (data) => {

  userData = data;
};

// Function to get user data
export const getUserData = () => {
    
  return userData;
};
