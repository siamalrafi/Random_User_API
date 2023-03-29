const fs = require("fs");


module.exports.getAllUserInfo = (req, res, next) => {
    const rawdata = fs.readFileSync('data.json');
    const allUserdata = JSON.parse(rawdata);
    // console.log(student); // all user data available
    res.send(allUserdata);
};




