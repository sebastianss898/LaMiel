import { Router } from "express";
import { getProducts } from "../controllers/products.controller";


const router = Router();

router.get("/products",getProducts);

router.get("/products",getProducts);

router.post("/products",getProducts);

router.delete("/products",getProducts);

router.put("/products",getProducts);



export default router;
