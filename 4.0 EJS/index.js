import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });
  
app.get("/", (req, res) => {
  const d = new Date();
  const day = d.getDay();


  if (day>= 1 && day<=5 ) {
    res.render("index.ejs", {
        day: "weekday",
        motto : "work hard",
  });
}

  else {
    res.render("index.ejs", {
        day: "weekend",
        motto : "have fun",
  });
  }
 
  });
