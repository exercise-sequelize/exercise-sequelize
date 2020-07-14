const {Movies} = require('../../models');

module.exports = {
    getAllMovies: async (req,res) => {
        try{
            const result = await Movies.findAll();

            res.send(result)
        }
        catch(error){
            res.send(error)
        }
    },
    uploadMovies: async (req,res) =>{
        const {title,release_data,rating,image_url,genre} = req.body;

        try{
        const result = await Movies.create({
            title,release_data,rating,image_url,genre
        });
        res.send({
            message:'registration success',
            result:result
        })
        }
        catch(error){

        }

    }
}