//================LOAD THE CARIABLE FOR THE EXPRESS MODULE====================//
const express = require("express")
//================LOAD THE VARIABLES FOR FILE READ============================//
const fs = require("fs");
const path = require("path");
//================DECLARE THE EXPRESS NODE FUNCTION===========================//
const app = express();
//================PORT THE SERVER WILL NEED TO LISTEN TO======================//
const PORT = process.env.PORT || 8080;
//================DECLARE PATHS FOR THE EXPRESS FUNCTION======================//
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);
//=================DECLARE ROUTES FOR FILE ACCESS=============================//
 require("./routes/apiRoutes")(app);
 require("./routes/htmlRoutes")(app);
//=================COMMAND TO START THE SERVER================================//
app.listen(PORT, () =>{
    console.log("SERVER IS LISTENING AT PORT 8080.")
});