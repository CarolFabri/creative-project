const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  profileImage: {
    type:String,
    default:''
  }
})

const userData = model('users', userSchema)

async function addUser(usernameFromForm, password, firstnameFromForm, lastnameFromForm) {
  // let found = userData.find(thisUser => thisUser.username == usernmae);
  let found = null;
  found = await userData.findOne({ username: usernameFromForm})
  if (found) {
    return false;
  } else {
    let newUser = {
      username: usernameFromForm,
      password: password,
    }
    await userData.create(newUser);
    return true;
  }
  //userData.push(newUser);
}


async function checkUser(usernameFromForm, password) {
  //let foundUser = findUser(username);
  let found = null;
  found = await userData.findOne({ username: usernameFromForm })
  if (found) {
    return found.password == password;
  } else {
    return false;
  }
}

async function findUser(username) {
  return userData.findOne({username: username})
}
async function updateProfile(username, firstname, lastname) {
  return userData.updateOne(
    { username: username },
    { $set: { firstname: firstname, lastname: lastname } }
    
  ); 
} 

async function findUserbyUsername(username){
  return userData.findOne({username:username})
}

async function getAllUsersWithoutPasswords() {
  return userData.find({}, {password: 0}) // exclude password field, admin won't see passwords 
}
async function deleteUserById(id) {
  return userData.deleteOne({ _id: id });
}

async function updateProfileImage(username,profileImage){
  return userData.updateOne(
    {username: username},
    {$set: {profileImage: profileImage}},
    {new: true}
  );
}
module.exports = {
  addUser,
  checkUser,
  findUser,
  updateProfile,
  updateProfileImage,
  findUserbyUsername,
  getAllUsersWithoutPasswords,
  deleteUserById
};