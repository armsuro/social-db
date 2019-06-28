// Used as entry for development server only
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load environment variables
require('dotenv').config();

// require('babel-polyfill');
// require('babel-register');

const db = require('./sequelize');

if (Boolean(process.env.USE_REDIS) == true) {
    db.redis = require('./redis');;
}

if (Boolean(process.env.USE_MONGODB) == true) {
    db.cache = require('./mongoose');
}


module.exports = db;
