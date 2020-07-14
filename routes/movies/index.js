const express = require('express');
const router = express.Router();

const {
    getAllMovies, uploadMovies, deleteMovies, updateMovies
} = require('./controller')

router.get('/all', getAllMovies);
router.post('/upload', uploadMovies);
router.delete('/delete/:user_id', deleteMovies);
router.put('/update/:user_id',updateMovies)

module.exports = router;