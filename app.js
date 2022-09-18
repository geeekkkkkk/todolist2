const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const date = require("./views/date.js");
console.log(date);

let items = [];
let workItems = [];

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: true}));


app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    let day = date.getDate();
    res.render("list", {listTitle : day, newItemsAdd: items});
});

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work", newItemsAdd : workItems});
});

app.get("/about", function(requ, resp) {
    resp.render("about");
});

app.post("/", function(request, respond){
    var item = request.body.newItem;
    if(request.body.list === "Work") {
        workItems.push(item);
        respond.redirect("/work");
    }
    else {
        items.push(item);
        respond.redirect("/");
    }
    
})

app.listen(3001, function() {
    console.log("listening on port 3001...");
});