const fs = require("fs");
const userData = require("../data.json");

// get random User --------------
module.exports.getRandomUser = async (req, res, next) => {
    const rawdata = fs.readFileSync('data.json');
    const allUserdata = JSON.parse(rawdata);

    // random integer value generated 
    const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * ((max - 1) - min + 1)) + min;
    };
    const randomUser = getRndInteger(0, allUserdata.length);

    res.status(200).send(allUserdata[randomUser])
};


// get all user information --------------
module.exports.getAllUserInfo = (req, res, next) => {
    const rawdata = fs.readFileSync('data.json');
    const allUserdata = JSON.parse(rawdata);
    // console.log(allUserdata); // all user data available
    res.status(200).send(allUserdata);
};



// save user info --------------
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


// update user info --------------
module.exports.updateUserInfo = (req, res, next) => {
    const id = req.params.id;

    // find the user by their id
    const updateData = userData.find((data) => data.id == id);

    // update user info
    updateData.id = id;
    updateData.name = req.body.name;
    updateData.gendar = req.body.gendar;
    updateData.contact = req.body.contact;
    updateData.adress = req.body.adress;

    res.status(200).send(updateData);
};



// update multiple data 
module.exports.updateBulkUpdateInfo = (req, res, next) => {

    res.send("data updating");
};




// delete user -----------------
module.exports.deleteUserInfo = (req, res, next) => {
    const id = req.params.id;
    const filter = { id: id };

    const newData = userData.filter((data) => data.id != id);
    res.status(200).send(newData);
};


