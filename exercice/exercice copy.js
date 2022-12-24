const app = require('express')();

let usersDATA = [];

app.post('/users', (req, res) => {
  const query = req.query;
  usersDATA.push({ ...query, id: usersDATA.length + 1 });

  res.send(usersDATA);
});

app.delete('/users/:id', (req, res) => {
  const filterID = usersDATA.filter(
    (user) => user.id !== parseInt(req.params.id)
  );
  usersDATA = filterID;

  return res.send(usersDATA);
});

app.put('/users/:id', (req, res) => {
  const userUpDate = usersDATA[parseInt(req.params.id) - 1];

  userUpDate.email = req.query.email;
  userUpDate.password = req.query.password;

  return res.send([...usersDATA]);
});

app.get('/users', (req, res) => {
  res.send(usersDATA);
});

app.listen(3000);
