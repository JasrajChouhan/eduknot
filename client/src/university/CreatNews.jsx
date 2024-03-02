import React, { useState  } from 'react';
import Editor from '../component/EditorFile.jsx';
import axios from 'axios'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../store/reducers/User.reducer.jsx';
import UniversitySide  from  './UniversitySide';
function CreateNews() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.user.userDetails);
  const dispatch = useDispatch();

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
    console.log(userDetails);

    loadUserDetails();
  }, [dispatch]);

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const submitPost = () => {
    axios.post('api/news/createNews', { title, content , author: userDetails.userId  })
      .then((response) => {
        console.log('news submitted successfully');
        alert("Your news has been posted!");

        setTitle('');
        setContent('');
        navigate('/news');
      })
      .catch((error) => {
        alert("does not successful ")
        
        console.error('Error submitting post:', error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ title, content });
    resetForm();
    submitPost();
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
  };



  return (
    <>
      <div className="max-w-4xl absolute top-20 h-64 ml-64 mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Create News</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className='mt-5'>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              placeholder='University Name || College Name  News Title'
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 px-2 block w-full h-10  rounded-md border-gray-300 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm z-50"
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
            <Editor onContentChange={handleContentChange} />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={resetForm}
              className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset
            </button>
            <button
              type="submit"
              
              className="py-2 px-4  bg-indigo-600 rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <UniversitySide />
    </>
  );
}

export default CreateNews;
