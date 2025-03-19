import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Importing the routes
import userRoutes from './services/userService.js';
import productRoutes from './services/productService.js';

// Reads the .env file and saves it to process.env
dotenv.config();

const app = express(); // Creates an instance of Express application 
app.use(express.json()); // Enables JSON parsing in the body of the request\
app.use(cors());  // Enables other domains to access the API

// Registers the routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));