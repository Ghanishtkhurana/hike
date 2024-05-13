const socket = require("socket.io");
const express = require("express");
const http = require("http");

const app = express();

const server = http.createServer(app);
const io = new socket.Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

const userSocketMapper = {}; //~ {userId: socketId}

const getReciversSocketId = (reciverId) => {
  return userSocketMapper[reciverId];
};

io.on("connection", (socket) => {
  console.log("a user connect", socket.id);
  const userId = socket.handshake.query.userId;

  if (userId !== undefined) {
    userSocketMapper[userId] = socket.id;
  }

  // ~ io.emit is used to emit an event to all the connected clients
  io.emit("getonlineusers", Object.keys(userSocketMapper));
  // socket.on is used to listen to the event can be used both on client and server side
  socket.on("disconnect", () => {
    console.log("a user disconnect", socket.id);
    delete userSocketMapper[userId];
    io.emit("getonlineusers", Object.keys(userSocketMapper));
  });
});

module.exports = { app, io, server, getReciversSocketId };
