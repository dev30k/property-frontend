import React from "react";

function Maintenance(props) {
  return (
    <div className="mx-auto lg:ml-80">
      <section className="py-3 pb-9 px-6 bg-white shadow-md">
        <div className="flex flex-wrap items-center">
          <div className="mb-5 lg:mb-0">
            <div className="flex items-center">
              <a className="flex items-center text-sm text-gray-500" href="#">
                <span className="inline-block mr-2">
                  <svg
                    className="h-4 w-4 text-gray-500"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.6666 5.66667L9.66662 1.28333C9.20827 0.873372 8.6149 0.646725 7.99996 0.646725C7.38501 0.646725 6.79164 0.873372 6.33329 1.28333L1.33329 5.66667C1.0686 5.9034 0.857374 6.1938 0.713683 6.51854C0.569993 6.84328 0.497134 7.1949 0.499957 7.55V14.8333C0.499957 15.4964 0.763349 16.1323 1.23219 16.6011C1.70103 17.0699 2.33692 17.3333 2.99996 17.3333H13C13.663 17.3333 14.2989 17.0699 14.7677 16.6011C15.2366 16.1323 15.5 15.4964 15.5 14.8333V7.54167C15.5016 7.18797 15.4282 6.83795 15.2845 6.51474C15.1409 6.19152 14.9303 5.90246 14.6666 5.66667V5.66667ZM9.66662 15.6667H6.33329V11.5C6.33329 11.279 6.42109 11.067 6.57737 10.9107C6.73365 10.7545 6.94561 10.6667 7.16662 10.6667H8.83329C9.0543 10.6667 9.26626 10.7545 9.42255 10.9107C9.57883 11.067 9.66662 11.279 9.66662 11.5V15.6667ZM13.8333 14.8333C13.8333 15.0543 13.7455 15.2663 13.5892 15.4226C13.4329 15.5789 13.221 15.6667 13 15.6667H11.3333V11.5C11.3333 10.837 11.0699 10.2011 10.6011 9.73223C10.1322 9.26339 9.49633 9 8.83329 9H7.16662C6.50358 9 5.8677 9.26339 5.39886 9.73223C4.93002 10.2011 4.66662 10.837 4.66662 11.5V15.6667H2.99996C2.77894 15.6667 2.56698 15.5789 2.4107 15.4226C2.25442 15.2663 2.16662 15.0543 2.16662 14.8333V7.54167C2.16677 7.42335 2.19212 7.30641 2.24097 7.19865C2.28982 7.09089 2.36107 6.99476 2.44996 6.91667L7.44996 2.54167C7.60203 2.40807 7.79753 2.33439 7.99996 2.33439C8.20238 2.33439 8.39788 2.40807 8.54996 2.54167L13.55 6.91667C13.6388 6.99476 13.7101 7.09089 13.7589 7.19865C13.8078 7.30641 13.8331 7.42335 13.8333 7.54167V14.8333Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span>Home</span>
              </a>
              <span className="inline-block mx-4">
                <svg
                  className="h-2 w-2 text-gray-500"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.23242 9.3689C1.06762 9.36887 0.906542 9.31997 0.769534 9.2284C0.632526 9.13683 0.525742 9.0067 0.462684 8.85445C0.399625 8.7022 0.383124 8.53467 0.415263 8.37304C0.447403 8.21141 0.526741 8.06294 0.643249 7.9464L3.58916 5L0.643224 2.05364C0.486959 1.89737 0.399171 1.68543 0.39917 1.46444C0.399169 1.24345 0.486957 1.03151 0.64322 0.875249C0.799483 0.718985 1.01142 0.631196 1.23241 0.631195C1.4534 0.631194 1.66534 0.718982 1.82161 0.875245L5.35676 4.41084C5.43416 4.48819 5.49556 4.58005 5.53745 4.68114C5.57934 4.78224 5.6009 4.8906 5.6009 5.00003C5.6009 5.10946 5.57934 5.21782 5.53745 5.31891C5.49556 5.42001 5.43416 5.51186 5.35676 5.58922L1.82161 9.12478C1.74432 9.20229 1.65249 9.26375 1.55137 9.30564C1.45026 9.34754 1.34186 9.36903 1.23242 9.3689Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <a className="flex items-center text-sm" href="#">
                <span>Maintenance</span>
              </a>
            </div>
          </div>
          <div className="ml-auto justify-end space-x-3 flex flex-row">
            <input
              type="search"
              placeholder="Search Here..."
              className="py-2 px-4 w-1/2 rounded border border-color-main shadow font-thin focus:outline-none
              focus:shadow-lg focus:shadow-slate-200 duration-100 shadow-gray-100"
            />
            <button className="flex items-center py-2 px-3 rounded bg-color-primary hover:bg-color-secondary text-white text-xs font-medium">
              <span>Add New Maintenance Person</span>
            </button>
          </div>
        </div>
      </section>
      <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
        <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0">
          <section className="py-8">
            <div className="container px-4 mx-auto">
              <div className="pt-4 bg-white shadow rounded">
                <div className="px-6 border-b border-blue-50">
                  <div className="flex flex-wrap items-center mb-4">
                    <div>
                      <h3 className="text-xl font-bold">
                        Maintenance Progress Data
                      </h3>
                      <p className="text-sm text-gray-500 font-medium">
                        List of recent tenant complaints
                      </p>
                    </div>
                    <a
                      className="ml-auto flex items-center py-2 px-3 text-xs text-white bg-color-primary hover:bg-color-secondary rounded"
                      href="#"
                    >
                      <span className="mr-1">
                        <svg
                          className="h-3 w-3 text-indigo-300"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 8.33337C12.6 8.33337 12.3333 8.60004 12.3333 9.00004V11.6667C12.3333 12.0667 12.0666 12.3334 11.6666 12.3334H2.33331C1.93331 12.3334 1.66665 12.0667 1.66665 11.6667V9.00004C1.66665 8.60004 1.39998 8.33337 0.99998 8.33337C0.59998 8.33337 0.333313 8.60004 0.333313 9.00004V11.6667C0.333313 12.8 1.19998 13.6667 2.33331 13.6667H11.6666C12.8 13.6667 13.6666 12.8 13.6666 11.6667V9.00004C13.6666 8.60004 13.4 8.33337 13 8.33337ZM4.79998 4.13337L6.33331 2.60004V9.00004C6.33331 9.40004 6.59998 9.66671 6.99998 9.66671C7.39998 9.66671 7.66665 9.40004 7.66665 9.00004V2.60004L9.19998 4.13337C9.46665 4.40004 9.86665 4.40004 10.1333 4.13337C10.4 3.86671 10.4 3.46671 10.1333 3.20004L7.46665 0.533374C7.19998 0.266707 6.79998 0.266707 6.53331 0.533374L3.86665 3.20004C3.59998 3.46671 3.59998 3.86671 3.86665 4.13337C4.13331 4.40004 4.53331 4.40004 4.79998 4.13337Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                      <span>Report</span>
                    </a>
                  </div>
                  <div>
                    <a
                      className="inline-block px-4 pb-2 text-sm font-medium text-color-primary border-b-2 border-color-primary"
                      href="#"
                    >
                      Unassigned tasks
                    </a>
                    <a
                      className="inline-block px-4 pb-2 text-sm font-medium text-gray-300 border-b-2 border-transparent hover:border-gray-300"
                      href="#"
                    >
                      Ongoing tasks
                    </a>
                    <a
                      className="inline-block px-4 pb-2 text-sm font-medium text-gray-300 border-b-2 border-transparent hover:border-gray-300"
                      href="#"
                    >
                      Completed
                    </a>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead className="bg-gray-50">
                      <tr className="text-xs text-gray-500 text-left">
                        <th className="flex items-center pl-6 py-4 font-medium">
                          <span>Information</span>
                        </th>
                        <th className="py-4 font-medium">Maintenance type</th>
                        <th className="py-4 font-medium">Progress</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-blue-50">
                        <td className="flex items-center py-4 px-6 font-medium">
                          <div className="flex px-4 py-3">
                            <img
                              className="w-8 h-8 mr-4 object-cover rounded-md"
                              src="https://images.unsplash.com/photo-1559893088-c0787ebfc084?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                              alt=""
                            />
                            <div>
                              <p className="text-sm font-medium">John Smith</p>
                              <p className="text-xs text-gray-500">
                                Freelancer
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="font-medium">
                          <p className="text-sm">Example of Project</p>
                          <p className="text-xs text-gray-500">
                            New development
                          </p>
                        </td>
                        <td className="pr-6">
                          <p className="mb-1 text-xs text-color-primary font-medium">
                            65%
                          </p>
                          <div className="flex">
                            <div className="relative h-1 w-48 bg-indigo-50 rounded-full">
                              <div className="absolute top-0 left-0 h-full w-2/6 bg-color-primary rounded-full"></div>
                            </div>
                            <a
                              className="ml-auto flex items-center py-2 px-3 text-xs text-white bg-color-primary hover:bg-color-secondary rounded"
                              href="#"
                            >
                              Assign Work
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-50">
                        <td className="flex items-center py-4 px-6 font-medium">
                          <div className="flex px-4 py-3">
                            <img
                              className="w-8 h-8 mr-4 object-cover rounded-md"
                              src="https://images.unsplash.com/photo-1559893088-c0787ebfc084?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                              alt=""
                            />
                            <div>
                              <p className="text-sm font-medium">John Smith</p>
                              <p className="text-xs text-gray-500">
                                Freelancer
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="font-medium">
                          <p className="text-sm">Example of Project</p>
                          <p className="text-xs text-gray-500">
                            New development
                          </p>
                        </td>
                        <td className="pr-6">
                          <p className="mb-1 text-xs text-color-primary font-medium">
                            65%
                          </p>
                          <div className="flex">
                            <div className="relative h-1 w-48 bg-indigo-50 rounded-full">
                              <div className="absolute top-0 left-0 h-full w-2/6 bg-color-primary rounded-full"></div>
                            </div>
                            <a
                              className="ml-auto flex items-center py-2 px-3 text-xs text-white bg-color-primary hover:bg-color-secondary rounded"
                              href="#"
                            >
                              Assign Work
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-50">
                        <td className="flex items-center py-4 px-6 font-medium">
                          <div className="flex px-4 py-3">
                            <img
                              className="w-8 h-8 mr-4 object-cover rounded-md"
                              src="https://images.unsplash.com/photo-1559893088-c0787ebfc084?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                              alt=""
                            />
                            <div>
                              <p className="text-sm font-medium">John Smith</p>
                              <p className="text-xs text-gray-500">
                                Freelancer
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="font-medium">
                          <p className="text-sm">Example of Project</p>
                          <p className="text-xs text-gray-500">
                            New development
                          </p>
                        </td>
                        <td className="pr-6">
                          <p className="mb-1 text-xs text-color-primary font-medium">
                            65%
                          </p>
                          <div className="flex">
                            <div className="relative h-1 w-48 bg-indigo-50 rounded-full">
                              <div className="absolute top-0 left-0 h-full w-2/6 bg-color-primary rounded-full"></div>
                            </div>
                            <a
                              className="ml-auto flex items-center py-2 px-3 text-xs text-white bg-color-primary hover:bg-color-secondary rounded"
                              href="#"
                            >
                              Assign Work
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-blue-50">
                        <td className="flex items-center py-4 px-6 font-medium">
                          <div className="flex px-4 py-3">
                            <img
                              className="w-8 h-8 mr-4 object-cover rounded-md"
                              src="https://images.unsplash.com/photo-1559893088-c0787ebfc084?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                              alt=""
                            />
                            <div>
                              <p className="text-sm font-medium">John Smith</p>
                              <p className="text-xs text-gray-500">
                                Freelancer
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="font-medium">
                          <p className="text-sm">Example of Project</p>
                          <p className="text-xs text-gray-500">
                            New development
                          </p>
                        </td>
                        <td className="pr-6">
                          <p className="mb-1 text-xs text-color-primary font-medium">
                            65%
                          </p>
                          <div className="flex">
                            <div className="relative h-1 w-48 bg-indigo-50 rounded-full">
                              <div className="absolute top-0 left-0 h-full w-2/6 bg-color-primary rounded-full"></div>
                            </div>
                            <a
                              className="ml-auto flex items-center py-2 px-3 text-xs text-white bg-color-primary hover:bg-color-secondary rounded"
                              href="#"
                            >
                              Assign Work
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="py-4 text-center">
                    <a
                      className="inline-flex items-center text-xs text-color-primary hover:text-blue-600 font-medium"
                      href="#"
                    >
                      <span className="mr-1">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.99984 8.66669H1.33317C1.15636 8.66669 0.98679 8.73692 0.861766 8.86195C0.736742 8.98697 0.666504 9.15654 0.666504 9.33335V14.6667C0.666504 14.8435 0.736742 15.0131 0.861766 15.1381C0.98679 15.2631 1.15636 15.3334 1.33317 15.3334H3.99984C4.17665 15.3334 4.34622 15.2631 4.47124 15.1381C4.59627 15.0131 4.6665 14.8435 4.6665 14.6667V9.33335C4.6665 9.15654 4.59627 8.98697 4.47124 8.86195C4.34622 8.73692 4.17665 8.66669 3.99984 8.66669ZM3.33317 14H1.99984V10H3.33317V14ZM14.6665 6.00002H11.9998C11.823 6.00002 11.6535 6.07026 11.5284 6.19528C11.4034 6.32031 11.3332 6.48988 11.3332 6.66669V14.6667C11.3332 14.8435 11.4034 15.0131 11.5284 15.1381C11.6535 15.2631 11.823 15.3334 11.9998 15.3334H14.6665C14.8433 15.3334 15.0129 15.2631 15.1379 15.1381C15.2629 15.0131 15.3332 14.8435 15.3332 14.6667V6.66669C15.3332 6.48988 15.2629 6.32031 15.1379 6.19528C15.0129 6.07026 14.8433 6.00002 14.6665 6.00002ZM13.9998 14H12.6665V7.33335H13.9998V14ZM9.33317 0.666687H6.6665C6.48969 0.666687 6.32012 0.736925 6.1951 0.861949C6.07007 0.986973 5.99984 1.15654 5.99984 1.33335V14.6667C5.99984 14.8435 6.07007 15.0131 6.1951 15.1381C6.32012 15.2631 6.48969 15.3334 6.6665 15.3334H9.33317C9.50998 15.3334 9.67955 15.2631 9.80457 15.1381C9.9296 15.0131 9.99984 14.8435 9.99984 14.6667V1.33335C9.99984 1.15654 9.9296 0.986973 9.80457 0.861949C9.67955 0.736925 9.50998 0.666687 9.33317 0.666687ZM8.6665 14H7.33317V2.00002H8.6665V14Z"
                            fill="#2C3333"
                          ></path>
                        </svg>
                      </span>
                      <span>See more Projects</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="w-full md:w-1/3 px-4  mb-4 md:mb-0">
          <section className="py-8  mt-11 shadow-lg">
            <div className="container px-4 mx-auto">
              <div className="relative px-6 pb-6 py-4 bg-white rounded">
                <div className="mb-6">
                  <h3 className="text-xl font-bold">Workflow Activity</h3>
                  <p className="text-sm text-gray-500">
                    Changes in current tasks
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 h-full ml-1 w-px px-px bg-gray-300"></div>
                  <div className="relative">
                    <div className="flex items-center mb-8">
                      <span className="inline-block w-2 h-2 ml-px mr-4 rounded-full bg-green-500"></span>
                      <div>
                        <a className="mb-1 text-sm font-medium" href="#">
                          Example of task change
                        </a>
                        <div className="flex items-center text-xs text-gray-500">
                          <span className="mr-1">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.99992 0.333328C5.68138 0.333328 4.39245 0.724321 3.29612 1.45686C2.19979 2.18941 1.34531 3.2306 0.840725 4.44877C0.336141 5.66695 0.204118 7.00739 0.461353 8.3006C0.718588 9.5938 1.35353 10.7817 2.28588 11.714C3.21823 12.6464 4.40611 13.2813 5.69932 13.5386C6.99253 13.7958 8.33297 13.6638 9.55114 13.1592C10.7693 12.6546 11.8105 11.8001 12.5431 10.7038C13.2756 9.60747 13.6666 8.31854 13.6666 7C13.6646 5.23249 12.9616 3.53794 11.7118 2.28812C10.462 1.0383 8.76743 0.335294 6.99992 0.333328ZM6.99992 12.3333C5.94509 12.3333 4.91394 12.0205 4.03688 11.4345C3.15982 10.8485 2.47623 10.0155 2.07256 9.04097C1.6689 8.06643 1.56328 6.99408 1.76907 5.95951C1.97485 4.92495 2.48281 3.97464 3.22869 3.22876C3.97457 2.48288 4.92487 1.97493 5.95944 1.76914C6.99401 1.56335 8.06636 1.66897 9.0409 2.07264C10.0154 2.47631 10.8484 3.15989 11.4344 4.03695C12.0205 4.91402 12.3333 5.94516 12.3333 7C12.3316 8.41399 11.7692 9.7696 10.7694 10.7694C9.76953 11.7693 8.41391 12.3317 6.99992 12.3333ZM8.39868 5.42252L7.66659 5.84538V3.66666C7.66659 3.48985 7.59635 3.32028 7.47133 3.19526C7.3463 3.07023 7.17673 2.99999 6.99992 2.99999C6.82311 2.99999 6.65354 3.07023 6.52852 3.19526C6.40349 3.32028 6.33325 3.48985 6.33325 3.66666V7C6.33328 7.11701 6.3641 7.23196 6.42262 7.33329C6.48114 7.43463 6.56529 7.51878 6.66662 7.57729C6.76795 7.63581 6.8829 7.66663 6.99991 7.66666C7.11693 7.66669 7.23189 7.63593 7.33325 7.57747L9.06535 6.57747C9.14123 6.53372 9.20775 6.47545 9.2611 6.40598C9.31446 6.33652 9.3536 6.25722 9.3763 6.17262C9.399 6.08802 9.40481 5.99978 9.3934 5.91294C9.38198 5.82609 9.35357 5.74235 9.30978 5.66649C9.266 5.59063 9.20769 5.52414 9.1382 5.47082C9.0687 5.4175 8.98939 5.3784 8.90478 5.35574C8.82017 5.33309 8.73192 5.32732 8.64509 5.33878C8.55825 5.35024 8.47452 5.37869 8.39868 5.42252Z"
                                fill="#67798E"
                              ></path>
                            </svg>
                          </span>
                          <p>1h ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mb-8">
                      <span className="inline-block w-2 h-2 ml-px mr-4 rounded-full bg-orange-500"></span>
                      <div>
                        <a className="mb-1 text-sm font-medium" href="#">
                          Example of task change
                        </a>
                        <div className="flex items-center text-xs text-gray-500">
                          <span className="mr-1">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.99992 0.333328C5.68138 0.333328 4.39245 0.724321 3.29612 1.45686C2.19979 2.18941 1.34531 3.2306 0.840725 4.44877C0.336141 5.66695 0.204118 7.00739 0.461353 8.3006C0.718588 9.5938 1.35353 10.7817 2.28588 11.714C3.21823 12.6464 4.40611 13.2813 5.69932 13.5386C6.99253 13.7958 8.33297 13.6638 9.55114 13.1592C10.7693 12.6546 11.8105 11.8001 12.5431 10.7038C13.2756 9.60747 13.6666 8.31854 13.6666 7C13.6646 5.23249 12.9616 3.53794 11.7118 2.28812C10.462 1.0383 8.76743 0.335294 6.99992 0.333328ZM6.99992 12.3333C5.94509 12.3333 4.91394 12.0205 4.03688 11.4345C3.15982 10.8485 2.47623 10.0155 2.07256 9.04097C1.6689 8.06643 1.56328 6.99408 1.76907 5.95951C1.97485 4.92495 2.48281 3.97464 3.22869 3.22876C3.97457 2.48288 4.92487 1.97493 5.95944 1.76914C6.99401 1.56335 8.06636 1.66897 9.0409 2.07264C10.0154 2.47631 10.8484 3.15989 11.4344 4.03695C12.0205 4.91402 12.3333 5.94516 12.3333 7C12.3316 8.41399 11.7692 9.7696 10.7694 10.7694C9.76953 11.7693 8.41391 12.3317 6.99992 12.3333ZM8.39868 5.42252L7.66659 5.84538V3.66666C7.66659 3.48985 7.59635 3.32028 7.47133 3.19526C7.3463 3.07023 7.17673 2.99999 6.99992 2.99999C6.82311 2.99999 6.65354 3.07023 6.52852 3.19526C6.40349 3.32028 6.33325 3.48985 6.33325 3.66666V7C6.33328 7.11701 6.3641 7.23196 6.42262 7.33329C6.48114 7.43463 6.56529 7.51878 6.66662 7.57729C6.76795 7.63581 6.8829 7.66663 6.99991 7.66666C7.11693 7.66669 7.23189 7.63593 7.33325 7.57747L9.06535 6.57747C9.14123 6.53372 9.20775 6.47545 9.2611 6.40598C9.31446 6.33652 9.3536 6.25722 9.3763 6.17262C9.399 6.08802 9.40481 5.99978 9.3934 5.91294C9.38198 5.82609 9.35357 5.74235 9.30978 5.66649C9.266 5.59063 9.20769 5.52414 9.1382 5.47082C9.0687 5.4175 8.98939 5.3784 8.90478 5.35574C8.82017 5.33309 8.73192 5.32732 8.64509 5.33878C8.55825 5.35024 8.47452 5.37869 8.39868 5.42252Z"
                                fill="#67798E"
                              ></path>
                            </svg>
                          </span>
                          <p>1h ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mb-8">
                      <span className="inline-block w-2 h-2 ml-px mr-4 rounded-full bg-red-500"></span>
                      <div>
                        <a className="mb-1 text-sm font-medium" href="#">
                          Example of task change
                        </a>
                        <div className="flex items-center text-xs text-gray-500">
                          <span className="mr-1">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.99992 0.333328C5.68138 0.333328 4.39245 0.724321 3.29612 1.45686C2.19979 2.18941 1.34531 3.2306 0.840725 4.44877C0.336141 5.66695 0.204118 7.00739 0.461353 8.3006C0.718588 9.5938 1.35353 10.7817 2.28588 11.714C3.21823 12.6464 4.40611 13.2813 5.69932 13.5386C6.99253 13.7958 8.33297 13.6638 9.55114 13.1592C10.7693 12.6546 11.8105 11.8001 12.5431 10.7038C13.2756 9.60747 13.6666 8.31854 13.6666 7C13.6646 5.23249 12.9616 3.53794 11.7118 2.28812C10.462 1.0383 8.76743 0.335294 6.99992 0.333328ZM6.99992 12.3333C5.94509 12.3333 4.91394 12.0205 4.03688 11.4345C3.15982 10.8485 2.47623 10.0155 2.07256 9.04097C1.6689 8.06643 1.56328 6.99408 1.76907 5.95951C1.97485 4.92495 2.48281 3.97464 3.22869 3.22876C3.97457 2.48288 4.92487 1.97493 5.95944 1.76914C6.99401 1.56335 8.06636 1.66897 9.0409 2.07264C10.0154 2.47631 10.8484 3.15989 11.4344 4.03695C12.0205 4.91402 12.3333 5.94516 12.3333 7C12.3316 8.41399 11.7692 9.7696 10.7694 10.7694C9.76953 11.7693 8.41391 12.3317 6.99992 12.3333ZM8.39868 5.42252L7.66659 5.84538V3.66666C7.66659 3.48985 7.59635 3.32028 7.47133 3.19526C7.3463 3.07023 7.17673 2.99999 6.99992 2.99999C6.82311 2.99999 6.65354 3.07023 6.52852 3.19526C6.40349 3.32028 6.33325 3.48985 6.33325 3.66666V7C6.33328 7.11701 6.3641 7.23196 6.42262 7.33329C6.48114 7.43463 6.56529 7.51878 6.66662 7.57729C6.76795 7.63581 6.8829 7.66663 6.99991 7.66666C7.11693 7.66669 7.23189 7.63593 7.33325 7.57747L9.06535 6.57747C9.14123 6.53372 9.20775 6.47545 9.2611 6.40598C9.31446 6.33652 9.3536 6.25722 9.3763 6.17262C9.399 6.08802 9.40481 5.99978 9.3934 5.91294C9.38198 5.82609 9.35357 5.74235 9.30978 5.66649C9.266 5.59063 9.20769 5.52414 9.1382 5.47082C9.0687 5.4175 8.98939 5.3784 8.90478 5.35574C8.82017 5.33309 8.73192 5.32732 8.64509 5.33878C8.55825 5.35024 8.47452 5.37869 8.39868 5.42252Z"
                                fill="#67798E"
                              ></path>
                            </svg>
                          </span>
                          <p>1h ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mb-8">
                      <span className="inline-block w-2 h-2 ml-px mr-4 rounded-full bg-gray-500"></span>
                      <div>
                        <a className="mb-1 text-sm font-medium" href="#">
                          Example of task change
                        </a>
                        <div className="flex items-center text-xs text-gray-500">
                          <span className="mr-1">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.99992 0.333328C5.68138 0.333328 4.39245 0.724321 3.29612 1.45686C2.19979 2.18941 1.34531 3.2306 0.840725 4.44877C0.336141 5.66695 0.204118 7.00739 0.461353 8.3006C0.718588 9.5938 1.35353 10.7817 2.28588 11.714C3.21823 12.6464 4.40611 13.2813 5.69932 13.5386C6.99253 13.7958 8.33297 13.6638 9.55114 13.1592C10.7693 12.6546 11.8105 11.8001 12.5431 10.7038C13.2756 9.60747 13.6666 8.31854 13.6666 7C13.6646 5.23249 12.9616 3.53794 11.7118 2.28812C10.462 1.0383 8.76743 0.335294 6.99992 0.333328ZM6.99992 12.3333C5.94509 12.3333 4.91394 12.0205 4.03688 11.4345C3.15982 10.8485 2.47623 10.0155 2.07256 9.04097C1.6689 8.06643 1.56328 6.99408 1.76907 5.95951C1.97485 4.92495 2.48281 3.97464 3.22869 3.22876C3.97457 2.48288 4.92487 1.97493 5.95944 1.76914C6.99401 1.56335 8.06636 1.66897 9.0409 2.07264C10.0154 2.47631 10.8484 3.15989 11.4344 4.03695C12.0205 4.91402 12.3333 5.94516 12.3333 7C12.3316 8.41399 11.7692 9.7696 10.7694 10.7694C9.76953 11.7693 8.41391 12.3317 6.99992 12.3333ZM8.39868 5.42252L7.66659 5.84538V3.66666C7.66659 3.48985 7.59635 3.32028 7.47133 3.19526C7.3463 3.07023 7.17673 2.99999 6.99992 2.99999C6.82311 2.99999 6.65354 3.07023 6.52852 3.19526C6.40349 3.32028 6.33325 3.48985 6.33325 3.66666V7C6.33328 7.11701 6.3641 7.23196 6.42262 7.33329C6.48114 7.43463 6.56529 7.51878 6.66662 7.57729C6.76795 7.63581 6.8829 7.66663 6.99991 7.66666C7.11693 7.66669 7.23189 7.63593 7.33325 7.57747L9.06535 6.57747C9.14123 6.53372 9.20775 6.47545 9.2611 6.40598C9.31446 6.33652 9.3536 6.25722 9.3763 6.17262C9.399 6.08802 9.40481 5.99978 9.3934 5.91294C9.38198 5.82609 9.35357 5.74235 9.30978 5.66649C9.266 5.59063 9.20769 5.52414 9.1382 5.47082C9.0687 5.4175 8.98939 5.3784 8.90478 5.35574C8.82017 5.33309 8.73192 5.32732 8.64509 5.33878C8.55825 5.35024 8.47452 5.37869 8.39868 5.42252Z"
                                fill="#67798E"
                              ></path>
                            </svg>
                          </span>
                          <p>1h ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mb-8">
                      <span className="inline-block w-2 h-2 ml-px mr-4 rounded-full bg-red-500"></span>
                      <div>
                        <a className="mb-1 text-sm font-medium" href="#">
                          Example of task change
                        </a>
                        <div className="flex items-center text-xs text-gray-500">
                          <span className="mr-1">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.99992 0.333328C5.68138 0.333328 4.39245 0.724321 3.29612 1.45686C2.19979 2.18941 1.34531 3.2306 0.840725 4.44877C0.336141 5.66695 0.204118 7.00739 0.461353 8.3006C0.718588 9.5938 1.35353 10.7817 2.28588 11.714C3.21823 12.6464 4.40611 13.2813 5.69932 13.5386C6.99253 13.7958 8.33297 13.6638 9.55114 13.1592C10.7693 12.6546 11.8105 11.8001 12.5431 10.7038C13.2756 9.60747 13.6666 8.31854 13.6666 7C13.6646 5.23249 12.9616 3.53794 11.7118 2.28812C10.462 1.0383 8.76743 0.335294 6.99992 0.333328ZM6.99992 12.3333C5.94509 12.3333 4.91394 12.0205 4.03688 11.4345C3.15982 10.8485 2.47623 10.0155 2.07256 9.04097C1.6689 8.06643 1.56328 6.99408 1.76907 5.95951C1.97485 4.92495 2.48281 3.97464 3.22869 3.22876C3.97457 2.48288 4.92487 1.97493 5.95944 1.76914C6.99401 1.56335 8.06636 1.66897 9.0409 2.07264C10.0154 2.47631 10.8484 3.15989 11.4344 4.03695C12.0205 4.91402 12.3333 5.94516 12.3333 7C12.3316 8.41399 11.7692 9.7696 10.7694 10.7694C9.76953 11.7693 8.41391 12.3317 6.99992 12.3333ZM8.39868 5.42252L7.66659 5.84538V3.66666C7.66659 3.48985 7.59635 3.32028 7.47133 3.19526C7.3463 3.07023 7.17673 2.99999 6.99992 2.99999C6.82311 2.99999 6.65354 3.07023 6.52852 3.19526C6.40349 3.32028 6.33325 3.48985 6.33325 3.66666V7C6.33328 7.11701 6.3641 7.23196 6.42262 7.33329C6.48114 7.43463 6.56529 7.51878 6.66662 7.57729C6.76795 7.63581 6.8829 7.66663 6.99991 7.66666C7.11693 7.66669 7.23189 7.63593 7.33325 7.57747L9.06535 6.57747C9.14123 6.53372 9.20775 6.47545 9.2611 6.40598C9.31446 6.33652 9.3536 6.25722 9.3763 6.17262C9.399 6.08802 9.40481 5.99978 9.3934 5.91294C9.38198 5.82609 9.35357 5.74235 9.30978 5.66649C9.266 5.59063 9.20769 5.52414 9.1382 5.47082C9.0687 5.4175 8.98939 5.3784 8.90478 5.35574C8.82017 5.33309 8.73192 5.32732 8.64509 5.33878C8.55825 5.35024 8.47452 5.37869 8.39868 5.42252Z"
                                fill="#67798E"
                              ></path>
                            </svg>
                          </span>
                          <p>1h ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block w-2 h-2 ml-px mr-4 rounded-full bg-green-500"></span>
                      <div>
                        <a className="mb-1 text-sm font-medium" href="#">
                          Example of task change
                        </a>
                        <div className="flex items-center text-xs text-gray-500">
                          <span className="mr-1">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.99992 0.333328C5.68138 0.333328 4.39245 0.724321 3.29612 1.45686C2.19979 2.18941 1.34531 3.2306 0.840725 4.44877C0.336141 5.66695 0.204118 7.00739 0.461353 8.3006C0.718588 9.5938 1.35353 10.7817 2.28588 11.714C3.21823 12.6464 4.40611 13.2813 5.69932 13.5386C6.99253 13.7958 8.33297 13.6638 9.55114 13.1592C10.7693 12.6546 11.8105 11.8001 12.5431 10.7038C13.2756 9.60747 13.6666 8.31854 13.6666 7C13.6646 5.23249 12.9616 3.53794 11.7118 2.28812C10.462 1.0383 8.76743 0.335294 6.99992 0.333328ZM6.99992 12.3333C5.94509 12.3333 4.91394 12.0205 4.03688 11.4345C3.15982 10.8485 2.47623 10.0155 2.07256 9.04097C1.6689 8.06643 1.56328 6.99408 1.76907 5.95951C1.97485 4.92495 2.48281 3.97464 3.22869 3.22876C3.97457 2.48288 4.92487 1.97493 5.95944 1.76914C6.99401 1.56335 8.06636 1.66897 9.0409 2.07264C10.0154 2.47631 10.8484 3.15989 11.4344 4.03695C12.0205 4.91402 12.3333 5.94516 12.3333 7C12.3316 8.41399 11.7692 9.7696 10.7694 10.7694C9.76953 11.7693 8.41391 12.3317 6.99992 12.3333ZM8.39868 5.42252L7.66659 5.84538V3.66666C7.66659 3.48985 7.59635 3.32028 7.47133 3.19526C7.3463 3.07023 7.17673 2.99999 6.99992 2.99999C6.82311 2.99999 6.65354 3.07023 6.52852 3.19526C6.40349 3.32028 6.33325 3.48985 6.33325 3.66666V7C6.33328 7.11701 6.3641 7.23196 6.42262 7.33329C6.48114 7.43463 6.56529 7.51878 6.66662 7.57729C6.76795 7.63581 6.8829 7.66663 6.99991 7.66666C7.11693 7.66669 7.23189 7.63593 7.33325 7.57747L9.06535 6.57747C9.14123 6.53372 9.20775 6.47545 9.2611 6.40598C9.31446 6.33652 9.3536 6.25722 9.3763 6.17262C9.399 6.08802 9.40481 5.99978 9.3934 5.91294C9.38198 5.82609 9.35357 5.74235 9.30978 5.66649C9.266 5.59063 9.20769 5.52414 9.1382 5.47082C9.0687 5.4175 8.98939 5.3784 8.90478 5.35574C8.82017 5.33309 8.73192 5.32732 8.64509 5.33878C8.55825 5.35024 8.47452 5.37869 8.39868 5.42252Z"
                                fill="#67798E"
                              ></path>
                            </svg>
                          </span>
                          <p>1h ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 pt-14 w-full text-center bg-white bg-opacity-50">
                    <a
                      className="inline-flex items-center py-3 px-4 text-sm text-white bg-color-primary hover:bg-color-secondary rounded transition duration-200"
                      href="#"
                    >
                      <span className="mr-2">
                        <svg
                          width="18"
                          height="14"
                          viewBox="0 0 18 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.49984 6.99998H11.4998C11.7209 6.99998 11.9328 6.91218 12.0891 6.7559C12.2454 6.59962 12.3332 6.38766 12.3332 6.16665V1.16665C12.3332 0.945632 12.2454 0.733671 12.0891 0.577391C11.9328 0.421111 11.7209 0.333313 11.4998 0.333313H6.49984C6.27882 0.333313 6.06686 0.421111 5.91058 0.577391C5.7543 0.733671 5.6665 0.945632 5.6665 1.16665V6.16665C5.6665 6.38766 5.7543 6.59962 5.91058 6.7559C6.06686 6.91218 6.27882 6.99998 6.49984 6.99998ZM7.33317 1.99998H10.6665V5.33331H7.33317V1.99998ZM16.4998 5.33331H14.8332C14.6122 5.33331 14.4002 5.42111 14.2439 5.57739C14.0876 5.73367 13.9998 5.94563 13.9998 6.16665C13.9998 6.38766 14.0876 6.59962 14.2439 6.7559C14.4002 6.91218 14.6122 6.99998 14.8332 6.99998H16.4998C16.7209 6.99998 16.9328 6.91218 17.0891 6.7559C17.2454 6.59962 17.3332 6.38766 17.3332 6.16665C17.3332 5.94563 17.2454 5.73367 17.0891 5.57739C16.9328 5.42111 16.7209 5.33331 16.4998 5.33331ZM14.8332 3.66665H16.4998C16.7209 3.66665 16.9328 3.57885 17.0891 3.42257C17.2454 3.26629 17.3332 3.05433 17.3332 2.83331C17.3332 2.6123 17.2454 2.40034 17.0891 2.24406C16.9328 2.08778 16.7209 1.99998 16.4998 1.99998H14.8332C14.6122 1.99998 14.4002 2.08778 14.2439 2.24406C14.0876 2.40034 13.9998 2.6123 13.9998 2.83331C13.9998 3.05433 14.0876 3.26629 14.2439 3.42257C14.4002 3.57885 14.6122 3.66665 14.8332 3.66665ZM1.49984 3.66665H3.1665C3.38752 3.66665 3.59948 3.57885 3.75576 3.42257C3.91204 3.26629 3.99984 3.05433 3.99984 2.83331C3.99984 2.6123 3.91204 2.40034 3.75576 2.24406C3.59948 2.08778 3.38752 1.99998 3.1665 1.99998H1.49984C1.27882 1.99998 1.06686 2.08778 0.910582 2.24406C0.754301 2.40034 0.666504 2.6123 0.666504 2.83331C0.666504 3.05433 0.754301 3.26629 0.910582 3.42257C1.06686 3.57885 1.27882 3.66665 1.49984 3.66665ZM1.49984 6.99998H3.1665C3.38752 6.99998 3.59948 6.91218 3.75576 6.7559C3.91204 6.59962 3.99984 6.38766 3.99984 6.16665C3.99984 5.94563 3.91204 5.73367 3.75576 5.57739C3.59948 5.42111 3.38752 5.33331 3.1665 5.33331H1.49984C1.27882 5.33331 1.06686 5.42111 0.910582 5.57739C0.754301 5.73367 0.666504 5.94563 0.666504 6.16665C0.666504 6.38766 0.754301 6.59962 0.910582 6.7559C1.06686 6.91218 1.27882 6.99998 1.49984 6.99998ZM16.4998 8.66665H1.49984C1.27882 8.66665 1.06686 8.75444 0.910582 8.91072C0.754301 9.067 0.666504 9.27896 0.666504 9.49998C0.666504 9.72099 0.754301 9.93295 0.910582 10.0892C1.06686 10.2455 1.27882 10.3333 1.49984 10.3333H16.4998C16.7209 10.3333 16.9328 10.2455 17.0891 10.0892C17.2454 9.93295 17.3332 9.72099 17.3332 9.49998C17.3332 9.27896 17.2454 9.067 17.0891 8.91072C16.9328 8.75444 16.7209 8.66665 16.4998 8.66665ZM9.83317 12H1.49984C1.27882 12 1.06686 12.0878 0.910582 12.2441C0.754301 12.4003 0.666504 12.6123 0.666504 12.8333C0.666504 13.0543 0.754301 13.2663 0.910582 13.4226C1.06686 13.5788 1.27882 13.6666 1.49984 13.6666H9.83317C10.0542 13.6666 10.2661 13.5788 10.4224 13.4226C10.5787 13.2663 10.6665 13.0543 10.6665 12.8333C10.6665 12.6123 10.5787 12.4003 10.4224 12.2441C10.2661 12.0878 10.0542 12 9.83317 12Z"
                            fill="#2C3333"
                          ></path>
                        </svg>
                      </span>
                      <span>View Previous Activity</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Maintenance;
