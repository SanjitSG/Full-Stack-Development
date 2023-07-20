//importing Post model from postController.js

import Post from '../models/postModel.js';

//create post
export const createPost = (req, res) => {
  const newPost = new Post(req.body)
    .save()
    .then(res.status(201).json({ success: true, message: 'Post created successfully' }))
    .catch((err) => console.log(`Something went wrong :${err}`));
};

//get all posts
export const getAllPosts = (req, res) => {
  Post.find()
    .then((posts) => res.status(200).json({ success: true, data: posts }))
    .catch((err) => console.log(`Something went wrong : ${err}`));
};
//get single post
export const getSinglePost = (req, res) => {
  const { id } = req.params;
  Post.findById(id)
    .then((post) => res.status(200).json({ success: true, data: post }))
    .catch((err) => console.log(`Something went wrong: ${err}`));
};

//update post
export const updatePost = (req, res) => {
  const { id } = req.params;
  const { username, description, duration, date } = req.body;

  Post.findByIdAndUpdate(id, { username, description, duration, date })
    .then(res.status(200).json({ success: true, message: 'Post updated successfully' }))
    .catch((err) => console.log(`Something went wrong: ${err}`));
};

//delete Post
export const deletePost = (req, res) => {
  const { id } = req.params;
  Post.findByIdAndRemove(id)
    .then(() => res.status(200).json({ success: true, message: 'Post deleted successfully' }))
    .catch((err) => console.log(`Something went wrong: ${err}`));
};
