require('dotenv').config();

PORT = process.env.PORT;
MYSQL_USER = process.env.MYSQL_USER;
MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
MYSQL_DATABASE = process.env.MYSQL_DATABASE;
MYSQL_HOST = process.env.MYSQL_HOST;

module.exports = {
    PORT,MYSQL_USER,MYSQL_PASSWORD,MYSQL_HOST,MYSQL_DATABASE
}
