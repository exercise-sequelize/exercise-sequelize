const {DataTypes} = require('sequelize');
const {db} =  require('../config')

const Movie = db.define('users',{
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
    release_data:{
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
    }
})

module.exports = Movie;