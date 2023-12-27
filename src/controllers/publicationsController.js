const Publication = require('../models/Publications')
const { ObjectId } = require('mongodb');

const createPublication =  async (name, category, description, image) => {
    const newPublication = new Publication({
        name,
        category,
        description,
        image
    })

    return await newPublication.save()
}



const getAllPublications = async () => {
  const allPublications = await Publication.find();

  return allPublications;
};


const getPublicationById = async (idPublication) => {
  const publicationById = await Publication.findById(idPublication);

  return publicationById;
};

const deletePublicationById = async (idPublication) => {
  
  const filtro = { _id: new ObjectId(idPublication) };

  const resultado = await Publication.deleteOne(filtro);

  if (resultado.deletedCount === 0) {
    throw new Error('La publicación no pudo ser encontrada o ya fue eliminada.');
  }

  return { mensaje: 'Publicación eliminada exitosamente' };
};



module.exports = {
  createPublication,
  getAllPublications,
  getPublicationById,
  deletePublicationById
  
};
