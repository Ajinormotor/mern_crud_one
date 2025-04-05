import express from 'express'
import dotenv  from 'dotenv'
import { connectDB } from './confg/db.js';
import path from 'path';


import productRoutes from "./routes/product.routes.js"
import { fileURLToPath } from 'url';


// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

const __dirname = path.resolve();


const app = express()
dotenv.config();
connectDB();


app.use(express.json());
const PORT = process.env.PORT


console.log("MONGO database:",process.env.MONGO_URL)

app.use('/api/products', productRoutes)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));


    app.get("*", (req,res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}


// app listen
app.listen( PORT, () => {
    connectDB(),
    console.log('Server started at:', PORT)
})