import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const UserPost = ({ post }) => {
  const truncateContent = (content) => {
    if (content.length > 100) {
      return content.slice(0, 100) + '...';
    }
    return content;
  };

  const getTagUsageCount = (tagName) => {
    if (post.tags) {
      return post.tags.reduce((acc, tag) => {
        if (tag.toLowerCase().includes(tagName.toLowerCase())) {
          return acc + 1;
        }
        return acc;
      }, 0);
    }
    return 0;
  };

  return (
    <div className="bg-white shadow-md rounded-md border hover:border-black overflow-hidden mt-4">
      <h2 className="text-lg font-bold text-black border-b border-black px-4 py-2">{post.title}</h2>
      <div className="px-4 py-2">{parse(truncateContent(post.content))}</div>
      <div className="px-4 py-2">
        {post.tags && post.tags.map(tag => (
          <span key={tag} className="text-sm font-semibold mr-2">{tag} ({getTagUsageCount(tag)})</span>
        ))}
      </div>
      {post.content.length > 100 && (
        <Link to={`/posts/${post._id}`} className="block text-center py-2 text-indigo-500 hover:underline">Read more</Link>
      )}
    </div>
  );
};

export default UserPost;
