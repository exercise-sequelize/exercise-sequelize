const {DataTypes} = require('sequelize');
const {db} =  require('../config')

const Movie = db.define('movie',{
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        unique:true
    },
    title:{
        type:DataTypes.STRING
    },
    release_date:{
        type:DataTypes.DATE
    },
    genre:{
        type:DataTypes.STRING
    },
    image_url:{
        type:DataTypes.STRING
    },
    rating:{
        type:DataTypes.STRING
    },
    createdAt:{
        type:DataTypes.DATE
    },
    updatedAt:{
        type:DataTypes.DATE
    }
},{tableName:'movie'})

module.exports = Movie;