// models/News.js

import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String, // Store the image path
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    
});

export default mongoose.model('News', newsSchema);
