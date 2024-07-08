import Product from "../models/Product.js";
import { createError } from "../utils/error.js";
import { createSuccess } from "../utils/success.js";

//Addproducts

export const addProduct = async (req, res, next) => {
  // const { Id, title, category, price, fakeprice, description, image, ratng } = req.body

  try {
    const newProduct = await Product.create({...req.body,image:req.file.filename});

    return next(createSuccess(200, "Product added successfully", newProduct));
  } catch (error) {
    
    return next(createError(500, "Internal server error",error));
  }
};

// getAllproducts

export const getAllProducts = async (req, res, next) => {
  try {
    const allproducts = await Product.find();
    if (!allproducts) {
      return next(createError(401, "Products is not found"));
    }

    return next(createSuccess(200, "Allproducts", allproducts));
  } catch (error) {
    
    return next(createError(500, "Internal server error",error));
  }
};

//get a single product

export const getSingleproduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const singleProduct = await Product.findOne({ _id: id });

    if (!singleProduct) {
      return next(createError(402, "product not found"));
    }

    return next(createSuccess(200, "Single product", singleProduct));
  } catch (error) {
    
    return next(createError(500, "Internal server error",error));
  }
};

//update product

export const UpdateProduct = async (req, res, next) => {
  const { id } = req.params;
  const { Id, title, category, price, fakeprice, description, ratng,stock,image } =
        req.body;
    
    const file=req.file?req.file.filename:image

  try {
    const updateProduct = await Product.findByIdAndUpdate(
      { _id: id },
      {
        Id,
        title,
        category,
        price,
        fakeprice,
        description,
        image:file,
        ratng,
        stock,
      },
      { new: true }
    );
    await updateProduct.save();

    return next(createSuccess(200, "Product is updated", updateProduct));
  } catch (error) {
    
    return next(createError(500, "Internal server error",error));
  }

};

//delete product

export const deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedproduct = await Product.findByIdAndDelete({ _id: id });
    return next(createSuccess(200, "Product is deleted", deletedproduct));
  } catch (error) {
    
    return next(createError(500, "Internal server error",error));
  }
};



