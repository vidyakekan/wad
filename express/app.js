const express = require("express");
const app = express();
//const port = 4000;

// app.use(express.static("public"));


app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
})

app.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/public/home.html");
})

app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/public/contact.html");
})

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
//   });
app.listen(4000);



