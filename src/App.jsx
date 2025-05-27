import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeatureCards from "./components/FeatureCards";
import CityTabs from "./components/CityTabs";
import PropertyList from "./components/PropertyList";
import NoResults from "./components/NoResults";
import { fetchProperties } from "./services/propertyService";

const App = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadProperties = async (filters = {}) => {
    setLoading(true);
    try {
      const data = await fetchProperties(filters);
      setProperties(data);
    } catch (error) {
      console.error("Failed to load properties", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadProperties();
  }, []);

  return (
    <div className="font-sans bg-gray-50 relative">
      <Header />
      <HeroSection onSearch={loadProperties} />
      <FeatureCards />
      <CityTabs />
      {loading ? (
        <div className="text-center py-10 text-blue-700 font-medium text-lg">
          Loading properties...
        </div>
      ) : properties.length > 0 ? (
        <PropertyList properties={properties} />
      ) : (
        <NoResults />
      )}
    </div>
  );
};

export default App;
