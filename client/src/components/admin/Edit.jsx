import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {

  const navigate=useNavigate()
  const { data } = useSelector((state) => state.product);

  const [inputData, setInputData] = useState({
    Id: "",
    title: "",
    category: "",
    price: "",
    fakeprice: "",
    description: "",
    rating: "",
    stock: "",
    
  });

  const [image, setImage] = useState("");
  const [existingImage, setExistingImage] = useState("");

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const { id } = useParams();

  const getProducts = () => {
    const existingProduct = data.find((product) => product._id === id);
    if (existingProduct) {
      setInputData(existingProduct);
      setExistingImage(existingProduct.image);
    } else {
      console.error(`Product with id ${id} not found.`);
      // Optionally, set default values or handle the error as needed
      setInputData({
        Id: "",
        title: "",
        category: "",
        price: "",
        fakeprice: "",
        description: "",
        rating: "",
        stock: "",
        image: "", // Default empty image
      });
      setExistingImage("");
    }
  };

  useEffect(() => {
    getProducts();
  }, []); // Add dependencies to avoid infinite calls

  const handleUpdate = async(e) => {
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
      const formdata = new FormData();
      formdata.append("Id", Id);
      formdata.append("title", title);
      formdata.append("category", category);
      formdata.append("price", price);
      formdata.append("fakeprice", fakeprice);
      formdata.append("description", description);
      formdata.append("stock", stock);
      formdata.append("rating", rating);
      formdata.append("image", image)
        

      const config = {
        headers: {
          "Content-type":"multipart/form-data"
        }
      }

      const res = await axios.put(
        `http://localhost:8000/api/product/editproduct/${id}`,formdata,config
      );

      console.log(res);

      if (res.status === 200) {
        navigate("/adminproducts");
      }
    }
  };

  return (
    <>
      <div>
        <div className=" mx-auto flex flex-col items-center border w-[500px] p-8 mt-5">
          <h1 className="text-center mb-8 font-bold text-3xl">Edit Product</h1>

          <form className="flex flex-col gap-3">
            <div>
              <input
                type="text"
                name="Id"
                placeholder="Enter Id"
                className="w-[300px] rounded-md"
                value={inputData.Id}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="title"
                value={inputData.title}
                placeholder="Enter title"
                className="w-[300px] rounded-md"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="category"
                placeholder="Enter category"
                className="w-[300px] rounded-md"
                value={inputData.category}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="price"
                placeholder="Enter price"
                className="w-[300px] rounded-md"
                value={inputData.price}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="fakeprice"
                placeholder="Enter fakeprice"
                className="w-[300px] rounded-md"
                value={inputData.fakeprice}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="description"
                placeholder="Enter description"
                className="w-[300px] rounded-md"
                value={inputData.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="file"
                name="image"
                placeholder=""
                className="w-[300px] rounded-md"
                onChange={handleImage}
              />
              {existingImage && (
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Existing image:{ existingImage}</p>
                  
                </div>
              )}
            </div>
            <div>
              <input
                type="text"
                name="rating"
                placeholder="Enter rating"
                className="w-[300px] rounded-md"
                value={inputData.rating}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="stock"
                placeholder="Enter stock"
                className="w-[300px] rounded-md"
                value={inputData.stock}
                onChange={handleChange}
              />
            </div>

            <div className="flex gap-3">
              <button
                className="px-6 py-2 bg-red-500 text-white rounded-md"
                type="submit"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button className="px-6 py-2 bg-black text-white rounded-md">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
