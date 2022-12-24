const { query } = require('express');
const express = require('express');
const app = express();

const usersData = [];

const handlerPost = (req, res, next) => {
  const query = req.query;
  //Object.keys(req.query).length === 0
  if (Object.keys(query).length === 0) {
    res.send('Empty information');
    return;
  } else {
    usersData.push({ ...query, id: usersData.length + 1 });
    const x = usersData.filter((userEmail) => userEmail.email !== query.email);
    //
    next();
    return;
  }
};
const handlerGet = (req, res, next) => {
  next();
};

const deleteUser = (req, res, next) => {};

/* ----------------------GET METHODE --------------------------- */
// app.use(handlerGet);
app.get('/users', (req, res) => {
  res.json(usersData);
});

/* ----------------------POST METHODE --------------------------- */
// app.use(handlerPost);
app.post('/users', handlerPost, (req, res) => {
  const x = usersData.map((user) => user.email);
  for (user of x) {
    if (x.includes(req.query.email)) {
      console.log('email exist');
      res.status(200).send([...new Set(x)]);
      return;
    } else {
      res.send(usersData);
    }
  }

  res.json(x);
});
/* ----------------------delete METHODE --------------------------- */
// app.use(handlerPost);
app.delete('/users/:id', (req, res) => {
  const filterID = usersData.filter(
    (user) => user.id !== parseInt(req.params.id)
  );

  return res.send(filterID);
});

app.listen(3000);
