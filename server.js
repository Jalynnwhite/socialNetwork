const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/socialNetwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check connection
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Define routes
app.use('/api/users', require('./routes/userroutes'));
app.use('/api/thoughts', require('./routes/thoughtroutes'));


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
