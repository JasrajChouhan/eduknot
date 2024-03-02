import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import AboutUsPage from './page/AboutUsPage';
import HomePage from './page/HomePage.jsx';

import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import Footer from './component/Footer.jsx';
import UserDetailsByLogin from './component/UserDetailsByLogin.jsx';
import UserDetailsForm from './component/UserDetailsForm.jsx';
import ContactUs from './page/ContactUs.jsx';
import CreatePost from './page/CreatePost.jsx';
import DashBoard from './page/DashBoard.jsx';
import OnePost from './page/OnePost.jsx';
import PrivacyPolicy from './page/PrivacyPolicy.jsx';
import TermsOfUse from './page/TermsOfUse.jsx';

import Profile from './page/Profile.jsx';

import Questions from './component/Profile\'/Questions.jsx';
// import Dashboardcopy from './page/DashBoardcopy.jsx';

import Account from './component/Profile\'/Account.jsx';
import Answer from './component/Profile\'/Answers.jsx';
import Verify from './page/Verify.jsx';
import University from './university/University.jsx';
import UniversityDashboard from './university/UniversityDashboard.jsx';
import UniNews from './university/UniNews.jsx';
import CreateNews from './university/CreatNews.jsx';
import Dnd from './component/Dnd.jsx';
//import UniversityNews from './university/UniversityNews.jsx';

function App() {
  return (
    <Router>
      <Header/>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
      
        <Route path="/dashboard" element={
          <>
            <SignedIn>
              <DashBoard />
            </SignedIn>
            <SignedOut>
              
            </SignedOut>
          </>
        } />
        <Route path='/contactus' element = {<ContactUs/>} />
        <Route path='/userPage' element= {<DashBoard/>} />
        <Route path='/userLoginByForm' element = {<UserDetailsByLogin/>} />
        <Route path='/userSignInForm' element = {<UserDetailsForm/>} />
        <Route path='/createPost' element = {<CreatePost/>} />
        <Route path="/posts/:_id" element={<OnePost />} />
       
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/profile/account" element={<Account/>} />
        <Route path="/profile/questions" element={<Questions/>} />
        <Route path="/profile/answer" element={<Answer/>} />
        <Route path="/verify" element={<Verify/>} />
         {/* <Route path = "/demo" element = {<Dashboardcopy/>}/> */}
         <Route path = "/university" element = {<University/>}/>
          <Route path = "/universitydashboard" element ={<UniversityDashboard/>}/>
          <Route path = "/news" element = {<UniNews/>} />
          <Route path = "/createnews" element = {<CreateNews/>} />
          <Route path="/profile/addafile" element={<Dnd/>} />
      </Routes>
     
      <Footer/>

    </Router>
  );
}

export default App;
