import { Dropdown, Navbar, NavbarCollapse, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setSearch } from "../../redux/searchSlice";
import { useDispatch } from 'react-redux'



const Header = () => {

  const cartItems = useSelector((state) => state.cart.cart)
  const wishListItems = useSelector((state) => state.wishlist.wishlist);

  const dispatch = useDispatch()
  const navigate=useNavigate()

  const data = localStorage.getItem('userINFO')
  const res = data ? JSON.parse(data) : null
 

  const logOUt = () => {
    localStorage.removeItem("userINFO");
    navigate('/')

  }





  return (
    <div className="fixed top-0 w-full z-50">
      <Navbar className="border-b-2 px-3">
        <Link to={"/home"}>
          <span className=" font-bold text-3xl">Anon</span>
        </Link>

        <form>
          <TextInput
            rightIcon={AiOutlineSearch}
            type="text"
            color="white"
            placeholder="Enter your Product name..."
            className="lg:w-[700px]"
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
        </form>
        <Navbar.Toggle />
        <NavbarCollapse>
          <div className="flex justify-center items-center mt-3 lg:flex sm:flex-row gap-4 mr-6">
            <div>
              <Dropdown
                arrowIcon={false}
                inline
                label={<FaRegUser className="text-2xl" />}
              >
                <Dropdown.Header>
                  <span className="block text-sm">{res.username}</span>
                  <span className="block truncate text-sm font-medium">
                    {res.email}
                  </span>
                </Dropdown.Header>

                <Dropdown.Item onClick={logOUt}>Logout</Dropdown.Item>
              </Dropdown>
            </div>
            <Link to={"/wishlist"}>
              <div className="cursor-pointer relative">
                <span className="w-6 h-6 text-center border bg-red-600 text-white rounded-full absolute bottom-4 left-3">
                  {wishListItems.length}
                </span>

                <IoIosHeartEmpty className="text-2xl" />
              </div>
            </Link>

            <Link to={"/cart"}>
              <div className="cursor-pointer relative">
                <span className="w-6 h-6 text-center border bg-red-600 text-white rounded-full absolute bottom-4 left-3">
                  {cartItems.length}
                </span>
                <IoBagHandleOutline className="text-2xl" />
              </div>
            </Link>
          </div>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default Header;
