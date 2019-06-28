'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('accounts', {
            'id': {
                'allowNull': false,
                'autoIncrement': true,
                'primaryKey': true,
                'type': Sequelize.INTEGER
            },
            'email': {
                'type': Sequelize.STRING,
                'unique': true,
                'allowNull': false
            },
            'password': {
                'type': Sequelize.STRING,
                'allowNull': true
            },
            'role_id': {
                'type': Sequelize.INTEGER,
                'allowNull': false,
                'references': {
                    'model': {
                        'tableName': 'roles'
                    },
                    'key': 'id'
                },
                'onUpdate': 'cascade',
                'onDelete': 'cascade'
            },
            'full_name': {
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
        }).then(async () => {
            const pass = await bcrypt.hashSync('password', bcrypt.genSaltSync());
            return queryInterface.bulkInsert('accounts', [{
                'email': 'user@user.com',
                'full_name': 'Suren Gaparyan',
                'password': pass,
                'organization_id': 1,
                'role_id': 1
            }]);
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.query("DROP TABLE accounts cascade;");
    }
};