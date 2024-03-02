import React from 'react'
import {UserButton} from '@clerk/clerk-react'
import { useClerk } from '@clerk/clerk-react'

function SignInPage() {
    const {user} = useClerk();
    
     if (user) {
      console.log(user);
  }
  return (
    <div className='flex justify-center h-screen items-center z-50' >
        <h1>welcome to your dashboard {user.firstName}</h1>
        <UserButton/>
    </div>
  )
}

export default SignInPage    