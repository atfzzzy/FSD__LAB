const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("Hello Shafana!!");
});

app.get("/about", function(req, res) {
    res.send("This is about page");
}); 

app.get("/contact", function(req, res) {
    res.send("Contact page");
});

app.get("/user", function(req, res) {//JSON route
    res.json({
        name: "Shafana",
        course: "AIML",
        age: 19
    });
});

app.listen(3000, function() {
    console.log("Server is running on port 3000 successfully!");
    // I can use another port also, but it should not be used by another app.
});