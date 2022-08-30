const { User } = require('../../db.js');
const { validatePassword } = require('./bcrypt.js');
const generateToken = require('./generateToken.js');

async function validateUser(mail, password) {
    let user = await User.findOne({
        where: {
            mail
        }
    });
    
    if (!user || !validatePassword(password, user.password)) return { error: "El mail o el password son incorrectos"};
    else {
        const tokenGenerated = generateToken(user.id);
        delete user.dataValues.password;
        user.dataValues.token = tokenGenerated;
        console.log(user);
        return user;
    }    
};

module.exports = validateUser;
