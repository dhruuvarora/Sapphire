// routes/userBlog.js
const express = require('express');
const blogController = require('../Controllers/blogControllers');
const router = express.Router();

module.exports = (io) => {
    router.get('/feed', blogController.getAllBlogs);
    return router;
};
