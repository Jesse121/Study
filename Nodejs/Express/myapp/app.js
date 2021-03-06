var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
let log4js = require('log4js');
// var logger = require('morgan');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));

//错误日志包
log4js.configure({
    appenders: {
        out: { type: 'console' },
        app: { type: 'file', filename: 'application.log' }
    },
    categories: {
        default: { appenders: [ 'app' ], level: 'info' }
    }
});
let logger = log4js.getLogger('normal');
app.use(log4js.connectLogger(logger, {level: log4js.levels.INFO, format:':method :url'}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
var options = {
  dotfiles: 'ignore',
  etag: true,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function(res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
};
app.use(express.static(path.join(__dirname, 'public'), options));

app.use('/', index);
app.use('/users', users);






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
