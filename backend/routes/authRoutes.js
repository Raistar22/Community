const router = require('express').Router();
const passport = require('passport');

// Auth Routes
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/'); // Redirect after successful login
});

router.get('/github', passport.authenticate('github', {
  scope: ['profile', 'email']
}));

router.get('/github/callback', passport.authenticate('github'), (req, res) => {
  res.redirect('/'); // Redirect after successful login
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
