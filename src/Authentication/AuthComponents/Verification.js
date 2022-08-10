import React from "react";
import { Link } from "react-router-dom";

function Verification({ values, handleChange, nextStep, prevStep }) {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Back = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <section className="py-8 md:py-8 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-sm mx-auto">
          <div className="mb-6 text-center">
            <p className="text-lg text-coolGray-500  font-bold">
              Tell us more about yourself
            </p>
          </div>
          <form action="">
            <div className="mb-6">
              <label
                className="block mb-2 text-coolGray-800 font-medium"
                htmlFor=""
              >
                How many properties do you currently own?
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-color-primary focus:ring-opacity-50"
                type="number"
                placeholder="2"
                defaultValue={values.units}
                onChange={handleChange.bind("units")}
                pattern={[0 - 9]}
                min="0"
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-coolGray-800 font-medium"
                htmlFor=""
              >
                Business Name
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-color-primary focus:ring-opacity-50"
                type="name"
                placeholder="Crytex Holdings(optional)"
                defaultValue={values.businessname}
                onChange={handleChange.bind("businessname")}
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-coolGray-800 font-medium"
                htmlFor=""
              >
                Phone Number
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-color-primary focus:ring-opacity-50"
                type="tel"
                placeholder="0791919191"
                defaultValue={values.phone}
                onChange={handleChange.bind("phone")}
                required
                pattern={[0 - 9]}
              />
            </div>

            <button className="inline-block bg-color-primary py-3 px-7 mb-4 w-full text-base text-green-50 font-medium text-center leading-ring-color-primary hover:bg-color-secondary focus:ring-2 focus:ring-color-primary focus:ring-opacity-50 rounded-md shadow-sm">
              Submit
            </button>
            <button
              className="inline-block py-3 px-7 mb-4 w-full text-base text-green-50 font-medium text-center leading-6 bg-color-primary hover:bg-color-secondary focus:ring-2 focus:ring-color-primary focus:ring-opacity-50 rounded-md shadow-sm"
              onClick={Back}
            >
              Back
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Verification;
