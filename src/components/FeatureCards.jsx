
import img1 from "/staticImg-1.jpg";
import img2 from "/staticImg-2.jpg";
import img3 from "/staticImg-3.jpg";

const FeatureCards = () => {
  const features = [
    { title: "TruEstimate", description: "Find property worth 💰", image: img1 },
    { title: "Search 2.0", description: "Search by drive time 🚙", image: img2 },
    { title: "Map View", description: "Search by map 🗺️", image: img3 },
  ];

  return (
    <div className="flex justify-between m-5">
      {features.map((feature, index) => (
        <div key={index} className="relative rounded-lg overflow-hidden shadow-lg group">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
