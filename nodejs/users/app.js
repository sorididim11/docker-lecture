var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var stylus = require('stylus');

var Mongoose = require('mongoose')
var UserSchema= Mongoose.Schema({firstname:String,lastname:String,age:{ type: Number, min: 0, max: 100} });
var User = Mongoose.model('UserModel', UserSchema)


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8888);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/adduser', function(req,res,err){
  var user = new User({firstname:req.body.firstname,lastname:req.body.lastname,age:req.body.age});
  user.save(function(err,silence){
    if(err){
      console.err(err);
      throw err;
    }
    res.send('success');
  });
});

app.get('/getuser/:firstname', function(req,res,err){
  User.findOne({'firtname':req.params.firtname}, function(err,user){
      if(err){
          console.err(err);
          throw err;
      }
      console.log(user);
      res.send(200, user);
  });
});

app.get('/getuserbyage/:age', function(req,res,err){
  User.findOne({'age':req.params.age}, function(err,user){
      if(err){
          console.err(err);
          throw err;
      }
      console.log(user);
      res.send(200, user);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


var mongoUrl = 'localhost'
Mongoose.connect('mongodb://' + mongoUrl + ':27017/users', function(error){
  if(error) {
      console.log(error);
      throw error
  } else {
    app.listen(8888, function() {
      console.log('chat service listening on port 8888')
      console.log('connected to mongodb')
    })
  }
});

module.exports = app;
