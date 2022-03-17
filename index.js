const express = require('express');
const expressApp = express();
const PORT = 5055;
const httpServer = expressApp.listen(PORT);
const {
    Server
} = require('socket.io');

//Create a new instance of Socket.io Server
const ioServer = new Server(httpServer);


const staticController = express.static('public-controller');
const staticDisplay = express.static('public-display');

expressApp.use('/controller', staticController);
expressApp.use('/display', staticDisplay);

/*
defino los mensajes que serán enviados entre el display y el controlador 
*/
ioServer.on('connection', (socket) => {


    socket.on('shot', (object) => {
        socket.broadcast.emit('shot', object);
    });

    socket.on('screens', (screens) => {
        socket.broadcast.emit('screens', screens);
    });

    socket.on('win', (boolean) => {
        socket.broadcast.emit('win', boolean);
    });

    socket.on('email', (email) => {
        socket.broadcast.emit('email', email);
    });

    socket.on('emailSent', (boolean) => {
        socket.broadcast.emit('emailSent', boolean);
    });

});