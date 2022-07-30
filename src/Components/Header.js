import React from 'react';

function Header(props) {
    return (
        <section className="pt-5 px-6 bg-white shadow">
            <nav>
                <div className="pb-5 border-b">
                    <div className="relative flex items-center">
                        <div className="flex items-center mr-auto">

                        </div>
                        <div className="flex justify-end lg:hidden">
                            <button className="flex items-center">
                                <svg className="text-indigo-500 bg-indigo-100 block h-8 w-8 p-2 rounded"
                                     viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                    <title>Mobile menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </button>
                        </div>
                        <div
                            className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:w-auto lg:space-x-10">
                            <div className="hidden lg:flex items-center mr-auto pl-4  border rounded-md">
                                <button className="mr-2 text-gray-200 hover:text-gray-300">
                                    <svg width="12" height="21" viewBox="0 0 21 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.7 19.3L17 15.6C20.1 11.7 19.5 6 15.6 2.9C11.7 -0.2 5.99999 0.5 2.89999 4.3C-0.200006 8.2 0.499995 13.9 4.29999 17C7.59999 19.6 12.3 19.6 15.6 17L19.3 20.7C19.7 21.1 20.3 21.1 20.7 20.7C21.1 20.3 21.1 19.7 20.7 19.3ZM9.99999 17C6.09999 17 2.99999 13.9 2.99999 10C2.99999 6.1 6.09999 3 9.99999 3C13.9 3 17 6.1 17 10C17 13.9 13.9 17 9.99999 17Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </button>
                                <input className="p-2 pr-22 py-3 text-sm text-gray-200" type="text"
                                       placeholder="Type to search..."/>
                            </div>
                        </div>
                        <ul className="hidden lg:flex lg:justify-end mr-6">
                            <li className="mr-6">
                                <a className="text-gray-200 hover:text-gray-300" href="#">
                                    <svg className="h-5 w-5" viewBox="0 0 18 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V14C0 14.7956 0.316071 15.5587 0.87868 16.1213C1.44129 16.6839 2.20435 17 3 17H5.59L8.29 19.71C8.38344 19.8027 8.49426 19.876 8.61609 19.9258C8.73793 19.9755 8.86839 20.0008 9 20C9.23834 20 9.46886 19.9149 9.65 19.76L12.87 17H15C15.7956 17 16.5587 16.6839 17.1213 16.1213C17.6839 15.5587 18 14.7956 18 14V3C18 2.20435 17.6839 1.44129 17.1213 0.87868C16.5587 0.316071 15.7956 0 15 0ZM16 14C16 14.2652 15.8946 14.5196 15.7071 14.7071C15.5196 14.8946 15.2652 15 15 15H12.5C12.2617 15 12.0311 15.0851 11.85 15.24L9.05 17.64L6.71 15.29C6.61656 15.1973 6.50574 15.124 6.38391 15.0742C6.26207 15.0245 6.13161 14.9992 6 15H3C2.73478 15 2.48043 14.8946 2.29289 14.7071C2.10536 14.5196 2 14.2652 2 14V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H15C15.2652 2 15.5196 2.10536 15.7071 2.29289C15.8946 2.48043 16 2.73478 16 3V14Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-200 hover:text-gray-300" href="#">
                                    <svg className="h-5 w-5" viewBox="0 0 16 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14 11.18V8C13.9986 6.58312 13.4958 5.21247 12.5806 4.13077C11.6655 3.04908 10.3971 2.32615 9 2.09V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V2.09C5.60294 2.32615 4.33452 3.04908 3.41939 4.13077C2.50425 5.21247 2.00144 6.58312 2 8V11.18C1.41645 11.3863 0.910998 11.7681 0.552938 12.2729C0.194879 12.7778 0.00173951 13.3811 0 14V16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H4.14C4.37028 17.8474 4.873 18.5954 5.5706 19.1287C6.26819 19.6621 7.1219 19.951 8 19.951C8.8781 19.951 9.73181 19.6621 10.4294 19.1287C11.127 18.5954 11.6297 17.8474 11.86 17H15C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V14C15.9983 13.3811 15.8051 12.7778 15.4471 12.2729C15.089 11.7681 14.5835 11.3863 14 11.18ZM4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8V11H4V8ZM8 18C7.65097 17.9979 7.30857 17.9045 7.00683 17.7291C6.70509 17.5536 6.45451 17.3023 6.28 17H9.72C9.54549 17.3023 9.29491 17.5536 8.99317 17.7291C8.69143 17.9045 8.34903 17.9979 8 18ZM14 15H2V14C2 13.7348 2.10536 13.4804 2.29289 13.2929C2.48043 13.1054 2.73478 13 3 13H13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4804 14 13.7348 14 14V15Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <div className="hidden lg:block">
                            <button className="flex items-center">
                                <img className="w-10 h-10 mr-2 rounded-full object-cover object-right"
                                     src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                                     alt=""/>
                                <p className="text-sm mr-3">Thomas Brown</p>
                                <span>
              <svg className="text-gray-500" width="9" height="12" viewBox="0 0 9 12" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.85955 7.52667L4.99955 10.3933L2.13955 7.52667C2.01401 7.40114 1.84375 7.33061 1.66621 7.33061C1.48868 7.33061 1.31842 7.40114 1.19288 7.52667C1.06734 7.65221 0.996819 7.82247 0.996819 8.00001C0.996819 8.17754 1.06734 8.3478 1.19288 8.47334L4.52621 11.8067C4.65112 11.9308 4.82009 12.0005 4.99621 12.0005C5.17234 12.0005 5.34131 11.9308 5.46621 11.8067L8.79955 8.47334C8.86171 8.41118 8.91101 8.33739 8.94465 8.25617C8.97829 8.17496 8.99561 8.08791 8.99561 8.00001C8.99561 7.9121 8.97829 7.82505 8.94465 7.74384C8.91101 7.66262 8.86171 7.58883 8.79955 7.52667C8.73739 7.46451 8.66359 7.41521 8.58238 7.38157C8.50117 7.34793 8.41412 7.33061 8.32621 7.33061C8.23831 7.33061 8.15126 7.34793 8.07005 7.38157C7.98883 7.41521 7.91504 7.46451 7.85288 7.52667H7.85955ZM2.13955 4.47334L4.99955 1.60667L7.85955 4.47334C7.98446 4.59751 8.15342 4.6672 8.32955 4.6672C8.50567 4.6672 8.67464 4.59751 8.79955 4.47334C8.92372 4.34843 8.99341 4.17946 8.99341 4.00334C8.99341 3.82722 8.92372 3.65825 8.79955 3.53334L5.46621 0.200006C5.40424 0.137521 5.3305 0.0879247 5.24926 0.0540789C5.16803 0.0202331 5.08089 0.00280762 4.99288 0.00280762C4.90487 0.00280762 4.81774 0.0202331 4.7365 0.0540789C4.65526 0.0879247 4.58152 0.137521 4.51955 0.200006L1.18621 3.53334C1.06156 3.65976 0.992236 3.83052 0.993486 4.00805C0.994736 4.18559 1.06646 4.35535 1.19288 4.48001C1.3193 4.60466 1.49006 4.67398 1.66759 4.67273C1.84513 4.67148 2.0149 4.59976 2.13955 4.47334Z"
                    fill="currentColor"></path>
              </svg>
            </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between py-4">
                    <a className="flex items-center text-sm hover:text-gray-800" href="#">
        <span className="inline-block mr-2">
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.6667 5.66667L9.66668 1.28333C9.20833 0.87337 8.61496 0.646723 8.00002 0.646723C7.38507 0.646723 6.7917 0.87337 6.33335 1.28333L1.33335 5.66667C1.06866 5.90339 0.857435 6.1938 0.713745 6.51854C0.570054 6.84328 0.497195 7.1949 0.500018 7.55V14.8333C0.500018 15.4964 0.76341 16.1323 1.23225 16.6011C1.70109 17.0699 2.33698 17.3333 3.00002 17.3333H13C13.6631 17.3333 14.2989 17.0699 14.7678 16.6011C15.2366 16.1323 15.5 15.4964 15.5 14.8333V7.54167C15.5017 7.18797 15.4282 6.83795 15.2846 6.51473C15.1409 6.19152 14.9303 5.90246 14.6667 5.66667V5.66667ZM9.66668 15.6667H6.33335V11.5C6.33335 11.279 6.42115 11.067 6.57743 10.9107C6.73371 10.7545 6.94567 10.6667 7.16668 10.6667H8.83335C9.05436 10.6667 9.26633 10.7545 9.42261 10.9107C9.57889 11.067 9.66668 11.279 9.66668 11.5V15.6667ZM13.8334 14.8333C13.8334 15.0543 13.7456 15.2663 13.5893 15.4226C13.433 15.5789 13.221 15.6667 13 15.6667H11.3334V11.5C11.3334 10.837 11.07 10.2011 10.6011 9.73223C10.1323 9.26339 9.49639 9 8.83335 9H7.16668C6.50364 9 5.86776 9.26339 5.39892 9.73223C4.93008 10.2011 4.66668 10.837 4.66668 11.5V15.6667H3.00002C2.779 15.6667 2.56704 15.5789 2.41076 15.4226C2.25448 15.2663 2.16668 15.0543 2.16668 14.8333V7.54167C2.16683 7.42334 2.19218 7.30641 2.24103 7.19865C2.28989 7.09088 2.36113 6.99476 2.45002 6.91667L7.45002 2.54167C7.60209 2.40807 7.79759 2.33439 8.00002 2.33439C8.20244 2.33439 8.39794 2.40807 8.55002 2.54167L13.55 6.91667C13.6389 6.99476 13.7101 7.09088 13.759 7.19865C13.8079 7.30641 13.8332 7.42334 13.8334 7.54167V14.8333Z"
                fill="#382CDD"></path>
          </svg>
        </span>
                        <span>Dashboard</span>
                    </a>

                    <div date-rangepicker className="flex items-center">
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input name="start" type="text"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Select date start"/>
                        </div>
                        <span className="mx-4 text-gray-500">to</span>
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input name="end" type="text"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Select date end"/>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Header;