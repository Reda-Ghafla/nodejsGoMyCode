"use strict";

var express = require('express');

var app = express(); // const pug = require('pug');

var path = require('path');

var fullDate = require('./date');

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express["static"]('public')); // app.use('img', express.static(path.join(__dirname + '/public/img')));
// const pathPage = path.join(__dirname, './views/page/homePage.pug');
// app.use('/', (req, res, next) => {
//   // fullDate(new Date());
//   next();
// });

app.get('/', function (req, res) {
  res.render(path.join(__dirname, './views/pages/homePage.pug'), {
    info: {
      domaine: 'Agency Services',
      title: 'HomePage',
      // logo: path.join(__dirname, './public/img/avatar-ali.png'),
      logo: '/img/avatar-ali.png',
      time: "".concat(fullDate(new Date()))
    }
  });
});
app.get('/services', function (req, res) {
  res.render(path.join(__dirname, './views/pages/services.pug'), {
    info: {
      domaine: 'Agency Services',
      title: 'Our Services',
      logo: '/img/avatar-ali.png',
      time: "".concat(fullDate(new Date()))
    }
  });
});
app.get('/contact', function (req, res) {
  res.render(path.join(__dirname, './views/pages/contact.pug'), {
    info: {
      domaine: 'Agency Services',
      title: 'Contact us',
      logo: '/img/avatar-ali.png',
      time: "".concat(fullDate(new Date()))
    }
  });
});
app.get('*', function (req, res) {
  res.render(path.join(__dirname, './views/pages/404.pug'), {
    info: {
      domaine: 'Agency Services',
      title: '404',
      message: 'Oops!! Page not Found',
      logo: '/img/avatar-ali.png',
      time: "".concat(fullDate(new Date()))
    }
  });
});
app.listen(3000, function () {
  console.log('Server is running at port 3000...');
});