import React from "react";

function Success({ message }) {
  return (
    <section className="bg-coolGray-50 m-auto lg:ml-80">
      <div className="container px-4 mx-auto">
        <div className="p-6 bg-green-100 border border-green-200 rounded-md">
          <div className="flex flex-wrap justify-between items-center -m-2">
            <div className="flex-1 p-2">
              <div className="flex flex-wrap -m-1">
                <div className="w-auto p-1">
                  <svg
                    className="relative top-0.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.4732 4.80667C12.4112 4.74418 12.3375 4.69458 12.2563 4.66074C12.175 4.62689 12.0879 4.60947 11.9999 4.60947C11.9119 4.60947 11.8247 4.62689 11.7435 4.66074C11.6623 4.69458 11.5885 4.74418 11.5266 4.80667L6.55989 9.78L4.47322 7.68667C4.40887 7.62451 4.33291 7.57563 4.24967 7.54283C4.16644 7.51003 4.07755 7.49394 3.9881 7.49549C3.89865 7.49703 3.81037 7.51619 3.72832 7.55185C3.64627 7.58751 3.57204 7.63898 3.50989 7.70333C3.44773 7.76768 3.39885 7.84364 3.36605 7.92688C3.33324 8.01011 3.31716 8.099 3.31871 8.18845C3.32025 8.2779 3.3394 8.36618 3.37507 8.44823C3.41073 8.53028 3.4622 8.60451 3.52655 8.66667L6.08655 11.2267C6.14853 11.2892 6.22226 11.3387 6.3035 11.3726C6.38474 11.4064 6.47188 11.4239 6.55989 11.4239C6.64789 11.4239 6.73503 11.4064 6.81627 11.3726C6.89751 11.3387 6.97124 11.2892 7.03322 11.2267L12.4732 5.78667C12.5409 5.72424 12.5949 5.64847 12.6318 5.56414C12.6688 5.4798 12.6878 5.38873 12.6878 5.29667C12.6878 5.2046 12.6688 5.11353 12.6318 5.02919C12.5949 4.94486 12.5409 4.86909 12.4732 4.80667Z"
                      fill="#2AD168"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1 p-1">
                  <h3 className="font-medium text-sm text-green-900">
                    {message}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Success;
