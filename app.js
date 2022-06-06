const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");


var items = [];

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    var today = new Date();
    var day = "";
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("eng-US", options);    
    res.render("list", {todayday : day, newItemsAdd: items});
});

app.post("/", function(request, respond){
    var item = request.body.newItem;
    items.push(item);
    respond.redirect("/");
})

app.listen(3000, function() {
    console.log("listening on port 3000...");
});