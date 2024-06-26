const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const nameWithoutExtension = name.split('.').slice(0, -1).join('_'); 
        callback(null, nameWithoutExtension + Date.now() + '.webp');
      }
});
    
module.exports = multer({storage: storage}).single('image');