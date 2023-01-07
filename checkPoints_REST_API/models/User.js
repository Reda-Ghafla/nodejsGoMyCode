const mongoose = require('mongoose');
//require('dotenv').config()
// require('dotenv').config({ path: '../config/.env' });

const dbUsers = [
  {
    firstName: 'Imad',
    lastName: 'Atik',
    userName: 'imadatik',
    userEmail: 'imad@imad.tk',
    password: 'couc124',
    isApproved: true,
  },
  {
    firstName: 'Karim',
    lastName: 'Anwar',
    userName: 'karimAnwar',
    userEmail: 'karim@anouar.tk',
    password: 'Merci124',
    isApproved: true,
  },
  {
    firstName: 'Hakim',
    lastName: 'Balak',
    userName: 'hakimibalak',
    userEmail: 'hakimi@balak.tk',
    password: 'truthy123',
    isApproved: false,
  },
];

mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    createUsers(dbUsers);
    console.log('Connected');
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  password: { type: String, required: true },
  isApproved: Boolean,
});

const Users = new mongoose.model('Users', userSchema);

const createUsers = async (usersDB) => {
  //   let usersDB = new Users(dbUsers.map((user) => user));
  Users.create(usersDB, (err, infoUsers) => {
    if (err) {
      return err;
    } else {
      return infoUsers;
    }
  });
};

module.exports = Users;
