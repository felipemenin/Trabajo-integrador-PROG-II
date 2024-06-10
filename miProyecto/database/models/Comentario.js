module.exports = function (sequelize, dataTypes ) {
    let alias = "Comentario"
    let cols = {
        id: {
        autoIncrement : true,
        primaryKey : true,
        type : dataTypes.INTEGER
    },
        producto_id: {
            type: dataTypes.INTEGER
        },
        usuario_id: {
            type: dataTypes.INTEGER
        },
        comentario: {
            type: dataTypes.STRING(400)
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
        }
    }
    let config = {
        tableName: "comentario",
        timestamps: false,
        underscored: true
    }

    let Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function(models){
        Comentario.belongsTo(models.Product, {
            as: "coment-product",
            foreignKey: "product_id"
        });
        
        Comentario.belongsTo(models.User, {
            as: "coment-user",
            foreignKey: "usuario_id"
        })
        
    }
    return Comentario;
}


