const express = require('express');
const app = express();
// const pug = require('pug');
const path = require('path');
const fullDate = require('./date');

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
// app.use('img', express.static(path.join(__dirname + '/public/img')));

// const pathPage = path.join(__dirname, './views/page/homePage.pug');

app.use('*', (req, res, next) => {
  new Date().getHours() >= 10 || new Date().getHours() > 17
    ? next()
    : res.send('out');
});

// console.log(datenNow.getHours());

app.get('/', (req, res) => {
  // let dateNow = new Date();

  res.render(path.join(__dirname, './views/pages/homePage.pug'), {
    info: {
      domaine: 'Agency Services',
      title: 'HomePage',
      // logo: path.join(__dirname, './public/img/avatar-ali.png'),
      logo: '/img/avatar-ali.png',
      time: `${fullDate(new Date())}`,
    },
  });
});

app.get('/services', (req, res) => {
  res.render(path.join(__dirname, './views/pages/services.pug'), {
    info: {
      domaine: 'Agency Services',
      title: 'Our Services',
      logo: '/img/avatar-ali.png',
      time: `${fullDate(new Date())}`,
    },
  });
});
app.get('/contact', (req, res) => {
  res.render(path.join(__dirname, './views/pages/contact.pug'), {
    info: {
      domaine: 'Agency Services',
      title: 'Contact us',
      logo: '/img/avatar-ali.png',
      time: `${fullDate(new Date())}`,
    },
  });
});
app.get('*', (req, res) => {
  res.render(path.join(__dirname, './views/pages/404.pug'), {
    info: {
      domaine: 'Agency Services',
      title: 'np',
      message: 'Oops!! Page not Found',
      logo: '/img/avatar-ali.png',
      time: `${fullDate(new Date())}`,
    },
  });
});

app.listen(3000, () => {
  console.log('Server is running at port 3000...');
});
