import { FaMapMarkerAlt, FaHeart, FaRegHeart } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

const PropertyList = ({ properties }) => {
  const [likedProperties, setLikedProperties] = useState({});
  const [imageIndices, setImageIndices] = useState({});

  const handleImageChange = (propertyId, direction, totalImages) => {
    setImageIndices((prev) => {
      const currentIndex = prev[propertyId] || 0;
      const newIndex =
        direction === "next"
          ? (currentIndex + 1) % totalImages
          : (currentIndex - 1 + totalImages) % totalImages;

      return { ...prev, [propertyId]: newIndex };
    });
  };

  const toggleLike = (id) => {
    setLikedProperties((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="relative px-6 py-4">
      <div className="overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 scroll-smooth">
        <div className="flex gap-4">
          {properties.map((property) => {
            const images = property.images?.length
              ? property.images
              : ["https://via.placeholder.com/400"];
            const currentImageIndex = imageIndices[property.id] || 0;

            return (
              <div
                key={property.id}
                className="inline-block w-[320px] bg-white rounded-xl shadow-md overflow-hidden border flex-shrink-0"
              >
                <div className="relative">
                  <img
                    src={images[currentImageIndex]}
                    alt="Property"
                    className="w-full h-48 object-cover"
                  />
                  {property.verified && (
                    <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded">
                      Verified
                    </span>
                  )}
                
                
                  <button
                    className={`absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full shadow-lg ${
                      images.length > 1
                        ? "bg-white text-gray-800 cursor-pointer"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                    onClick={() =>
                      images.length > 1 &&
                      handleImageChange(property.id, "prev", images.length)
                    }
                  >
                    <FiChevronLeft size={24} />
                  </button>
                  {/* Right Arrow */}
                  <button
                    className={`absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full shadow-lg ${
                      images.length > 1
                        ? "bg-white text-gray-800 cursor-pointer"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                    onClick={() =>
                      images.length > 1 &&
                      handleImageChange(property.id, "next", images.length)
                    }
                  >
                    <FiChevronRight size={24} />
                  </button>
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="text-base font-semibold truncate">
                    {property.title || "Wineyard Apartment for sale.."}
                  </h3>

                  <div className="flex justify-between text-sm text-gray-700 font-semibold">
                    <span className="text-blue-700">
                      AED {property.price.toLocaleString()}
                    </span>
                    <span>{property.sqft} sq.ft</span>
                  </div>

                  <div className="text-xs text-gray-400 flex justify-between">
                    <span>AED {property.pricePerSqft}/sqft</span>
                    <span>Super Built up Area</span>
                  </div>

                  <div className="flex gap-2 flex-wrap text-xs text-gray-600">
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      {property.status || "Ready to Move"}
                    </span>
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      {property.type || "Residential"}
                    </span>
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      {property.bhk || "3Bhk"}
                    </span>
                  </div>

                  <div className="flex items-center text-xs text-gray-500 mt-2">
                    <img
                      src={
                        property.dealerAvatar ||
                        "https://via.placeholder.com/24"
                      }
                      className="w-5 h-5 rounded-full mr-2"
                      alt="dealer"
                    />
                    <span className="mr-1">
                      Dealer. {property.posted || "2w ago"}
                    </span>{" "}
                    •{" "}
                    <span className="ml-1 font-medium">
                      {property.dealerName || "EMAAR realtors"}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-gray-400" />
                      <span className="truncate">
                        {property.address || "Dhofar, Salalah, Oman"}
                      </span>
                    </div>
                    {/* Like / Unlike button */}
                    {likedProperties[property.id] ? (
                      <FaHeart
                        onClick={() => toggleLike(property.id)}
                        className="text-red-500 cursor-pointer"
                      />
                    ) : (
                      <FaRegHeart
                        onClick={() => toggleLike(property.id)}
                        className="text-gray-500 cursor-pointer"
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PropertyList