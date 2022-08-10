import React from "react";
import { useNavigate } from "react-router-dom";

function PropertyColumn(props) {
  let navigate = useNavigate();
  return (
    <div
      className="p-4 bg-white rounded-md shadow-lg"
      onClick={() => navigate("/properties/id")}
    >
      <div className="relative h-40 w-full mb-4">
        <img
          className="w-full h-full object-cover rounded"
          src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1984&q=80"
          alt=""
        />
        <span className="absolute top-0 right-0 py-1 px-2 mt-2 mr-2 bg-color-primary rounded text-xs text-white">
          14 Units
        </span>
      </div>
      <div className="flex mb-6 justify-between items-center">
        <div>
          <h3 className="text-sm font-medium">Lifestyle Heights</h3>
          <span className="text-xs text-gray-500">Kiambu road</span>
        </div>
        <button className="ml-auto p-2 bg-color-producer rounded">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99984 9.33335C8.73622 9.33335 9.33317 8.7364 9.33317 8.00002C9.33317 7.26364 8.73622 6.66669 7.99984 6.66669C7.26346 6.66669 6.6665 7.26364 6.6665 8.00002C6.6665 8.7364 7.26346 9.33335 7.99984 9.33335Z"
              fill="#395B64"
            ></path>
            <path
              d="M3.33333 9.33335C4.06971 9.33335 4.66667 8.7364 4.66667 8.00002C4.66667 7.26364 4.06971 6.66669 3.33333 6.66669C2.59695 6.66669 2 7.26364 2 8.00002C2 8.7364 2.59695 9.33335 3.33333 9.33335Z"
              fill="#395B64"
            ></path>
            <path
              d="M12.6668 9.33335C13.4032 9.33335 14.0002 8.7364 14.0002 8.00002C14.0002 7.26364 13.4032 6.66669 12.6668 6.66669C11.9304 6.66669 11.3335 7.26364 11.3335 8.00002C11.3335 8.7364 11.9304 9.33335 12.6668 9.33335Z"
              fill="#395B64"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex mb-2 justify-between items-center">
        <h4 className="text-xs font-medium">Units occupied</h4>
        <span className="inline-block py-1 px-2 rounded-full bg-green-50 text-xs text-green-500">
          8
        </span>
      </div>
      <div className="flex mb-2 justify-between items-center">
        <h4 className="text-xs font-medium">Empty Units</h4>
        <span className="inline-block py-1 px-2 rounded-full bg-red-50 text-xs text-red-500">
          4
        </span>
      </div>
      <div className="flex mb-5 justify-between items-center">
        <h4 className="text-xs font-medium">Under Maintenance</h4>
        <span className="inline-block py-1 px-2 rounded-full bg-color-producer text-xs text-color-primary">
          4
        </span>
      </div>
      <div className="flex items-center justify-between border-t border-gray-50 pt-4">
        <div className="flex">
          <img
            className="w-8 h-8 rounded-full object-cover object-right"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
            alt=""
          />
          <img
            className="w-8 h-8 -ml-2 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
            alt=""
          />
          <img
            className="w-8 h-8 -ml-2 rounded-full object-cover object-top"
            src="https://images.unsplash.com/photo-1528936466093-76ffdfcf7a40?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
            alt=""
          />
          <img
            className="w-8 h-8 -ml-2 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80"
            alt=""
          />
          <div className="flex items-center justify-center w-8 h-8 -ml-2 rounded-full bg-color-producer text-xs text-color-primary">
            +3
          </div>
        </div>
        <button className="py-2 px-3 bg-color-primary hover:bg-color-secondary rounded text-xs text-white transition duration-200">
          See Details
        </button>
      </div>
    </div>
  );
}

export default PropertyColumn;
