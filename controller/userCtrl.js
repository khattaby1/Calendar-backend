const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const createUser = asyncHandler(async (req, res) => {
    console.log('here');
    const { email } = req.body;
    const findUser = await User.findOne({ email });
    if (!findUser) {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else {
        res.status(400).json({ message: 'User already exists' });
    }
});

const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });
    if (findUser && (await findUser.isPasswordMatched(password))) {
        res.json({
            _id: findUser._id,
            firstname: findUser.firstname,
            lastname: findUser.lastname,
            email: findUser.email,
            mobile: findUser.mobile,
        });
    } else {
        throw new Error('Invalid Credentials');
    }
});

module.exports = {
    createUser,
    loginUserCtrl,
};
