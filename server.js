const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data - will be used on all server type files
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// express middleware to bring public folder over to display on page
app.use(express.static("public"));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// server
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}! 🚀`);
});

