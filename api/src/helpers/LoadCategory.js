const {Category} = require ('../db');

module.exports= async function loadCategoriesBD(){
    console.log('LoadCategory Funcionando');
    const categories = [
        {
            id:1,
            name: "smartphones",
        },
        {
            id:2,
            name: "notebooks",
        },
        {
            id:3,
            name: "tablets",
        },
        {
            id:4,
            name: "accesories",
        }
    ]
    
    categories.forEach(async (cat) => {
        await Category.create(cat)
      });
}