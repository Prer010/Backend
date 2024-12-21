import express from "express"

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello Express.js!</h1>");
});

app.get("/contact", (req, res) => {
    res.send("Contact info : XXXXXXX");
});

app.get("/about", (req, res) => {
    res.send("Hello I am Prerna!");
});

app.listen(port, () => {
    console.log("Server is running on port " +port+ "!");
});