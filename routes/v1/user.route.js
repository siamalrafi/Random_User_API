const express = require("express");
const router = express.Router();
const fs = require("fs");


router.route("/")
  /**
    * @api {get} /all user info
    * @apiDescription Get all the user information from this route
    * @apiPermission admin
    *
    * @apiHeader {String} Authorization   User's access token
    *
    * @apiParam  {Number{1-}}          
    * @apiParam  {Number{1-100}}     
    *
    * @apiSuccess {Object[]} all the tools.
    *
    * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
    * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
    */

  .get((req, res) => {
    const rawdata = fs.readFileSync('data.json');
    const student = JSON.parse(rawdata);
    console.log(student);
    res.send(student)
  });



module.exports = router;
