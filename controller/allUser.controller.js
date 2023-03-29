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

    const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * ((max - 1) - min + 1)) + min;
    };
    // console.log(getRndInteger(0, allUserdata.length));
    const randomUser = getRndInteger(0, allUserdata.length);
    console.log(randomUser);
    res.send(allUserdata[randomUser])



    // res.send(allUserdata[0]);    
};
