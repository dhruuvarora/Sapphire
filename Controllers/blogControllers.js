const Blog = require('../models/blogSchema');
const multer = require('multer');
const path = require('path');

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {
        files: 5,
        fileSize: 5 * 1024 * 1024 // 5MB
    },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        }
        cb(new Error('Only images are allowed'));
    }
}).array('images', 5);

// Controller methods
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.render('users/userView', { blogs: blogs });
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).render('error', { message: 'Error fetching blogs' });
    }
};

exports.uploadBlog = (io) => async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            if (err instanceof multer.MulterError) {
                return res.render('admin/adminUpload', { 
                    error: 'File upload error: ' + err.message,
                    message: null,
                    blog: req.body 
                });
            }
            return res.render('admin/adminUpload', { 
                error: err.message,
                message: null,
                blog: req.body 
            });
        }

        try {
            const imageFiles = req.files ? req.files.map(file => file.filename) : [];
            
            const newBlog = new Blog({
                title: req.body.title,
                content: req.body.content,
                images: imageFiles
            });

            await newBlog.save();
            io.emit('new-blog', newBlog);
            
            res.render('admin/adminUpload', { 
                message: 'Blog posted successfully!',
                error: null,
                blog: {} 
            });
        } catch (error) {
            console.error('Error saving blog:', error);
            res.render('admin/adminUpload', { 
                error: 'Error saving blog',
                message: null,
                blog: req.body 
            });
        }
    });
};