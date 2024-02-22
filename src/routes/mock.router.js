import express  from "express";
import generateProducts from "../controllers/productMock.js";
const router = express.Router();

router.get('/mockingproducts', (req, res) => {
    const products = generateProducts();
    res.json(products);
});

export default router