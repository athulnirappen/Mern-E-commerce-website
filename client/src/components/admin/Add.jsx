/* eslint-disable react/prop-types */
import axios from "axios";
import { Button, FileInput, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

const Add = ({ handleResponse }) => {
  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }

  const [inputData, setInputData] = useState({
    Id: "",
    title: "",
    category: "",
    price: "",
    fakeprice: "",
    description: "",
    stock: "",
    rating: "",
  });

  const [image, setImage] = useState("");

  const handleFile = (e) => {
    //  console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  // console.log(inputData);

  const handleAdd = async (e) => {
    e.preventDefault();

    const {
      Id,
      title,
      category,
      price,
      fakeprice,
      description,
      stock,
      rating,
    } = inputData;

    if (
      !Id ||
      !title ||
      !category ||
      !price ||
      !fakeprice ||
      !description ||
      !stock ||
      !rating ||
      !image
    ) {
      alert("Please fill form completely");
    } else {
      const data = new FormData();
      data.append("Id", Id);
      data.append("title", title);
      data.append("category", category);
      data.append("price", price);
      data.append("fakeprice", fakeprice);
      data.append("description", description);
      data.append("stock", stock);
      data.append("rating", rating);
      data.append("image", image);

      let config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const res = await axios.post(
        "http://localhost:8000/api/product/addproduct",
        data,
        config
      );
      if (res.status >= 200 && res.status < 300) {
        handleResponse(res.data)
        onCloseModal();
         setInputData({
           ...inputData,
           Id: "",
           title: "",
           category: "",
           price: "",
           fakeprice: "",
           description: "",
           stock: "",
           rating: "",
         });

         setImage("");
      }
      console.log(res);
    }
  };

  const Cancel = () => {
    setInputData({
      ...inputData,
      Id: "",
      title: "",
      category: "",
      price: "",
      fakeprice: "",
      description: "",
      stock: "",
      rating: "",
    });

    setImage("");
  };

  return (
    <div>
      <Button className="bg-blue-500 " onClick={() => setOpenModal(true)}>
        New product
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
              Add Products
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Id" value="Id" />
              </div>
              <TextInput
                id="Id"
                placeholder="id"
                required
                name="Id"
                value={inputData.Id}
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Title" value="Title of the product" />
              </div>
              <TextInput
                id="Title"
                type="text"
                placeholder="title of the product"
                name="title"
                value={inputData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="category" value="Enter Category" />
              </div>
              <TextInput
                id="category"
                type="text"
                required
                placeholder="Category of product"
                name="category"
                value={inputData.category}
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="price" value="Enter Price" />
              </div>
              <TextInput
                id="price"
                type="text"
                required
                placeholder="Price of product"
                name="price"
                value={inputData.price}
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="fakeprice" value="Enter fakeprice" />
              </div>
              <TextInput
                id="fakeprice"
                type="text"
                required
                placeholder="fakeprice"
                name="fakeprice"
                value={inputData.fakeprice}
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="file-upload" value="Upload file" />
              </div>
              <FileInput id="file-upload" onChange={handleFile} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="desc" value="Product Description" />
              </div>
              <TextInput
                id="desc"
                type="text"
                required
                placeholder="Description"
                name="description"
                value={inputData.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="rating" value="Product rating" />
              </div>
              <TextInput
                id="rating"
                type="text"
                required
                placeholder="Product rating"
                name="rating"
                value={inputData.rating}
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="stock" value="Product stock" />
              </div>
              <TextInput
                id="stock"
                type="text"
                required
                placeholder="Product stock"
                name="stock"
                value={inputData.stock}
                onChange={handleChange}
              />
            </div>

            <div className="flex gap-5">
              <button
                className="px-4 py-2 rounded-md bg-red-400 hover:bg-red-700 text-white"
                type="submit"
                onClick={handleAdd}
              >
                Add
              </button>
              <button
                className="px-4 py-2 rounded-md bg-gray-500 text-white"
                onClick={Cancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Add;
