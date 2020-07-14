const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

let connected = 0;

io.on('connection', socket => {
    connected += 1;
    console.log('user connected', connected);
    socket.emit('userConnected', {connected})
    socket.on('disconnect', () => {
        connected -= 1;
        console.log('user disconnected', connected)
    })
})

module.exports = {
    app,
    http
}