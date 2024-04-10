const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const optimize = (req, res, next) => {
    if(req.file) {
        const imagePath = req.file.path;
        const optImagePath = path.join('images', `opt_${req.file.filename}`);
        sharp.cache(false)
        sharp(imagePath)
            .resize({height: 600})
            .webp({ quality: 80 })
            .toFile(optImagePath)
            .then(() => {
                fs.unlink(imagePath, () => {
                    req.file.path = optImagePath;
                    next();
                });
            })
            .catch(err => next(err));
        } else {
            return next();
        }
    }

module.exports = optimize;
