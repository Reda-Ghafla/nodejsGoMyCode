const nodemailer = require('nodemailer');

let transpoter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'xxxxxxxxxxxxxxxxx@gmail.com',
    password: '***************',
  },
});

const mailOption = {
  from: 'xxxxxxxxxxxxxxx@gmail.com',
  to: 'xxxxxxxxxxxx@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
};

transpoter.sendMail(mailOption, (err, info) => {
  if (err) {
    console.log('Have an Error : ' + err);
  } else {
    console.log(`Send email ${info.response}`);
  }
});
