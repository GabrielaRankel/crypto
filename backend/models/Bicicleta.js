const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Bicicleta = db.define('bicicleta',{
    codBicicleta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    modelo: {
        type: DataTypes.ENUM('TRILHA','ESPORTE'),
        allowNull: false
    },
    tipo: {
        type: DataTypes.ENUM('MOUNTAIN','SPEED'),
        allowNull: false
    },
    aro: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idCiclista: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key: 'codCiclista',
            model: 'ciclistas'
        }
    },
},{
    timestamps: false,
    tableName: 'bicicletas'
})

module.exports = Bicicleta