require('babel-core/register');
require('babel-polyfill');

require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('express-favicon-short-circuit');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');

const index = require('./routes/index');
const schema = require('./graphql/schema');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.use('/graphql', (req, res) => {
  graphqlHTTP({
    schema,
    graphiql: true,
    context: {
      options: {
        appid: process.env.OPEN_WEATHER_MAP_API_KEY,
        city: process.env.CITY
      }
    }
  })(req, res);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
