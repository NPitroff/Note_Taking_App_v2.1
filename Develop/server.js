//================LOAD THE CARIABLE FOR THE EXPRESS MODULE====================//
var express = require("express")
//=================DECLARE ROUTES FOR FILE ACCESS=============================//
var apiRoutes = require("./routes/apiRoutes")(app);
var htmlRoutes = require("./routes/htmlRoutes")(app);
//================DECLARE THE EXPRESS NODE FUNCTION===========================//
var app = express();
//================PORT THE SERVER WILL NEED TO LISTEN TO======================//
var PORT = process.env.PORT || 8080;
//================DECLARE PATHS FOR THE EXPRESS FUNCTION======================//
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
//=================COMMAND TO START THE SERVER================================//
app.listen(PORT, () =>{
    console.log("SERVER IS LISTENING AT PORT 8080.")
});