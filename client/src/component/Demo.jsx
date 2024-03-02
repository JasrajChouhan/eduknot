import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncInfoOfUser } from '../store/actions/user.action'

function Demo() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(asyncInfoOfUser());
  }, [dispatch]);

  

  return (
    <div>
      <h1>User Data</h1>
      {/* {users.map((user, index) => (
        <div key={index}>
          <h2>User {index + 1}</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          
        </div>
      ))} */}
    </div>
  );
}

export default Demo;
