// Routes/newsRoutes.js

import express, { Router } from "express";
import News from "../models/News.js";


const router = Router();

router.get('/feed', async (req, res) => {
    try {
        // Fetch all news
        const news = await News.find().sort({ createdAt: -1 });

        // Pass news to NewsFeed view
        res.render('user/newsFeed', { news });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

export default router;
