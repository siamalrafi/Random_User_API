const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const errorHandler = require("./middleware/errorHandler");
const router = require('./routes/v1/user.route');




//  middleware check

app.use(cors());
app.use(express.json());


// get all user information
// app.get("/", (req, res) => {
//   const rawdata = fs.readFileSync('data.json');
//   const student = JSON.parse(rawdata);
//   console.log(student);
//   res.sendFile("student")
// })





app.use("/api/v1", router); 






app.all("*", (req, res) => {
  res.send("Router dose not exist.")
});

app.use(errorHandler);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});