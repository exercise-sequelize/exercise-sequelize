const {Movie} = require('../../models');

module.exports = {
    getAllMovies: async (req,res) => {
        try{
            const result = await Movie.findAll();

            res.send(result)
        }
        catch(error){
            res.send(error)
        }
    },
    uploadMovies: async (req,res) =>{
        const {title,release_data,rating,image_url,genre} = req.body;

        try{
        const result = await Movie.create({
            title,release_data,rating,image_url,genre
        });
        res.send({
            message:'upload success',
            result:result
        })
        }
        catch(error){
            console.log(error)
            res.send(error);

        }

    },
    deleteMovies: async (req,res) =>{
        const user_id = req.params
        try{
            const result = await Movie.destroy(user_id)
            res.send({
                message:'movie berhasil di hapus',
                result:result
            })
        }
        catch(error){
            console.log(error)
            res.send(error)
        }
    }
}