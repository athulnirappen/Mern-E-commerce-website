import { Table } from "flowbite-react";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../constants/baseurl";
import { removeWishlist } from "../../redux/wishlistSlice";
import { addToCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";
addToCart

const Wishlist = () => {
  const wishListItems = useSelector((state) => state.wishlist.wishlist);
  console.log(wishListItems);

  

  const dispatch = useDispatch();

 
  return (
    <>
      <div className="mt-[5%] mx-8">
        <h1 className="font-bold text-2xl">My WhishList</h1>
        <hr className="border-b-2 mt-3 " />

        {wishListItems.length < 1 ? (
          <div className="mt-6 flex items-center justify-center flex-col">
            <h1 className="text-red-500 font-bold text-4xl">Wishlist is empty</h1>
            <Link to="/home">
              <button className="mt-5 px-6 py-2 bg-violet-500 rounded-md text-white">
                Purchase Now
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <div className="overflow-x-auto mt-5">
              <Table>
                <Table.Head>
                  <Table.HeadCell>Product Image</Table.HeadCell>
                  <Table.HeadCell>Product name</Table.HeadCell>
                  <Table.HeadCell>Rating</Table.HeadCell>
                  <Table.HeadCell>Category</Table.HeadCell>
                  <Table.HeadCell>Price</Table.HeadCell>
                  <Table.HeadCell>Actions</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {wishListItems.map((item, i) => (
                    <Table.Row
                      className="bg-white dark:border-gray-700 dark:bg-gray-800 border-b-2"
                      key={i}
                    >
                      <Table.Cell className="whitespace-nowrap">
                        <img
                          src={`${BASE_URL}/images/${item.image}`}
                          alt="no image"
                          className="w-20 h-20 rounded"
                        />
                      </Table.Cell>
                      <Table.Cell className="font-bold text-black">
                        {item.title}
                      </Table.Cell>
                      <Table.Cell>
                        {item.rating > 5 ? (
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
                            <FaStarHalf className="text-yellow-400" />
                          </span>
                        )}
                      </Table.Cell>
                      <Table.Cell className="font-bold text-black">
                        {item.category}
                      </Table.Cell>
                      <Table.Cell className="font-bold text-black">
                        ₹{item.price}
                      </Table.Cell>
                      <Table.Cell>
                        <div className="flex gap-5">
                          <button
                            className="px-5 py-2 rounded-md text-white bg-red-500"
                            onClick={() => {
                              dispatch(addToCart({ ...item, qty: 1 }))
                              dispatch(removeWishlist(item._id));
                            }}
                          >
                            Add To Cart
                          </button>
                          <button className="text-xl bg-green-400 px-4 py-2 rounded-md text-white">
                            <MdDelete
                              onClick={() => dispatch(removeWishlist(item._id))}
                            />
                          </button>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;
