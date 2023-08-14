"use client";
import Link from "next/link";
import { TiShoppingCart } from "react-icons/ti";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  const myItem = useSelector((state) => state.cart);

  return (
    <nav className="flex items-center justify-between bg-slate-900/80 text-white h-12 px-10 sticky top-0 z-50 shadow-lg">
      <Link
        href="/"
        className="group font-bold text-[20px] text-[gold]  hover:scale-110 ease-in duration-150 hover:text-white max-sm:text-[18px] max-sm:flex gap-2"
      >
        ONE <span className="text-white group-hover:text-[gold]">Store</span>
      </Link>
      <div className="flex items-center justify-center gap-5 ">
        <button onClick={handleMenu}>
          <AiOutlineMenu
            size={25}
            color={menu ? "gold" : "white"}
            className="sm:hidden relative"
          />
        </button>
        {menu && (
          <div
            className={
              menu
                ? "sm:hidden absolute bg-white right-0 top-12 w-[300px] z-50 text-black flex items-center justify-center shadow-2xl"
                : "sm:hidden absolute bg-white -right-[500px] top-12 w-[300px] z-50 text-black flex items-center justify-center"
            }
          >
            <ul className="text-[18px]">
              <li>
                <Link
                  className="w-[300px] py-5 block text-slate-700 hover:bg-[gold] hover:text-white font-semibold ease-in duration-150 text-center"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="w-[300px] py-5 block text-slate-700 hover:bg-[gold] hover:text-white font-semibold ease-in duration-150 text-center"
                  href="/men"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  className="w-[300px] py-5 block text-slate-700 hover:bg-[gold] hover:text-white font-semibold ease-in duration-150 text-center"
                  href="/women"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  className="w-[300px] py-5 block text-slate-700 hover:bg-[gold] hover:text-white font-semibold ease-in duration-150 text-center"
                  href="/jewelery"
                >
                  Jewelery
                </Link>
              </li>
              <li>
                <Link
                  className="w-[300px] py-5 block text-slate-700 hover:bg-[gold] hover:text-white font-semibold ease-in duration-150 text-center"
                  href="/electronics"
                >
                  Electronics
                </Link>
              </li>
            </ul>
          </div>
        )}

        <Link
          className="hover:scale-110 ease-in duration-150 hover:text-[gold] max-sm:hidden"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hover:scale-110 ease-in duration-150 hover:text-[gold] max-sm:hidden"
          href="/men"
        >
          Men
        </Link>
        <Link
          className="hover:scale-110 ease-in duration-150 hover:text-[gold] max-sm:hidden"
          href="/women"
        >
          Women
        </Link>
        <Link
          className="hover:scale-110 ease-in duration-150 hover:text-[gold] max-sm:hidden"
          href="/jewelery"
        >
          Jewelery
        </Link>
        <Link
          className="hover:scale-110 ease-in duration-150 hover:text-[gold] max-sm:hidden"
          href="/electronics"
        >
          Electronics
        </Link>
        <Link
          href="/cart"
          className="flex items-center justify-center relative hover:scale-110 ease-in duration-150 hover:text-[gold] max-sm:hidden"
        >
          <TiShoppingCart size={30} />
          <span className="absolute bg-black top-0 right-0 font-semibold rounded-full h-4 w-4 text-[12px] text-center">
            {myItem.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
