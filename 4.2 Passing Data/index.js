import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let html = "Enter your name here : ";
app.get("/", (req, res) => {
  res.render("index.ejs" ,{ html });
});

app.post("/submit", (req, res) => {
var letters = req.body["fName"].length + req.body["lName"].length;
html = `You have ${letters} letters in your name`; 
res.render("index.ejs" ,{ html })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
