let usersDATA = require('./dataUser');

const getUsers = () => {
  return usersDATA;
};

const createUsers = (userInfo) => {
  const query = userInfo;
  usersDATA.push({ ...query, id: usersDATA.length + 1 });

  return usersDATA;
};

const deleteUsers = (userID) => {
  const filterID = usersDATA.filter((user) => user.id !== parseInt(userID));
  usersDATA = filterID;
  return usersDATA;
};

const updateUser = (infoUser, userID) => {
  const userUpDate = usersDATA[parseInt(userID) - 1];

  const { email, password } = infoUser;

  userUpDate.email = email;
  userUpDate.password = password;

  return [...usersDATA];
};
const service = {
  getUsers,
  createUsers,
  deleteUsers,
  updateUser,
};

module.exports = { service, usersDATA };
