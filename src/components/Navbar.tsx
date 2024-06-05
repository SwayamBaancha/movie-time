import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";
import { SearchForm } from "./form/SearchForm";

const Header = () => {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3 shadow shadow-white dark:bg-white text-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase "
              href="#pablo"
            >
              <p className="text-xl">MOVIE TIME</p>
            </Link>
          </div>
          <SearchForm />
          <div className="lg:flex flex-grow items-center">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                  href="/"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg  opacity-75"></i>
                  <span className="ml-2 mr-3">Home</span>
                </Link>
              </li>
         <li>
            <SignedOut>
            <div className="text-sm ml-1 mt-1">
                <SignInButton />
                </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
