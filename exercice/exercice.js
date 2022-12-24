const app = require('express')();
const { service: userService } = require('./usersModule');
const { authService } = require('./usersModule/authService');

app.get('/auth', (req, res) => {
  const { email, password } = req.query;

  return res.send(authService.checkUser(email, password));
});
app.post('/users', (req, res) => {
  return res.send(userService.createUsers(req.query));
});

app.delete('/users/:id', (req, res) => {
  res.send(userService.deleteUsers(req.params.id));
});

app.put('/users/:id', (req, res) => {
  res.send(userService.updateUser(req.query, req.params.id));
});

app.get('/users', (req, res) => {
  res.send(userService.getUsers());
});

app.listen(3000);
