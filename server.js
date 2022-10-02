import express from 'express';
import connectDatabase from './config/db';

//Initialize Express application
const bookstoreApp = express();

//Connect Database 
connectDatabase();

//Create API Endpoints
bookstoreApp.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')
);

//Add Connection Listener
const port = 5000;
bookstoreApp.listen(port, () => console.log(`Express server running on port ${port}`));