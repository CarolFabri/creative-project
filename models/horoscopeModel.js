const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// This defines the structure of the horoscope document in the database, array of object inside MongoDB doc 

const horoscopeOptionSchema = new Schema({
  zodiac: {
    type: String,
    required: true
  },
  energy: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  why: {
    type: String,
    required: true
  },
  advice: {
    type: String,
    required: true
  }
});

const horoscopeSchema = new Schema({
  type: {
    type: String,
    default: "horoscopeOptions"
  },
  options: [horoscopeOptionSchema]
});

// Create the horoscope model based on the schema and export it for use in other files of application 
const Horoscope = model("horoscope", horoscopeSchema);

// Function to get a radom horoscope based on the zodiac sign 

async function getRandomHoroscope(zodiac) {
  const document = await Horoscope.findOne({ type: "horoscopeOptions" });

  if (!document) {
    return null;
  }

  //filter the options to find those matching the zodiac sign and select a random one from the matching options 
  const matchingOptions = document.options.filter(option => option.zodiac === zodiac);

  if (matchingOptions.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * matchingOptions.length);

  return matchingOptions[randomIndex];
}

module.exports = {
  Horoscope,
  getRandomHoroscope
};