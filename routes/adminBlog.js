// routes/adminBlog.js
const express = require('express');
const blogController = require('../Controllers/blogControllers');
const router = express.Router();

module.exports = (io) => {
    // Modified to pass all required variables
    router.get('/add', (req, res) => {
        res.render('admin/adminUpload', { 
            error: null, 
            message: null, 
            blog: {} 
        });
    });

    router.post('/add', blogController.uploadBlog(io));

    return router;
};