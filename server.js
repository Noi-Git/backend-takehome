const express = require('express');
const connectDB = require('./config/db');

const app = express();

// call the connection to the database
connectDB();

app.get('/', (req, res) => res.send('API Runing'));

// Define Routes
app.use('/api/contractor', require('./routes/api/contractor'));
app.use('/api/report', require('./routes/api/report'));
app.use('/api/post', require('./routes/api/post'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is runing on port ${PORT}`));
