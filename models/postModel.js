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
  caption: String,
  likes: { type: Number, default: 0 },
  time: { type: Date, default: Date.now },
  comments: [commentSchema]
});

const postData = model('post', postSchema);

async function addPost(user, caption, image) {
  let newPost = {
    user: user,
    caption: caption,
    image: image,
    likes: 0,
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

module.exports = {
  addPost,
  addComment,
  getLastNPosts
};