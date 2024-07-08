const Subheader = () => {
  const category = [
    "HOME",
    "SHOP",
    "MEN'S",
    "WOMEN'S",
    "JEWELLERY",
    "PERFUME",
    "BLOG",
    "HOT OFFERS",
  ];

  return (
    <div className="mt-[5%] flex justify-center items-center p-3 space-x-10 overflow-x-scroll scroll-smooth md:overflow-x-hidden">
      {category.map((val, i) => {
        return (
          <div className="cursor-pointer" key={i}>
            <h6 className="font-bold ">{val}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Subheader;
