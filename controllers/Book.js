const Book = require('../models/Book');

exports.addBook = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Token manquant dans les en-têtes de la requête' });
    }
    console.log(token)
    console.log("Données reçues pour le livre :", req.body);

    delete req.body._id
    const book = new Book({
        ...req.body
    });
    console.log("Objet Book créé :", book);

    book.save()
        .then(() => res.status(201).json({ message: 'Livre enregistré'}))
        .catch(error => res.status(400).json({error}));
  };

exports.modifyBook =  (req, res, next) => {
    Book.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
        .then(() => res.status(200).json({message: 'Livre modifié'}))
        .catch(error => res.status(400).json({error}));
    };

exports.deleteBook = (req, res, next) => {
    Book.deleteOne({_id: req.params.id})
        .then(() => res.status(200).json({message: 'Livre supprimé'}))
        .catch(error => res.status(400).json({error}));
    };

exports.getAllBooks = (req, res, next) => {
    Book.find()
        .then(books => res.status(200).json(books))
        .catch(error=> res.status(400).json({error}));
    };

exports.getOneBook =  (req, res, next) => {
    Book.findOne({_id: req.params.id})
        .then(book => res.status(200).json(book))
        .catch(error => res.status(404).json({error}));
    };

exports.getBestRating = (req, res, next) => {
    Book.find()
        .sort({averageRating: -1})
        .limit(3)
        .then(books => res.status(200).json(books))
        .catch(error => res.status(500).json({error}));
    };