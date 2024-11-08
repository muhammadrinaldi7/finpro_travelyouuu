// src/components/Header.tsx
"use client"
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useNavbarStore } from "@/store/navbarStore"; // Import Zustand store
import Login from "@/app/login/page";

export const Header = () => {
  const { open, toggleOpen, toggleModalLogin } = useNavbarStore(); // Ambil state open dan fungsi toggle dari Zustand

  return (
    <header className="container absolute mx-auto bg-transparent">
      <div className="w-full">
        {/* NavMobile */}
        <div className="fixed top-0 z-30 flex items-center justify-between w-full h-16 px-6 bg-transparent md:hidden">
          <div>
            <a href="#home">
              <h1 className="text-2xl font-bold font-logo text-primary-300 ">TravelYouuu</h1>
            </a>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-500/75"
                onClick={toggleOpen}
              >
                <span className="sr-only">Toggle navigation</span>
                <FontAwesomeIcon
                  className="w-6 h-6 font-bold text-gray-600"
                  icon={faBars}
                />
              </button>
            </div>
            <div
              className={`fixed px-8 py-4 rounded-lg bg-gray-50/70 right-4 top-20 ${
                open ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#home"> Home </Link>
                </li>
                <li>
                  <Link href="#about"> About </Link>
                </li>
                <li>
                  <Link href="#destination"> Destination </Link>
                </li>
                <li>
                  <Link href="#"> Exclusive Tour </Link>
                </li>
                <li>
                  <Link href="#"> Review </Link>
                </li>
                <li>
                  <a onClick={toggleModalLogin} className="text-red-400">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* NavDesktop */}
        <div className="z-30 items-center justify-center hidden w-full px-6 bg-transparent md:fixed top-3 h-14 md:flex md:w-full">
          <div className="flex flex-row items-center justify-between max-w-screen-xl gap-16 p-2 rounded-lg bg-white/65">
            <ul className="flex flex-row justify-center gap-8 font-thin text-black/85 ">
              <li>
                <Link href="#hero" className="p-2 rounded-md hover:text-white hover:bg-primary-100">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="p-2 rounded-md hover:text-white hover:bg-primary-100">
                  About
                </Link>
              </li>
              <li>
                <Link href="#destination" className="p-2 rounded-md hover:text-white hover:bg-primary-100">
                  Destination
                </Link>
              </li>
            </ul>
            <h1 className="text-xl font-bold text-primary-300 drop-shadow-md font-travelyouu ">
              TravelYouuu
            </h1>
            <ul className="flex flex-row justify-center gap-8 font-thin text-black/85 ">
              <li>
                <Link href="#" className="p-2 rounded-md hover:text-white hover:bg-primary-100">
                  Exclusive Tour
                </Link>
              </li>
              <li>
                <Link href="#" className="p-2 rounded-md hover:text-white hover:bg-primary-100">
                  Review
                </Link>
              </li>
              <li>
                <a onClick={toggleModalLogin} className="p-2 text-black border border-white rounded-md cursor-pointer hover:text-black hover:bg-gray-200/75">
                  <FontAwesomeIcon icon={faUser} className="mr-2" /> Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Login/>
    </header>
  );
};
