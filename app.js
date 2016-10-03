var nodemailer = require('nodemailer');
var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('app'));

app.use('/', express.static('app/views/'));

app.get('/', function(req, res, next) {
  var data = {
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
  };
  res.render('index', {
    title: 'index'
  })
  console.log(data.email)
})

app.route('/index', function(req, res){
  res.render('index')
})

app.post('/', function(req, res, next) {
  console.log(data.email)

  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_SECRET,
      pass: process.env.EMAIL_PASSWORD_SECRET
    }
  });
  var mailOptions = {
    from: process.env.EMAIL_SECRET,
    to: 'edwardlanekemp@gmail.com',
    subject: 'yoyo',
    message: 'ypyppypypy',
    html: '<p>This is a test<p>'
  }
  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log(err);
      res.redirect('/')
    } else {
      console.log('Message Sent ' + info.response)
    }
  })
  console.log('hiii');
})

app.listen(port, function() {
  console.log('express is listening on ' + port);
});
