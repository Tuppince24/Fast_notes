var thedata = require("../db/thedata");

module.exports = function(app) {
    app.get("/notes", function(req, res){
        res.json(thedata);
    });

    app.post("/notes", function(re, res){
        thedata.push(req.body);
        res.json(thedata);
    });

    app.delete("/notes/:id", function(req, res){
        res.send("DELETE Request Called") 
    })
}