var path = require("path");


module.exports = function(app){
    app.get("/notes",function(err,res)
    {
        if(err){
            console.log("why");
        }
        res.sendfile(path.join(__dirname, "../public/notes.html"));
    });
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}