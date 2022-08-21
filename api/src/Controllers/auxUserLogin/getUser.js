const { User } = require('../../db.js');
const { validatePassword } = require('./bcrypt.js');
const generateToken = require('./generateToken.js');

async function validateUser(mail, password) {
    let user = await User.findAll({
        where: {
            mail
        }
    });
    
    if (user.length < 1 || !await validatePassword(password, user[0].password)) return 'El mail y/o el password son incorrectos';
    else return generateToken();    
};

module.exports = validateUser;
