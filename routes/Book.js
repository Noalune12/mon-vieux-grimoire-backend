const express = require('express');
const auth = require('../middleware/auth')
const router = express.Router();
const multer = require('../middleware/multer-config');

const bookCtrl = require ('../controllers/Book');

router.post('/', auth, multer, bookCtrl.addBook);

//   router.post('/:id/rating', (req, res, next) => {

//   })

router.put('/:id', auth, multer, bookCtrl.modifyBook);
router.delete('/:id', auth, bookCtrl.deleteBook);
router.get('/', bookCtrl.getAllBooks);
router.get('/:id', bookCtrl.getOneBook);
router.get('/bestrating', bookCtrl.getBestRating);


module.exports = router;