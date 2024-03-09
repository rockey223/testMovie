const express = require("express");
const { sendContactUsEmail,getAllMovie,uploadMovie } = require("../controller/contactUsController");
const router = express.Router();

router.route("/contactUs")
.post(
    sendContactUsEmail
)

router.route("/movie")
.get(
    getAllMovie
)
router.route("/upload")
.post(
    uploadMovie
)

module.exports = router;