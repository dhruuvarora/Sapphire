// // index.js

// import express from "express";
// import dotenv from 'dotenv';
// import connectDB from "./utils/db.js";
// import cors from "cors";
// import cookieParser from 'cookie-parser';
// import compression from "compression";
// import userRoute from './Routes/user.route.js';
// import newsRoutes from './Routes/newsRoutes.js'; 
// import adminRoutes from './Routes/adminRoutes.js'; 
// import http from 'http';
// import path from "path";
// import { Server as SocketIo } from 'socket.io'; 
// import News from './models/News.js'; // Corrected path

// // Load environment variables
// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3001;
// const server = http.createServer(app); 
// const io = new SocketIo(server); 

// const allowedOrigins = ['http://localhost:5173','http://localhost:8000'];

// const corsOptions = {
//     origin: (origin, callback) => {
//         if (allowedOrigins.includes(origin) || !origin) {
//             callback(null, true); 
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
//     allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], 
// };

// app.use(compression());

// // Middleware
// app.use(cors(corsOptions));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // Define __dirname for ES modules using import.meta.url
// const __dirname = path.dirname(new URL(import.meta.url).pathname);

// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// // Set EJS as the template engine
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // Routes
// app.use('/news', newsRoutes);
// app.use('/admin', adminRoutes);
// app.use('/api', userRoute);

// // Health check route
// app.get('/health', (req, res) => {
//     res.status(200).json({ status: 'OK', message: 'Server is running' });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({
//         error: 'Internal Server Error',
//         message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong',
//         status: false
//     });
// });

// // Handle 404 routes
// app.use((req, res) => {
//     res.status(404).json({
//         error: 'Not Found',
//         message: 'The requested resource was not found',
//         status: false
//     });
// });

// // Start server
// const startServer = async () => {
//     try {
//         await connectDB();
//         server.listen(port, () => { 
//             console.log(`Server is running on port ${port}`);
//         });
//     } catch (error) {
//         console.error('Failed to start server:', error);
//         process.exit(1);
//     }
// };

// startServer();

import express from "express";
import dotenv from 'dotenv';
import connectDB from "./utils/db.js";
import cors from "cors";
import cookieParser from 'cookie-parser';
import compression from "compression";
import userRoute from './Routes/user.route.js';
import newsRoutes from './Routes/newsRoutes.js'; 
import adminRoutes from './Routes/adminRoutes.js'; 
import http from 'http';
import path from "path";
import { Server as SocketIo } from 'socket.io'; 
import News from './models/News.js'; // Corrected path

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const server = http.createServer(app); 
const io = new SocketIo(server); // Create the Socket.IO instance

// Attach io to the app object for access in routes
app.set('io', io);

const allowedOrigins = ['http://localhost:5173','http://localhost:8000'];

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true); 
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], 
};

app.use(compression());

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Define __dirname for ES modules using import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/news', newsRoutes);
app.use('/admin', adminRoutes);
app.use('/api', userRoute);

// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Internal Server Error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong',
        status: false
    });
});

// Handle 404 routes
app.use((req, res) => {
    res.status(404).json({
        error: 'Not Found',
        message: 'The requested resource was not found',
        status: false
    });
});

// Start server
const startServer = async () => {
    try {
        await connectDB();
        server.listen(port, () => { 
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
