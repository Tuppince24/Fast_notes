var thedata = require("../db/thedata");

module.exports = function(app) {
    app.get("/api/notes", function(req, res){
        thedata.getNotes()
        .then(notes => {
            res.json(notes);
        })
    });

    app.post("/api/notes", function(req, res){
        thedata.addNote(req.body)
        .then(note =>{
            res.json(note)
        })
    });

    app.delete("/api/notes/:id", function(req, res){
        thedata.removeNote(req.params.id)
        .then(() =>{
            res.json({
                "ok": true
            })
        })
    })
}