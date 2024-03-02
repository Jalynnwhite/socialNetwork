const mongoose = require('mongoose');

// Environment variables for database connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNetwork';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;

// Event listeners for MongoDB connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database.');
});

module.exports = db;
