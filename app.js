const http = require('http');
// const nodemailer = require('nodemailer')

const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Kamal" },
    { id: 3, name: "Nimal" }
]

// JSON.stringify()
// Js object => JSON

// JSON.parse()
// JSON => Js Object 

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write("Hello World!");
        res.end();
    }

    if (req.url == "/health") {
        res.write(JSON.stringify({ health: "healthy" }));
        res.end();
    }

    if (req.url == "/api/users" && req.method == "GET") {
        res.write(JSON.stringify(users));
        res.end();
    }
});

server.listen(3000);

console.log("Server running on port 3000...");
