import React from "react";
import DatePicker from "react-datepicker";

function Reports(props) {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  return (
    <div className="mx-auto lg:ml-80">
      <h1 className="text-center text-xl text-gray-900 py-8 font-semibold ">
        Generate detailed reports for all your properties
      </h1>
      <div className="flex flex-row">
        <div className="w-full md:w-1/2 px-4 py-10 mb-4 md:mb-0">
          <div className="grid grid-cols-2 mx-6  gap-10 justify-center mx-auto">
            <button className="bg-color-producer hover:bg-gray-500 hover:text-white text-color-main rounded-md py-6 px-4 font-semibold ">
              Income statement
            </button>
            <button className="bg-color-producer hover:bg-gray-500 hover:text-white text-color-main rounded-md py-6 px-4 font-semibold ">
              Income and Expenses
            </button>
            <button className="bg-color-producer hover:bg-gray-500 hover:text-white text-color-main rounded-md py-6 px-4 font-semibold ">
              Tenant rent reconciliation
            </button>
            <button className="bg-color-producer hover:bg-gray-500 hover:text-white text-color-main rounded-md py-6 px-4 font-semibold ">
              Cash flow statements
            </button>
            <button className="bg-color-producer hover:bg-gray-500 hover:text-white text-color-main rounded-md py-6 px-4 font-semibold ">
              Income statements
            </button>
            <button className="bg-color-producer hover:bg-gray-500 hover:text-white text-color-main rounded-md py-6 px-4 font-semibold ">
              Income statements
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
          <h1 className="text-center text-md text-gray-500 py-8 font-semibold ">
            Select your preferred statements and property
          </h1>
          <div className="flex flex-col">
            <select
              id="countries"
              className="mx-auto w-1/2 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-color-main block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a property</option>
              <option value="US">All Properties</option>
              <option value="CA">Property One</option>
              <option value="FR">Property Two</option>
              <option value="DE">Property Three</option>
            </select>
            <div className="flex items-center lg:justify-center py-10">
              <div className="flex flex-wrap -m-3 mx-auto w-1/2">
                <div className=" w-1/2 lg:w-1/2 p-3">
                  <label className="font-sans text-sm text-gray-600 p-4">
                    Start Date
                  </label>
                  <DatePicker
                    placeholder="Start Date"
                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-color-primary border border-coolGray-200 rounded-lg shadow-input"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className="w-1/2 lg:w-1/2 p-3">
                  <label className="font-sans text-sm text-gray-600 p-4">
                    End Date
                  </label>
                  <DatePicker
                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-color-primary border border-coolGray-200 rounded-lg shadow-input"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                  />
                </div>
              </div>
            </div>

            <button className="bg-color-primary w-1/2 mx-auto bg-color-secondary text-white text-color-main rounded-md py-4 px-4 font-semibold ">
              Generate Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
