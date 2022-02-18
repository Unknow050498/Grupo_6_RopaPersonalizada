module.exports = (sequelize, dataTypes) => {
    let alias = 'Size';
    let cols = {
        id_Sizes: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        size: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'sizes',
        timestamps: false
    };
    const Size = sequelize.define(alias, cols, config)
    Size.associate = function(models){
        Size.hasMany(models.Stock, {
            as:'stock',
            foreignKey: 'sizes_id'
        })
    }

    return Size
}