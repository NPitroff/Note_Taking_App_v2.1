//====================DECLARE FS MODULE===============//
var fs = require("fs");

//====================EXPORT THE MODULE TO BE READ AS A JSON======================//
module.exports =function(app){
    let allNotes = require("../db/db.json")

    app.get("/api/notes", (req,res) => {
        return res.json(notes)
    })
//====================GET A NOTE FROM THE STORRED ARRAY BY UNIQE ID=================//
app.get("/api/notes/:id", (req,res) => {
    const id = req.params.id;
    let found
    notes.forEach(n => {
        if (id == n.id){
            found = n;
            return res.json(n)
        }
    })
    return res.json(false)
})
}