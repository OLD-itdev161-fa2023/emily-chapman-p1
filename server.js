import express, { application } from 'express';
import connectDatabase from './config/db';

//Initialize Express application
const bookstoreApp = express();

//Connect Database 
connectDatabase();

//Configure Middleware
bookstoreApp.use(express.json({ extended: false }));

//Create API Endpoints
bookstoreApp.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')
);

bookstoreApp.post('/api/patrons', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

//Add Connection Listener
const port = 5000;
bookstoreApp.listen(port, () => console.log(`Express server running on port ${port}`));