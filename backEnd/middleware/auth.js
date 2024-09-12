const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
//require("dotenv").config();

// Middleware to authenticate token
const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ msg: "Access Denied: No Token Provided", status: false });
    }

    try {
        const verified = jwt.verify(token, "secretshakey");
        req.user = verified;
        next();
    } catch (error) {
        console.error(error);
        return res.status(400).json({ msg: "Invalid Token", status: false });
    }
};



// Middleware to check if the user is logged in
const isLoggedIn = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ msg: "User Not Found", status: false });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Internal Server Error", status: false });
    }
};

module.exports = { authenticateToken, isLoggedIn };