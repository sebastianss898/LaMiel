import { Router } from "express";
import { cretaNewColmena, getProducts } from "../controllers/products.controller";


const router = Router();

router.get("/products",getProducts);

router.get("/products",getProducts);

router.post("/products", cretaNewColmena);

router.delete("/products",getProducts);

router.put("/products",getProducts);



export default router;
