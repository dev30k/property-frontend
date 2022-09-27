import React, { useRef, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import axios from 'axios';
import AuthContext from "../context/auth-context";

const Signup = () => {
    const [isLoading, setIsLoading] = useState(false);

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const nationalIdRef = useRef();
    const emailRef = useRef();
    const phoneNumberRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const navigate = useNavigate();
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredFirstName = firstNameRef.current.value;
        const enteredLastName = lastNameRef.current.value;
        const enteredEmail = emailRef.current.value;
        const enteredPhoneNumber = phoneNumberRef.current.value;
        const enteredNationalId = nationalIdRef.current.value;
        const enteredPassword = passwordRef.current.value

        setIsLoading(true);
        fetch(
            'http://127.0.0.1:8000/users/api/v1/signup/',
            
            {
                
                method: "POST",
                body: JSON.stringify({
                    first_name: enteredFirstName,
                    last_name: enteredLastName,
                    nat_id: enteredNationalId,
                    email: enteredEmail,
                    phone_number: enteredPhoneNumber,
                    password: enteredPassword
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((res) => {
            console.log("THe response is",res);
            setIsLoading(false);
            if (res.ok) {
                return res.json();
                
            } else {
                return res.json.then((data) => {
                    let errorMessage = 'Authentication failed!';

                    throw new Error(errorMessage);
                })
            }
        }).then(data => {
            navigate('../login', { replace: true });
            console.log(data);
        })
            .catch(err => {
                alert(err.message);
            })
    }

    return (
        <section className="py-8 md:py-8 bg-white">
            <div className="container px-4 mx-auto">
                <div className="max-w-sm mx-auto">
                    <div className="mb-6 text-center">
                        <h3 className="mb-4 text-2xl md:text-3xl font-bold">
                            Create an account
                        </h3>
                        <p className="text-lg text-coolGray-500 font-medium">
                            Start your journey with our product
                        </p>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="mb-6">
                            <label
                                className="block mb-2 text-coolGray-800 font-medium"
                                htmlFor=""
                            >
                                FirstName*
                            </label>
                            <input
                                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:text-color-primary focus:ring-opacity-50"
                                type="name"
                                placeholder="Patryk"
                                ref={firstNameRef}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block mb-2 text-coolGray-800 font-medium"
                                htmlFor=""
                            >
                                LastName*
                            </label>
                            <input
                                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:text-color-primary focus:ring-opacity-50"
                                type="name"
                                placeholder="Lemuria"
                                ref={lastNameRef}
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                className="block mb-2 text-coolGray-800 font-medium"
                                htmlFor=""
                            >
                                Email*
                            </label>
                            <input
                                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:text-color-primary focus:ring-opacity-50"
                                type="name"
                                placeholder="dev@shuffle.dev"
                                ref={emailRef}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block mb-2 text-coolGray-800 font-medium"
                                htmlFor=""
                            >
                                Phone Number
                            </label>
                            <input
                                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-color-primary focus:ring-opacity-50"
                                type="tel"
                                placeholder="0791919191"
                                required
                                ref={phoneNumberRef}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-coolGray-800 font-medium"
                                htmlFor=""
                            >
                                National Id
                            </label>
                            <input
                                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:text-color-primary focus:ring-opacity-50"
                                type="text"
                                placeholder="OP058934"
                                ref={nationalIdRef}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block mb-2 text-coolGray-800 font-medium"
                                htmlFor=""
                            >
                                Password
                            </label>
                            <input
                                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:text-color-primary focus:ring-opacity-50"
                                type="password"
                                placeholder="************"
                                ref={passwordRef}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-coolGray-800 font-medium"
                                htmlFor=""
                            >
                                Confirm password
                            </label>
                            <input
                                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:text-color-primary focus:ring-opacity-50"
                                type="password"
                                placeholder="************"
                                ref={passwordConfirmRef}
                            />
                        </div>
                        <div className="flex flex-wrap items-center justify-between mb-6">
                            <div className="w-full md:w-auto mt-1">
                                <a
                                    className="inline-block text-xs font-medium text-black"
                                    href="#"
                                >
                                    By signing up you are agreeing to the{" "}
                                    <span className="text-color-primary">Terms & Conditions</span>{" "}
                                    and <span className="text-color-primary">Privacy policy</span>{" "}
                                    of RentPro
                                </a>
                            </div>
                        </div>
                        <button
                            className="inline-block py-3 px-7 mb-4 w-full text-base text-green-50 font-medium text-center leading-6 bg-color-primary hover:bg-color-secondary focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                        >
                            Sign Up
                        </button>

                        <p className="text-center">
                            <span className="text-xs font-medium">
                                Already have an account?{" "}
                            </span>
                            <Link
                                className="inline-block text-xs font-medium text-green-500 hover:text-green-600 hover:underline"
                                to="/login"
                            >
                                {" "}
                                Sign In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );


}

export default Signup;
