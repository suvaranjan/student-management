import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-100 bg-opacity-50 backdrop-blur-md fixed w-full top-0 z-50 p-4 shadow-md">
      <div className="flex justify-center space-x-10">
        <Link
          to="/"
          className="text-black hover:underline transition duration-200"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-black hover:underline transition duration-200"
        >
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
