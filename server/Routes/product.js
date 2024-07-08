import express from "express";
import {
  UpdateProduct,
  addProduct,
  deleteProduct,
  getAllProducts,
  getSingleproduct,
} from "../controllers/Product.controller.js";
import multerConfig from "../middleware/multermiddleware.js";
import { StripePayment } from "../controllers/stripe.controller.js";


const router = express.Router();

router.post("/addproduct",multerConfig.single("image"), addProduct);
router.get("/getallproducts", getAllProducts);
router.get("/getsingleproduct/:id", getSingleproduct);
router.put("/editproduct/:id", multerConfig.single("image"), UpdateProduct);
router.delete("/deleteproduct/:id", deleteProduct);

//check out

router.post("/checkout", StripePayment);

export default router;
