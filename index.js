// initialize express
const express = require('express');
// for .env file configuration
require('dotenv').config();

// for accessing rest api endpoint
// const cors = require('cors');

// for creating a path to redirect to client if route is unidentifiable  
// const path = require('path');

// for csurf securtiy 
// const csrf = require('csurf')
// const csurfInstance = csrf({cookie:true})

// for using authentication when accessing certain routes

// for importing in routes
const landingRoutes = require('./routes/landing');
const productRoutes = require('./routes/product');
// const adminRoutes = require('./routes/admin');
// const loginRoutes = require('./routes/routes/login')
// const logoutRoutes = require('./routes/routes/logout')

// for importing endpoint routes
// const apiLoginRoutes = require('./routes/api/login');
// const googleLoginRoutes = require('./routes/api/googleLogin');
// const createListingRoutes = require('./routes/api/property/createProperty');
// const editListingRoutes = require('./routes/api/property/editProperty');
// const displayListingRoutes = require('./routes/api/property/displayProperty');
// const dashboardListingRoutes = require('./routes/api/property/dashboardProperty');
// const bidSessionRoutes = require('./routes/api/bid/bidSession');
// const paymentRoutes = require('./routes/api/payment');


// for importing user endpoint routes
// const userEndpoints = require('./routes/api/user/index')

// for importing agent endpoint routes
// const agentEndpoints = require('./routes/api/agent/index')

// for initalizing session
const session = require("express-session");
const FileStore = require("session-file-store")(session);

// for initailizing flash
const flash = require("connect-flash");

// for rendering and template
const hbs = require('hbs');
const wax = require('wax-on');

// for cookie 
// const cookieParser = require('cookie-parser');

// setup wax-on
wax.on(hbs.handlebars); // register wax-on helpers with handlerbars
wax.setLayoutPath('./views/layout');


// initiate app
const App = express();

// enable cookie
// App.use(cookieParser());

// enable cors
// App.use(cors({
//     origin: process.env.CLIENT, // Set this to the origin making the request
//     credentials: true, // Allow credentials (cookies) to be sent with requests
// }));

// App.use(express.json());


// enable forms
App.use(
    express.urlencoded({
        extended: false,
    })
);

// set up the view engine
App.set('view engine', 'hbs');

// set up sessions, before flash & routes
App.use(session({
    store: new FileStore(),
    secret: process.env.SESSION_SECRET || 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}));

// set up flash
App.use(flash());


// middlewares routing for flash and csrf
App.use(function (req, res, next) {
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');

    next();
})

// register routes
App.use('/', landingRoutes);
App.use('/product', productRoutes);
// App.use('/login', loginRoutes);
// App.use('/logout', logoutRoutes)

// register common endpoint routes
// App.use('/user-login', express.json(), apiLoginRoutes);
// App.use('/google-login', googleLoginRoutes);

// App.use('/payment', paymentRoutes);

// App.use('/cart', express.json(), cartRoutes);
// App.use('/user-logout', express.json(), apiLogoutRoutes);
// App.use('/cloudinary', express.json(), cloudinaryRoutes);

// // register user endpoint routes
// App.use('/user',express.json(), userEndpoints)
// // register agent endpoint routes
// App.use('/agent',express.json(), agentEndpoints)
// // register property enpoint routes
// App.use('/createlisting', express.json(), createListingRoutes);
// App.use('/editlisting', express.json(), editListingRoutes);
// App.use('/listings', express.json(), displayListingRoutes);
// App.use('/manage', express.json(), dashboardListingRoutes);
// // register bid session enpoint routes
// App.use('/bidsession', express.json(), bidSessionRoutes);

// // Serve static files from the React app
// App.use(express.static(path.join(__dirname, 'client/build')));
// // The "catchall" handler: for any request that doesn't
// // match one above, send back React's index.html file.
// App.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
//   });


App.listen(process.env.PORT || 5000, () => {
    console.log('server Started')
});