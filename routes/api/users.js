const express = require('express');
const router = express.Router();

//@route POST api/route
//@desc testRoute
//@access Public
router.post('/',  (req,res) => {
    console.log(req.body);
    res.send('user route');
});

module.exports = router;