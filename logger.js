var logger = function (req, res, next) {
    var method = req.method;
    var url = req.url;
    var time = new Date().getFullYear();
    console.log(method, url, time);
    next();
};

module.exports = logger;