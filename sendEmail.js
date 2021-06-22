var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shrikantsonawane68@gmail.com',
    pass: 'enter password'
  }
});

var mailOptions = {
  from: 'shrikantsonawane68@gmail.com',
  to: 'ajawalekar264@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});