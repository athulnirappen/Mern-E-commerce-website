import { FaStar   } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import { Carousel } from "flowbite-react";


const Dealofthedy = () => {

  

  const carousalProducts = [
    {
      image:
        "https://www.wildstone.in/cdn/shop/products/IMG_0010_1.jpg?v=1677130967",
      name: "WildStone Party Perfume Combo",
      price: "5000",
    },
    {
      image:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/10077158/915024038.jpg",
      name: "Casio Edifice EFR-539BK",
      price: "5555",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71HvALu5YcL._AC_UF1000,1000_QL80_.jpg",
      name: "Glow Skin Care Combo Offer",
      price: "1000",
    },
  ];


  return (
    <div className="mx-8 mt-[4%] mb-[5%] flex flex-wrap gap-5">
      <div className="w-96">
        <div className="mx-5">
          <h2 className="uppercase mb-5 font-bold text-xl">Best Sellers</h2>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2  p-1">
            <img
              src="https://wearcourage.com/cdn/shop/products/baby-khunn-fabric-shoes-with-bow-color-pink-922149_800x.jpg?v=1682251398"
              alt="no image"
              className="w-24 h-20 rounded"
            />
            <div>
              <h2 className="font-bold mb-2">Baby Fabric Shoes</h2>
              <span className="flex mb-1">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </span>
              <span className="font-semibold">₹ 3000.00</span>
            </div>
          </div>
          <div className="flex gap-2  p-3">
            <img
              src="https://assets.ajio.com/medias/sys_master/root/20230602/NBrW/6479424142f9e729d70e513a/-473Wx593H-461760023-blue-MODEL.jpg"
              alt="no image"
              className="w-20 h-20 rounded"
            />
            <div>
              <h2 className="font-bold mb-2">Full Sleeve Hooded T-Shirt</h2>
              <span className="flex mb-1">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStarHalf className="text-yellow-400" />
              </span>
              <span className="font-semibold">₹ 2000.00</span>
            </div>
          </div>
          <div className="flex gap-2  p-3">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/4/301339062/AP/TY/WN/7175905/oversized-crop-t-shirt-girls.jpg"
              alt="no image"
              className="w-20 h-20 rounded"
            />
            <div>
              <h2 className="font-bold mb-2">
                Half Sleeve Printed T-Shirt Girls
              </h2>
              <span className="flex mb-1">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </span>
              <span className="font-semibold">₹ 3500.00</span>
            </div>
          </div>
          <div className="flex gap-2  p-3">
            <img
              src="https://www.kosha.co/image/catalog/complete%20the%20look%20images/27.jpg"
              alt="no image"
              className="w-20 h-20 rounded"
            />
            <div>
              <h2 className="font-bold mb-2">Winter Woolen Hat Men</h2>
              <span className="flex mb-1">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStarHalf className="text-yellow-400" />
              </span>
              <span className="font-semibold">₹ 1500.00</span>
            </div>
          </div>
        </div>
      </div>

      {/*deal of the day  */}

      <div className="border border-gray-500  w-[1000px] p-5 rounded">
        <h2 className="font-bold text-xl">Deal Of The Day</h2>
        <hr className="border-b-2  mt-5" />

        <div className="mt-5">
          <div className="h-56 sm:h-64 xl:h-[500px]">
            <Carousel>
              {carousalProducts.map((val, i) => (
                <div
                  className="flex flex-wrap justify-evenly items-center p-5  mt-8  "
                  key={i}
                >
                  <img
                    src={val.image}
                    alt="no image"
                    className="w-[400px] h-[400px] rounded-md hover:scale-110 transition-all duration-500 ease-in-out"
                  />
                  <div className="w-72 h-60 ">
                    <span className="flex mb-2">
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                    </span>
                    <h2 className="uppercase font-bold">{val.name}</h2>
                    <p className="mt-2 font-light text-gray-500">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Minima quibusdam sunt dignissimos quaerat exercitationem
                      iure natus officia.
                    </p>
                    <div className="flex gap-3 mt-2 ">
                      <p className="font-semibold text-red-600">
                        ₹ {val.price}
                      </p>
                      <p className=" line-through font-light">₹ 7000</p>
                    </div>

                    <button className="mt-2 px-6 py-2  bg-gradient-to-r from-pink-600 to-violet-600 via-red-500 text-white rounded-md hover:bg-red-700">
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dealofthedy;
