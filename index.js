const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const router = require('./routes/v1/test.route');
const errorHandler = require("./middleware/errorHandler"); 



//  middleware check

app.use(cors());
app.use(express.json());



app.use("/api/v1/test", router);

app.all("*", (req, res) => {
  res.send("All router")
});

app.use(errorHandler);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});