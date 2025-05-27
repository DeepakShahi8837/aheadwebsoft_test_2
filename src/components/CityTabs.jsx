

const CityTabs = () => {
  const cities = ["Abhu Dhabi", "Dubai", "Sharjah", "Ajman", "Ras Al Khaima"];
  const selectedCity = "Dubai";

  return (
    <section className="text-center py-10 bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Browse New Projects in the UAE
      </h2>
      <div className="flex justify-center gap-2 flex-wrap">
        {cities.map((city) => (
          <button
            key={city}
            className={`px-5 py-2 rounded-full border text-sm font-medium ${
              city === selectedCity
                ? "bg-blue-800 text-white"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {city}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CityTabs;
