import express  from "express";
import {PORT,mongoDBURL} from "./config.js";
import mongoose, { Error } from "mongoose";
import { Book } from "./models/bookmodel.js";
import bookRoute from './Routes/bookRoute.js'
import cors from 'cors';

const app= express();

//middleware
app.use(express.json());

// cors handling

app.use(cors());
// app.use(
//     cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//     })
//     );

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(240).send(' hii welcome here ')
});

app.use('/books',bookRoute);


 
mongoose.connect(mongoDBURL).then(() =>
{
    console.log('App is connected to database');
    app.listen(PORT,()=>{
        console.log(`App is listening to port : ${PORT}`);
    });

}).catch(()=>{
    console.error();
});