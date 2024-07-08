import { Button, Label } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(inputs, { abortEarly: false });

      let config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const res = await axios.post(
        "http://localhost:8000/api/auth/signup",
        inputs,
        config
      );
      // console.log(res);

      localStorage.setItem("userInfo", JSON.stringify(res.data.newUser));
      if (res.status === 200) {
        navigate("/");
        setInputs({
          ...inputs,
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }

      setErrors({});
      // Handle successful form submission
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
      console.log("Validation Error", newErrors);
    }
  };

  // console.log("Inputs:", inputs);
  // console.log("Errors:", errors);

  return (
    <div className="w-full h-screen bg-gradient-to-r from-red-500 via-purple-500 to-yellow-500 ">
      <div
        className="w-[400px] h-auto flex justify-center items-center flex-col p-5 border shadow-lg rounded-lg pt-3 bg-white"
        style={{ top: "5%", left: "35%", position: "fixed" }}
      >
        <h1 className="text-3xl font-bold my-3">REGISTER</h1>
        <form
          className="flex max-w-md flex-col p-5 gap-4 justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Your Username" />
            </div>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="w-60 rounded"
              name="username"
              value={inputs.username}
              onChange={handleInputs}
            />
            {errors.username && (
              <div className="text-red-600 font-normal">{errors.username}</div>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-60 rounded"
              name="email"
              value={inputs.email}
              onChange={handleInputs}
            />
            {errors.email && (
              <div className="text-red-600 font-normal">{errors.email}</div>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <input
              id="password"
              type="password"
              className="w-60 rounded"
              placeholder="Password"
              name="password"
              value={inputs.password}
              onChange={handleInputs}
            />
            {errors.password && (
              <div className="text-red-600 font-normal">{errors.password}</div>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="confirmPassword" value="Confirm password" />
            </div>
            <input
              id="confirmPassword"
              type="password"
              className="w-60 rounded"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={inputs.confirmPassword}
              onChange={handleInputs}
            />
            {errors.confirmPassword && (
              <div className="text-red-600 font-normal">
                {errors.confirmPassword}
              </div>
            )}
          </div>
          <Button
            type="submit"
            className="w-36 mt-3"
            outline
            gradientDuoTone="pinkToOrange"
          >
            Register
          </Button>
        </form>
        <div className="flex items-center justify-center p-3">
          <Link to={"/"} className="text-blue-700">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
