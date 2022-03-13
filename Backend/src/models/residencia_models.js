const DataTypes = require('sequelize')
const sequelize = require('../database');
const user = require('./usuario_models')

const residenciaTabla = sequelize.define('Residencia', {
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
        type: DataTypes.STRING(50),
        allowNull: true
    }
},{
    freezeTableName: true,
    timestamps: false
});

residenciaTabla.hasMany(user, {foreignKey: 'LugarResidencia'})

module.exports = residenciaTabla