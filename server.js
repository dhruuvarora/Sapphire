// server.js
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
const app = express();

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/blogApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Error connecting to MongoDB:', err));

// Create HTTP server and Socket.io setup
const server = http.createServer(app);
const io = require('socket.io')(server);

// Import routes
const adminRoutes = require('./routes/adminBlog')(io);
const userRoutes = require('./routes/userBlog')(io);

// Use routes
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

// Home route
app.get('/', (req, res) => {
    res.redirect('/user/feed');
});

// Error handling for undefined routes
app.use((req, res) => {
    res.status(404).render('error', { message: 'Page not found' });
});

// Start server
const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});