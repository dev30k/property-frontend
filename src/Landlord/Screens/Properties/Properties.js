import React from "react";
import Header from "../../../Components/Header";
import PropertyColumn from "./Components/PropertyColumn";
import { MdAddBox } from "react-icons/md";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddProperty from "./AddProperty";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px dotted white",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function Properties(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="mx-auto lg:ml-80">
      <Header />
      <section className="py-8 px-6 bg-white shadow-md">
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
              <a className="flex items-center text-sm" href="">
                <span>Properties</span>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-auto lg:ml-auto mb-5 lg:mb-0"></div>
          <button
            className="flex items-center py-2 px-4 rounded bg-color-primary hover:bg-color-secondary text-white text-xs font-medium"
            onClick={handleOpen}
          >
            <span className="inline-block mr-2">
              <MdAddBox size={24} />
            </span>
            <span>Add Property</span>
          </button>
        </div>
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
          <div className="w-auto px-2 ml-2 rounded-md " onClick={handleClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.94004 8L13.14 3.80667C13.2656 3.68113 13.3361 3.51087 13.3361 3.33333C13.3361 3.1558 13.2656 2.98554 13.14 2.86C13.0145 2.73447 12.8442 2.66394 12.6667 2.66394C12.4892 2.66394 12.3189 2.73447 12.1934 2.86L8.00004 7.06L3.80671 2.86C3.68117 2.73447 3.51091 2.66394 3.33337 2.66394C3.15584 2.66394 2.98558 2.73447 2.86004 2.86C2.7345 2.98554 2.66398 3.1558 2.66398 3.33333C2.66398 3.51087 2.7345 3.68113 2.86004 3.80667L7.06004 8L2.86004 12.1933C2.79756 12.2553 2.74796 12.329 2.71411 12.4103C2.68027 12.4915 2.66284 12.5787 2.66284 12.6667C2.66284 12.7547 2.68027 12.8418 2.71411 12.9231C2.74796 13.0043 2.79756 13.078 2.86004 13.14C2.92202 13.2025 2.99575 13.2521 3.07699 13.2859C3.15823 13.3198 3.24537 13.3372 3.33337 13.3372C3.42138 13.3372 3.50852 13.3198 3.58976 13.2859C3.671 13.2521 3.74473 13.2025 3.80671 13.14L8.00004 8.94L12.1934 13.14C12.2554 13.2025 12.3291 13.2521 12.4103 13.2859C12.4916 13.3198 12.5787 13.3372 12.6667 13.3372C12.7547 13.3372 12.8419 13.3198 12.9231 13.2859C13.0043 13.2521 13.0781 13.2025 13.14 13.14C13.2025 13.078 13.2521 13.0043 13.286 12.9231C13.3198 12.8418 13.3372 12.7547 13.3372 12.6667C13.3372 12.5787 13.3198 12.4915 13.286 12.4103C13.2521 12.329 13.2025 12.2553 13.14 12.1933L8.94004 8Z"
                fill="#2C3333"
              ></path>
            </svg>
          </div>
          <AddProperty />
        </Box>
      </Modal>

      <section className="py-8">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="w-full lg:w-1/3 p-4">
              <PropertyColumn />
            </div>
            <div className="w-full lg:w-1/3 p-4">
              <PropertyColumn />
            </div>
            <div className="w-full lg:w-1/3 p-4">
              <PropertyColumn />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Properties;
