const express = require("express");
const app = express();

const PORT = 2100 || process.env.PORT;

app.use(express.static(__dirname + "/public", { index: "home.html" }));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
});