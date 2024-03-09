const app = require("./app");
const connectDatabase = require("./config/databaseConnection");

//Handling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log("Error", err.stack);
  console.log("Uncaught Exception. Shutting down...");
  process.exit(1);
});

//Setting Config File
require("dotenv").config({ path: "config/config.env" });

//Connecting to database
connectDatabase();

// const server = app.listen(4000, () => {
//   console.log(
//     `Server is working on localhost` +
//       4000 +
//       ` in ` +
//       "Development" +
//       ` mode.`
//   );
// });

//Handle unhandled promise rejections'
process.on("unhandledRejection", (err) => {
  console.log("Error:", err.message);
  console.log("Unhandled promise rejection. Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});
