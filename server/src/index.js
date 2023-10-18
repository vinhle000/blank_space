// backend/
// ├── src/
// │   ├── controllers/     # Business logic
// │   ├── models/          # Database models
// │   ├── routes/          # API Routes
// │   ├── utils/           # Utility functions
// │   └── socket.js        # WebSocket setup
// ├── test/                # Automated tests
// ├── package.json         # Package manifest
// └── server.js            # Entry point
// controllers/: Contains the business logic for the game.
// models/: If you are using a database, put your database models here.
// routes/: Define API endpoints for HTTP-based interactions.
// utils/: Utility functions and middleware.
// socket.js: Manages WebSocket connections and real-time logic.
// server.js: Main entry point where you set up your server and bring everything together.
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();

app.use(cors());

// Add middleware to set the Access-Control-Allow-Origin header
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  console.log('hello');
});

app.listen(4001, () => console.log(`Listening on port 4001`));
// const server = http.createServer(app);
// const io = socketIo(server);

// io.use(cors());

// io.on('connection', (socket) => {
//   console.log('New client connected');

//   socket.on('message', (message) => {
//     io.emit('message', message);
//   });

//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });
// });

// const port = 4001;
// server.listen(port, () => console.log(`Listening on port ${port}`));