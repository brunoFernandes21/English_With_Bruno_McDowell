import { FaTiktok, FaYoutube } from "react-icons/fa";
import { DarkModeToggle } from "./DarkModeToggle";
import { Link } from "react-router-dom";
const Navigation = () => {
  // const [showNav, setShowNav] = useState(false);
  return (
    <header className="bg-white bg-opacity-75 dark:bg-black dark:bg-opacity-75 backdrop-blur-sm sticky top-0 z-50">
      <nav
        className={`shadow-md md:shadow-none relative max-w-7xl mx-auto px-4 h-16 lg:h-20 flex justify-center items-center`}
      >
        <ul className="flex items-center justify-center space-x-6">
          <Link
            to="https://www.youtube.com/@BrunoMCDowell"
            target="_blank"
            className="text-xl hover:text-slate-500 transition-all ease-in-out duration-500"
          >
            <FaYoutube />
          </Link>
          <Link
            to="https://www.tiktok.com/@englishwithbrunomcdowell"
            target="_blank"
            className="text-xl hover:text-slate-500 transition-all ease-in-out duration-500"
          >
            <FaTiktok />
          </Link>
          <DarkModeToggle />
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
