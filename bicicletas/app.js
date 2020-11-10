const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const passport = require('./config/passport');
const session = require('express-session');
// const logger = require('morgan');
const store = new session.MemoryStore;

const app = express();
app.use(session({
  cookie:{maxAge:1000*60*60*24*10},
  store:store,
  saveUninitialized:true,
  resave:'true',
  secret:process.env.SESSION_SECRET
}));

app.set('secretKey',process.env.SECRET_KEY);

// database connection
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.connect(
  'mongodb+srv://red_bicicletas-user:jiHbbXXeYfcxfgSH@cluster0.7jb1n.mongodb.net/red_bicicletas',
  {useNewUrlParser: true, useUnifiedTopology: true},
  ()=>console.log('Database connected')
  );
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error',console.error.bind(console,'MondoDB connection error: '));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// middlewares
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', require('./routes/index'));
app.use('/users',require('./routes/users'));
app.use('/bicicletas',require('./routes/bicicletas'));
app.use('/api/bicicletas',require('./routes/api/biciletaRouterApi'));
app.use('/api/usuarios',require('./routes/api/usuarioRouterApi'))
app.use('/api/auth',require('./routes/api/authRouter'));

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

module.exports = app;