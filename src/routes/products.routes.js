import { Router } from "express";
import { createPruebas, getProducts, getByID } from "../controllers/products.controller";



const router = Router();

router.get("/products",getProducts);

router.get("/products/:id",getByID);

router.post("/products", createPruebas);

router.delete("/products",getProducts);

router.put("/products",getProducts);



export default router;
