import { Link } from "react-router-dom"


const Success = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-300 flex justify-center ">
        <div className="border p-5 bg-white w-96 h-80 mt-40 flex flex-col justify-center items-center rounded-md shadow-md">
          <h1 className="font-bold text-3xl">Payment Successfull</h1>
          <p className="font-light mt-3">Thank You for Your payment </p>
          <Link to={"/home"}>
            <button className="mt-3 px-6 py-2 rounded-md bg-green-400 text-white">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Success