const fs = require("fs");


module.exports.getAllUserInfo = (req, res, next) => {
    const rawdata = fs.readFileSync('data.json');
    const allUserdata = JSON.parse(rawdata);
    // console.log(student); // all user data available
    res.send(allUserdata);
};



module.exports.getRandomUser = async (req, res, next) => {
    const rawdata = fs.readFileSync('data.json');
    const allUserdata = JSON.parse(rawdata);


    // random integer value generated 
    const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * ((max - 1) - min + 1)) + min;
    };


    const randomUser = getRndInteger(0, allUserdata.length);
    // console.log(randomUser); // random user data available

    res.send(allUserdata[randomUser])
};



module.exports.saveUserInfo = async (req, res, next) => {

    console.log("object");

    res.send("saveUserInfo");

};



