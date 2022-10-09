import mongoose from 'mongoose';

const PatronSchema = new mongoose.Schema ({
    date: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    bookTitle: {
        type: String,
        required: true
    },
    bookAuthor: {
        type: String,
        required: true
    }
});

const Patron = mongoose.model('patron', PatronSchema);

export default Patron;