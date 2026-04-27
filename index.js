const express = require("express");
const sessions = require("express-session");
const app = express();
const path = require('path');
const multer = require('multer');
require('dotenv').config();
const OpenAI = require("openai");
const { getZodiacSign } = require("./utils/zodiacsign");
const ChatSession = require('./models/chatSession');
const userModel = require('./models/userModel');
const posts = require('./models/postModel');
app.use(express.static(path.join(__dirname, "public")));
// enable JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set ('views', path.join(__dirname, 'view'));

const mongoose = require("mongoose");

const mongoDBPassword = process.env.MONGODB_PASSWORD;
const mongoDBUser = process.env.MONGODB_USERNAME;
const mongoDBAppName = process.env.MONGODB_MYAPPNAME;

// build the URI using the ENV variables
const connectionString = `mongodb+srv://${mongoDBUser}:${mongoDBPassword}@cluster0.l8bm6h3.mongodb.net/?appName=${mongoDBAppName}`;

mongoose.connect(process.env.MONGODB_URI, { dbName: "zodiacTravel" })
  .then(() => {
    console.log("MongoDB Atlas connected");

   app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running at http://localhost:${process.env.PORT || 3000}`);
});

  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });



const client = new OpenAI({                
  apiKey: process.env.OPENAI_API_KEY
});

// async function generateHoliday(zodiac, holidayDate) {
//   const prompt = `
// Suggest one travel destination for a ${zodiac} traveller planning a holiday around ${holidayDate}.

// Format the answer exactly like this:

// Destination:
// Why it matches this zodiac:
// Best activities:
// Weather:
// Travel tip:
// `;
// const response = await client.responses.create({
//   model: "gpt-5.4-nano",
//   input: prompt });
//   return response.output_text
// }
const threeMinutes = 3 * 60 * 1000;
const oneHour = 1 * 60 * 60 * 1000;

app.use(sessions({
  secret: "this is a secret",
  saveUninitialized: false,
  cookie: { maxAge: threeMinutes },
  resave: false
}));

app.use((req, res, next) => {
  res.locals.isLoggedIn = !!req.session?.username;
  res.locals.username = req.session?.username;
  res.locals.errorMessage = null;
  next();
});


function requireLogin(req, res, next) {
  if (req.session && req.session.username) {
    return next();
  }
  return res.status(401).render('pages/mainInter/notloggedin');
}



function findUser(username) {
  return userModel.findUser(username);
}

function updateProfile (req){
  return req.session && req.session.username
}

async function generateHoliday(zodiac, holidayDate) {
  const prompt = `
Suggest one travel destination for a ${zodiac} traveller planning a holiday around ${holidayDate}.

Return JSON in this exact format:
{
  "city": "",
  "why": "",
  "activities": "",
  "weather": "",
  "tip": ""
}
`;

  const response = await client.responses.create({
    model: "gpt-5.4-nano",
    input: prompt
  });

  return JSON.parse(response.output_text);
}

function checkLoggedIn(req, res, nextAction) {
  if (req.session) {
    if (req.session.username) {
      nextAction()
    } else {
      req.session.destroy()
      res.render('pages/notloggedin', {isLoggedIn: false});
      // res.sendFile(path.join(__dirname, '/views', 'notLoggedin.html;)) sending ejs file instead of html ! 
    }
  } else {
    req.session.destroy()
    res.render('pages/notloggedin', {isLoggedIn: false});
   // res.sendFile(path.join(__dirname, '/views', 'notloggedin.html'))
  }
}
function checkLoggedInState(req) {
  return req.session && req.session.username
}

//save image inside public/uploads 

const storage = multer.diskStorage({
  destination: "public/uploads/",
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });



app.get("/", async (req, res) => {
  try {
    const allPosts = await posts.getLastNPosts(40);
   

    res.render("pages/mainInter/social", {
      posts: allPosts || [],
      isLoggedIn: checkLoggedInState(req),
      username: req.session.username
    });
  } catch (error) {
    console.log(error);
    res.send("Error loading homepage");
  }
});

app.get("/dataCollector", requireLogin, (req, res) => {
  res.render("pages/features/travel", {
    username: req.session.username
  });
});

app.get("/holidaydate", requireLogin,(req, res)=>{
  res.render("pages/mainInter/holidaydate");
})

app.get('/register', (req, res) => {
  if (req.session.username) return res.redirect('/');
  res.render("pages/mainInter/register");
});

app.get('/login', (req, res) => {
  if (req.session.username) return res.redirect('/');
  res.render("pages/mainInter/login");
});

app.get("/globe-page", (req, res) => {
  res.render("pages/MainInter/globe",{
    loggedIn: !!req.session.username,
    username: req.session.username || null
  });
});



app.get('/profile', requireLogin, async (req, res) => {
  const user = await findUser(req.session.username);

  const chatSession = await ChatSession
    .findOne({ username: req.session.username })
    .sort({ _id: -1 });

  let messages = [];
  if (chatSession) {
    messages = chatSession.messages;
  }

  res.render('pages/mainInter/profile', {
    user: user,
    messages: messages
  });
});

app.post('/profile', requireLogin, async (req, res) => {
  await userModel.updateProfile(
    req.session.username,
    req.body.firstname,
    req.body.lastname
  );

  const user = await findUser(req.session.username);

  const chatSession = await ChatSession
    .findOne({ username: req.session.username })
    .sort({ _id: -1 });

  let messages = [];
  if (chatSession) {
    messages = chatSession.messages;
  }

  res.render('pages/mainInter/profile', {
    user: user,
    messages: messages
  });
});



app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.render('pages/mainInter/login');
  }

  const ok = await userModel.checkUser(username, password);
  if (!ok) {
    return res.render('pages/mainInter/login', );
  }

  req.session.username = username; 
  return res.redirect('/');
});



app.post('/profile/image', requireLogin, upload.single('avatar'), async (req, res) => {
  try {
    if (!req.file) {
      return res.send('Please select an image');
    }

    const imagePath = '/uploads/' + req.file.filename;
    await userModel.updateProfileImage(req.session.username, imagePath);

    res.redirect('/profile');
  } catch (error) {
    console.log(error);
    res.send('Error uploading profile image');
  }
});
//Social media routes get and post 
app.get('/social', (req, res) => {
  res.redirect('/');
});


app.get('/getposts', async (req, res) => {
  res.json({ posts: await posts.getLastNPosts(10) });
});

app.post('/addcomment', requireLogin, async (req, res) => {
  await posts.addComment(
    req.body.postId,
    req.session.username,
    req.body.text
  );

  res.redirect('/');
});

app.post("/posts/create", requireLogin, upload.single("avatar"), async (req, res) => {
  try {
    const image = req.file ? "/uploads/" + req.file.filename : "";
    const currentUser = await findUser(req.session.username);
    const profileImage = currentUser && currentUser.profileImage
  ? currentUser.profileImage
  : "/images/default-profile.png";

    await posts.addPost(
      req.session.username,
      req.body.caption,
      image,
      profileImage,
      currentUser.profileImage || "/images/default-profile.png"
    );

    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating post");
  }
});
app.post ("/likepost", requireLogin, async (req,res)=> {
  try {
    await posts.likePost(req.body.postId);
    res.redirect("/");
  } catch (error){
    console.log(error);
    res.status(500).send("Error liking post");
  }
});


app.get('/logout', (req, res) => {
  req.session.destroy(()=> {
    res.clearCookie('connect.sid');
    res.render('pages/mainInter/loggedout', );
  });
  
});
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password ) {
    return res.render('pages/mainInter/register', {
  
      errorMessage: 'Please fill in all fields.'
    });
  }

  const ok = await userModel.addUser(username, password);

  if (ok) {
    return res.render('pages/mainInter/login',);
  } else {
    return res.render('pages/mainInter/registration_failed', { isLoggedIn: false });
  }
});

app.post("/holidaydate", (req, res) => {
  const dob = req.body.dob;
   try {
    // your generator logic here
  } catch (error) {
    console.log(error);
    res.send("Error generating travel result");
  }
});
app.post("/result",requireLogin, async (req, res) => {
  try {
    const dob = req.body.dob;
    const holidayDate = req.body.holidayDate;

    const zodiac = getZodiacSign(dob);
    const answer = await generateHoliday(zodiac, holidayDate);

    // temporary example city until your OpenAI response becomes structured
    //**fix the this  */
    const city = answer.city || "";

    const flightLink = `https://www.google.com/travel/flights?q=Flights%20to%20${encodeURIComponent(city)}`;
    const hotelLink = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(city)}`;
    const activityLink = `https://www.viator.com/searchResults/all?text=${encodeURIComponent(city)}`;

    // save chat history only if logged in
    if (req.session && req.session.username) {
      const userMessage = `DOB: ${dob}, Holiday date: ${holidayDate}, Zodiac: ${zodiac}`;
      const botMessage = `Destination: ${answer.city}
Why: ${answer.why}
Activities: ${answer.activities}
Weather: ${answer.weather}
Tip: ${answer.tip}`;

      let chatSession = await ChatSession.findOne({ username: req.session.username });

      if (!chatSession) {
        chatSession = new ChatSession({
          username: req.session.username,
          messages: []
        });
      }
chatSession.messages.push(
  { sender: "user", text: userMessage },
  { sender: "zodiac travel", text: botMessage } // was having error because sender needs to match with mode in message schema
);

         await chatSession.save();
    }

    res.render("pages/mainInter/generator", {
      answer,
      flightLink,
      hotelLink,
      activityLink
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});
  //   res.json({
  //     zodiac,
  //     city: answer.city,
  //     country: answer.country,
  //     why: answer.why,
  //     activities: answer.activities,
  //     weather: answer.weather,
  //     tip: answer.tip,
  //     flightLink,
  //     hotelLink,
  //     activityLink
  //   });
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).send("Something went wrong");
  // }

// app.post("/result",async (req, res) => {
//   const dob = req.body.dob;
//   const holidayDate = req.body.holidayDate;
//   const zodiac =  getZodiacSign(dob);
//   const answer = await generateHoliday(zodiac,holidayDate);
//   res.send(answer);
// });