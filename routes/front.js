const express = require('express');

const router = express.Router();


router.get('/' ,  (req, res, next) => {
    res.render('front/index')
})

module.exports = router;