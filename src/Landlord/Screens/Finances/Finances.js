import React from "react";

function Finances(props) {
  return (
    <div className="mx-auto lg:ml-80">
      <section className="py-8">
        <h1 className="text-center text-xl text-gray-900 py-8 font-semibold ">
          Select a payment method you can use
        </h1>
        <div className="container mx-auto px-4">
          <div className="-m-4 flex flex-wrap">
            <div className="w-full p-4 lg:w-1/3">
              <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div className="mx-auto max-w-md">
                  <div className="divide-y divide-gray-300/50">
                    <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                      <p>
                        Link an existing business phone number to facilitate
                        rent collection
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-center">
                          <svg
                            className="h-6 w-6 flex-none fill-color-producer stroke-color-primary stroke-1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="11" />
                            <path
                              d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                              fill="none"
                            />
                          </svg>
                          <p className="ml-4">M-PESA</p>
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="h-6 w-6 flex-none fill-color-producer stroke-color-primary stroke-1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="11" />
                            <path
                              d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                              fill="none"
                            />
                          </svg>
                          <p className="ml-4">Airtel Money</p>
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="h-6 w-6 flex-none fill-color-producer stroke-color-primary stroke-1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="11" />
                            <path
                              d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                              fill="none"
                            />
                          </svg>
                          <p className="ml-4">T-Cash</p>
                        </li>
                      </ul>
                      <p>
                        You will need to verify your account later on to perform
                        transactions for security reasons
                      </p>
                    </div>
                    <div className="pt-8 text-base font-semibold leading-7 mx-auto">
                      <p>
                        <button className="bg-slate-500 py-2 px-2 rounded-sm text-white hover:text-white">
                          Link your phone number account
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-4 lg:w-1/3">
              <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div className="mx-auto max-w-md">
                  <div className="divide-y divide-gray-300/50">
                    <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                      <p className="pb-6">
                        Link an existing bank account to facilitate rent
                        collection
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-center">
                          <svg
                            className="h-6 w-6 flex-none fill-color-producer stroke-color-primary stroke-1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="11" />
                            <path
                              d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                              fill="none"
                            />
                          </svg>
                          <p className="ml-4">Equity Bank</p>
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="h-6 w-6 flex-none fill-color-producer stroke-color-primary stroke-1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="11" />
                            <path
                              d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                              fill="none"
                            />
                          </svg>
                          <p className="ml-4">KCB Bank</p>
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="h-6 w-6 flex-none fill-color-producer stroke-color-primary stroke-1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="11" />
                            <path
                              d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                              fill="none"
                            />
                          </svg>
                          <p className="ml-4">NCBA Bank</p>
                        </li>
                      </ul>
                      <p>
                        You will need to verify your account later on to perform
                        transactions for security reasons
                      </p>
                    </div>
                    <div className="pt-8 text-base font-semibold leading-7 mx-auto">
                      <p>
                        <button className="bg-slate-500 py-2 px-2 rounded-sm text-white hover:text-white">
                          Link your Bank account
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-4 lg:w-1/3">
              <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div className="mx-auto max-w-md">
                  <div className="divide-y divide-gray-300/50">
                    <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                      <p>
                        Link an existing sacco account to facilitate rent
                        collection
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-center">
                          <svg
                            className="h-6 w-6 flex-none fill-color-producer stroke-color-primary stroke-1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="11" />
                            <path
                              d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                              fill="none"
                            />
                          </svg>
                          <p className="ml-4">Imarisha Sacco </p>
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="h-6 w-6 flex-none fill-color-producer stroke-color-primary stroke-1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="11" />
                            <path
                              d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                              fill="none"
                            />
                          </svg>
                          <p className="ml-4">Heshima Sacco</p>
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="h-6 w-6 flex-none fill-color-producer stroke-color-primary stroke-1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="11" />
                            <path
                              d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                              fill="none"
                            />
                          </svg>
                          <p className="ml-4">Simba Sacco</p>
                        </li>
                      </ul>
                      <p>
                        You will need to verify your account later on to perform
                        transactions for security reasons
                      </p>
                    </div>
                    <div className="pt-4 text-base font-semibold leading-7 mx-auto">
                      <p>
                        <button className="bg-slate-500 py-2 px-2 rounded-sm text-white hover:text-white">
                          Link your Sacco acount
                        </button>
                      </p>
                    </div>
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

export default Finances;
