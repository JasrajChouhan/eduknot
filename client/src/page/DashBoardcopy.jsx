import { useClerk } from '@clerk/clerk-react';
import axios from 'axios';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import Qc from '../Card/Qc.jsx';
// import Sidebar from './Sidebar.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../store/reducers/User.reducer';


function Dashboardcopy() {
  const { user } = useClerk();
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const userDetails = useSelector((state) => state.user.userDetails);
  const dispatch = useDispatch();
  const[userid , setuserid] = useState(null);
  const[author , setauthor] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserDetails = async () => {
      try {
        const userDetailsFromLocalStorage = JSON.parse(localStorage.getItem('userDetails'));
        if (userDetailsFromLocalStorage) {
          dispatch(setUserDetails(userDetailsFromLocalStorage));
          setuserid(userDetails.userId); 
          console.log(userid); 

        }
      } catch (error) {
        console.error('Error loading user details:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserDetails();
  }, [dispatch]);
  
  useEffect( async () => {
  await axios.get(`api/posts/${userid}`) // need to fix this line
      .then(response => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

//   const truncateContent = (content) => {
//     if (content.length > 100) {
//       return content.slice(0, 100) + '...';
//     }
//     return content;
//   };


//   // const filteredPosts = posts.filter(post => {
  
//   //   // const titleMatch = post.author && post.author.includes(userid);
//   //   console.log(post.author === userid);
//   //   console.log( "useriDS" ,userid);
//   //   console.log( "AUTER" ,  post.author);
//   //   const titleMatch =  post.author === userid;

//   //   console.log(titleMatch);
    
    
//   //   return titleMatch;
//   // });
//   // const filteredPosts = posts.filter(post => {
//   //   setauthor(post.author)
//   //   console.log('User ID:', userid);
//   //   console.log('Post Author:', post.author);
//   //   return post.author === userid;
//   // });
  
// console.log(filteredPosts);


//   const getTagUsageCount = (tagName) => {
//     return posts.reduce((acc, post) => {
//       if (post.tags && post.tags.includes(tagName)) {
//         acc += 1;
//       }
//       return acc;
//     }, 0);
//   };

//   // const [name , setName] = useState(user.firstName);

//   // useEffect ( () => {
//   //   setName(user.firstName.charAt(0).toUpperCase() + user.firstName.substr(1));
//   // } , [])
  
  

//   return (
//     <>
//     <div className=" flex flex-col items-center justify-center mt-10 ">
//       <div className="text-center mb-4 border-2 w-[80%] py-2 rounded-lg hoverborder-black ">
//         <p className="text-lg  text-gray-500   ">
          
//           Hi! {name} 👋,Welcome to <span className="font-bold text-black"  >Eduknot</span> Web App. We are delighted to have you here.  </p>
//       </div>
      
//       <div className=" w-[80%] py-2">
//         <Link to='/createPost'>
//           <button className="px-4 py-2 text-black border rounded hover:border-black mb-4">Create Post</button>
//         </Link>
        
        
//         <div className="bg-white border  shadow-md rounded-lg overflow-hidden mb-4 p-4 hover:border-black">
//           <input 
//             type="text" 
//             placeholder="Search by university tag or name..." 
//             className="w-full p-2 border border-gray-300 rounded"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>

//         <div className="bg-white shadow-md rounded-md border hover:border-black overflow-hidden">
//           <h2 className="text-lg font-bold text-black border-b border-black  px-4 py-2">Latest Posts</h2>
//           <ul className="divide-y divide hover:divide-black  ">
//             {filteredPosts.map(post => (
//               <li key={post._id} className="px-4 py-2">
//                 <Link to={`/posts/${post._id}`} className="text-indigo-500 hover:underline">
//                   <h3 className="font-semibold">{post.title}</h3>
//                 </Link>
//                 <div>{parse(truncateContent(post.content))}</div>
//                 {post.tags && post.tags.map(tag => (
//                   <span key={tag} className="text-sm font-semibold mr-2">{tag} ({getTagUsageCount(tag)})</span>
//                 ))}
//                 {post.content.length > 100 && (
//                   <Link to={`/posts/${post._id}`} className="text-indigo-500 hover:underline">Read more</Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>

   
//     </>
//   );
}

export default Dashboardcopy;
