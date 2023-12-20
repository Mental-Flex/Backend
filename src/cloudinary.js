const cloudinary = require('cloudinary').v2

// * Configuracion
cloudinary.config({
    cloud_name: 'dynt8bvs8',
    api_key: '657966255989697',
    api_secret: 'nBYoU7vfDZq8d0U3vyHC9ndLRoM',
    secure: true
})



  

// !--------------------------------
const uploadImage = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: 'products'
        });
        return result.secure_url;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    uploadImage
};