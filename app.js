const express = require('express');
const mongoose = require('mongoose');
const app = express();

const Book = require('./models/Books');


app.use(express.json());


mongoose.connect('mongodb+srv://louannebuisson:q3wVyqscckk7htvl@mon-vieux-grimoire.sj4vddb.mongodb.net/?retryWrites=true&w=majority&appName=mon-vieux-grimoire',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.post('/api/books', (req, res, next) => {
    // delete req.body._id
    const book = new Book({
        ...req.body
    });
    book.save()
    .then(() => res.status(201).json({ message: 'Livre enregistré'}))
    .catch(error => res.status(400).json({error}));
  });

  app.get('/api/books', (req, res, next) =>{
    Book.find()
        .then(books => res.status(200).json(books))
        .catch(error=> res.status(400).json({error}));
  });

  app.get('/api/books/:id', (req, res, next) => {
    Book.findOne({_id: reqparams.id})
        .then(book => res.status(200).json(book))
        .catch(error => res.status(404).json({error}));
  })

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


module.exports = app;