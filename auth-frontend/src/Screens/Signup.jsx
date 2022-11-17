import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = async (e) => {
    e.preventDefault();

    if (userName && email && password) {
      let userData = {
        userName,
        email,
        password,
      };
      // console.log(userData);

      try {
        const res = await axios.post(
          "http://localhost:5000/api/signup",
          userData
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please fill all the Fields");
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
            Create Your Account
          </h1>

          <form className="mt-6" onSubmit={(e) => signupHandler(e)}>
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                value={userName}
                type="text"
                placeholder="Enter Username"
                className="w-full px-4 py-3 rounded-lg bg-gray-300 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              />
            </div>

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
              />
            </div>

            <div className="mt-2">
              <label className="block text-gray-700">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                type="password"
                placeholder="Enter Password"
                minLength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-300 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
            >
              Signup
            </button>
          </form>
          <div className="flex justify-around items-center mt-4">
            <h1 className="font-bold">Already have an Account?</h1>
            <Link to={"/login"}>
              <button
                className="border border-indigo-700 p-1 rounded-lg border-y-2 hover:bg-indigo-700 hover:text-white font-semibold"
                style={{ transition: "0.5s" }}
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
