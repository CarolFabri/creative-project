const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  user: String,
  text: String,
  time: { type: Date, default: Date.now }
});

const postSchema = new Schema({
  user: String,
  image: String,
  profileImage: String,
  caption: String,
  likes: { type: Number, default: 0 },
  likedBy: { type: [String], default: [] },
  time: { type: Date, default: Date.now },
  comments: [commentSchema]
});

const postData = model('post', postSchema);

async function addPost(user, caption, image, profileImage) {
  let newPost = {
    user: user,
    profileImage: profileImage,
    caption: caption,
    image: image,
    likes: 0,
    likedBy: [],
    time: new Date(),
    comments: []
  };

  await postData.create(newPost);
}

async function addComment(postId, user, text) {
  await postData.findByIdAndUpdate(postId, {
    $push: {
      comments: {
        user: user,
        text: text,
        time: Date.now()
      }
    }
  });
}

async function getLastNPosts(n = 3) {
  let foundPosts = await postData.find({}).sort({ time: -1 }).limit(n).exec();
  return foundPosts;
}

async function likePost(postId, username) {
  const post = await postData.findById(postId);

  if (!post) return;

  if (!post.likedBy) {
    post.likedBy = [];
  }

  if (!post.likedBy.includes(username)) {
    post.likedBy.push(username);
    post.likes = post.likedBy.length;
    await post.save();
  }
}

module.exports = {
  addPost,
  addComment,
  getLastNPosts,
  likePost
};