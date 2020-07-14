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
            title,release_date,rating,image_url,genre
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
            const result = await Movie.destroy({
                where:user_id})
            res.send({
                message:'movie berhasil di hapus',
                result:result
            })
        }
        catch(error){
            console.log(error)
            res.send(error)
        }
    },
    updateMovies: async (req,res) =>{
                const {user_id} = req.params
                const {title,release_date,rating,image_url,genre} = req.body
        try{
            const result = await Movie.update({
                title:title,
                release_date:release_date,
                rating:rating,
                image_url:image_url,
                genre:genre
            },{where:{
                user_id:user_id}})
            res.send({
                message:'data berhasil di update',
                result:result
            })
        }
        catch(error){
            console.log(error)
            res.send(error)
        }
    }
}