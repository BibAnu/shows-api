const express = require('express');
const router = express.Router();
const showCtrl = require('./show.controller');

/** POST /api/shows - Returns list of current shows */
router.route('/')
  .get(showCtrl.getCurrentShows);

module.exports = router;
