const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  usernameProfi: String,
  profileImage: {
    type:String,
    default:''
  },
    dob: {
    type: Date,
    },
});

const userData = model('users', userSchema)

async function addUser(usernameFromForm, password, usernameProfiFromForm) {
  const foundEmail = await userData.findOne({ 
    username: usernameFromForm 
  });

  if (foundEmail) {
    return false;
  }

  const foundProfileUsername = await userData.findOne({ 
    usernameProfi: usernameProfiFromForm 
  });

  if (foundProfileUsername) {
    return false;
  }

  const newUser = {
    username: usernameFromForm, // email
    password: password,
    usernameProfi: usernameProfiFromForm
  };

  await userData.create(newUser);
  return true;
} // updated to add the usernameProfi to the database and check if the usernameProfi is already taken, if it is return false, if not create the user with the userNameProfi and return true 


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

async function findUserByProfileUsername(usernameProfi) {
  return userData.findOne({ usernameProfi: usernameProfi });
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
  async function updateDob(username,dob){
    return userData.updateOne (
      {username: username},
      {$set: {dob: dob}},
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
  deleteUserById,
  updateDob
};