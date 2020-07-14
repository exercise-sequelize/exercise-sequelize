const express = require('express');
const app = express();

const {PORT} = require('./config')
const localPort = PORT || 5000
const db = require('./config')

app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.use(express.static("views"));
app.use('/', require('./routes/movies'));

if(db){
    app.listen(localPort, (req,res)=>{
        console.log(`server running on PORT ${localPort}`)
    })
}