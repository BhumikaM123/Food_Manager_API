import * as mongoose from 'mongoose';

export const FoodSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: String,
    color: String,
});