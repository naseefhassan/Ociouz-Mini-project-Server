const mongoose = require('mongoose');

const connect = mongoose
    .connect('mongodb://127.0.0.1:27017/Ocious?')
    .then(() => {
      console.log('Database connected');
    })
    .catch(() => {
      console.log('Database not connected');
    });

module.exports = connect;
