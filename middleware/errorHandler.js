const errorHander = (err, req, res, next) => {
    res.send(err.massage);
}

module.exports = errorHander;