/*
const express = require('express')
const cors = require('cors');
const { connectDB } = require('./config/db');

const {readdirSync} = require('fs')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}*/

//server()

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

// Import DB connection function
const { db } = require('./config/db'); // ✅ Ensure path is correct

// Import your route file (assuming you have this)
const transactionRoutes = require('./routes/transactions'); // ✅ IMPORTANT

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1', transactionRoutes); // ✅ This enables /api/v1/add-income etc.

const PORT = process.env.PORT || 5000;

const server = () => {
  db(); // Connect to MongoDB
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
};

server();
