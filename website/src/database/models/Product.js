module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        model_Products: {
            type: dataTypes.STRING,
            primaryKey: true,
        },
        type_id: {
            type: dataTypes.INTEGER,
        },
        price: {
            type: dataTypes.DECIMAL,
        },
        description_products: {
            type: dataTypes.STRING,
        },
        short_description: {
            type: dataTypes.STRING,
        },
        img_principal: {
            type: dataTypes.STRING,
        }
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config)
    Product.associate = function(models){
        Product.belongsTo(models.Type_product, {
            as:'type_products',
            foreignKey: 'type_id'
        })
        Product.hasMany(models.Stock, {
            as:'stock',
            foreignKey: 'products_model'
        })
    }

    return Product
}