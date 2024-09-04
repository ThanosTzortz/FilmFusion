const mongoose = require("mongoose");

const URI =  "mongodb+srv://maddshatn:Ox94vN2Vrvu011gp@cluster0.ldcgl3b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


main()
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(URI);
}

module.exports = main();