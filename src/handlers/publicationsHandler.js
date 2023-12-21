const {
    createPublication,
    getAllPublications,
    getPublicationById,
  } = require("../controllers/publicationsController");
  const Category = require("../models/Category");
  const { uploadImage } = require("../cloudinary");
  const fs = require("fs-extra");
  
  const createPublicationHandler = async (req, res) => {

    const { name, category, description} = req.body;

  try {
    const image = await uploadImage(req.file.path);

    const newPublication = await createPublication(
      name,
      category,
      description,
      image
    );

    for (const categoryName of category) {
      let categories = await Category.findOne({ name: categoryName });

      if (categories) {
        newPublication.category.push(categories.id);
      }
    }

    await newPublication.save();
    await fs.unlink(req.file.path);
    res.status(201).json(newPublication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
    
  };
  
  
  
  const getPublicationsHandler = async (req, res) => {

    const { name, category} = req.query;
  try {
    let publications = await getAllPublications();

    // Aplica el filtro por nombre si está presente
    if (name) {
      publications = publications.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    // Aplica el filtro por categoría si está presente
    if (category && category !== "All") {
      publications = publications.filter((el) => el.category.includes(category));
    }


    // Devuelve los productos filtrados
    res.status(200).json(publications);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
    
  };


  const getPublicationByIdHandler = async (req, res) => {
    const { idPublication } = req.params;
  
    try {
      const publication = await getPublicationById(idPublication);
      res.status(200).json(publication);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  

  module.exports = {
    createPublicationHandler,
    getPublicationsHandler,
    getPublicationByIdHandler
   
  };
  