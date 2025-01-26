// Controllers/newsController.js

import News from "../models/News";

// Fetch all news
const getAllNews = async (req, res) => {
    try {
        const news = await News.find().sort({ createdAt: -1 });
        res.render('user/newsFeed', { news });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};

// Add news
const addNews = async (req, res) => {
    try {
        const { title, description } = req.body;
        const image = req.file ? req.file.filename : null; // Corrected from `fullname` to `filename`

        const newNews = new News({ title, description, image });
        await newNews.save();

        req.io.emit('newNews', newNews); // Emit new news to all connected clients

        res.redirect('/admin'); // Redirect to admin panel
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
};

export default { getAllNews, addNews };
