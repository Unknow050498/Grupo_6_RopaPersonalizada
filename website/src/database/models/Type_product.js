module.exports = (sequelize, dataTypes) => {
    let alias = 'Type_product';
    let cols = {
        id_type_products: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_type_products: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'type_products',
        timestamps: false
    };
    const Type_product = sequelize.define(alias, cols, config)
    Type_product.associate = function(models){
        Type_product.hasMany(models.Product, {
            as:'products',
            foreignKey: 'type_id'
        })
    }

    return Type_product
}