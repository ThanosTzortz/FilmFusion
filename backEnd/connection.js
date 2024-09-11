const mongoose = require("mongoose");

const URI = "mongodb+srv://heliasfotiadis:Sha1234@mongo.daopabj.mongodb.net/?retryWrites=true&w=majority&appName=mongo";

async function main() {
  try {
    await mongoose.connect(URI);
    console.log("DB connected successfully");
  } catch (err) {
    console.error("DB connection error:", err);
  }
}

module.exports = main;
