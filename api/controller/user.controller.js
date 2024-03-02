import express from "express";
import User from "../model/user.model.js";

export const allInfoOfUser = async (req , res) => {
    const user = await User.find();
    res.json(user);
    console.log(user);
}

export const createUser = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        console.log(user);
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
}


export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log(updatedUser);
        res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
};


export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log(deletedUser);
        res.status(204).json({ message: "User deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
};



import mongoose from 'mongoose';

export const getUserDetails = async (req, res) => {
  try {
    const userId = req.params.userId;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const userDetails = await User.findById(userId);

    if (!userDetails) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(userDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching user details' });
  }
};
