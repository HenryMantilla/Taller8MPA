const Sequelize = require('sequelize')
const dotenv = require('dotenv')

dotenv.config()

const sequelize = new Sequelize(`postgres://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@jelani.db.elephantsql.com/${process.env.DB_NAME}`, {logging:false})

sequelize.authenticate().then(() => {
    console.log('Conexión establecida satisfactoriamente.');
}).catch(err => {
    console.error('No se ha podido establecer conexión:', err);
});

module.exports = sequelize;
