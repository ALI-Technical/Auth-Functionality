import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login
  const loginHandler = async (e) => {
    e.preventDefault();
    if (email && password) {
      const userData = {
        email,
        password,
      };
      try {
        const res = await axios.post(
          "http://localhost:5000/api/login",
          userData
        );
        console.log(res);
        alert(res.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("all fields must be filled");
    }
  };

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Log in to your account
          </h1>

          <form className="mt-6" onSubmit={(e) => loginHandler(e)}>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                type="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-300 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-300 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div className="text-right mt-2">
              <Link to={"/forgetPass"}>
                <button
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </button>
              </Link>
            </div>

            <button
              type="submit"
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
            >
              Log In
            </button>
          </form>
          <div className="flex justify-around items-center mt-4">
            <h1 className="font-bold">Do not have an Account?</h1>
            <Link to={"/signup"}>
              <button
                className="border border-indigo-700 p-1 rounded-lg border-y-2 hover:bg-indigo-700 hover:text-white font-semibold"
                style={{ transition: "0.5s" }}
              >
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
