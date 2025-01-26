// // Routes/adminRoutes.js

// import express, { Router } from "express";
// import multer from "multer";
// import path from 'path';
// import News from '../models/News.js';

// // setting up storage for multer
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './public/uploads');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

// const upload = multer({ storage: storage });

// const router = Router();

// router.get('/add', (req, res) => {
//     res.render('admin/addNews', { message: null });
// });

// router.post('/add', upload.single('image'), async (req, res) => {
//     const { title, description } = req.body;
//     const image = req.file ? 'uploads/' + req.file.filename : null;

//     if (!title || !description) {
//         return res.status(400).send('Title and Description are required');
//     }

//     try {
//         const newNews = new News({
//             title, description, image
//         });
//         await newNews.save();

//         req.app.get('io').emit('newNews', newNews);

//         res.render('admin/addNews', { message: 'News Posted Successfully' });
//     } catch (error) {
//         console.error("Error Saving news:", error);
//         res.status(500).send("Server Error");
//     }
// });

// export default router;

// adminRoutes.js

import express, { Router } from "express";
import multer from "multer";
import path from 'path';
import News from '../models/News.js';

// setting up storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const router = Router();

router.get('/add', (req, res) => {
    res.render('admin/addNews', { message: null });
});

router.post('/add', upload.single('image'), async (req, res) => {
    const { title, description } = req.body;
    const image = req.file ? 'uploads/' + req.file.filename : null;

    if (!title || !description) {
        return res.status(400).send('Title and Description are required');
    }

    try {
        const newNews = new News({
            title, description, image
        });
        await newNews.save();

        // Emit the new news item through the Socket.IO instance
        req.app.get('io').emit('newNews', newNews);

        res.render('admin/addNews', { message: 'News Posted Successfully' });
    } catch (error) {
        console.error("Error Saving news:", error);
        res.status(500).send("Server Error");
    }
});

export default router;
