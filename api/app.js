import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';

dotenv.config();
const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json()) // pars request to JSON
app.use(express.urlencoded({extended:true})) // pars encoded request to JSON

app.use((err,req,res,nest)=>{
    res.status(500).send({message:err.message})
})

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
    console.log('Connected to MongoDB')
  })
  .catch(error => {
    console.log('Faild to connect to MongoDB ' + error.message)
  })