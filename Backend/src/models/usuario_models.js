const DataTypes = require('sequelize')
const sequelize = require('../database')

const usuarioTabla = sequelize.define('Usuario', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        allowNull: false,
        primaryKey: true
    },
    Nombres:{
        type: DataTypes.STRING(30),
        allowNull: false
    },
    Apellidos:{
        type: DataTypes.STRING(30),
        allowNull: false
    },
    DocumentoId:{
        type: DataTypes.UUIDV1,
        //defaultValue: DataTypes.UUIDV1,
        allowNull: false
    },
    NumeroDocumento:{
        type: DataTypes.STRING(10),
        allowNull: false
    },
    LugarResidencia:{
        type: DataTypes.UUIDV1,
        //defaultValue: DataTypes.UUIDV1,
        allowNull: false
    },
    FechaNacimiento:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    Email:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Telefono:{
        type: DataTypes.STRING(10),
        allowNull: false
    },
    Usuario:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    Password:{
        type: DataTypes.STRING(20),
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports = usuarioTabla