/* eslint-disable react/prop-types */

import { FaStar, FaRegStar } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants/baseurl";
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/cartSlice'
import { addToWishlist } from "../../redux/wishlistSlice";



const ProductCard = ({ product }) => {

  const dispatch=useDispatch()
  const {_id,title,category,image,rating,price}=product
  return (
    <div className="border mx-8 w-52 h-auto p-3 rounded-lg  cursor-pointer group hover:scale-110 transition-all duration-500 ease-in-out">
      <div className="flex flex-col justify-center items-center relative overflow-hidden ">
        <img
          src={`${BASE_URL}/images/${product.image}`}
          alt="no image"
          className="lg:w-48 lg:h-48 h-36 rounded-md "
        />

        <div className="absolute h-full w-full bg-black/60  flex justify-center flex-col gap-5 items-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            className="px-5 py-2 bg-white rounded-md bg-gradient-to-r from-pink-600 to-violet-600 via-red-500 text-white font-bold"
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
          <button className=" ">
            <FaHeart
              className="text-orange-500 text-2xl"
              onClick={() =>
                dispatch(
                  addToWishlist({ _id, title, category, image, rating, price })
                )
              }
            />
          </button>
        </div>
      </div>
      <div className="p-3 mt-3">
        <h4 className="font-bold text-red-500 mb-1">{product.category}</h4>
        <p className="font-semibold mb-2">{product.title.slice(0, 15)}...</p>
        {product.rating > 5 ? (
          <span className="flex mb-1">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </span>
        ) : (
          <span className="flex mb-1">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaRegStar className="text-yellow-400" />
          </span>
        )}

        <div className="flex gap-3">
          <p className="font-bold"> ₹{product.price}</p>
          <p className="line-through font-light"> ₹{product.fakeprice}</p>
          <Link to={`/singleproduct/${product._id}`}>
            <button className="ms-10 text-gray-500 text-xl">
              <IoEyeOutline />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
