//====================DECLARE FS MODULE===============//
var fs = require("fs");

//====================EXPORT THE MODULE TO BE READ AS A JSON======================//
module.exports =function(app){
    let allNotes = require("../db/db.json")

    app.get("/api/notes", (req,res) => {
        return res.json(allNotes)
    })
//====================GET A NOTE FROM THE STORRED ARRAY BY UNIQE ID=================//
app.get("/api/notes/:id", (req,res) => {
    const id = req.params.id;
    let found
    allNotes.forEach(n => {
        if (id == n.id){
            found = n;
            return res.json(n)
        }
    })
    return res.json(false)
})
//====================POST A NEW NOTE SAVED TO AN ARRAY====================//
app.post("/api/notes", (req,res) => {
    const newNote = req.body;
    if (allNotes.length === 0){
        newNote.id = 1;
    } else {
        newNote.id = (allNotes[allNotes.length-1].id + 1);
    }
    allNotes.push(newNote);
    let jNote = JSON.stringify(allNotes)
    fs.writeFile("./db/db.json". jNotes, function(err){
        if (err) {
            return console.log(err);
        }
        console.log("NOTE HAS BEEN ADDED")
    })
    res.json(true)
})

//===================DELETE A NOTE FROM THE ARRAY========================//
app.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    let found;
    allNotes.forEach((n, index) => {
        if(id ==n.id){
            allNotes.splice(index,1)
            let notesCopy = notes.slice();
            let jNotes = JSON.stringify(notesCopy)
            fs.writeFile("./db/db.json", jNotes, function(err){
                if (err) {
                    return console.log(err);
                }
                console.log("NOTE DELETED")
            })

        }
    })
    res.json(true);
})

}