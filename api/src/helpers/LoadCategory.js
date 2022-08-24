const { Category } = require('../db');

module.exports = async function loadCategoriesBD() {
    // Verificamos si las categorias ya fueron creadas
    const allCategories = await Category.findAll()
    if (allCategories.length > 0) {
        console.log("Categorías cargadas previamente")
        return
    }

    console.log('Categorías cargadas');
    const categories = [
        { id: 1, name: "smartphones", },
        { id: 2, name: "notebooks", },
        { id: 3, name: "tablets", },
        { id: 4, name: "accesories", }
    ]

    categories.forEach(async (cat) => {
        await Category.create(cat)
    });
}