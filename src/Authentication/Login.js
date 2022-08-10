import React from "react";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-sm mx-auto">
          <div className="mb-6 text-center">
            <h3 className="mb-4 text-2xl md:text-3xl font-bold">
              Welcome back
            </h3>
          </div>
          <form action="">
            <div className="mb-6">
              <label
                className="block mb-2 text-coolGray-800 font-medium"
                htmlFor=""
              >
                Email
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-color-main focus:ring-opacity-50"
                type="name"
                placeholder="dev@shuffle.dev"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-coolGray-800 font-medium"
                htmlFor=""
              >
                Password
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-color-main focus:ring-opacity-50"
                type="password"
                placeholder="************"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="w-full md:w-auto mt-1">
                <a
                  className="inline-block text-xs font-medium ring-color-main hover:text-green-600"
                  href="#"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <button className="inline-block py-3 px-7 mb-4 w-full bg-color-primary text-base text-white font-medium text-center leading-ring-color-main hover:bg-color-secondary focus:ring-2 focus:ring-color-main focus:ring-opacity-50 rounded-md shadow-sm">
              Sign In
            </button>

            <p className="text-center">
              <span className="text-xs font-medium">
                Do not have an account?
              </span>
              <Link
                className="inline-block text-xs font-medium ring-color-main hover:text-green-600 hover:underline"
                to="/signup"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
