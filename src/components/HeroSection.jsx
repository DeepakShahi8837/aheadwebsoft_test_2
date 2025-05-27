import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";


const HeroSection = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [price, setPrice] = useState("");
  const [listingType, setListingType] = useState("buy");

  const handleSearch = () => {
    onSearch({ query, propertyType, price, listingType });
  };

  return (
    <section className="relative bg-cover h-[80vh] bg-center text-white bg-[url(/real-state-1.png)]">
      <div className="absolute inset-0  bg-opacity-50 z-0" />
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 h-full">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Find Real Estate and Get Your Dream Space
        </h1>
        <p className="text-lg max-w-2xl mb-6">
          We are a real estate agency that will help you find the best residence
          you dream of, let's discuss your dream house.
        </p>

        {/* Buy/Rent Toggle */}
        <div className="flex mb-4 bg-white rounded-full p-1">
          {["buy", "rent"].map((type) => (
            <button
              key={type}
              onClick={() => setListingType(type)}
              className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                listingType === type
                  ? "bg-blue-700 text-white"
                  : "text-gray-700"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex w-full  flex-col md:flex-row items-center gap-3 max-w-4xl bg-white  rounded-lg mx-auto text-gray-700">
          {/* <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="p-3 w-full md:w-auto rounded border border-none"
            
          >
            <option value="" disabled >Property Type</option>
            <option value="Residential">Residential</option>
            <option value="Apartment">Apartment</option>
          </select> */}

          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="p-3 w-full md:w-auto rounded border border-none text-gray-700"
          >
            <option value="" disabled>
              Property Type
            </option>
            <option value="Residential">Residential</option>
            <option value="Apartment">Apartment</option>
          </select>

          <input
            type="text"
            className="flex-1 p-3 rounded border w-full border-none"
            placeholder="Search by location or Property ID..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <input
            type="number"
            placeholder="Max Price (AED)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-3 w-full md:w-auto rounded border border-none"
          />

          <div className="flex items-center gap-2 ">
            <FaLocationCrosshairs className="size-6" />
            <MdOutlineKeyboardVoice className="size-6" />
            <button
              onClick={handleSearch}
              className="bg-blue-700 text-white me-1 px-4 py-3 rounded hover:bg-blue-800"
            >
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection