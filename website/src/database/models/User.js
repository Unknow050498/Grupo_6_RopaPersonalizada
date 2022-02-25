module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        user_employ: {
            type: dataTypes.STRING,
            primaryKey: true,
        },
        name_e: {
            type: dataTypes.STRING,
        },
        email_e: {
            type: dataTypes.STRING,
        },
        password_e: {
            type: dataTypes.STRING,
        },
        dateborn_e: {
            type: dataTypes.DATEONLY,
        },
        sex_e:{
            type: dataTypes.BOOLEAN,
        },
        type_employ: {
            type: dataTypes.STRING,
        },
        imgProfile: {
            type: dataTypes.STRING,
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config);
    
    return User;
}