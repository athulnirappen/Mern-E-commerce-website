

const Category = () => {
  const categoryArry = [
    {
      image:
        "https://5.imimg.com/data5/WA/FG/MY-7083094/ladies-stylish-frock.jpg",
      name: "DRESS & FROCKS",
    },
    {
      image: "https://m.media-amazon.com/images/I/81wmF5L+AaL._AC_UY1100_.jpg",
      name: "WINTER WEAR",
    },
    {
      image:
        "https://i0.wp.com/specsmart.in/wp-content/uploads/2022/06/Silver-Metal-Blue-Gradient-Medium-Aviator-Sunglass-1.jpg?fit=1370%2C1100&ssl=1",
      name: "SUNGLASSES & LENS",
    },
    {
      image: "https://4.imimg.com/data4/FY/WW/MY-9606911/men-s-shorts.jpg",
      name: "SHORTS & JEANS",
    },
  ];

  
  return (
    <div className="flex flex-wrap mt-52 lg:mt-4 gap-9 mx-8 justify-center mb-4">
      {categoryArry.map((val, i) => {
        return (
          <div
            className="p-3 border border-gray-400 rounded-md w-80 h-32   flex gap-5 items-center my-1 lg:my-7 cursor-pointer"
            key={i}
          >
            <div>
              <img src={val.image} alt={val.name} className="h-20 w-20" />
            </div>
            <div>
              <h2 className="font-bold">{val.name}</h2>
              <span className="text-red-500 font-semibold">Show All</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
