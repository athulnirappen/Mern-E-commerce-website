import { Table } from "flowbite-react";
import { HiOutlinePlus } from "react-icons/hi2";
import { HiOutlineMinus } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../constants/baseurl";
import { IncrementQty, decrementQty, removeCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce((total, item) => total + item.qty, 0);
  const totalAmounts = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const incrementHandler = (itemid) => {
    dispatch(IncrementQty({ _id: itemid }));
  };

  const decrementHandler = (itemid) => {
    dispatch(decrementQty({ _id: itemid }));
  };

  const checkout = async () => {
    try {
      const items = cartItems.map((item) => ({
        id: item._id,
        quantity: item.qty,
        price: item.price, // Use item.price directly, no need to multiply by qty here
        name: item.title,
      }));

      const res = await fetch("http://localhost:8000/api/product/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({ items }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      console.log("Response from server:", data);
      window.location.href = data.url; // Correct usage of window.location
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div className="mt-[5%] mx-8 p-5 mb-6">
      <h1 className="font-bold text-center text-2xl">My Cart</h1>
      <hr className="border-b-2 mt-5" />

      {cartItems.length < 1 ? (
        <div className="mt-6 flex items-center justify-center flex-col">
          <h1 className="text-red-500 font-bold text-4xl">Cart is empty</h1>
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
                <Table.HeadCell>Product</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>Quantity</Table.HeadCell>
                <Table.HeadCell>Total</Table.HeadCell>
                <Table.HeadCell>Actions</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {cartItems.map((item, i) => (
                  <Table.Row
                    key={i}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800 border-b-2"
                  >
                    <Table.Cell className="whitespace-nowrap">
                      <div className="flex gap-3">
                        <img
                          src={`${BASE_URL}/images/${item.image}`}
                          alt="no image"
                          className="w-20 h-20 rounded"
                        />
                        <div>
                          <h2 className="font-bold text-black">{item.title}</h2>
                          {item.rating > 4 ? (
                            <span className="flex mt-3">
                              <FaStar className="text-yellow-400" />
                              <FaStar className="text-yellow-400" />
                              <FaStar className="text-yellow-400" />
                              <FaStar className="text-yellow-400" />
                              <FaStar className="text-yellow-400" />
                            </span>
                          ) : (
                            <span className="flex mt-3">
                              <FaStar className="text-yellow-400" />
                              <FaStar className="text-yellow-400" />
                              <FaStar className="text-yellow-400" />
                              <FaStar className="text-yellow-400" />
                              <FaStarHalf className="text-yellow-400" />
                            </span>
                          )}
                          <p className="font-bold mt-2">{item.category}</p>
                        </div>
                      </div>
                    </Table.Cell>
                    <Table.Cell className="font-bold text-black">
                      ₹{item.price}
                    </Table.Cell>
                    <Table.Cell className="font-bold text-black">
                      <div className="flex gap-2 items-center">
                        <span
                          className="px-3 py-2 border rounded"
                          onClick={() =>
                            item.qty > 0 && decrementHandler(item._id)
                          }
                        >
                          <HiOutlineMinus />
                        </span>
                        <span className="text-xl">{item.qty}</span>
                        <span
                          className="px-3 py-2 border rounded"
                          onClick={() => incrementHandler(item._id)}
                        >
                          <HiOutlinePlus />
                        </span>
                      </div>
                    </Table.Cell>
                    <Table.Cell className="font-bold text-black">
                      ₹{item.qty * item.price}
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex gap-5">
                        <button
                          className="text-xl bg-green-400 px-3 py-2 rounded-md text-white"
                          onClick={() => dispatch(removeCart(item._id))}
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
          <div className="flex justify-end">
            <div className="border mt-5 w-52 p-5 bg-white flex flex-col rounded-md shadow-md">
              <h2 className="font-semibold">
                Total items: <span>{totalQuantity}</span>
              </h2>
              <h1 className="font-bold">
                Total Amounts: <span>₹{totalAmounts}</span>
              </h1>
              <button
                className="px-6 py-2 rounded-md text-white bg-red-500 mt-3"
                onClick={checkout}
              >
                CheckOut
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
