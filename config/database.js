const sequelize = require('sequelize')
const { Sequelize } = require('sequelize')

const {
    PORT,MYSQL_USER,MYSQL_PASSWORD,MYSQL_HOST,MYSQL_DATABASE 
} = require('./environment')

const db = new Sequelize(MYSQL_DATABASE,MYSQL_USER,MYSQL_PASSWORD,{
    host:MYSQL_HOST,
    dialect: 'mysql'
})

db.authenticate()
.then(() =>{
    console.log('connected to database')
})
.catch((error) =>{
    console.error(error)
})

module.exports = db;