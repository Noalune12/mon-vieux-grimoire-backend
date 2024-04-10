const express = require('express');
const auth = require('../middleware/auth')
const router = express.Router();
const multer = require('../middleware/multer-config');

const bookCtrl = require ('../controllers/Book');

router.get('/', bookCtrl.getAllBooks);
router.get('/bestrating', bookCtrl.getBestRating);
router.post('/', auth, multer, bookCtrl.addBook);
router.get('/:id', bookCtrl.getOneBook);
router.put('/:id', auth, multer, bookCtrl.modifyBook);
router.delete('/:id', auth, bookCtrl.deleteBook);
router.post('/:id/rating', auth, bookCtrl.ratingBook);

module.exports = router;