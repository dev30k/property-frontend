import React from "react";
import PhoneInput from "react-phone-input-2";
import startsWith from "lodash.startswith";

function NewTenants(props) {
  const [phone, setPhone] = React.useState("");
  return (
    <section className="py-24 md:py-32 bg-white mx-auto lg:ml-80">
      <div className="container px-4 mx-auto">
        <div className="max-w-sm mx-auto">
          <div className="mb-6 text-center">
            <h3 className="mb-4 text-2xl md:text-3xl font-bold">Add Tenants</h3>
          </div>
          <form action="">
            <div className="mb-6">
              <label
                className="block mb-2 text-coolGray-800 font-medium"
                htmlFor=""
              >
                FirstName
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-color-primary focus:ring-opacity-50"
                type="name"
                placeholder="lemuria"
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-coolGray-800 font-medium"
                htmlFor=""
              >
                LastName
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-color-primary focus:ring-opacity-50"
                type="name"
                placeholder="lemuria"
              />
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-coolGray-800 font-medium"
                htmlFor=""
              >
                Email
              </label>
              <input
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-color-primary focus:ring-opacity-50"
                type="email"
                placeholder="dev@shuffle.dev"
              />
            </div>

            <div className="mb-4">
              <PhoneInput
                inputClass="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-color-primary focus:ring-opacity-50"
                country="ke"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                isValid={(inputNumber, country, countries) => {
                  return countries.some((country) => {
                    return (
                      startsWith(inputNumber, country.dialCode) ||
                      startsWith(country.dialCode, inputNumber)
                    );
                  });
                }}
              />
            </div>
            <div className="flex flex-wrap items-center justify-between mt-10">
              <button className="inline-block py-3 px-7 mb-4 w-full text-base text-indigo-50 font-medium text-center leading-6 bg-color-primary hover:bg-color-secondary focus:ring-2 focus:ring-color-primary focus:ring-opacity-50 rounded-md shadow-sm">
                Add Tenant
              </button>
              <button className="inline-block py-3 px-7 mb-4 w-full text-base text-indigo-50 font-medium text-center leading-6 bg-gray-500 hover:bg-gray-400 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 rounded-md shadow-sm">
                Import as CSV
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewTenants;
