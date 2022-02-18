module.exports = (sequelize, dataTypes) => {
    let alias = 'Imagen';
    let cols = {
        id_images: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_image: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'images',
        timestamps: false
    };
    const Imagen = sequelize.define(alias, cols, config)
    Imagen.associate = function(models){
        Imagen.belongsToMany(models.Stock, {
            as: 'stock',
            through: 'product_images',
            foreignKey: 'images_id',
            otherKey: 'stock_id',
            timestamps: false,
        });
    }

    return Imagen
}