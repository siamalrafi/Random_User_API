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
    
  **/

  .get(userControler.getAllUserInfo);


router.route("/user/random")
  /**
     * @api {get} / getRandom user info
     * @apiDescription Random user information from my all users list.
     * @apiPermission admin
     *
     * @apiHeader {String} Authorization   User's access token
     *
     * @apiParam  {Number{1-}}          
     * @apiParam  {Number{1-100}}     
     *
     * @apiSuccess {Object[]} get random user json file.
     *
     * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
     * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
     
   **/

  .get(userControler.getRandomUser);



router.route("/user/save")
  .post(userControler.saveUserInfo);






router.route("/user/update/:id")
  .patch(userControler.updateUserInfo);

router.route("/user/bulk-update")
  .patch(userControler.updateBulkUpdateInfo);



router.route("/user/delete/:id")
  .delete(userControler.deleteUserInfo);


module.exports = router;
