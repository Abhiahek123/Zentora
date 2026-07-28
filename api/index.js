import express from 'express'
import router from './router/router.js'
import dbconnect from './config/db.js';
import cors from 'cors'

const app=express();
const PORT=9000;
app.use(cors())
app.use(express.json())
dbconnect()
app.use(router);
app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`)
})