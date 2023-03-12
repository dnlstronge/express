const authorize = (req, res, next) => {
    const { user } = req.query;
    if(user === "dave") {
        req.user = { name: "dave", id: 3}
        next()
    } else {
        res.status(401).send("user not authorized")
    }
    
    next()
};

module.exports = authorize;

