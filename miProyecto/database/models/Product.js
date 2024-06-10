module.exports = function (sequelize, dataTypes ) {
    let alias = "Product"
    let cols = {
        id: {
        autoIncrement : true,
        primaryKey : true,
        type : dataTypes.INTEGER
    },
        foto_producto: {
            type: dataTypes.STRING
        },
        nombre_producto: {
            type: dataTypes.STRING
        },
        descripcion_producto: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true
        },
        deletedAt: {
            type: dataTypes.DATE,
            allowNull: true
        },
        usuario_id:{
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName: "productos",
        timestamps: false,
        underscored: true
    }

    let Products = sequelize.define(alias, cols, config);
    return Products;
}





