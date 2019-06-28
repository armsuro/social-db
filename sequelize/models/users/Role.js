const DataTypes = require('sequelize');

const Schema = {
    'name': {
        'type': DataTypes.JSON,
        'allowNull': false
    },
    'slug': {
        'type': DataTypes.STRING,
        'allowNull': false
    }
};

const Options = {
    'tableName': 'roles',
    'timestamps': true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
};

const Association = ({
    users
}) => {
    users.Role.hasMany(users.Account, {
        foreignKey: 'role_id',
        as: 'Role'
    });
    
};

module.exports = seq => {
    const model = seq.define('Role', Schema, Options);
    model.associate = Association;

    return model;
}
