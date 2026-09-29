const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Agendamento = db.define('agendamento',{
    codAgendamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false
    },
    idCiclista: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key:'codCiclista',
            model: 'ciclistas'
        }
    },
    idBicicleta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key:'codBicicleta',
            model: 'bicicletas'
        }
    },
},{
    timestamps: false,
    tableName: 'agendamentos'
})

module.exports = Agendamento