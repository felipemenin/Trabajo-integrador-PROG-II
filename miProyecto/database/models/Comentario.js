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
        created_at: {
            type: dataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true
        },
        deleted_at: {
            type: dataTypes.DATE,
            allowNull: true
        }
    }
    let config = {
        tableName: "comentarios",
        timestamps: false,
        underscored: true
    }

    let Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function(models){
        Comentario.belongsTo(models.Product, {
            as: "coment_product",
            foreignKey: "producto_id"
        });
        
        Comentario.belongsTo(models.User, {
            as: "coment_user",
            foreignKey: "usuario_id"
        })
        
    }
    return Comentario;
}


