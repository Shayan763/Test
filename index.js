require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();



//api Middleweres 
app.use(express.json());
app.use(cors());




// api routing
// app.use('/api', require('./Routes/File'));
app.use('/api/auth', require('./Routes/Auth'));










mongoose
    .connect(process.env.dburi)
    .then((result)=>{

        console.log('connected to db', result.connections[0].host);
        app.listen(process.env.Port || 8080, () =>{
            console.log('~~~~ server is up & running ~~~~~')
        });
    })

    .catch((err) => console.error(err));