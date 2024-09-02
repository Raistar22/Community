const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const passportSetup = require('./config/passport-setup');

const app = express();

app.use(session({
  secret: 'your-session-secret',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
