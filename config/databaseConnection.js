const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
// mongoose.set("debug", true);

const connectDatabase = async () => {
  mongoose
    .connect("mongodb+srv://rockeym50:maharjan1@mongodb.mpm0nj9.mongodb.net/?retryWrites=true&w=majority&appName=mongodb")
    .then((con) => {
      console.log(
        `MongoDB connected with HOST: ${con.connection.host} and PORT: ${con.connection.port}`
      );
    });
};

module.exports = connectDatabase;
