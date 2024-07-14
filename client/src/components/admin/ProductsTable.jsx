/* eslint-disable react/prop-types */
import { Table } from "flowbite-react";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

import { useEffect, useState } from "react";
import { STATUSES, fetchAllProducts } from "../../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../constants/baseurl";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductsTable = ({ serverResponse }) => {
  const dispatch = useDispatch();

  const { data, status } = useSelector((state) => state.product);
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [postperpage, setPostperpage] = useState(8);
  const lastpostIndex = page * postperpage;
  const firstpostIndex = lastpostIndex - postperpage;

  let pages = [];
  for (let i = 1; i <= Math.ceil(data.length / postperpage); i++) {
    pages.push(i);
  }

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch, serverResponse]);

  const handleDelete = async (id) => {
    const res = await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/api/product/deleteproduct/${id}`
    );

    if (res.status >= 200) {
      dispatch(fetchAllProducts());
    }
  };

   const selectedPagehandler = (selectedpage) => {
     if (
       selectedpage >= 1 &&
       selectedpage <= data.length / 5 &&
       selectedpage != page
     ) {
       setPage(selectedpage);
     }
   };

  if (status === STATUSES.Loading) {
    return <h2 className="text-red-400 font-bold">Loading....</h2>;
  }

 

  return (
    <>
      <div className="mt-20">
        <div className="overflow-x-auto mt-5">
          <Table>
            <Table.Head>
              <Table.HeadCell>Product Id</Table.HeadCell>
              <Table.HeadCell>Product Image</Table.HeadCell>
              <Table.HeadCell>Product name</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>Fakeprice</Table.HeadCell>
              <Table.HeadCell>Description</Table.HeadCell>
              <Table.HeadCell>Rating</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Stock</Table.HeadCell>
              <Table.HeadCell>Actions</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {data.slice(firstpostIndex, lastpostIndex).map((val, i) => (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800 border-b-2"
                  key={i}
                >
                  <Table.Cell>{val.Id}</Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    <img
                      src={`${BASE_URL}/images/${val.image}`}
                      alt="no image"
                      className="w-20 h-20 rounded"
                    />
                  </Table.Cell>
                  <Table.Cell className="font-normal text-black">
                    {val.title}
                  </Table.Cell>
                  <Table.Cell className="font-normal text-black">
                    {val.price}
                  </Table.Cell>
                  <Table.Cell className="font-normal text-black">
                    {val.fakeprice}
                  </Table.Cell>
                  <Table.Cell className="font-light text-black">
                    {val.description}
                  </Table.Cell>
                  <Table.Cell>
                    {val.rating > 4 ? (
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
                  <Table.Cell className="font-normal text-black">
                    {val.category}
                  </Table.Cell>
                  <Table.Cell>{val.stock}</Table.Cell>

                  <Table.Cell>
                    <div className="flex gap-5">
                      <Link to={`/edit/${val._id}`}>
                        <button className="text-blue-500">Edit</button>
                      </Link>

                      <button className="text-xl bg-red-500 p-2 rounded-md text-white">
                        <MdDelete onClick={() => handleDelete(val._id)} />
                      </button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>

      <div className="mt-5 p-5 flex items-center justify-center ">
        {/* pagination */}
        <div
          className={
            page > 1
              ? "border border-gray-500 px-4 py-2 w-24 rounded-s-md text-center cursor-pointer"
              : "hidden"
          }
        >
          <p
            className="text-blue-700 font-semibold"
            onClick={() => selectedPagehandler(page - 1)}
          >
            previous
          </p>
        </div>

        {pages.map((p, i) => (
          <div
            className="border border-gray-500 px-4 py-2 w-24 text-center cursor-pointer "
            key={i}
          >
            <p
              className="text-gray-600 font-semibold"
              onClick={() => selectedPagehandler(p)}
            >
              {p}
            </p>
          </div>
        ))}

        <div
          className={
            page < data.length / 5
              ? "border border-gray-500 px-4 py-2 w-24 text-center rounded-e-md cursor-pointer "
              : "hidden"
          }
        >
          <p
            className="text-blue-700 font-semibold"
            onClick={() => selectedPagehandler(page + 1)}
          >
            next
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductsTable;
