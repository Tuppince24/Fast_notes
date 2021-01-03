var express = require("express");

//making app the palce holder for express
var app = express();

//setting where to listen on local host 
var PORT = process.env.PORT || 8080;
// need this so i can run the server 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// getting my routs 
require("./routes/api")(app);
require("./routes/dex")(app);
//where the app is listening for my local host 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});