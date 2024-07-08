import { Banner } from "flowbite-react";

import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
const Bannerofproducts = () => {
  return (
    <>
      <div className="bg-[url(https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943_1280.jpg)] lg:w-[1200px] lg:h-[250px] bg-cover bg-no-repeat bg-center mx-auto p-4 mt-[8%] mb-[5%] rounded opacity-80 flex justify-center items-center">
        <Banner>
          <div className="flex w-full flex-col justify-between border-b border-gray-200 bg-gray-50 p-10 dark:border-gray-600 dark:bg-gray-700 md:flex-row rounded-lg lg:w-[1000px] ">
            <div className="mb-4 md:mb-0 md:mr-4">
              <h2 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
                E-Commerce Website
              </h2>
              <p className="flex items-center text-sm font-normal w-[500px] mt-3 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                cum quidem unde doloremque labore minus explicabo atque
                voluptates sit! Vitae consectetur magni modi nam sapiente, ipsum
                dignissimos suscipit repellat quod?
              </p>
            </div>
            <div className="flex shrink-0 items-center">
              <Link to={"/home"}>
                <a className="mr-2 inline-flex items-center justify-center rounded-lg px-3 py-2 text-xl font-medium text-white bg-gradient-to-r from-pink-500 to-violet-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                  Get started
                  <HiArrowRight className="ml-2 h-6 w-10" />
                </a>
              </Link>
              
            </div>
          </div>
        </Banner>
      </div>
    </>
  );
};

export default Bannerofproducts;
