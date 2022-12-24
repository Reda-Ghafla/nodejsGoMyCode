const express = require('express');

const app = express();

const path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

const usersDB = [];
let i = 0;

const getData = (data) => {
  const x = data.map((ele) => {
    const { email, password, id } = ele;
    return { email, password, id };
  });

  return x;
};

app.get('/', (req, res) => {
  // res.send('hello');
  //   console.log(req);
});

app.get('/register', (req, res) => {
  //   res.send('hello');
  const query = req.query;
  let y = usersDB.push({ ...query, id: new Date().getTime().toString() });
  let userEmail = [...usersDB].map((ele) => ele.email).join(' ');
  res.render(path.join(__dirname, './views/homepage.pug'), {
    info: {
      userCount: [...usersDB].length,
      content: userEmail,
      title: 'From server',
      userInfo: 'user added with success ',
      user: query.email,
    },
  });
});

// app.use(getData);

// app.post('/register', (req, res) => {
//   console.log(req.query.email);
// });

app.listen(5000, () => {
  console.log('Server is running at port 5000....' + 'http://localhost:5000');
});
