const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

// server port
const port = process.env.PORT || 3000;

// app init
var app = express();

//create static folder
app.use(express.static(path.join(__dirname, 'public')));

// create http server instead of express server
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log("New user connected");

    // message sent to client
    socket.emit('newMessage', {
        from: "Server",
        text: "Hello. This is the server speaking",
        sentAt: 123
    });

    // message received from client
    socket.on('createMessage', (msg) => {
        console.log('createMessage', msg);
    });

    socket.on('disconnect', () => {
        console.log("Disconnected with user");
    });

});

server.listen(port, () => {
    console.log("Server is running");
});  