const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');
const ACTIONS = require('./src/Actions');

const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('build'));
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// To store the socketId and roomID
const userSocketMap = {};

// To get all the clients connected to the specific roomID.

function getAllConnectedClients(roomId) {
    // Map
    // it will be an array of all the connected sockets connected to an roomID
    return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
        (socketId) => {
            // this will return the socket id and the username of the corresponding sockedID
            // which we are getting from the userSocketmap.
            return {
                socketId,
                username: userSocketMap[socketId],
            };
        }
    );
}

// steps involved.
//1) user connections : as someone try to connect we extract the socket.id and its username

// 2) then we join that socket to its corresponding roomID.

// 3) After joining the room ids we pass the all the clients info to that room


io.on('connection', (socket) => {
    console.log('socket connected', socket.id);

    socket.on(ACTIONS.JOIN, ({ roomId, username }) => {
        userSocketMap[socket.id] = username;
        socket.join(roomId);
        const clients = getAllConnectedClients(roomId);
        clients.forEach(({ socketId }) => {
            io.to(socketId).emit(ACTIONS.JOINED, {
                clients,
                username,
                socketId: socket.id,
            });
        });
    });

    // Here server responds the event that get triggered on codechange and share the code 
    // with every other sockets connect to the corresponding roomID.
    socket.on(ACTIONS.CODE_CHANGE, ({ roomId, code }) => {
        socket.in(roomId).emit(ACTIONS.CODE_CHANGE, { code });
    });

    socket.on(ACTIONS.SYNC_CODE, ({ socketId, code }) => {
        io.to(socketId).emit(ACTIONS.CODE_CHANGE, { code });
    });

    socket.on('disconnecting', () => {
        const rooms = [...socket.rooms];
        rooms.forEach((roomId) => {
            socket.in(roomId).emit(ACTIONS.DISCONNECTED, {
                socketId: socket.id,
                username: userSocketMap[socket.id],
            });
        });
        delete userSocketMap[socket.id];
        socket.leave();
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
