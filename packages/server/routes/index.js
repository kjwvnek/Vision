const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/channels', require('./channels'));

module.exports = router;
