import Bannerofproducts from "../components/user/Banner";
import Category from "../components/user/Category";
import Dealofthedy from "../components/user/Dealofthedy";
import FooterPart from "../components/user/Footer";
import Header from "../components/user/Header";
import Hero from "../components/user/Hero";
import HeroProducts from "../components/user/HeroProducts";

import Subheader from "../components/user/Subheader";
import AllProducts from "./AllProducts";

const Home = () => {
  return (
    <>
      <Header />
      <Subheader />
      <Hero />
      <Category />
      <HeroProducts />
      <Dealofthedy />
      <AllProducts />
      <Bannerofproducts />
      <FooterPart />
    </>
  );
};

export default Home;
