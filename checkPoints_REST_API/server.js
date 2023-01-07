require('dotenv').config({ path: './config/.env' });

const Users = require('./models/User');
const express = require('express');

const app = express();

app.use(express.json());

// get all users
app.get('/', async (req, res) => {
  const allUsers = await Users.find({}).sort('name');
  res.send(allUsers);
});

// Add new User
app.post('/', async (req, res) => {
  const newUser = new Users({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    userEmail: req.body.userEmail,
    password: req.body.password,
    isApproved: req.body.isApproved,
  });

  await newUser.save();
  res.send(newUser);
});

// Update a user info
app.put('/:id', async (req, res) => {
  const findUser = await Users.findByIdAndUpdate(
    req.params.id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      password: req.body.password,
    },
    { new: true }
  );
  //   console.log(findUser);

  if (!findUser) {
    res.send('User not found');
  }

  //   findUser.firstName = req.body.firstName;
  //   findUser.lastName = req.body.lastName;
  //   findUser.userName = req.body.userName;
  //   findUser.password = req.body.password;

  res.send(findUser);
});

// Delete a user By Id
app.delete('/:id', async (req, res) => {
  const deleteUser = await Users.findOneAndDelete(req.params.id);

  res.send(deleteUser);
});
app.listen(3000);
