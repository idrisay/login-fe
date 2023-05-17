"use client";
import { postData } from "@/utils/api";
import { isValidEmail, isValidPassword } from "@/utils/functions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();

    if(username.length < 3){
      toast.error("Username should be more than 3 character.");
    }else if (!isValidEmail(email)) {
      toast.error("Email is not valid.");
    } else if (!isValidPassword(password)) {
      toast.error(
        "Password should contain capital, lower letter, number and special character."
      );
    }else{
      let response = await postData(`${process.env.BACKEN_URL}/auth/register`, {
        email,
        username,
        password,
      });
      if (response.success) {
        toast.success(response.response.message);
        router.push("/")
      }else{
        toast.error(response.response.message)
      }
    }
  };

  return (
    <div className=" main-container bg-neutral-200 dark:bg-neutral-700">
      <ToastContainer />
      <div className=" h-full p-10 mx-auto">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are The Lotus Team
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div>
                        <p className="mb-4">Please login to your account</p>
                        <div className="flex flex-col p-2">
                          <label htmlFor="username">Username</label>
                          <input
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            id="text"
                            required
                            className="my-1 dark:placeholder:text-neutral-400 border-0 bg-transparent rounded outline-none "
                          />
                        </div>
                        <div className="flex flex-col p-2">
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            required
                            className="my-1 dark:placeholder:text-neutral-400 border-0 bg-transparent rounded outline-none "
                          />
                        </div>

                        <div className="flex flex-col p-2">
                          <label htmlFor="password">Password</label>
                          <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            required
                            className="my-1 dark:placeholder:text-neutral-400 border-0 bg-transparent rounded outline-none "
                          />
                        </div>

                        <div className="mb-12 pb-1 pt-1 text-center">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="submit"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            Log in
                          </button>

                          <a href="#!">Forgot password?</a>
                        </div>

                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            onClick={() => router.push("/auth/register")}
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12 ">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
