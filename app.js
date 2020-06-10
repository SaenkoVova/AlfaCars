const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const AuthRoute = require('./routes/auth.route');
const CategoriesRoute = require('./routes/categories.route');
const ProductsRoute = require('./routes/product.route');
const ReviewsRoute = require('./routes/reviews.route');

const app = express();

app.use(cors());

app.use(express.json({ extended: true }));

app.use('/api/auth', AuthRoute);

app.use('/api/categories', CategoriesRoute);

app.use('/api/products', ProductsRoute);

app.use('/api/reviews', ReviewsRoute);

const PORT = config.get('port') || 5000;

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'dist', 'angularApp')));
    app.use(express.static(path.join(__dirname, 'admin', 'dist')));
    
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'angularApp', 'index.html'));
    })
    app.get('/admin', (req, res) => {
        res.sendFile(path.join(__dirname, 'admin', 'dist', 'index.html'));
    })
}

async function start() {
    try {
         await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
             useUnifiedTopology: true,
             useCreateIndex: true
         });
         app.listen(PORT, () => console.log(`App has been started on port ${PORT} ...`));
     }
    catch (e) {
        console.log('Server error', e.message);
        process.exit(1);
    }
}


start();



