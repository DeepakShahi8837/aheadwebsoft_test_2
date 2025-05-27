
import { IoPerson } from "react-icons/io5";

const Header = () => (
  <header className="absolute top-0 left-0 right-0 z-10 px-6 py-4 bg-transparent">
    <div className="flex items-center justify-between">
      <div className="text-xl font-bold text-white flex items-center gap-2">
        <span role="img" aria-label="logo">🏠</span>
        <span>Realtor X</span>
      </div>
      <nav className="hidden md:flex gap-6 text-sm font-medium text-white">
        <a href="#" className="border-b-2 border-white pb-1">For buyers</a>
        <a href="#">For tenants</a>
        <a href="#">For owners</a>
        <a href="#">For dealers / builders</a>
        <a href="#">Insights</a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="flex gap-2 items-center text-white text-lg">
          <IoPerson /> Log In
        </button>
        <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
          Post a property
        </button>
      </div>
    </div>
    <hr className="h-2 w-[80vw] mx-auto mt-3 text-white" />
  </header>
);

export default Header;
