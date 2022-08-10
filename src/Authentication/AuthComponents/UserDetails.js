import React from "react";
import { Link } from "react-router-dom";

function UserDetails({ nextStep, handleChange, values }) {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <section className="py-8 md:py-8 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-sm mx-auto">
          <div className="mb-6 text-center">
            <h3 className="mb-4 text-2xl md:text-3xl font-bold">
              Create an account
            </h3>
            <p className="text-lg text-coolGray-500 font-medium">
              Start your journey with our product
            </p>
          </div>
          <form action="">
            <div className="mb-6">
              <label
                className="block mb-2 text-coolGray-800 font-medium"
                htmlFor=""
              >
                FirstName*
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:text-color-primary focus:ring-opacity-50"
                type="name"
                placeholder="Patryk"
                defaultValue={values.firstname}
                onChange={handleChange.bind("firstname")}
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-coolGray-800 font-medium"
                htmlFor=""
              >
                LastName*
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:text-color-primary focus:ring-opacity-50"
                type="name"
                placeholder="Lemuria"
                defaultValue={values.lastname}
                onChange={handleChange.bind("lastname")}
              />
            </div>

            <div className="mb-6">
              <label
                className="block mb-2 text-coolGray-800 font-medium"
                htmlFor=""
              >
                Email*
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:text-color-primary focus:ring-opacity-50"
                type="name"
                placeholder="dev@shuffle.dev"
                defaultValue={values.email}
                onChange={handleChange.bind("email")}
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
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:text-color-primary focus:ring-opacity-50"
                type="password"
                placeholder="************"
                defaultValue={values.password}
                onChange={handleChange("password")}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-coolGray-800 font-medium"
                htmlFor=""
              >
                Confirm password
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:text-color-primary focus:ring-opacity-50"
                type="password"
                placeholder="************"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="w-full md:w-auto mt-1">
                <a
                  className="inline-block text-xs font-medium text-black"
                  href="#"
                >
                  By signing up you are agreeing to the{" "}
                  <span className="text-color-primary">Terms & Conditions</span>{" "}
                  and <span className="text-color-primary">Privacy policy</span>{" "}
                  of RentPro
                </a>
              </div>
            </div>
            <button
              className="inline-block py-3 px-7 mb-4 w-full text-base text-green-50 font-medium text-center leading-6 bg-color-primary hover:bg-color-secondary focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
              onClick={Continue}
            >
              Sign Up
            </button>

            <p className="text-center">
              <span className="text-xs font-medium">
                Already have an account?{" "}
              </span>
              <Link
                className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline"
                to="/login"
              >
                {" "}
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default UserDetails;
