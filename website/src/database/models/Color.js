module.exports = (sequelize, dataTypes) => {
    let alias = 'Color';
    let cols = {
        id_Color: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_color: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'colors',
        timestamps: false
    };
    const Color = sequelize.define(alias, cols, config)
    Color.associate = function(models){
        Color.hasMany(models.Stock, {
            as:'stock',
            foreignKey: 'color_id'
        })
    }

    return Color
}