const express = require('express');
const router = express.Router()
const becomeMarchant = require('../../controller/marchantController');

router.post('/becomemarchant', becomeMarchant);

module.exports = router;