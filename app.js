const express = require("express");
const cors = require("cors");
const app = express();
const contactRouter = require("./router/contactRouter");
const connectDatabase = require("./config/databaseConnection");
const serverless = require('serverless-http')
var corsOptions = {
  //   origin: "*",
  origin: true,
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors());
const errorMiddleware = require("./middleware/errors");
connectDatabase();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleware to handle errors
app.use(errorMiddleware);

//contact us router
app.use("/", contactRouter);

module.exports.handler = serverless(app);
