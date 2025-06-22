const User = require('./../models/User');

exports.getAllUsers = (req, res) => {
    const users = User.findAll();
    res.send(users);
}

exports.getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = User.findById(userId);

    if (!user) {
        res.status(404).json("User Not Found");
    }
    res.send(user);
}

exports.createNewUser = (req, res) => {
    const user = User.newUser(req.body);
    console.log(req.body, "@controller");
    
    res.status(201).json(user)
}
