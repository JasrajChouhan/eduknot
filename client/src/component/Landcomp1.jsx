import { Link } from "react-router-dom";
import '../extra_css/lc.css'
import {useState , useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../store/reducers/User.reducer';

const Landcomp1 = () => {
    const dispatch = useDispatch();
    
    const [isUniversity, setIsUniversity] = useState(false); 
   // const [isUser, setIsUser] = useState(false); // Changed to use state
    const [loading, setLoading] = useState(true); // Proper declaration for loading state
    const userDetails = useSelector((state) => state.user.userDetails);
  
    useEffect(() => {
      const loadUserDetails = async () => {
        try {
          const userDetailsFromLocalStorage = JSON.parse(localStorage.getItem('userDetails'));
          if (userDetailsFromLocalStorage) {
            dispatch(setUserDetails(userDetailsFromLocalStorage));
            if(userDetails && userDetails !== null ){
            setIsUniversity(userDetailsFromLocalStorage.universityName !== undefined && userDetailsFromLocalStorage  !== null); // Update state based on condition
            }
            // if(userDetails && userDetails !== null ){
            //     setIsUser(userDetailsFromLocalStorage.userId !== undefined && userDetailsFromLocalStorage  !== null); // Update state based on condition
            //     }
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
        <>
            <div className=" change relative w-full mb-20 mt-1  flex">

                <div className=" relative isolate z-0 bg-white px-0 pt-14 lg:px-0">
                    <div className="relative mx-12 max-w-2xl py-24">
                        <div className="text-left">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">
                                EDU<span className="bg-clip-text " style={{background: "linear-gradient(90deg, purple, black)" , backgroundClip : "text" ,color :"transparent"}}>KNOT</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                A one stop solution for doubts and queries of a University student. A unified platform
                                integrating with all the university into a single platform. With Authentication from ABC
                                IDs and Enrollment Number.
                            </p>
                            {(!isUniversity) &&(
                            <div className="mt-8 flex items-center justify-start gap-x-2">
                                <Link to='/verify' >
                                <button
                                    type="button"
                                    className="rounded-md bg-black px-3 btnuni py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black border border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Verify as Student
                                </button></Link>
                                <Link  to="/university">
                                <button
                                    type="button"
                                    className="rounded-md px-3 py-2  btnuni text-sm font-semibold text-black border border-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Log in as a University
                                </button>
                                </Link>

                            </div>)}
                            {isUniversity && ( <div className="mt-8 flex items-center justify-start gap-x-2">
                               
                                <Link  to="/universitydashboard">
                                <button
                                    type="button"
                                    className="rounded-md px-3 py-2  btnuni text-sm font-semibold text-black border border-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Logged in as a University
                                </button>
                                </Link>

                            </div>)}
                            {/* {isUser && ( <div className="mt-8 flex items-center justify-start gap-x-2">
                               
                               <Link  to="/dashboard">
                               <button
                                   type="button"
                                   className="rounded-md px-3 py-2  btnuni text-sm font-semibold text-black border border-black shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                               >
                                   Verified as a User
                               </button>
                               </Link>

                           </div>)} */}
                        </div>

                    </div>

                </div>
                <img className="scale-75 image bg-white   " src="/home-illustration.svg"/>
            </div>

        </>
    )
}
export default Landcomp1;