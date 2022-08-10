import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SiAddthis } from "react-icons/si";
import { MdCancel } from "react-icons/md";

function AddTenant(props) {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [formvalues, setFormvalues] = React.useState([
    { description: "", amount: "" },
  ]);
  const [checked, setChecked] = React.useState(false);

  let handleChange = (i, e) => {
    let newFormValues = [...formvalues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormvalues(newFormValues);
  };

  let addFormFields = () => {
    setFormvalues([...formvalues, { description: "", amount: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formvalues];
    newFormValues.splice(i, 1);
    setFormvalues(newFormValues);
  };
  return (
    <div className="mx-auto lg:ml-80 m-auto">
      <section className="bg-coolGray-50 py-4">
        <div className="container px-4 mx-auto">
          <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
            <div className="pb-6 border-b border-coolGray-100">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-full md:w-auto p-2">
                  <h2 className="text-coolGray-900 text-lg font-semibold">
                    Payment Terms
                  </h2>
                  <p className="text-xs text-coolGray-500 font-medium">
                    Set up payment terms and conditions to continue
                  </p>
                </div>
                <div className="w-full md:w-auto p-2">
                  <div className="flex flex-wrap justify-between -m-1.5">
                    <div className="w-full md:w-auto p-1.5">
                      <button className="flex flex-wrap justify-center w-full px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button">
                        <p>Cancel</p>
                      </button>
                    </div>
                    <div className="w-full md:w-auto p-1.5">
                      <a
                        href="/properties/id/add/1"
                        className="flex flex-wrap justify-center w-full px-4 py-2 bg-color-primary hover:bg-color-secondary font-medium text-sm text-white border border-color-primary rounded-md shadow-button"
                      >
                        <p>Proceed</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Start & End Date
                    </p>
                  </div>
                  <div className="w-full md:w-1/3 p-3">
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

                  <div className="w-full md:w-1/3 p-3">
                    <label className="font-sans text-sm text-gray-600 p-4">
                      End Date
                    </label>
                    <DatePicker
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-color-primary border border-coolGray-200 rounded-lg shadow-input"
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                    />
                    <span className="font-sans text-xs text-gray-600 p-4">
                      <input className="-ml-3 mr-1 " type="checkbox" />
                      Monthly with no end
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Rent
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <label
                      htmlFor="countries"
                      className="font-sans text-sm text-gray-600 p-4"
                    >
                      Select payment
                    </label>
                    <select
                      id="countries"
                      className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-color-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-color-primary dark:focus:border-color-primary"
                    >
                      <option selected>Choose a payment option</option>
                      <option value="1">1st day of month</option>
                      <option value="2">2nd day of month</option>
                      <option value="3">3rd day of month</option>
                      <option value="4">4th day of month</option>
                    </select>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <label className="font-sans text-sm text-gray-600 p-4">
                      Amount
                    </label>
                    <input
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-color-primary border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="50000"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Additional Payments
                    </p>
                  </div>
                  <div className="w-full flex flex-col md:flex-1 p-1">
                    {formvalues.map((element, index) => (
                      <>
                        <div className="w-full flex flex-row ">
                          <div className="w-1/2 md:flex-1 p-3">
                            <label className="font-sans text-sm text-gray-600 p-4">
                              Description
                            </label>
                            <input
                              className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-color-primary border border-coolGray-200 rounded-lg shadow-input"
                              type="text"
                              placeholder="Service charge"
                              value={element.description || ""}
                              onChange={(e) => handleChange(index, e)}
                            />
                          </div>
                          <div className="w-1/2 md:flex-1 p-3">
                            <label className="font-sans text-sm text-gray-600 p-4">
                              Amount
                            </label>
                            <input
                              className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-color-primary border border-coolGray-200 rounded-lg shadow-input"
                              type="text"
                              placeholder="5000"
                              value={element.amount || ""}
                              onChange={(e) => handleChange(index, e)}
                            />
                          </div>
                          <div className="w-1/4  p-3">
                            {!index ? (
                              <SiAddthis
                                size={24}
                                color="#2C3333"
                                className="mt-8 "
                                onClick={addFormFields}
                              />
                            ) : null}
                            {index ? (
                              <MdCancel
                                size={24}
                                className="mt-8"
                                color="#2C3333"
                                onClick={removeFormFields}
                              />
                            ) : null}
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Additional optional settings
                    </p>
                  </div>
                  <div className="w-full flex flex-col md:flex-1 p-3">
                    <label className="ml-2">
                      <input
                        type="checkbox"
                        className="accent-color-primary"
                        defaultChecked={checked}
                        onChange={() => setChecked(!checked)}
                      />{" "}
                      Add automatic late fee collection
                    </label>
                    {checked && (
                      <div className="w-full flex flex-row ">
                        <div className="w-1/4 md:flex-1 p-3">
                          <label className="font-sans text-sm text-gray-600 p-4">
                            Amount
                          </label>
                          <input
                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-color-primary border border-coolGray-200 rounded-lg shadow-input"
                            type="text"
                            placeholder="50"
                          />
                        </div>
                        <div className="w-1/2 md:flex-1 p-3">
                          <label className="font-sans text-sm text-gray-600 p-4">
                            Period
                          </label>
                          <select
                            id="countries"
                            className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-color-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-color-primary dark:focus:border-color-primary"
                          >
                            <option selected>Choose default option</option>
                            <option value="1">2st day of month</option>
                            <option value="2">3rd day of month</option>
                            <option value="3">7th day of month</option>
                          </select>
                        </div>
                      </div>
                    )}
                    <label className="ml-2 mt-2">
                      <input type="checkbox" className="accent-color-primary" />{" "}
                      Enable partial payments
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddTenant;
