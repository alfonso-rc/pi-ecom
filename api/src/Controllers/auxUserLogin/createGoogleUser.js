const { User, Session } = require("../../db.js");
const generateToken = require("./generateToken.js");

async function createGoogleUser(user) {
    try {
        const [userGoogle, created] = await User.findOrCreate({
            where: { mail: user.email},
            defaults: {
                name: user.given_name,
                lastName: user.family_name,
                mail: user.email,
                userName: user.name,
                image: user.picture,                
            }
        });

        let token = generateToken(userGoogle.id);
        userGoogle.dataValues.token = token;
        delete userGoogle.dataValues.password;

        await Session.create({ user: userGoogle.dataValues});        

    } catch (err) {
        return { error: "No se ha creado el usuario" + err};
    }
};

module.exports = createGoogleUser;
