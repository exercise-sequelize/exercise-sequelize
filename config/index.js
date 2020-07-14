const db = require('./database')

const {
    PORT,MYSQL_USER,MYSQL_PASSWORD,MYSQL_HOST,MYSQL_DATABASE
} = require('./environment')

module.exports = {
    PORT,MYSQL_USER,MYSQL_PASSWORD,MYSQL_HOST,MYSQL_DATABASE,db 
}