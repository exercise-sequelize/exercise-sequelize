const express = require('express');
const router = express.Router();

const {
    getAllMovies, uploadMovies, deleteMovies, updateMovies, getMovieFilterbyGenre 
} = require('./controller')

router.get('/', getAllMovies);
router.post('/upload', uploadMovies);
router.delete('/delete/:user_id', deleteMovies);
router.put('/update/:user_id',updateMovies)
router.post('/genre',getMovieFilterbyGenre)

module.exports = router;