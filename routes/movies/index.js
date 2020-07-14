const express = require('express');
const router = express.Router();

const {
    getAllMovies, uploadMovies
} = require('./controller')

router.get('/all', getAllMovies);
router.post('/upload', uploadMovies);

module.exports = router;