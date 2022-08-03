import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function PropertyDetails(props) {
  const [open, setOpen] = React.useState(false);
  const [save, setSave] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="mx-auto lg:ml-80">
      <section className="py-8 px-6 bg-white">
        <div className="flex flex-wrap items-center">
          <div className="flex items-center mb-5 lg:mb-0">
            <span className="inline-flex justify-center items-center w-16 h-16 mr-4 bg-indigo-500 rounded">
              <svg
                className="h-7 w-7 text-white"
                viewBox="0 0 28 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.3328 5.66668H19.3328V4.33334C19.3328 3.27248 18.9114 2.25506 18.1612 1.50492C17.4111 0.754771 16.3937 0.333344 15.3328 0.333344H12.6661C11.6053 0.333344 10.5879 0.754771 9.83771 1.50492C9.08757 2.25506 8.66614 3.27248 8.66614 4.33334V5.66668H4.66614C3.60527 5.66668 2.58786 6.0881 1.83771 6.83825C1.08757 7.58839 0.666138 8.60581 0.666138 9.66668V21.6667C0.666138 22.7275 1.08757 23.745 1.83771 24.4951C2.58786 25.2452 3.60527 25.6667 4.66614 25.6667H23.3328C24.3937 25.6667 25.4111 25.2452 26.1612 24.4951C26.9114 23.745 27.3328 22.7275 27.3328 21.6667V9.66668C27.3328 8.60581 26.9114 7.58839 26.1612 6.83825C25.4111 6.0881 24.3937 5.66668 23.3328 5.66668ZM11.3328 4.33334C11.3328 3.97972 11.4733 3.64058 11.7233 3.39053C11.9734 3.14049 12.3125 3.00001 12.6661 3.00001H15.3328C15.6864 3.00001 16.0256 3.14049 16.2756 3.39053C16.5257 3.64058 16.6661 3.97972 16.6661 4.33334V5.66668H11.3328V4.33334ZM24.6661 21.6667C24.6661 22.0203 24.5257 22.3594 24.2756 22.6095C24.0256 22.8595 23.6864 23 23.3328 23H4.66614C4.31252 23 3.97338 22.8595 3.72333 22.6095C3.47328 22.3594 3.3328 22.0203 3.3328 21.6667V14.9333H7.33281V16.3333C7.33281 16.687 7.47328 17.0261 7.72333 17.2761C7.97338 17.5262 8.31252 17.6667 8.66614 17.6667C9.01976 17.6667 9.3589 17.5262 9.60895 17.2761C9.859 17.0261 9.99947 16.687 9.99947 16.3333V14.9333H17.9995V16.3333C17.9995 16.687 18.1399 17.0261 18.39 17.2761C18.64 17.5262 18.9792 17.6667 19.3328 17.6667C19.6864 17.6667 20.0256 17.5262 20.2756 17.2761C20.5257 17.0261 20.6661 16.687 20.6661 16.3333V14.9333H24.6661V21.6667ZM24.6661 12.3333H3.3328V9.66668C3.3328 9.31305 3.47328 8.97392 3.72333 8.72387C3.97338 8.47382 4.31252 8.33334 4.66614 8.33334H23.3328C23.6864 8.33334 24.0256 8.47382 24.2756 8.72387C24.5257 8.97392 24.6661 9.31305 24.6661 9.66668V12.3333Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <div>
              <h2 className="mb-1 text-2xl font-bold">LifeStyle Heights</h2>
              <p className="text-sm text-gray-500 font-medium">
                <span>127 Kiambu Road Nairobi</span>
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-auto flex pr-4 mb-4 md:mb-0 md:mr-4 md:ml-auto border rounded bg-white">
            <input
              className="py-2 pl-4 pr-2 text-sm placeholder-gray-500"
              type="text"
              placeholder="Type to search..."
            />
            <button className="ml-auto">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0921 16.9083L15.0004 13.8417C16.2005 12.3453 16.7817 10.4461 16.6244 8.53441C16.4672 6.62274 15.5835 4.84398 14.155 3.56386C12.7265 2.28375 10.8619 1.59958 8.94451 1.65205C7.02711 1.70452 5.20268 2.48963 3.84636 3.84594C2.49004 5.20226 1.70493 7.02669 1.65247 8.94409C1.6 10.8615 2.28416 12.7261 3.56428 14.1546C4.84439 15.583 6.62316 16.4668 8.53482 16.624C10.4465 16.7812 12.3457 16.2001 13.8421 15L16.9087 18.0667C16.9862 18.1448 17.0784 18.2068 17.1799 18.2491C17.2815 18.2914 17.3904 18.3132 17.5004 18.3132C17.6104 18.3132 17.7193 18.2914 17.8209 18.2491C17.9224 18.2068 18.0146 18.1448 18.0921 18.0667C18.2423 17.9113 18.3262 17.7036 18.3262 17.4875C18.3262 17.2714 18.2423 17.0637 18.0921 16.9083ZM9.16708 15C8.01335 15 6.88554 14.6579 5.92625 14.0169C4.96696 13.3759 4.21929 12.4649 3.77778 11.399C3.33627 10.3331 3.22075 9.16019 3.44583 8.02863C3.67091 6.89708 4.22648 5.85767 5.04229 5.04187C5.85809 4.22606 6.89749 3.67049 8.02905 3.44541C9.1606 3.22033 10.3335 3.33585 11.3994 3.77736C12.4653 4.21887 13.3763 4.96654 14.0173 5.92583C14.6583 6.88512 15.0004 8.01293 15.0004 9.16666C15.0004 10.7138 14.3858 12.1975 13.2919 13.2914C12.1979 14.3854 10.7142 15 9.16708 15Z"
                  fill="#382CDD"
                ></path>
              </svg>
            </button>
          </div>
          <a
            className="md:w-auto flex items-center py-2 px-4 mr-3 rounded bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium"
            href="#"
          >
            <span className="inline-block mr-1">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6667 0.333344H2.33337C1.20004 0.333344 0.333374 1.20001 0.333374 2.33334V11.6667C0.333374 12.8 1.20004 13.6667 2.33337 13.6667H11.6667C12.8 13.6667 13.6667 12.8 13.6667 11.6667V2.33334C13.6667 1.20001 12.8 0.333344 11.6667 0.333344ZM9.66671 7.66668H7.66671V9.66668C7.66671 10.0667 7.40004 10.3333 7.00004 10.3333C6.60004 10.3333 6.33337 10.0667 6.33337 9.66668V7.66668H4.33337C3.93337 7.66668 3.66671 7.40001 3.66671 7.00001C3.66671 6.60001 3.93337 6.33334 4.33337 6.33334H6.33337V4.33334C6.33337 3.93334 6.60004 3.66668 7.00004 3.66668C7.40004 3.66668 7.66671 3.93334 7.66671 4.33334V6.33334H9.66671C10.0667 6.33334 10.3334 6.60001 10.3334 7.00001C10.3334 7.40001 10.0667 7.66668 9.66671 7.66668Z"
                  fill="#8880EB"
                ></path>
              </svg>
            </span>
            <span>Add Tenant</span>
          </a>
          <button className="ml-auto lg:ml-0 p-3 bg-indigo-50 hover:bg-indigo-100 rounded">
            <svg
              className="h-4 w-4 text-indigo-500"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99996 9.33332C8.73634 9.33332 9.33329 8.73637 9.33329 7.99999C9.33329 7.26361 8.73634 6.66666 7.99996 6.66666C7.26358 6.66666 6.66663 7.26361 6.66663 7.99999C6.66663 8.73637 7.26358 9.33332 7.99996 9.33332Z"
                fill="currentColor"
              ></path>
              <path
                d="M3.33333 9.33332C4.06971 9.33332 4.66667 8.73637 4.66667 7.99999C4.66667 7.26361 4.06971 6.66666 3.33333 6.66666C2.59695 6.66666 2 7.26361 2 7.99999C2 8.73637 2.59695 9.33332 3.33333 9.33332Z"
                fill="currentColor"
              ></path>
              <path
                d="M12.6667 9.33332C13.4031 9.33332 14 8.73637 14 7.99999C14 7.26361 13.4031 6.66666 12.6667 6.66666C11.9303 6.66666 11.3334 7.26361 11.3334 7.99999C11.3334 8.73637 11.9303 9.33332 12.6667 9.33332Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </section>
      <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
        <section className="py-6 md:py-3 bg-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/3 px-4">
                <div className=" p-4 mx-2 my-4 text-center hover:bg-white rounded-md shadow-md ">
                  {!save && (
                    <span className="inline-flex bg-gray-500 text-white text-sm text-center rounded-xl px-2 ">
                      No account assigned
                    </span>
                  )}
                  {save && (
                    <span className="inline-flex bg-green-500 text-white text-sm text-center py-1 rounded-xl px-2 ">
                      account assigned
                    </span>
                  )}
                  <h3 className="mb-2 text-md md:text-xl leading-tight font-bold">
                    Collect Rent and Deposits
                  </h3>
                  <p className="text-coolGray-500 font-sans text-xs">
                    Choose a bank account will be used to collect payments.Rent
                    can then be collected automatically and paid to your account
                  </p>
                  <button
                    onClick={handleOpen}
                    className="m-3 rounded-md bg-indigo-500 py-2 px-2 text-sm text-white text-center "
                  >
                    Set up Rent Collection
                  </button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <h1 className="mb-2 text-md md:text-xl text-center font-bold">
                        Collect rent and deposits to a specified account
                      </h1>
                      <div className="m-auto">
                        <div className="w-full p-2">
                          <label className="text-sm text-center py-1 font-semibold text-center text-gray-600">
                            Rent receiving bank account
                          </label>
                          <input
                            className="w-full px-5 mt-3 py-3.5 text-gray-500 placeholder-gray-500 bg-white outline-none  border border-gray-100 "
                            type="text"
                            placeholder="Equity Bank Holdings"
                            name="Bank details"
                          />
                          <button
                            onClick={() => setSave(true)}
                            className=" mt-4 m-auto  bg-indigo-500 rounded-md py-2 px-4 text-white text-center font-sans "
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </Box>
                  </Modal>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4">
                <div className=" p-4 mx-2 my-4 text-center hover:bg-white rounded-md shadow-md ">
                  <span className="inline-flex bg-gray-500 text-white text-sm text-center py-1 rounded-xl px-2 ">
                    No phone number assigned
                  </span>
                  <h3 className="mb-2 text-md md:text-xl leading-tight font-bold">
                    Collect Rent and Deposits
                  </h3>
                  <p className="text-coolGray-500 font-sans text-xs">
                    Choose a phone number that will be used to receive M-PESA
                    payment automatically. This will show up on your reporting
                  </p>
                  <button className="m-3 rounded-md bg-indigo-500 py-2 px-2 text-sm text-white text-center ">
                    Set up Phone Number
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4">
                <div className=" p-4 mx-2 my-4 text-center hover:bg-white rounded-md shadow-md ">
                  <span className="inline-flex bg-gray-500 text-white text-sm text-center py-1 rounded-xl px-2 ">
                    No default manager assigned
                  </span>
                  <h3 className="mb-2 text-md md:text-xl leading-tight font-bold">
                    Manage all units listed on your behalf
                  </h3>
                  <p className="text-coolGray-500 font-sans text-xs">
                    Assign work to someone else who will oversee the duties
                    carried out handle property complaints and all other on your
                    behalf
                  </p>
                  <button
                    disabled={true}
                    className="m-1 rounded-md bg-indigo-500 py-2 px-2 text-sm text-white text-center "
                  >
                    Assign Manager
                  </button>
                  <p className="text-red-700 text-xs text-center text underline-offset-1">
                    This option is under development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container  mx-auto">
        <section className="bg-coolGray-50 py-4">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center justify-between -m-2 mb-4">
              <div className="w-full md:w-1/2 p-2">
                <p className="font-semibold text-xl text-coolGray-800">
                  All Tenants
                </p>
                <p className="font-medium text-sm text-coolGray-500">
                  24 Tenants
                </p>
              </div>
              <div className="w-full md:w-1/2 p-2">
                <div className="relative md:max-w-max md:ml-auto"></div>
              </div>
            </div>
            <div className="mb-6 border border-coolGray-100"></div>
            <div className="overflow-hidden border border-coolGray-100 rounded-md shadow-dashboard">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    <tr className="whitespace-nowrap h-11 bg-coolGray-50 bg-opacity-80 border-b border-coolGray-100">
                      <th className="px-4 font-semibold text-xs text-coolGray-500 uppercase text-center">
                        <div className="flex items-center">
                          <p>Name</p>
                        </div>
                      </th>
                      <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center">
                        Tenant For
                      </th>
                      <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center">
                        Payment Done
                      </th>
                      <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center">
                        Rent Due
                      </th>
                      <th className="whitespace-nowrap px-4 font-semibold text-xs text-coolGray-500 uppercase text-center">
                        Refunds
                      </th>
                      <th className="whitespace-nowrap font-semibold text-xs text-coolGray-500 uppercase text-center">
                        Actions
                      </th>
                    </tr>
                    <tr className="h-22  border-b border-coolGray-100">
                      <th className="whitespace-nowrap px-4 py-4 bg-white text-center">
                        <div className="flex items-center -m-2">
                          <div className="w-auto p-2">
                            <div className="flex items-center justify-center w-10 h-10 text-base font-medium text-yellow-600 bg-yellow-200 rounded-md">
                              PS
                            </div>
                          </div>
                          <div className="w-auto p-2">
                            <p className="text-xs font-semibold text-coolGray-800">
                              Patricia Semklo
                            </p>
                            <p className="text-xs font-medium text-coolGray-500">
                              patricia.semklo@app.com
                            </p>
                          </div>
                        </div>
                      </th>
                      <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-coolGray-800 text-center">
                        3 mnths
                      </th>
                      <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-center">
                        24,000
                      </th>
                      <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-center">
                        432512
                      </th>
                      <th className="whitespace-nowrap px-4 bg-white text-sm font-medium text-green-500 text-center">
                        $2,855.00
                      </th>
                      <th className="whitespace-nowrap pr-4 bg-white text-sm font-medium text-coolGray-800">
                        <svg
                          className="ml-auto"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 6.66669C7.73629 6.66669 7.47851 6.74489 7.25924 6.89139C7.03998 7.0379 6.86908 7.24614 6.76816 7.48978C6.66724 7.73341 6.64084 8.0015 6.69229 8.26014C6.74373 8.51878 6.87072 8.75636 7.05719 8.94283C7.24366 9.1293 7.48124 9.25629 7.73988 9.30773C7.99852 9.35918 8.26661 9.33278 8.51025 9.23186C8.75388 9.13094 8.96212 8.96005 9.10863 8.74078C9.25514 8.52152 9.33333 8.26373 9.33333 8.00002C9.33333 7.6464 9.19286 7.30726 8.94281 7.05721C8.69276 6.80716 8.35362 6.66669 8 6.66669ZM3.33333 6.66669C3.06963 6.66669 2.81184 6.74489 2.59257 6.89139C2.37331 7.0379 2.20241 7.24614 2.10149 7.48978C2.00058 7.73341 1.97417 8.0015 2.02562 8.26014C2.07707 8.51878 2.20405 8.75636 2.39052 8.94283C2.57699 9.1293 2.81457 9.25629 3.07321 9.30773C3.33185 9.35918 3.59994 9.33278 3.84358 9.23186C4.08721 9.13094 4.29545 8.96005 4.44196 8.74078C4.58847 8.52152 4.66667 8.26373 4.66667 8.00002C4.66667 7.6464 4.52619 7.30726 4.27614 7.05721C4.02609 6.80716 3.68696 6.66669 3.33333 6.66669ZM12.6667 6.66669C12.403 6.66669 12.1452 6.74489 11.9259 6.89139C11.7066 7.0379 11.5357 7.24614 11.4348 7.48978C11.3339 7.73341 11.3075 8.0015 11.359 8.26014C11.4104 8.51878 11.5374 8.75636 11.7239 8.94283C11.9103 9.1293 12.1479 9.25629 12.4065 9.30773C12.6652 9.35918 12.9333 9.33278 13.1769 9.23186C13.4205 9.13094 13.6288 8.96005 13.7753 8.74078C13.9218 8.52152 14 8.26373 14 8.00002C14 7.6464 13.8595 7.30726 13.6095 7.05721C13.3594 6.80716 13.0203 6.66669 12.6667 6.66669Z"
                            fill="#D5DAE1"
                          ></path>
                        </svg>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PropertyDetails;
