import React from 'react';
import UserDetailsForm from '../component/UserDetailsForm.jsx';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import UserDetailsByLogin from '../component/UserDetailsByLogin.jsx';
import { FeatureThree } from '../component/FeatureThree.jsx';
import { HeroSection } from '../component/HeroSection.jsx';
import Landcomp1 from '../component/Landcomp1.jsx';
import LandFaq from '../component/LandFaq.jsx';
import Landinfo1 from '../component/Landinfo1.jsx';

function HomePage() {
  return (
    <div>
      <Landcomp1/>
      <Landinfo1/>
      <LandFaq/>
      
      
    </div>
  );
}

export default HomePage;
