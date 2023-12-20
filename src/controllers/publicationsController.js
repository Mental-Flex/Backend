const Publications = require('../models/Publications')

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



module.exports = {
  createPublication,
  getAllPublications,
  
};
