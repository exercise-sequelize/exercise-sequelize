const express = require('express')
const app = express('')
const ejs = require("ejs");

const PORT = process.env.PORT || 4000;

app.set("view engine", "ejs");
app.use(express.static("views"));

app.get("/", (req, res) => {
    res.render("pages/index.ejs");
});


app.listen(PORT, () => {
    console.log(`Servers runs on port ${PORT}`);
});