import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <>
      <div className="flex items-center justify-start gap-4">
        <Link to="/" className="overflow-hidden">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
            Bruno's English
          </h1>
        </Link>
      </div>
    </>
  );
};

export default Logo;
