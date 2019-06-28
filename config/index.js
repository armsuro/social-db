const sequelize = require('./sequelize');
const mongoose = require('./mongoose');

module.exports = {
	"sequelize": sequelize[process.env.NODE_ENV] || sequelize['development'],
	"mongoose": mongoose[process.env.NODE_ENV] || mongoose['development']
};