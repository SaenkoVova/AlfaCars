const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


let connected = 0;
let connectedSockets = []

io.on('connection', socket => {
    
    socket.on('adminConnected', () => {
        connectedSockets.push(socket.id);
        io.to(socket.id).emit('showOnline', {connected})
    });
    connected += 1;
    for(let i = 0; i < connectedSockets.length; i++) {
        io.to(connectedSockets[i]).emit('showOnline', {connected})
    }
    socket.on('disconnect', () => {
        connected -= 1;
        for(let i = 0; i < connectedSockets.length; i++) {
            io.to(connectedSockets[i]).emit('showOnline', {connected})
        }
    })
})

module.exports = {
    express,
    app,
    http
}