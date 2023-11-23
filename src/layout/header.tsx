import { Link } from "react-router-dom";
import LinkList from "../components/linkList.tsx";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-teal-200 px-20 py-4 hover:border-teal-300">
      <Link
        to="/"
        className="font-kdam cursor-pointer text-3xl font-extrabold text-orange-500 hover:scale-105 hover:opacity-90"
      >
        Coding <span className="text-lime-500">Duniya</span>
      </Link>

      <section className="flex items-center space-x-10">
        <nav>
          <ul className="flex items-center space-x-4 font-semibold">
            <LinkList to="/" name="Home" />
            <LinkList to="/" name="Featured Posts" />
            <LinkList to="/" name="About Us" />
            <LinkList to="/" name="Contact Us" />
          </ul>
        </nav>
        <section className="flex cursor-pointer items-center space-x-2 rounded-md bg-teal-500 px-4 py-2 font-bold text-white hover:bg-opacity-90">
          <Link to="/login" className="">
            Login
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </section>
      </section>
    </header>
  );
}

export default Header;
