import React from "react";

function PropertyType({
  values,
  add,
  remove,
  handleChange,
  prevStep,
  nextStep,
  handleSubmit,
}) {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Back = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="m-auto lg:ml-80">
            <section className="py-8 md:py-8 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="mx-auto">
                        <div className="mb-6 text-center">
                            <h3 className="mb-4 text-xl md:text-1xl font-bold">
                                Add Property types you have
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit}>
                            {values.slice(0,5).map((element, index) => (
                            <div className="w-full md:w-9/12 flex mx-auto" key={index}>
                                <div className="mb-6 mr-3">
                                    <label
                                        className="block mb-2 text-coolGray-800"
                                        htmlFor=""
                                    >
                                        Beds
                                    </label>
                                    <select defaultValue={element.beds || ""} name="beds" onChange={e => handleChange(index, e)} className="block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-color-main focus:ring-opacity-50 bg-white" aria-label="Default select example">
                                        <option selected>Select bedrooms</option>
                                        <option value="0">Studio</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                        <option value="4+">More than 4</option>
                                    </select>
                                </div>
                                <div className="mb-2 mr-3">
                                    <label
                                        className="block mb-2 text-coolGray-800 font-medium"
                                        htmlFor=""
                                    >
                                        Number of units
                                    </label>
                                    <input 
                                        name="numUnits"
                                        defaultValue={element.numUnits || ""}
                                        onChange={e => handleChange(index, e)}
                                        className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-color-main focus:ring-opacity-50"
                                        type="number"
                                        placeholder="10"
                                    />
                                </div>
                                <div className="mb-2 mr-3">
                                    <label
                                        className="appearance-none block mb-2 text-coolGray-800 font-medium"
                                        htmlFor=""
                                    >
                                        Squarefeet
                                    </label>
                                    <input
                                        name="square_feet"
                                        defaultValue={element.square_feet || ""}
                                        onChange={e => handleChange(index, e)}
                                        className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-color-main focus:ring-opacity-50"
                                        type="number"
                                        placeholder="2000"
                                    />
                                </div>
                                <div className="mb-2 mr-3">
                                    <label
                                        className="block mb-2 text-coolGray-800 font-medium"
                                        htmlFor=""
                                    >
                                        Rent
                                    </label>
                                    <input
                                        name="rent"
                                        defaultValue={element.rent || ""}
                                        onChange={e => handleChange(index, e)}
                                        className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-color-main focus:ring-opacity-50"
                                        type="number"
                                        placeholder="30,000"
                                    />
                                </div>
                                {
                                    index ?<div className="mb-2 mr-3 mt-8">
                                            <button  className=" inline-block py-3 px-7 mb-4 w-full text-base text-white font-medium text-center leading-6 bg-red-500/50 rounded-md shadow-sm
                                            " onClick={remove}>Remove</button> </div>

                                        : null
                                }

                            </div>
                            ))}
                        </form>
                        <div className="flex flex-wrap justify-between -m-1.5">
                            <div className="w-full md:w-auto flex p-1.5 ">

                                <button
                                    className="mr-4 px-7 mb-4 text-base text-green-50 font-medium text-center leading-6 bg-color-primary hover:bg-color-secondary rounded-md shadow-sm"
                                    onClick={Back}

                                >
                                    Back
                                </button>
                                <button
                                    className=" py-3 px-7 mb-4 text-base text-green-50 font-medium text-center leading-6 bg-color-primary hover:bg-color-secondary rounded-md shadow-sm"
                                    onClick={add}
                                >
                                    Add Fields
                                </button>
                            </div>

                            <div className="w-full md:w-auto p-1.5">
                                <button
                                    className="inline-block py-3 px-7 mb-4 w-full text-base text-green-50 font-medium text-center leading-6 bg-color-primary hover:bg-color-secondary rounded-md shadow-sm"
                                    onClick={Continue}

                                >
                                    Complete & Submit
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


        </div>
    
  );
}

export default PropertyType;
