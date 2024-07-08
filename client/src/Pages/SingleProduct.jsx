import { FaStar } from "react-icons/fa6";
import Header from "../components/user/Header";
import { fetchAllProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constants/baseurl";
import { addToCart } from "../redux/cartSlice";
import { addToWishlist } from "../redux/wishlistSlice";




const SingleProduct = () => {

  const [product,setProduct]=useState({})
  const { data } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const { id } = useParams();

  const getSingleproduct = () => {
    let singleproduct = data.find((item) => item._id === id);
    singleproduct?setProduct(singleproduct):console.log("error");
    console.log(singleproduct);
    
  };



 

  useEffect(() => {
    dispatch(fetchAllProducts());
    getSingleproduct();
    
  }, []);

   const {_id,title,category,image,rating,price}=product
  return (
    <>
      <Header />

      <div className=" min-h-screen bg-orange-400 flex flex-wrap justify-center items-center">
        <div>
          <img
            src={`${BASE_URL}/images/${product.image}`}
            alt=""
            className="rounded-s-md w-[384px] h-[350px]"
          />
        </div>
        <div className="w-96 p-4 bg-slate-50 h-[350px] rounded-e-md ">
          <h2 className="font-bold text-xl">{product.title}</h2>
          <span className="flex mt-2">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </span>
          <div className="flex gap-2 mt-2">
            <p className="font-semibold">₹ {product.price}</p>
            <p className="font-light line-through">₹ {product.fakeprice}</p>
          </div>

          <p className="font-semibold text-red-400">{product.category}</p>
          <p className="font-light mt-2">{product.description}</p>
          <div className="flex gap-2 mt-5">
            <button
              className="px-5 py-2 bg-violet-500 rounded-md hover:bg-violet-700 text-white"
              onClick={() =>
                dispatch(
                  addToWishlist({ _id, title, category, image, rating, price })
                )
              }
            >
              Add To Wishlist
            </button>
            <button
              className="px-5 py-2 bg-red-500 hover:bg-red-800 rounded-md text-white"
              onClick={() =>
                dispatch(
                  addToCart({
                    _id,
                    title,
                    category,
                    image,
                    rating,
                    price,
                    qty: 1,
                  })
                )
              }
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
