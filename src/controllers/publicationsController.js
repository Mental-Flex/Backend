const Publication = require('../models/Publications')

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



module.exports = {
  createPublication,
  getAllPublications,
  getPublicationById
  
};
