const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const AuthRoute = require('./routes/auth.route');
const CategoriesRoute = require('./routes/categories.route');
const ProductsRoute = require('./routes/product.route');
const ReviewsRoute = require('./routes/reviews.route');
const UserRoute = require('./routes/user.route');
const WishListRoute = require('./routes/wishlist.route');

const app = express();

app.use(cors());

app.use(express.json({ extended: true }));

app.use('/api/auth', AuthRoute);

app.use('/api/categories', CategoriesRoute);

app.use('/api/products', ProductsRoute);

app.use('/api/reviews', ReviewsRoute);

app.use('/api/user', UserRoute);

app.use('/api/wishlist', WishListRoute);

const PORT = config.get('port') || 5000;

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'dist')));
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
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



