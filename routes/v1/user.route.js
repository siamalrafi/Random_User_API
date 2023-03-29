const express = require("express");
const router = express.Router();
const fs = require("fs");
const userControler = require("../../controller/allUser.controller");



router.route("/user/all")
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

  // .get((req, res) => {
  //   const rawdata = fs.readFileSync('data.json');
  //   const allUserdata = JSON.parse(rawdata);
  //   // console.log(student); // all user data available
  //   res.send(allUserdata);
  // });


  .get(userControler.getAllUserInfo);



module.exports = router;
