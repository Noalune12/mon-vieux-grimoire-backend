const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp'
  };

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const nameWithoutExtension = name.split('.').slice(0, -1).join('_'); // Extrait le nom sans l'extension
        const extension = MIME_TYPES[file.mimetype];
        callback(null, nameWithoutExtension + Date.now() + '.' + extension);
      }
});
    
module.exports = multer({storage: storage}).single('image');