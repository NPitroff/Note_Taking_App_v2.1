const path = require("path");


//=================== "/notes" CORRELATES TO THE HTML FILE OF THE SAME NAME===================//
module.exports = function (app) {
  app.get("/notes", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

//============== ALL OTHER NOTES WILL RESPND TO THE "index.html" FILE========================//
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
};