const {Category} = require ('../db');

module.export= async function loadCategoriesBD(){
    const categories = [
        {
            id:1,
            name: smartphones,
        },
        {
            id:2,
            name: notebooks,
        },
        {
            id:3,
            name: tablets,
        },
        {
            id:4,
            name: accesories,
        }
    ]
    
    categories.forEach(async cat => {
        await Category.create(cat)
      });
}