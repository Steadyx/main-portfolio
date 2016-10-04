var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('app'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', express.static('app/views/'));

app.get('/', function(req, res, next) {

  res.render('index', {
    title: 'index'
  })
})

app.post('/', function(req, res, next) {
  var data = {
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
  };
  console.log(data.message)

  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_SECRET,
      pass: process.env.EMAIL_PASSWORD_SECRET
    }
  });

  var mailOptions = {
    from: data.email,
    to: process.env.EMAIL_SECRET,
    subject: data.subject,
    message: data.message,
    html: '<p> \
              You\'ve received an email from <br>' + data.email + ' \
              Heres what they have to say <br><strong>' + data.message + ' \
              </strong><p>'
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
