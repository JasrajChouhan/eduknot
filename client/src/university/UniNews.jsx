import axios from 'axios';
import parse from 'html-react-parser'; // Ensure you're sanitizing any user-generated content
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../store/reducers/User.reducer';
import UniversitySide from './UniversitySide';

function UniNews() {
  const dispatch = useDispatch();
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isUniversity, setIsUniversity] = useState(false); // Changed to use state
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
        }
      } catch (error) {
        console.error('Error loading user details:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserDetails();
  }, [dispatch]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/api/news');
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const truncateContent = (content) => {
    return content.length > 100 ? `${content.slice(0, 100)}...` : content;
  };

  const filteredNews = news.filter((newsItem) => {
    const titleMatch = newsItem.title && newsItem.title.toLowerCase().includes(searchQuery.toLowerCase());
    const tagsMatch = newsItem.tags && newsItem.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return titleMatch || tagsMatch;
  });

  return (
    <>
    {isUniversity && (<div className="absolute flex flex-col items-center ml-56 justify-center mt-10 z-100 w-[80%]">
        {/* Content and UI Elements */}
        <div className="text-center mb-4 border-2 w-[80%] py-2 rounded-lg hover:border-black">
          <p className="text-lg text-gray-500">
            Hi! Faculty of <span className='font-bold text-black'>{userDetails.universityName}</span> 👋,Welcome to <span className="font-bold text-black">Eduknot</span> Web App. We are delighted to have you here.
          </p>
        </div>
        
        <div className="w-[80%] py-2">
          {isUniversity && (
            <Link to='/createnews'>
              <button className="px-4 py-2 text-black border rounded hover:border-black mb-4">Create News</button>
            </Link>
          )}
          
          {/* Search and News Listing */}
          <div className="bg-white shadow-md rounded-md border hover:border-black overflow-hidden">
            <h2 className="text-lg font-bold text-black border-b border-black px-4 py-2">Latest News</h2>
            <ul className="divide-y divide-gray-200">
              {filteredNews.map(newsItem => (
                <li key={newsItem._id} className="px-4 py-2">
                  <Link to={``} className="text-indigo-500 hover:underline">
                    <h3 className="font-semibold">{newsItem.title}</h3>
                  </Link>
                  <div>{truncateContent(parse(newsItem.content))}</div> {/* Ensure you're sanitizing this content */}
                  {newsItem.tags && newsItem.tags.map(tag => (
                    <span key={tag} className="text-sm font-semibold mr-2">{tag}</span>
                  ))}
                  {/* {newsItem.content.length > 100 && (
                    <Link to={`/news/progress`} className="text-indigo-500 hover:underline">Read more</Link>
                  )} */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>)}
      {!isUniversity &&(
        <div className="relative flex flex-col items-center  justify-center mt-10 z-100 ">
        {/* Content and UI Elements */}
        <div className="text-center mb-4 border-2 w-[80%] py-2 rounded-lg hover:border-black">
          <p className="text-lg text-gray-500">
            Hi!  <span className='font-bold text-black'>user</span> 👋,Welcome to <span className="font-bold text-black">Eduknot</span> Web App. We are delighted to have you here.
          </p>
        </div>
        
        <div className="w-[80%] py-2">
          {isUniversity && (
            <Link to='/createnews'>
              <button className="px-4 py-2 text-black border rounded hover:border-black mb-4">Create News</button>
            </Link>
          )}
          
          {/* Search and News Listing */}
          <div className="bg-white shadow-md rounded-md border hover:border-black overflow-hidden">
            <h2 className="text-lg font-bold text-black border-b border-black px-4 py-2">Latest News</h2>
            <ul className="divide-y divide-gray-200">
              {filteredNews.map(newsItem => (
                <li key={newsItem._id} className="px-4 py-2">
                  <Link to={``} className="text-indigo-500 hover:underline">
                    <h3 className="font-semibold">{newsItem.title}</h3>
                  </Link>
                  <div>{truncateContent(parse(newsItem.content))}</div> {/* Ensure you're sanitizing this content */}
                  {newsItem.tags && newsItem.tags.map(tag => (
                    <span key={tag} className="text-sm font-semibold mr-2">{tag}</span>
                  ))}
                  {/* {newsItem.content.length > 100 && (
                    <Link to={`/news/${newsItem._id}`} className="text-indigo-500 hover:underline">Read more</Link>
                  )} */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      )}
      {isUniversity && (
          <UniversitySide />
      )}
    
    </>
  );
}

export default UniNews;
