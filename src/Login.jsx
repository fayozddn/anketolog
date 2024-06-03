import React from "react";
import { Card, Input, Typography } from "@material-tailwind/react";

const Login = () => {
  return (
    <div className="w-full h-[600px] flex justify-center items-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign in
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
              
          <Typography color="gray" className="mt-4 text-center font-normal">
            Create an account{" "}
            <a href="/auth/register" className="font-medium text-gray-900 pl-5">
              Sign Up
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Login;
