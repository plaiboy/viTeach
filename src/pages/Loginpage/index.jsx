import React, { useState } from "react";

import { Line, Button, Text } from "components";


const LoginpagePage = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async(e) =>{
    e.preventDefault()
    setError('');

  try {
    const response = await fetch('http://localhost:3000/login', {
      'method': 'POST',
      'headers': {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password}),
      
    });

    if (!response.ok) {
      setError('Login failed. Please check your email or password');
      return;

      const data = await response.json();
      const accessToken = data.accessToken;

      localStorage.setItem('accessToken', accessToken);
      console.log('Login successful');
    }
  } catch (error) {
    setError('Error occured during login .Please try again later');
  }
  }
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-roboto h-[910px] items-center justify-start mx-auto p-[15px] w-full"
        style={{ backgroundImage: "url('images/img_loginpage.png')" }}
      >
        <div className="bg-white-A700 flex flex-col items-center mt[0px] justify-start p-[55px] h-[910px] md:px-5 rounded-[10px] w-[43%] md:w-full">
          <Text
            className="mt-[9px] sm:text-[35px] md:text-[37px] text-[39px] text-blue_gray-900 text-center"
            size="txtRobotoRegular39"
          >
            Welcome to V-Teach Please Login
          </Text>
          <div className="mb-4 mt-10">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
          <div className="flex flex-col items-center justify-start mb-[358px] mt-[40px] w-full">
            <a
              href="javascript:"
              className="mt-2.5 text-gray-700 text-right text-sm"
            >
              <Text size="txtRobotoRegular14Gray700">Forgot password?</Text>
            </a>
            <div className="h-[43px] md:h-[62px] mt-[22px] relative w-[33%]">
              <Button
                className="absolute bottom-[0] right-[20%] text-base text-center text-white-A700 uppercase"
                onClick={handleLogin}
              >
                <Text size="txtRobotoRegular16">Login</Text>
              </Button>
              <a
                href="javascript:"
                className="absolute bg-indigo-A700 h-10 inset-x-[0] justify-center mx-auto pb-0.5 pt-[7px] sm:px-5 px-[31px] rounded-[20px] text-2xl md:text-[22px] text-white-A700 sm:text-xl top-[0] w-max"
              >
                <Text size="txtInterRegular24">Login</Text>
              </a>
            </div>
            <Text
              className="mt-2.5 text-gray-700 text-sm"
              size="txtRobotoRegular14Gray700"
            >
              Or Sign Up{" "}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginpagePage;
