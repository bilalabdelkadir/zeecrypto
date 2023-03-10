import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [Nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!Nav);
  };

  const navClass = `md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-200 z-10`;

  return (
    <div className="rounded-div flex items-center justify-between h-20 font-bold">
      <Link to="/">
        <h1 className="text-2xl ">Zee-Crypto</h1>
      </Link>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
      <div className="hidden md:block">
        <Link className="p-4 hover:text-accent" to="/singin">
          Sign In
        </Link>
        <Link
          className="bg-button text-btnText px-5 py-2 rounded-xl hover:rounded-none ease-in-out duration-100 ml-2"
          to="/signout"
        >
          Sign out
        </Link>
      </div>
      <div className="block md:hidden cursor-pointer z-50">
        {!Nav ? (
          <AiOutlineMenu onClick={handleNav} size={30} />
        ) : (
          <AiOutlineClose onClick={handleNav} size={30} />
        )}
      </div>
      {/* mobile nav */}
      <div className={Nav ? navClass : "fixed left-[-100%]"}>
        <ul className="w-full p-4">
          <li className="border-b py-6">
            <Link to="/">Home</Link>
          </li>
          <li className="border-b py-6">
            <Link to="/account">Account</Link>
          </li>
          <li className=" py-6">
            <ThemeToggle />
          </li>
        </ul>
        <div className="flex flex-col p-4 w-full">
          <Link to="/signin">
            <button className="w-full my-2 p-3 bg-primary text-primary border-secondary rounded-2xl shadow-2xl ">
              Sign In
            </button>
          </Link>
          <Link to="/signout">
            <button className="w-full p-3 my-2 bg-button text-btnText">
              Sign Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
