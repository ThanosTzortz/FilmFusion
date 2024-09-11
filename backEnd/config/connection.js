require ("dotenv").config();
const mongoose = require("mongoose");

const URI =  process.env.MONGODB_URL;


main()
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(URI);
}

module.exports = main();
