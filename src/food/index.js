const dotenv = require('dotenv');
dotenv.config({ path: './food/.env' });

const mongoose = require('mongoose');

const foodMongoURI = process.env.FOOD_MONGO_URI;

mongoose.connect(foodMongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to Food MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to Food MongoDB:', error.message);
    });