const fs = require("fs");
const userData = require("../data.json");


module.exports.getRandomUser = async (req, res, next) => {
    const rawdata = fs.readFileSync('data.json');
    const allUserdata = JSON.parse(rawdata);

    // random integer value generated 
    const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * ((max - 1) - min + 1)) + min;
    };

    const randomUser = getRndInteger(0, allUserdata.length);

    // console.log(randomUser); // random user data available
    res.status(200).send(allUserdata[randomUser])
};


module.exports.getAllUserInfo = (req, res, next) => {
    const rawdata = fs.readFileSync('data.json');
    const allUserdata = JSON.parse(rawdata);
    // console.log(allUserdata); // all user data available
    res.status(200).send(allUserdata);
};




module.exports.saveUserInfo = async (req, res, next) => {
    const userInfo = req.body;

    if (userInfo.id && userInfo.gender && userInfo.name) {
        userData.push(userInfo);
        res.status(200).json(userData);
    } else {
        res.status(404).send("New data is not valid")
    }


    /* fs.appendFile('data.json', JSON.stringify(userInfo), (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('Successfully append');
        }
    });


    res.sendFile(__dirname + "../data.json");

    res.send("allUserdata");
 */
};


module.exports.updateUserInfo = (req, res, next) => {
    const id = req.params.id;

    const updateData = userData.find((data) => data.id == id);

    updateData.id = id;
    updateData.name = req.body.name;
    updateData.gendar = req.body.gendar;
    updateData.contact = req.body.contact;
    updateData.adress = req.body.adress;


    res.status(200).send(updateData);


};



