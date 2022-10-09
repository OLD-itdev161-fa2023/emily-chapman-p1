import express from 'express';
import connectDatabase from './config/db';
import { check, validationResult } from 'express-validator';

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

bookstoreApp.post(
    '/api/patrons', 
    [
        check('date', 'Please enter the date for today.').not().isEmpty(),
        check('name', 'Please enter your first and last name.').not().isEmpty(),
        check('email', 'Please enter a valid email.').isEmail(),
        check('bookTitle', 'Please enter the title of the book.').not().isEmpty(),
        check('bookAuthor', 'Please enter the author of the book.').not().isEmpty()
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
        } else {
            return res.send(req.body);
        }
    });

//Add Connection Listener
const port = 5000;
bookstoreApp.listen(port, () => console.log(`Express server running on port ${port}`));