const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/v1/test.route');
const port = process.env.PORT || 5000;



//  middleware check

app.use(cors());
app.use(express.json());



app.use("/api/v1/test",router);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});