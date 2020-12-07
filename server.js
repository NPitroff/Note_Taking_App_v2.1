//================LOAD THE CARIABLE FOR THE EXPRESS MODULE====================//
var express = require("express")
//================DECLARE THE EXPRESS NODE FUNCTION===========================//
var app = express();
//================PORT THE SERVER WILL NEED TO LISTEN TO======================//
var PORT = process.env.PORT || 8080;
//================DECLARE PATHS FOR THE EXPRESS FUNCTION======================//
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'));
//=================DECLARE ROUTES FOR FILE ACCESS=============================//
require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);
//=================COMMAND TO START THE SERVER================================//
app.listen(PORT, () =>{
    console.log("SERVER IS LISTENING AT PORT 8080.")
});