const path = require("path");
const router = require("express").Router();

//=================== "/notes" CORRELATES TO THE HTML FILE OF THE SAME NAME===================//
router.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//============== ALL OTHER NOTES WILL RESPND TO THE "index.html" FILE========================//
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;