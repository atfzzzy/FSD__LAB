const express = require("express");

const app = express();

const PORT = 3002;
app.get("/student/:id", (req, res) => {//route parameter
    const studentId = req.params.id;

    res.send(`<h2>Student Profile</h2>
              <p>Student ID: ${studentId}</p>`);
});
app.get("/product/:category/:name", (req, res) => {//multiple route parameters
    const { category, name } = req.params;

    res.send(`<h2>Product Details</h2>
              <p>Category: ${category}</p>
              <p>Product: ${name}</p>`);
});
app.get("/search", (req, res) => {//query parameters
    const { keyword, type } = req.query;

    res.send(`<h2>Search Results</h2>
              <p>Keyword: ${keyword || "Not provided"}</p>
              <p>Type: ${type || "All"}</p>`);
});
app.get("/filter", (req, res) => {//multiple query parameters
    const { category, sort } = req.query;

    res.send(`<h2>Filtered Products</h2>
              <p>Category: ${category || "All"}</p>
              <p>Sort By: ${sort || "Default"}</p>`);
});
app.listen(PORT, () => {//server start
    console.log(`Dynamic URL server running at http://localhost:${PORT}`);
});