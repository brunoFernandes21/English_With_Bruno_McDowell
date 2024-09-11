import { User, User2, Users } from "lucide-react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <>
      <div className="flex items-center justify-start gap-4">
        {/* <Users className="text-2xl md:text-3xl lg:text-5xl" /> */}
        <Link href="/" className="overflow-hidden">
          <h1 className="text-xl md:text-2xl py-2 lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
            LOGO GOES HERE
          </h1>
        </Link>
      </div>
    </>
  );
};

export default Logo;
