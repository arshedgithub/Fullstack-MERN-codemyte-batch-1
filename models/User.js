const users = [
    { id: 1, name: "John", email: "john@gmail.com" },
    { id: 2, name: "Bob", email: "bob1@gmail.com" },
    { id: 3, name: "Shaun", email: "shaun.2@gmail.com" }
];

// should be come from database

module.exports = {
    findAll: () => users,
    findById: (id) => users.find(user => user.id === id),
    newUser: (user) => {
        console.log(user)
        // console.log(users.length, users.length + 1);
        
        // user.id = users.length + 1,
        // users.push(user);
        return user;
    }
}