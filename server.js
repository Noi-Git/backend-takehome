const express = require('express');
const connectDB = require('./config/db');

const app = express();

// call the connection to the database
connectDB();

app.get('/', (req, res) => res.send('API Runing'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is runing on port ${PORT}`));
