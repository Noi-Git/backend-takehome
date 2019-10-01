const express = require('express');
const router = express.Router();

// @route 	Get api/contactors
// @desc		Test route
// @access	Public
router.get('/', (req, res) => res.send('Contractor route'));

module.exports = router;
