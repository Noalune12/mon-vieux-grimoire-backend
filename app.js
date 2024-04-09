const express = require('express');

const app = express();

app.use(express.json());

//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//TEST POST
// app.post('/api/auth/signup', (req, res, next) => {
//     console.log(req.body);
//     res.status(201).json({
//     message: 'Signup'
//   });
// })

app.get('/api/books', (req, res, next) => {
    const books = [ {
        userId : 'jebghbegehjbhjeb',
        title : 'L\'étranger',
        author : 'Albert Camus',
        imageUrl : 'https://i.ibb.co/6m8VRBn/glasses-1052010-1280.jpg',
        year: '1942',
        genre: 'Roman',
        ratings : [
        {
        userId : 'jebghbegehjbhjeb',
        grade : '5'
        }
        ], 
        averageRating : '4'
        },
    ];
    res.status(200).json(books);       
})


module.exports = app;