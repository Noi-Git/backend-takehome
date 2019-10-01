const express = require('express');
const router = express.Router();

// @route 	Get api/report
// @desc		Test route
// @access	Public
router.get('/', (req, res) => res.send('Report route'));

module.exports = router;
