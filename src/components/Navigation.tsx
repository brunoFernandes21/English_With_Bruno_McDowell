import { Link } from "react-router-dom";
import Logo from "./Logo";
import { DarkModeToggle } from "./DarkModeToggle";

const Navigation = () => {
  return (
    <header className="bg-white bg-opacity-75 dark:bg-black dark:bg-opacity-75 backdrop-blur-sm sticky top-0 z-50 dark:shadow-gray-700">
      <nav className="max-w-7xl mx-auto md:px-2 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-0 py-4 md:h-20 lg:h-28">
        <Logo />
        <ul className="flex items-center space-x-6">
          <li className="md:text-md lg:text-xl transition ease-in-out duration-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-500 hover:to-yellow-500">
            <Link to="/"> Home</Link>
          </li>
          <li className="md:text-md lg:text-xl transition ease-in-out duration-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-500 hover:to-yellow-500">
            <Link to="/learning"> Learning</Link>
          </li>
          <li className="md:text-md lg:text-xl transition ease-in-out duration-500 hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-500 hover:to-yellow-500">
            <Link to="/users"> Users</Link>
          </li>
        </ul>
        <div>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
