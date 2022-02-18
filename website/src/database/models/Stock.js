module.exports = (sequelize, dataTypes) => {
    let alias = 'Stock';
    let cols = {
        id_Stock: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        products_model: {
            type: dataTypes.STRING,
        },
        amount_Products: {
            type: dataTypes.INTEGER,
        },
        color_id: {
            type: dataTypes.INTEGER,
        },
        sizes_id: {
            type: dataTypes.INTEGER,
        },
        imgSecu_stock: {
            type: dataTypes.STRING,
        },
    };
    let config = {
        tableName: 'stock',
        timestamps: false
    };
    const Stock = sequelize.define(alias, cols, config)
    Stock.associate = function(models){
        Stock.belongsTo(models.Color, {
            as:'colors',
            foreignKey: 'color_id'
        })
        Stock.belongsTo(models.Size, {
            as:'sizes',
            foreignKey: 'sizes_id'
        })
        Stock.belongsTo(models.Product, {
            as:'products',
            foreignKey: 'products_model'
        })
        Stock.belongsToMany(models.Imagen, {
            as: 'images',
            through: 'product_images',
            foreignKey: 'stock_id',
            otherKey: 'images_id',
            timestamps: false,
        });
    }

    return Stock
}