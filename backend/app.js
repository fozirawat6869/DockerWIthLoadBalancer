import express from 'express'
import cors from 'cors'
import router from './routers/router.js'


const app=express()


app.use(cors({
    origin:'http://localhost:5174',
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',router)





 export default app;