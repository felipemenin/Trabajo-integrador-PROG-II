module.exports = function(sequelize, dataTypes){
    let alias = "User";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING
        },
        clave: {
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.DATE,
            allowNull: false
        },
        dni: {
            type : dataTypes.INTEGER
        },
        foto_de_perfil: {
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
        }
    }
    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: true
    }
    let User = sequelize.define(alias, cols, config);
    return User;
}