import React, { useState  } from 'react';
import Editor from '../component/EditorFile.jsx';
import axios from 'axios'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../store/reducers/User.reducer.jsx';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

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

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const submitPost = () => {
    axios.post('api/posts', { title, content, author: userDetails.userId })
      .then((response) => {
        console.log('Post submitted successfully');
        setTitle('');
        setContent('');
        navigate('/dashboard');
      })
      .catch((error) => {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Create Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className='mt-5' >
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            placeholder='University name || college name  post title'
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
  );
}

export default CreatePost;
