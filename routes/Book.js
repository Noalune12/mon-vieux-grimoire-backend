const express = require('express');
const router = express.Router();

const bookCtrl = require ('../controllers/Book');


router.post('/', bookCtrl.addBook);

//   router.post('/:id/rating', (res, req, next) => {

//   })

router.put('/:id', bookCtrl.modifyBook);

router.delete('/:id', bookCtrl.deleteBook);

router.get('/', bookCtrl.getAllBooks);

router.get('/:id', bookCtrl.getOneBook);

router.get('/bestrating', bookCtrl.getBestRating);

// app.get('/api/books', (req, res, next) => {
//     const books = [ {
//         userId : 'jebghbegehjbhjeb',
//         title : 'L\'étranger',
//         author : 'Albert Camus',
//         imageUrl : 'https://i.ibb.co/6m8VRBn/glasses-1052010-1280.jpg',
//         year: '1942',
//         genre: 'Roman',
//         ratings : [
//         {
//         userId : 'jebghbegehjbhjeb',
//         grade : '5'
//         }
//         ], 
//         averageRating : '4'
//         },
//     ];
//     res.status(200).json(books);       
// })


module.exports = router;