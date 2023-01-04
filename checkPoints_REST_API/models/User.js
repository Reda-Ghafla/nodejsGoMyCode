const mongoose = require('mongoose');
//require('dotenv').config()
// require('dotenv').config({ path: '../config/.env' });

mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
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

module.exports = Users;
