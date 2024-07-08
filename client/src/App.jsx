import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";

import SingleProduct from "./Pages/SingleProduct";
import Cart from "./components/user/Cart";
import Wishlist from "./components/user/Wishlist";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminProduts from "./Pages/AdminProduts";
import AllOrders from "./Pages/AllOrders";
import AllUsers from "./Pages/AllUsers";
import Edit from "./components/admin/Edit";
import Success from "./Pages/Success";
import Cancel from "./Pages/Cancel";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/adminproducts" element={<AdminProduts />} />
        <Route path="/allorders" element={<AllOrders />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </>
  );
}

export default App;
