'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('roles', {
            'id': {
                'allowNull': false,
                'autoIncrement': true,
                'primaryKey': true,
                'type': Sequelize.INTEGER
            },
            'name': {
                'type': Sequelize.JSON,
                'allowNull': false
            },
            'slug': {
                'type': Sequelize.STRING,
                'allowNull': false
            },
            'created_at': {
                'allowNull': false,
                'type': Sequelize.DATE,
                'defaultValue': Sequelize.literal('CURRENT_TIMESTAMP')
            },
            'updated_at': {
                'allowNull': false,
                'type': Sequelize.DATE,
                'defaultValue': Sequelize.literal('CURRENT_TIMESTAMP')
            }
        }).then(()=> {
            return queryInterface.bulkInsert('roles', [{
                'name': JSON.stringify({'eng': 'Admin'}),
                'slug': 'admin'
            }, {
                'name':  JSON.stringify({'eng': 'Moderatir'}),
                'slug': 'moderator'
            }, {
                'name':  JSON.stringify({'eng': 'Company admin'}),
                'slug': 'site_owner'
            }, {
                'name':  JSON.stringify({'eng': 'Company user'}),
                'slug': 'site_manager'
            }]);
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.query("DROP TABLE roles cascade;");
    }
};