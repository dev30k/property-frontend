import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgColor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function PropertyDetails(props) {
  const [open, setOpen] = React.useState(false);
  const [save, setSave] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let navigate = useNavigate();

  return (
    <div className="mx-auto lg:ml-80">
      <section className="py-8 px-6 bg-white">
        <div className="flex flex-wrap items-center">
          <div className="flex items-center mb-5 lg:mb-0">
            <span className="inline-flex justify-center items-center w-16 h-16 mr-4 bg-color-primary rounded">
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
                  fill="#2C3333"
                ></path>
              </svg>
            </button>
          </div>
          <a
            className="md:w-auto flex items-center py-2 px-4 mr-3 rounded bg-color-primary hover:bg-color-secondary text-white text-sm font-medium"
            href="/properties/id/add"
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
                  fill="white"
                ></path>
              </svg>
            </span>
            <span>Add Tenant</span>
          </a>
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
                    className="m-3 rounded-md bg-color-primary py-2 px-2 text-sm text-white text-center "
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
                            className=" mt-4 m-auto  bg-color-primary rounded-md py-2 px-4 text-white text-center font-sans "
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
                  <button className="m-3 rounded-md bg-color-primary py-2 px-2 text-sm text-white text-center ">
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
                    className="m-1 rounded-md bg-color-primary py-2 px-2 text-sm text-white text-center "
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
        <Tabs>
          <TabList>
            <Tab>Tenants</Tab>
            <Tab>Transactions</Tab>
          </TabList>

          <TabPanel>
            <section className="py-8">
              <div className="container mx-auto px-4">
                <div className="mb-6 overflow-x-auto rounded bg-white p-4 shadow">
                  <table className="w-full table-auto">
                    <thead>
                      <tr className="text-left text-xs text-gray-500">
                        <th className="pl-6 pb-3 font-medium">Tenant ID</th>
                        <th className="pb-3 font-medium">User</th>
                        <th className="pb-3 font-medium">Joined</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium">Purchased</th>
                        <th className="pb-3 font-medium">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50 text-xs">
                        <td className="py-5 px-6 font-medium">#1006</td>
                        <td className="flex px-4 py-3">
                          <img
                            className="mr-4 h-8 w-8 rounded-md object-cover"
                            src="https://images.unsplash.com/photo-1559893088-c0787ebfc084?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                            alt=""
                          />
                          <div>
                            <p className="font-medium">John Smith</p>
                            <p className="text-gray-500">john@shuffle.dev</p>
                          </div>
                        </td>
                        <td className="font-medium">09/04/2021</td>
                        <td>
                          <span className="inline-block rounded-full bg-green-500 py-1 px-2 text-white">
                            Paid
                          </span>
                        </td>
                        <td>
                          <span className="inline-block rounded-full bg-purple-50 py-1 px-2 text-purple-500">
                            Monthly Subscription
                          </span>
                        </td>
                        <td>
                          <a className="mr-2 inline-block" href="#">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.4999 9C16.2789 9 16.0669 9.0878 15.9106 9.24408C15.7544 9.40036 15.6666 9.61232 15.6666 9.83333V14.8333C15.6666 15.0543 15.5788 15.2663 15.4225 15.4226C15.2662 15.5789 15.0542 15.6667 14.8332 15.6667H3.16656C2.94555 15.6667 2.73359 15.5789 2.57731 15.4226C2.42103 15.2663 2.33323 15.0543 2.33323 14.8333V3.16667C2.33323 2.94565 2.42103 2.73369 2.57731 2.57741C2.73359 2.42113 2.94555 2.33333 3.16656 2.33333H8.16657C8.38758 2.33333 8.59954 2.24554 8.75582 2.08926C8.9121 1.93298 8.9999 1.72101 8.9999 1.5C8.9999 1.27899 8.9121 1.06702 8.75582 0.910744C8.59954 0.754464 8.38758 0.666667 8.16657 0.666667H3.16656C2.50352 0.666667 1.86764 0.930059 1.3988 1.3989C0.929957 1.86774 0.666565 2.50363 0.666565 3.16667V14.8333C0.666565 15.4964 0.929957 16.1323 1.3988 16.6011C1.86764 17.0699 2.50352 17.3333 3.16656 17.3333H14.8332C15.4963 17.3333 16.1322 17.0699 16.601 16.6011C17.0698 16.1323 17.3332 15.4964 17.3332 14.8333V9.83333C17.3332 9.61232 17.2454 9.40036 17.0892 9.24408C16.9329 9.0878 16.7209 9 16.4999 9ZM3.9999 9.63333V13.1667C3.9999 13.3877 4.0877 13.5996 4.24398 13.7559C4.40026 13.9122 4.61222 14 4.83323 14H8.36657C8.47624 14.0006 8.58496 13.9796 8.68649 13.9381C8.78802 13.8967 8.88037 13.8356 8.95823 13.7583L14.7249 7.98333L17.0916 5.66667C17.1697 5.5892 17.2317 5.49703 17.274 5.39548C17.3163 5.29393 17.3381 5.18501 17.3381 5.075C17.3381 4.96499 17.3163 4.85607 17.274 4.75452C17.2317 4.65297 17.1697 4.5608 17.0916 4.48333L13.5582 0.908333C13.4808 0.830226 13.3886 0.768231 13.287 0.725924C13.1855 0.683617 13.0766 0.661835 12.9666 0.661835C12.8566 0.661835 12.7476 0.683617 12.6461 0.725924C12.5445 0.768231 12.4524 0.830226 12.3749 0.908333L10.0249 3.26667L4.24156 9.04167C4.16433 9.11953 4.10323 9.21188 4.06176 9.31341C4.02029 9.41494 3.99926 9.52366 3.9999 9.63333ZM12.9666 2.675L15.3249 5.03333L14.1416 6.21667L11.7832 3.85833L12.9666 2.675ZM5.66656 9.975L10.6082 5.03333L12.9666 7.39167L8.0249 12.3333H5.66656V9.975Z"
                                fill="#2C3333"
                              ></path>
                            </svg>
                          </a>
                          <a className="mr-2 inline-block" href="#">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.2667 6.32499L7.69169 9.90832L6.31669 8.53332C6.24198 8.44609 6.15005 8.37524 6.04666 8.32522C5.94328 8.2752 5.83067 8.24709 5.7159 8.24266C5.60114 8.23823 5.48669 8.25756 5.37975 8.29946C5.27282 8.34135 5.17569 8.4049 5.09448 8.48611C5.01327 8.56733 4.94972 8.66445 4.90783 8.77139C4.86593 8.87833 4.84659 8.99277 4.85102 9.10753C4.85546 9.2223 4.88357 9.33491 4.93359 9.4383C4.9836 9.54169 5.05446 9.63362 5.14169 9.70832L7.10002 11.675C7.17789 11.7522 7.27024 11.8133 7.37177 11.8548C7.4733 11.8963 7.58202 11.9173 7.69169 11.9167C7.91031 11.9157 8.11981 11.8289 8.27502 11.675L12.4417 7.50832C12.5198 7.43085 12.5818 7.33869 12.6241 7.23714C12.6664 7.13559 12.6882 7.02667 12.6882 6.91666C12.6882 6.80665 12.6664 6.69773 12.6241 6.59618C12.5818 6.49463 12.5198 6.40246 12.4417 6.32499C12.2856 6.16978 12.0743 6.08266 11.8542 6.08266C11.634 6.08266 11.4228 6.16978 11.2667 6.32499ZM9.00002 0.666656C7.35185 0.666656 5.74068 1.1554 4.37027 2.07108C2.99986 2.98675 1.93176 4.28824 1.30103 5.81096C0.670298 7.33368 0.50527 9.00923 0.826813 10.6257C1.14836 12.2423 1.94203 13.7271 3.10747 14.8925C4.2729 16.058 5.75776 16.8517 7.37427 17.1732C8.99078 17.4947 10.6663 17.3297 12.1891 16.699C13.7118 16.0683 15.0133 15.0002 15.9289 13.6297C16.8446 12.2593 17.3334 10.6482 17.3334 8.99999C17.3334 7.90564 17.1178 6.82201 16.699 5.81096C16.2802 4.79991 15.6664 3.88125 14.8926 3.10743C14.1188 2.33361 13.2001 1.71978 12.1891 1.30099C11.178 0.882205 10.0944 0.666656 9.00002 0.666656ZM9.00002 15.6667C7.68148 15.6667 6.39255 15.2757 5.29622 14.5431C4.19989 13.8106 3.34541 12.7694 2.84083 11.5512C2.33624 10.333 2.20422 8.99259 2.46146 7.69939C2.71869 6.40618 3.35363 5.2183 4.28598 4.28594C5.21833 3.35359 6.40622 2.71866 7.69942 2.46142C8.99263 2.20419 10.3331 2.33621 11.5512 2.84079C12.7694 3.34538 13.8106 4.19986 14.5432 5.29619C15.2757 6.39252 15.6667 7.68145 15.6667 8.99999C15.6667 10.7681 14.9643 12.4638 13.7141 13.714C12.4638 14.9643 10.7681 15.6667 9.00002 15.6667Z"
                                fill="#17BB84"
                              ></path>
                            </svg>
                          </a>
                          <a className="inline-block" href="#">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.33333 15C8.55435 15 8.76631 14.9122 8.92259 14.7559C9.07887 14.5996 9.16667 14.3877 9.16667 14.1667V9.16666C9.16667 8.94564 9.07887 8.73368 8.92259 8.5774C8.76631 8.42112 8.55435 8.33332 8.33333 8.33332C8.11232 8.33332 7.90036 8.42112 7.74408 8.5774C7.5878 8.73368 7.5 8.94564 7.5 9.16666V14.1667C7.5 14.3877 7.5878 14.5996 7.74408 14.7559C7.90036 14.9122 8.11232 15 8.33333 15ZM16.6667 4.99999H13.3333V4.16666C13.3333 3.50362 13.0699 2.86773 12.6011 2.39889C12.1323 1.93005 11.4964 1.66666 10.8333 1.66666H9.16667C8.50363 1.66666 7.86774 1.93005 7.3989 2.39889C6.93006 2.86773 6.66667 3.50362 6.66667 4.16666V4.99999H3.33333C3.11232 4.99999 2.90036 5.08779 2.74408 5.24407C2.5878 5.40035 2.5 5.61231 2.5 5.83332C2.5 6.05434 2.5878 6.2663 2.74408 6.42258C2.90036 6.57886 3.11232 6.66666 3.33333 6.66666H4.16667V15.8333C4.16667 16.4964 4.43006 17.1322 4.8989 17.6011C5.36774 18.0699 6.00363 18.3333 6.66667 18.3333H13.3333C13.9964 18.3333 14.6323 18.0699 15.1011 17.6011C15.5699 17.1322 15.8333 16.4964 15.8333 15.8333V6.66666H16.6667C16.8877 6.66666 17.0996 6.57886 17.2559 6.42258C17.4122 6.2663 17.5 6.05434 17.5 5.83332C17.5 5.61231 17.4122 5.40035 17.2559 5.24407C17.0996 5.08779 16.8877 4.99999 16.6667 4.99999ZM8.33333 4.16666C8.33333 3.94564 8.42113 3.73368 8.57741 3.5774C8.73369 3.42112 8.94565 3.33332 9.16667 3.33332H10.8333C11.0543 3.33332 11.2663 3.42112 11.4226 3.5774C11.5789 3.73368 11.6667 3.94564 11.6667 4.16666V4.99999H8.33333V4.16666ZM14.1667 15.8333C14.1667 16.0543 14.0789 16.2663 13.9226 16.4226C13.7663 16.5789 13.5543 16.6667 13.3333 16.6667H6.66667C6.44565 16.6667 6.23369 16.5789 6.07741 16.4226C5.92113 16.2663 5.83333 16.0543 5.83333 15.8333V6.66666H14.1667V15.8333ZM11.6667 15C11.8877 15 12.0996 14.9122 12.2559 14.7559C12.4122 14.5996 12.5 14.3877 12.5 14.1667V9.16666C12.5 8.94564 12.4122 8.73368 12.2559 8.5774C12.0996 8.42112 11.8877 8.33332 11.6667 8.33332C11.4457 8.33332 11.2337 8.42112 11.0774 8.5774C10.9211 8.73368 10.8333 8.94564 10.8333 9.16666V14.1667C10.8333 14.3877 10.9211 14.5996 11.0774 14.7559C11.2337 14.9122 11.4457 15 11.6667 15Z"
                                fill="#E85444"
                              ></path>
                            </svg>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="-mx-4 flex flex-wrap items-center justify-between">
                  <div className="mb-4 flex w-full items-center px-4 lg:mb-0 lg:w-1/3">
                    <p className="text-xs text-gray-400">Show</p>
                    <div className="mx-3 rounded border bg-white py-2 px-2 text-xs text-gray-500">
                      <select name="" id="">
                        <option value="1">15</option>
                        <option value="1">25</option>
                        <option value="1">50</option>
                        <option value="1">100</option>
                      </select>
                    </div>
                    <p className="text-xs text-gray-400">of 1200</p>
                  </div>
                  <div className="flex w-full items-center justify-center px-4 lg:w-auto">
                    <a
                      className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs text-gray-500 hover:bg-indigo-50"
                      href="#"
                    >
                      <svg
                        width="6"
                        height="8"
                        viewBox="0 0 6 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.53335 3.99999L4.86668 1.66666C5.13335 1.39999 5.13335 0.999992 4.86668 0.733325C4.60002 0.466659 4.20002 0.466659 3.93335 0.733325L1.13335 3.53333C0.866683 3.79999 0.866683 4.19999 1.13335 4.46666L3.93335 7.26666C4.06668 7.39999 4.20002 7.46666 4.40002 7.46666C4.60002 7.46666 4.73335 7.39999 4.86668 7.26666C5.13335 6.99999 5.13335 6.59999 4.86668 6.33333L2.53335 3.99999Z"
                          fill="#A4AFBB"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs text-gray-500 hover:bg-indigo-50"
                      href="#"
                    >
                      1
                    </a>
                    <span className="mr-3 inline-block">
                      <svg
                        className="h-3 w-3 text-gray-200"
                        viewBox="0 0 12 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 0.666687C5.26667 0.666687 4.66667 1.26669 4.66667 2.00002C4.66667 2.73335 5.26667 3.33335 6 3.33335C6.73333 3.33335 7.33333 2.73335 7.33333 2.00002C7.33333 1.26669 6.73333 0.666687 6 0.666687ZM1.33333 0.666687C0.6 0.666687 0 1.26669 0 2.00002C0 2.73335 0.6 3.33335 1.33333 3.33335C2.06667 3.33335 2.66667 2.73335 2.66667 2.00002C2.66667 1.26669 2.06667 0.666687 1.33333 0.666687ZM10.6667 0.666687C9.93333 0.666687 9.33333 1.26669 9.33333 2.00002C9.33333 2.73335 9.93333 3.33335 10.6667 3.33335C11.4 3.33335 12 2.73335 12 2.00002C12 1.26669 11.4 0.666687 10.6667 0.666687Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <a
                      className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded bg-color-primary text-xs text-white"
                      href="#"
                    >
                      12
                    </a>
                    <a
                      className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs text-gray-500 hover:bg-indigo-50"
                      href="#"
                    >
                      13
                    </a>
                    <a
                      className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs text-gray-500 hover:bg-indigo-50"
                      href="#"
                    >
                      14
                    </a>
                    <span className="mr-3 inline-block">
                      <svg
                        className="h-3 w-3 text-gray-200"
                        viewBox="0 0 12 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 0.666687C5.26667 0.666687 4.66667 1.26669 4.66667 2.00002C4.66667 2.73335 5.26667 3.33335 6 3.33335C6.73333 3.33335 7.33333 2.73335 7.33333 2.00002C7.33333 1.26669 6.73333 0.666687 6 0.666687ZM1.33333 0.666687C0.6 0.666687 0 1.26669 0 2.00002C0 2.73335 0.6 3.33335 1.33333 3.33335C2.06667 3.33335 2.66667 2.73335 2.66667 2.00002C2.66667 1.26669 2.06667 0.666687 1.33333 0.666687ZM10.6667 0.666687C9.93333 0.666687 9.33333 1.26669 9.33333 2.00002C9.33333 2.73335 9.93333 3.33335 10.6667 3.33335C11.4 3.33335 12 2.73335 12 2.00002C12 1.26669 11.4 0.666687 10.6667 0.666687Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <a
                      className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs hover:bg-indigo-50"
                      href="#"
                    >
                      62
                    </a>
                    <a
                      className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-white text-xs text-gray-500 hover:bg-indigo-50"
                      href="#"
                    >
                      <svg
                        width="6"
                        height="8"
                        viewBox="0 0 6 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.88663 3.52667L2.05996 0.700006C1.99799 0.637521 1.92425 0.587925 1.84301 0.554079C1.76177 0.520233 1.67464 0.502808 1.58663 0.502808C1.49862 0.502808 1.41148 0.520233 1.33024 0.554079C1.249 0.587925 1.17527 0.637521 1.1133 0.700006C0.989128 0.824915 0.919434 0.993883 0.919434 1.17001C0.919434 1.34613 0.989128 1.5151 1.1133 1.64001L3.4733 4.00001L1.1133 6.36001C0.989128 6.48491 0.919434 6.65388 0.919434 6.83001C0.919434 7.00613 0.989128 7.1751 1.1133 7.30001C1.17559 7.36179 1.24947 7.41068 1.33069 7.44385C1.41192 7.47703 1.49889 7.49385 1.58663 7.49334C1.67437 7.49385 1.76134 7.47703 1.84257 7.44385C1.92379 7.41068 1.99767 7.36179 2.05996 7.30001L4.88663 4.47334C4.94911 4.41136 4.99871 4.33763 5.03256 4.25639C5.0664 4.17515 5.08383 4.08801 5.08383 4.00001C5.08383 3.912 5.0664 3.82486 5.03256 3.74362C4.99871 3.66238 4.94911 3.58865 4.88663 3.52667Z"
                          fill="#A4AFBB"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
          <TabPanel>
            <section className="py-8">
              <div className="container px-4 mx-auto">
                <div className="pt-4 bg-white shadow rounded">
                  <div className="flex px-6 pb-4 border-b">
                    <h3 className="text-xl font-bold">Recent Transactions</h3>
                  </div>
                  <div className="p-4 overflow-x-auto">
                    <table className="table-auto w-full">
                      <thead>
                        <tr className="text-xs text-gray-500 text-left">
                          <th className="pb-3 font-medium">Transaction ID</th>
                          <th className="pb-3 font-medium">Date</th>
                          <th className="pb-3 font-medium">E-mail</th>
                          <th className="pb-3 font-medium">Subscription</th>
                          <th className="pb-3 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-xs bg-gray-50">
                          <td className="py-5 px-6 font-medium">SR2451EW32</td>
                          <td className="font-medium">08.04.2021</td>
                          <td className="font-medium">name@shuffle.dev</td>
                          <td className="font-medium">Monthly</td>
                          <td>
                            <span className="inline-block py-1 px-2 text-white bg-green-500 rounded-full">
                              Completed
                            </span>
                          </td>
                        </tr>
                        <tr className="text-xs">
                          <td className="py-5 px-6 font-medium">SR2451EW32</td>
                          <td className="font-medium">08.04.2021</td>
                          <td className="font-medium">name@shuffle.dev</td>
                          <td className="font-medium">Monthly</td>
                          <td>
                            <span className="inline-block py-1 px-2 text-white bg-red-500 rounded-full">
                              Canceled
                            </span>
                          </td>
                        </tr>
                        <tr className="text-xs bg-gray-50">
                          <td className="py-5 px-6 font-medium">SR2451EW32</td>
                          <td className="font-medium">08.04.2021</td>
                          <td className="font-medium">name@shuffle.dev</td>
                          <td className="font-medium">Lifetime</td>
                          <td>
                            <span className="inline-block py-1 px-2 text-white bg-orange-500 rounded-full">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr className="text-xs">
                          <td className="py-5 px-6 font-medium">SR2451EW32</td>
                          <td className="font-medium">08.04.2021</td>
                          <td className="font-medium">name@shuffle.dev</td>
                          <td className="font-medium">Yearly</td>
                          <td>
                            <span className="inline-block py-1 px-2 text-white bg-green-500 rounded-full">
                              Completed
                            </span>
                          </td>
                        </tr>
                        <tr className="text-xs bg-gray-50">
                          <td className="py-5 px-6 font-medium">SR2451EW32</td>
                          <td className="font-medium">08.04.2021</td>
                          <td className="font-medium">name@shuffle.dev</td>
                          <td className="font-medium">Monthly</td>
                          <td>
                            <span className="inline-block py-1 px-2 text-white bg-green-500 rounded-full">
                              Completed
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="text-center mt-5">
                      <a
                        className="inline-flex items-center text-xs tebg-color-primary hover:text-black font-medium"
                        href="#"
                      >
                        <span className="inline-block mr-2"></span>
                        <span>Load more transactions</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default PropertyDetails;
