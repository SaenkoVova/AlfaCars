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
const SuplierRoute = require('./routes/suplier.route');
const PaymentRoute = require('./routes/payment.route');
const AdminRoute = require('./routes/admin.route');
const {express, app, http} = require('./socket');

app.use(cors());

app.use(express.json({ extended: true }));

app.use('/api/auth', AuthRoute);

app.use('/api/categories', CategoriesRoute);

app.use('/api/products', ProductsRoute);

app.use('/api/reviews', ReviewsRoute);

app.use('/api/user', UserRoute);

app.use('/api/wishlist', WishListRoute);

app.use('/api/supliers', SuplierRoute);

app.use('/api/payments', PaymentRoute);

app.use('/api/admin', AdminRoute);

const PORT = config.get('port') || 5000;


if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'dist')));

    app.use(express.static(path.join(__dirname, 'admin', 'dist')));
    
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    })

    app.get('/admin', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'admin', 'dist', 'index.html'));
    })

    app.get('*', (req, res) => {
        let urlParts = req.url.split('/');
        if(urlParts[1] === 'admin') {
            res.sendFile(path.resolve(__dirname, 'admin', 'dist', 'index.html'));
        }
        else {
            res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
        }
    })
}

async function start() {
    try {
         await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
             useUnifiedTopology: true,
             useCreateIndex: true
         });
         http.listen(PORT, () => console.log(`App has been started on port ${PORT} ...`));
     }
    catch (e) {
        console.log('Server error', e.message);
        process.exit(1);
    }
}


start();