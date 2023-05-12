import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-[#F08624] h-16 flex justify-around items-center p-2 fixed top-0 lef-0 w-full">
      <div>
        <Link className="hover:text-red-500" href="/">
          Main Page
        </Link>
      </div>
      <div>
        <Link className="hover:text-red-500" href="/auth/login">
          Login
        </Link>
      </div>
      <div>
        <Link className="hover:text-red-500" href="/auth/register">
          Register
        </Link>
      </div>
      <div>
        <Link className="hover:text-red-500" href="/auth/forget-password">
          Forget Pasword
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
