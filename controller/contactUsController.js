const transporter = require("../utils/transporter");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const Contact = require("../model/Contact");
const movie = require("../model/movie");

exports.sendContactUsEmail = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body);
  const info = await transporter.sendMail({
    from: "jinaalchemycustomermessages@gmail.com",
    to: "syvar.tech@gmail.com",
    subject: "From customer " + req.body.customerName,
    html: `
        <h2 style="font-size: 24px;">Customer Name: ${req.body.customerName}</h2>
        <p style="font-size: 18px;">Contact Number: ${req.body.customerPhone}</p>
        <p style="font-size: 18px;">Customer Email: ${req.body.customerEmail}</p>
        <p style="font-size: 18px;">Message: ${req.body.customerMessage}</p>
    `,
  });

  // You can decide what to do after sending the email
  res.status(200).send("Email sent successfully");
});

exports.getAllMovie = catchAsyncErrors(async (req, res, next) => {
  try {
    const movieList = await movie.find();
    res.status(200).json(movieList);
  } catch (e) {
    res.status(400).send(e);
  }
});

exports.uploadMovie = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body);

  const newMovie = await new movie({
    name: "Spider Man",
    releaseDate: "2023 june 10",
    image: "https://i.postimg.cc/yN64njgG/poh.jpg",
    description:
      "Spider-Man is the first film in the Spider-Man film series directed by Sam Raimi. It tells the story of Peter Parker, a high school student who gains spider-like abilities after being bitten by a genetically altered spider. As he grapples with his new powers, he must also face the villainous Green Goblin, who threatens his loved ones and the city. The film explores themes of power, responsibility, and sacrifice, while also delivering thrilling action sequences and heartfelt moments.",
    genre: "Drama",
    censor: "+16",
  });

  console.log(newMovie);

  await newMovie.save();
  res.status(200).json({
    success: true,
    message: "Movie uploaded successfully",
    data: newMovie,
  });
});
