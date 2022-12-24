let usersDATA = require('./dataUser');

const checkUser = (userAdress, userPassword) => {
  if (userAdress === 'reda@reda.com' && parseInt(userPassword) === 123456) {
    let token = 'randomTextforAuth';

    return token;
  } else {
    return false;
  }
};

const authService = {
  checkUser,
};

module.exports = { authService, usersDATA };
