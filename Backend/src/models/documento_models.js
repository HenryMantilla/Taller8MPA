const DataTypes = require('sequelize')
const sequelize = require('../database')
const user = require('./usuario_models')

const documentoTabla = sequelize.define('Documento', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        allowNull: false,
        primaryKey: true
    },
    Nombre:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    Descripcion:{
        type: DataTypes.STRING(40),
        allowNull: true
    }
},{
    freezeTableName: true,
    timestamps: false
});

documentoTabla.hasMany(user, {foreignKey: 'DocumentoId'})
user.belongsTo(documentoTabla)

module.exports = documentoTabla

