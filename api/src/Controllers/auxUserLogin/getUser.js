const { User } = require('../../db.js');
const generateToken = require('./generateToken.js');

async function validateUser(mail, password) {
    let user = await User.findAll({
        where: {
            mail,
            password
        }
    });
    if (user.length < 1) return 'El mail y/o el password son incorrectos';
    else return generateToken();    
};


// module.exports = {
//     validateUser
// };

module.exports = validateUser;
