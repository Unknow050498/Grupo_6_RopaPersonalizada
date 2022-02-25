module.exports = (sequelize, dataTypes) => {
    let alias = 'Client';
    let cols = {
        username: {
            type: dataTypes.STRING,
            primaryKey: true,
        },
        name: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
        },
        password: {
            type: dataTypes.STRING,
        },
        dateborn: {
            type: dataTypes.DATEONLY,
        },
        sex:{
            type: dataTypes.BOOLEAN,
        },
        imgCli: {
            type: dataTypes.STRING,
        },
    };
    let config = {
        tableName: 'clients',
        timestamps: false
    };
    const Client = sequelize.define(alias, cols, config);
    
    return Client;
}