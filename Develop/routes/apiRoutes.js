//===================================DECLARE ROUTER AND STORE VARIABLES====================//
const router = require("express").Router();
const store = require("../db/store");
//=================================GET API FOR ALL NOTES IN ARRAY=========================//
router.get("/notes", function(req,res){
    store
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

router.post("/notes",(req,res) =>{
    store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});
//========================DELETE API TO REMOVE NOTES=======================================//
router.delete("/notes/:id", function(req, res) {
    store
      .removeNote(req.params.id)
      .then(() => res.json({ ok: true }))
      .catch(err => res.status(500).json(err));
  });
  
  module.exports = router;