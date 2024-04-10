const express = require('express');
const mongoose = require('mongoose');
const app = express();

const bookRoutes = require('./routes/Book');
const userRoutes = require('./routes/User');


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

app.use(express.json());

app.use('/api/books', bookRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;