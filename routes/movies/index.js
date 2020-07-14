const express = require('express');
const router = express.Router();

const {
    getAllMovies, uploadMovies, deleteMovies
} = require('./controller')

router.get('/all', getAllMovies);
router.post('/upload', uploadMovies);
router.delete('/delete', deleteMovies);

module.exports = router;