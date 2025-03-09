'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";

interface Prop {
  isLogin?: boolean
}

const Form = ({ isLogin }: Prop) => {
  const router = useRouter()

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string>("");

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div
          className="hidden md:block cursor-pointer"
          onClick={() => router.push("/")}
        >
          <img src="/logo/book_logo.png" alt="logo" className="h-[240px]" />
        </div>
        <div className="h-2/3 flex justify-center items-center">
          <div className="flex justify-center items-center h-[560px] w-[400px] rounded-[15px] bg-gradient-to-r from-primary-color to-orange-500">
            <div className="bg-[white] rounded-[15px] w-[360px]">
              {/* <form> */}
              <h2 className="text-center text-2xl font-semibold mt-[42px] mx-0 mb-[26px]">
                {!isLogin ? "Signup" : "Login"}
              </h2>
              <div className="text-center my-0 mx-[12px] relative">
                {!isLogin ? (
                  <div className="flex flex-col justify-between items-center py-1">
                    <label className="text-left w-full">Name</label>
                    <input
                      className="text-left block w-full p-1 border-solid border-[1px] border-[#ced4da] rounded-sm"
                      value={name}
                      // onKeyDown={(e) => handleLoginWithEnter(e)}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      type="text"
                    />
                  </div>
                ) : (
                  ""
                )}
                <div className="flex flex-col justify-between items-center py-1">
                  <label className="w-full text-left">Email</label>
                  <input
                    className="text-left block w-full p-1 border-solid border-[1px] border-[#ced4da] rounded-sm"
                    value={email}
                    // onKeyDown={(e) => handleLoginWithEnter(e)}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="relative flex flex-col justify-between items-center py-1">
                  <label className="w-full text-left">Password</label>
                  <input
                    className="text-left block w-full p-1 border-solid border-[1px] border-[#ced4da] rounded-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    // onKeyDown={(e) => handleLoginWithEnter(e)}
                    placeholder="Enter your password"
                    type={isShowPassword ? "text" : "password"}
                  />
                  <span onClick={() => setIsShowPassword(!isShowPassword)}>
                    <i
                      className={
                        isShowPassword
                          ? "fas fa-eye eye-password"
                          : "far fa-eye-slash eye-password"
                      }
                      style={{
                        position: "absolute",
                        right: "15px",
                        top: "36px",
                      }}
                    ></i>
                  </span>
                </div>
                <div className="col-12 text-[12px] text-primary-color w-full text-left absolute mt-1">
                  {errMessage}
                </div>
                <div>
                  <button
                    className="w-full bg-primary-color text-[white] py-2 mt-6 mb-3 rounded-lg hover:opacity-80"
                    onClick={() => {}}
                  >
                    {!isLogin ? "signup" : "Login"}
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  {isLogin ? (
                    <div className="text-left mb-2 cursor-pointer">
                      <p onClick={() => router.push("/forgot-password")}>
                        Forget your password?
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  <div
                    className="mb-2 text-[#1386ff] font-normal text-[14px] text-right flex-1 cursor-pointer"
                    onClick={() =>
                      router.push(
                        `${
                          !isLogin
                            ? "/login"
                            : "/signup"
                        }`
                      )
                    }
                  >
                    {!isLogin ? "Login" : "Signup"}
                  </div>
                </div>
              </div>
              <div className="block text-center">
                <p>Or login with</p>
                <div className="flex justify-center mb-[40px] mt-2">
                  <div
                    className="cursor-pointer"
                    onClick={() => {}}
                  >
                    <i
                      className="fab fa-google-plus social-google"
                      style={{
                        color: "#e1461f",
                        fontSize: "36px",
                        marginRight: "10px",
                      }}
                    ></i>
                  </div>
                  
                </div>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;