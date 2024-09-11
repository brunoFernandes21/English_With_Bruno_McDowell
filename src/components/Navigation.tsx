import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <header className="bg-white bg-opacity-75 dark:bg-black dark:bg-opacity-75 backdrop-blur-sm sticky top-0 z-50 dark:shadow-gray-700">
      <nav className="max-w-7xl mx-auto md:px-2 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-0 py-4 md:h-20 lg:h-28">
        <Logo />
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/"> Home</Link>
          </li>
          <li>
            <Link href="/learning"> Learning</Link>
          </li>
          <li>
            <Link href="/users"> Users</Link>
          </li>
        </ul>
        <div>dark</div>
      </nav>
    </header>
  );
};

export default Navigation;
