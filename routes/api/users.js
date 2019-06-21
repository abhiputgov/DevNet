const express = require('express');
const router = express.Router();

//@route GET api/route
//@desc testRoute
//@access Public
router.get('/',  (req,res) => {res.send('user route')});

module.exports = router;