const User = require('../../models/user/User');

module.exports = async (req, res) => {
    try {
        const isUserExist = await User.findOne({
            email: req.body.email
        });
        if (isUserExist)
            res.send('user exist');
        else {
            let newUser = { ...req.body };
            let createUser = await new User(newUser);
            await createUser.save();
            res.send({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email
            });
        }
        
    } catch (err) {
        res.send(err);
    }
}