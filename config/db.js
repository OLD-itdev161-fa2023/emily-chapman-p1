import mongoose from 'mongoose';
import config from 'config';

//Get the connection string
const database = config.get('mongoURI');

//Connect to MongoDB
const connectDatabase = async () => {
    try {
        await mongoose.connect(database, {
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

export default connectDatabase;