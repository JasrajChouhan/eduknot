import Post from "../model/post.model.js";
import User from '../model/user.model.js'
import { Types } from 'mongoose';
export const createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const getAllPosts = async (req, res) => {
    try {
      const posts = await Post.find().sort({ upvotes: -1 }); ;
      res.status(200).json(posts);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

export const getPostById = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      console.log(req.params.id);
      console.log(req.params._id);
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

export const updatePost = async (req, res) => {
    try {
      const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};


export const deletePost = async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.id);
      if (post) {
        res.status(200).json({ message: 'Post deleted successfully' });
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};


export const upvotePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    post.upvotes += 1;
    const updatedPost = await post.save();

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};




export const getPostByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const posts = await Post.find({ author: userId });

    if (!posts || posts.length === 0) {
      return res.status(404).json({ message: 'No posts found for the specified user' });
    }

    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};