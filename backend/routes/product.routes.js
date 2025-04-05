import express from "express";

import { createProduct, deleteProduct, getAllProduct, getSingleProduct, updateProduct } from "../controllers/product.controller.js";

const router = express.Router()


// get all products
router.get('/', getAllProduct )

// get single
router.get('/:id', getSingleProduct)

// create products
router.post("/", createProduct)

// update products
router.patch('/:id', updateProduct )

// delete a product
router.delete('/:id', deleteProduct)



export default router