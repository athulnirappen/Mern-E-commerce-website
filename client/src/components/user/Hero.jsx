import { Link } from "react-router-dom";



const Hero = () => {
  return (
    <div className="mt-3 lg:mx-8 mx-2 rounded-lg w-[400px] h-[300px] bg-[url(https://media.istockphoto.com/id/1200968843/photo/banner-of-trendy-shopaholic-woman-excited-about-new-purchases-or-sales-holding-shopping-bags.webp?s=2048x2048&w=is&k=20&c=v34L81K0GHyexv6IIU3-hEtIxmHlo5ivZleC_HEPJ3o=)] lg:w-auto lg:h-[500px] mb-5 bg-contain bg-no-repeat lg:bg-cover relative">
      <div className="absolute lg:top-40 lg:left-40 top-56">
        <h6 className="text-red-500 font-bold text-3xl mb-1">
          Trending Accessories
        </h6>
        <h1 className="font-bold text-5xl mb-2">MODERN SUNGLASSES</h1>
        <p className="font-bold text-gray-500 mb-3">Starting at $ 15.00</p>
        <Link to={'/home'}>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md" >
            Shop now
          </button>
        </Link>
      </div>
    </div>
  ); 
}

export default Hero