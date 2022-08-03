import React from "react";
import { Link } from "react-router-dom";

function AddressDetails({ handleChange, values, nextStep }) {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <div className="">
      <section className="py-8 md:py-8 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-sm mx-auto">
            <div className="mb-6 text-center">
              <h3 className="mb-4 text-2xl md:text-3xl font-bold">
                Add Property
              </h3>
            </div>
            <form action="">
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor=""
                >
                  Property Name
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="name"
                  placeholder="Patryk"
                  defaultValue={values.name}
                  onChange={handleChange.bind("name")}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor=""
                >
                  Address
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="name"
                  placeholder="Lemuria"
                  defaultValue={values.address}
                  onChange={handleChange.bind("address")}
                />
              </div>

              <div className="mb-6">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor=""
                >
                  Unit
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="name"
                  placeholder="Unit 1, Apartment"
                  defaultValue={values.unit}
                  onChange={handleChange.bind("unit")}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor=""
                >
                  City
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="name"
                  placeholder="Nairobi"
                  defaultValue={values.city}
                  onChange={handleChange("city")}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor=""
                >
                  County
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="name"
                  placeholder="Nairobi"
                  defaultValue={values.county}
                  onChange={handleChange("county")}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-coolGray-800 font-medium"
                  htmlFor=""
                >
                  Zipcode
                </label>
                <input
                  className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  type="number"
                  placeholder="00000"
                  defaultValue={values.zipcode}
                  onChange={handleChange("zipcode")}
                />
              </div>

              <button
                className="inline-block py-3 px-7 mb-4 w-full text-base text-green-50 font-medium text-center leading-6 bg-indigo-500 hover:bg-indigo-600 rounded-md shadow-sm"
                onClick={Continue}
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddressDetails;
