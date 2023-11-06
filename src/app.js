import express from "express";
import comfig from "./comfig";
import productsRoutes from "./routes/products.routes"

const app = express()


//setings

app.set('port', comfig.port)
app.use(productsRoutes)

//midlewars
app.use(express.json)
app.use(express.urlencoded({extended:false}))

export default app