// const Post = require('../models/postModel');

// async function getPosts() {
//   return await Post.find({}).sort({ time: -1 }).exec();
// }

// async function addPost(caption,image, user) {
//   let newPost ={
//     caption: caption,
//     image: image,
//     user: user,
//     likes: 0,
//     time: new Date (),
//     comments:[]
//   };

//   await postData.create(newPost);
// }

// async function addComment(postId, user, text) {
//   await postData.findByIdAndUpdate(
//     postId,
//     {
//       $push: {
//         comments: {
//           user: user,
//           text: text,
//           time: Date.now()
//         }
//       }
//     }
//   );
// }

// async function getLastNPosts(n = 3) {
//     let foundPosts = await postData.find({}).sort({ time: -1 }).limit(n).exec();
//     return foundPosts;
// }

// module.exports = {
//   getPosts,
//   addPost,
//   addComment,
//   getLastNPosts
// };