const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const User = require('../../models/user/User');

// Compare Password with Request Password
const checkIfPassMatch = async (reqPassword, password) => {
    return await bcryptjs.compare(reqPassword, password);
}
// End

// Generate JSON WEB TOKEN
const generateWebToken = () => {
    console.log("Generating json web token");
}
// END

module.exports = async (req, res) => {
    try {
        const isUserExist = await User.findOne({
            email: req.body.email
        });
        if (!isUserExist){
            res.send({
                msg: "No user found",
            });
        }
        else {
            const { email, firstName, lastName, password } = isUserExist;
            if(!await checkIfPassMatch(req.body.password, password)){ // Check if the password match
                res.send({
                    msg: "Password Doesn't Matched",
                });
            }
            else {
                const token = generateWebToken(); // Generate JSON WEB TOKEN\
                res.send({
                    email,
                    firstName,
                    lastName,
                });
            }
        }
        
    } catch (err) {
        res.send(err);
    }
}