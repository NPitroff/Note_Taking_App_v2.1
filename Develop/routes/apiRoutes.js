//=================================DECLARE VARIABLES FOR PATH=============================//
const fs = require('fs');
const db = require("../db/db.json");
const id = require("../db/runningID.json")
//=================================GET API FOR ALL NOTES IN ARRAY=========================//
function saveNotes() {
    fs.writeFileSync("db/db.json", JSON.stringify(db));
}

function saveNoteID() {
    fs.writeFileSync("db/runningID.json", JSON.stringify(id));
}

module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        res.json(db);
    });

    app.post("/api/notes", (req, res) => {
        const newReq = req.body;
        id.noteID += 1;
        newReq.id = id.noteID;
        db.push(newReq);
        res.json(newReq);

        saveNotes();
        saveNoteID();

        // console.log(newReq);
        // console.log(id);
    });

    app.delete("/api/notes/:id", (req, res) => {
        let matchedNote = false;
        db.forEach((element, index) => {
            if(element.id == req.params.id) {
                matchedNote = true;
                db.splice(index,1);
                saveNotes();
            }
        });
        
        if(!matchedNote) {
            res.json({ ok: false });
        }
        else {
            res.json({ ok: true });
        }
        
    });
};