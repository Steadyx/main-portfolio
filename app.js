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

app.use('/', express.static('app/views/minified/'));

app.get('/', function(req, res, next) {

  res.render('index', {
    title: 'index'
  })
})

app.post('/', function(req, res, next) {

  var mailOption,
    smtpTransfer;


  var data = {
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
  };

  console.log(data)

  var smtpTransfer = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_SECRET,
      pass: process.env.EMAIL_PASSWORD_SECRET
    }
  });

  mailOptions = {
    from: data.name + ' &lt;' + data.email + '&gt;',
    to: process.env.EMAIL_SECRET,
    subject: data.subject,
    message: data.message,
    html: '<p> \
              You\'ve received an email from <br>' + data.email + ' \
              Heres what they have to say <br><strong>' + data.message + ' \
              </strong><p>'
  }
  smtpTransfer.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent: ' + info.response);
    }
  })
})

app.listen(port, function() {
  console.log('express is listening on ' + port);
});
