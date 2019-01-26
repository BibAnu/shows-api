const express = require('express');
const userRoutes = require('./user/user.route');
const authRoutes = require('./auth/auth.route');
const showRoutes = require('./show/show.route');
const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

// mount shows routes at /shows
router.use('/shows', showRoutes);

module.exports = router;
