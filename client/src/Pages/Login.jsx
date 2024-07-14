import axios from "axios";
import { Button, Label } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";



const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  // console.log(input);

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validationloginSchema = Yup.object({
    email: Yup.string()
      .email("Incorrect email format")
      .required("email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await validationloginSchema.validate(input, { abortEarly: false });

      let config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
        input,
        config
      );

     
      console.log("loginresponse", res.data.user);

      localStorage.setItem("userINFO", JSON.stringify(res.data.user));

      if (res.data.user.isAdmin === true) {
        navigate("/dashboard");
        setInput({
          ...input,
          email: "",
          password: "",
        });
      } else {
        navigate('/home')
      }

      setErrors({});
    } catch (error) {
      let newError = {};
      error.inner.forEach((err) => {
        newError[err.path] = err.message;
      });
      setErrors(newError);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      <div
        className="w-[400px] h-auto flex justify-center items-center flex-col p-5 border shadow-lg rounded-lg  pt-3 bg-white "
        style={{ top: "20%", left: "35%", position: "fixed" }}
      >
        <h1 className="text-3xl font-bold my-3">LOGIN</h1>
        <div>
          <form
            className="flex max-w-md flex-col p-5 gap-4 justify-center items-center"
            onSubmit={handleLogin}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <input
                id="email1"
                name="email"
                value={input.email}
                onChange={handleInputs}
                type="email"
                placeholder="email"
                className="w-60 rounded"
              />
              {errors.email && (
                <div className="text-red-600 font-normal">{errors.email}</div>
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <input
                id="password1"
                type="password"
                className="w-60 rounded"
                placeholder="password"
                name="password"
                value={input.password}
                onChange={handleInputs}
              />
              {errors.password && (
                <div className="text-red-600 font-normal">
                  {errors.password}
                </div>
              )}
            </div>

            <Button
              type="submit"
              className="w-36 mt-3 "
              outline
              gradientDuoTone="purpleToBlue"
            >
              Login
            </Button>
          </form>
          <div className="flex items-center justify-between p-3">
            <Link to={"/register"} className="text-blue-700">
              Register
            </Link>

            <Link className="text-red-700">Forget Password ?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
