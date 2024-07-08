const HeroProducts = () => {
  const newarrivals = [
    {
      image:
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6d%2F96%2F6d960415a2004a718f3488bf1508b441bf69eabc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      name: "Relaxed Fit Short-sleeved shirt",
      category: "Clothes",
      price: "₹ 3000.00",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/6/BI/SR/ZG/153882108/net-embroidery-white-dupatta-for-women-and-girls-500x500.jpg",
      name: "Net Embroidery White Dupatta For Women",
      category: "Clothes",
      price: "₹ 5000.00",
    },
    {
      image:
        "https://i.pinimg.com/564x/e3/c2/c0/e3c2c060144699a5c0e2645ab12de912.jpg",
      name: "Sweet Bouquet Black Floral Print Wrap Maxi Dress ",
      category: "Clothes",
      price: "₹ 4000.00",
    },
    {
      image: "https://m.media-amazon.com/images/I/413xxjt5AJL._AC_UY1100_.jpg",
      name: "Marks & Spencer Pure Cotton Garment Dyed Overshirt",
      category: "Mens Fashion",
      price: "₹ 2000.00",
    },
  ];

  const trending = [
    {
      image: "https://m.media-amazon.com/images/I/61ntIezrRjL._AC_UY1000_.jpg",
      name: "Smart Tracking Grey Walking & Running Shoe",
      category: "Sports",
      price: "₹ 1500.00",
    },
    {
      image:
        "https://media.sportitude.com.au/97ebaf64-ba24-48ed-9578-80121243baa2.jpg",
      name: "Running & tracking Shoe",
      category: "Sports",
      price: "₹ 1800.00",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2020/11/XE/XP/DR/117329381/petite-shimmer-pumps-500x500.jpg",
      name: "Womens Party wear shoes ",
      category: "Sports",
      price: "₹ 1300.00",
    },
    {
      image:
        "https://img0.junaroad.com/uiproducts/20230233/zoom_0-1693242070.jpg",
      name: "Sports shoes for women",
      category: "Sports",
      price: "₹ 1200.00",
    },
  ];

  const topRated = [
    {
      image:
        "https://images-cdn.ubuy.co.in/65b37d54ee201c405c7ebcf9-mens-vintage-mechanical-pocket-watch.jpg",
      name: " Mechanical Pocket Watch ",
      category: "Watches",
      price: "₹ 2000.00",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/850/1000/l3vxbbk0/necklace-chain/o/m/q/4-necklace-hopesee-original-imagewrqfqpcyunv.jpeg?q=20&crop=false",
      name: " Silver Dear Heart Necklace",
      category: "jwellery",
      price: "₹ 3000.00",
    },
    {
      image:
        "https://5.imimg.com/data5/ECOM/Default/2023/10/349158689/IH/HO/DU/8221005/titanskinnnudeperfume.jpg",
      name: "Titan Skinn Nude for Women ",
      category: "Perfumes",
      price: "₹ 4000.00",
    },
    {
      image:
        "https://imagescdn.thecollective.in/img/app/product/9/901611-11067092.jpg",
      name: "Men Red Burnished Leather Belt",
      category: "Belts",
      price: "₹ 1500.00",
    },
  ];
  return (
    <div className="flex flex-wrap gap-10  justify-center mt-10 p-4">
     
      <div className=" p-3">
        <div>
          <h1 className="font-bold text-xl">New Arrivals</h1>
          <hr className=" border-b-2 border-gray-300 mt-3" />
        </div>
        <div>
          {newarrivals.map((val, i) => (
            <div
              className="p-3 border border-gray-400 rounded-md w-80 h-32   flex gap-5 items-center my-1 lg:my-7 hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer"
              key={i}
            >
              <div>
                <img
                  src={val.image}
                  alt={val.name}
                  className="h-24 w-20 rounded "
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold">{val.name.slice(0, 18)}...</span>
                <span>{val.category}</span>
                <span className="text-red-500 text-semibold mt-1">
                  {val.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* next */}
      <div className=" p-3">
        <div>
          <h1 className="font-bold text-xl">Trending</h1>
          <hr className=" border-b-2 border-gray-300 mt-3" />
        </div>
        <div>
          {trending.map((val, i) => (
            <div
              className="p-3 border border-gray-400 rounded-md w-80 h-32   flex gap-5 items-center my-1 lg:my-7 hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer"
              key={i}
            >
              <div>
                <img
                  src={val.image}
                  alt={val.name}
                  className="h-24 w-20 rounded"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold">{val.name.slice(0, 18)}...</span>
                <span>{val.category}</span>
                <span className="text-red-500 text-semibold mt-1">
                  {val.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* next */}
      <div className=" p-3">
        <div>
          <h1 className="font-bold text-xl">TopRated</h1>
          <hr className=" border-b-2 border-gray-300 mt-3" />
        </div>
        <div>
          {topRated.map((val, i) => (
            <div
              className="p-3 border border-gray-400 rounded-md w-80 h-32   flex gap-5 items-center my-1 lg:my-7 hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer"
              key={i}
            >
              <div>
                <img
                  src={val.image}
                  alt={val.name}
                  className="h-24 w-20 rounded"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold">{val.name.slice(0, 18)}...</span>
                <span>{val.category}</span>
                <span className="text-red-500 text-semibold mt-1">
                  {val.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroProducts;
