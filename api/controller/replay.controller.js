import Reply from '../model/reply.model.js';


export const  createReply = async (req, res) => {
  try {
    const { content, postId, userId } = req.body;
    const newReply = new Reply({ content, postId, userId });
    const savedReply = await newReply.save();
    res.status(201).json(savedReply);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const getRepliesByPostId = async (req, res) => {
  try {
    const postId = req.params.postId;
    const replies = await Reply.find({ postId });
    console.log(replies);
    res.status(200).json(replies);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const deleteReply = async (req, res) => {
  try {
    const replyId = req.params.id;
    const deletedReply = await Reply.findByIdAndDelete(replyId);
    res.status(200).json(deletedReply);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const getRepliesByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log(userId);
    const replies = await Reply.find({ userId: userId });

    if (!replies || replies.length === 0) {
      return res.status(404).json({ message: 'No posts found for the specified user' });
    }
    console.log(replies);
    res.status(200).json(replies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};