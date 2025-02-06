import React, { useState, useEffect } from "react";
import { Search, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const dummyCaterers = [
  {
    catererId: 1,
    name: "Tasty Bites Catering",
    bio: "Providing delicious gourmet meals for all occasions.",
    specialties: ["Italian", "BBQ", "Vegan"],
    avgRating: 4.5,
  },
  {
    catererId: 2,
    name: "Gourmet Delights",
    bio: "Expert in fine dining experiences with a variety of cuisines.",
    specialties: ["French", "Seafood", "Desserts"],
    avgRating: 4.8,
  },
  {
    catererId: 3,
    name: "HomeStyle Catering",
    bio: "Bringing you home-cooked flavors with a touch of elegance.",
    specialties: ["Indian", "Mexican", "Vegan"],
    avgRating: 4.2,
  },
];

const CatererCard = ({ caterer }) => {
  const navigate = useNavigate();
  const handleCaterer = () => {
    navigate(`/catererprofile/${caterer.catererId}`);
  };

  return (
    <div className="relative group bg-white/5 backdrop-blur-xl rounded-2xl transition-all duration-300 hover:bg-white/10">
      <div className="relative p-6 rounded-2xl overflow-hidden flex flex-col">
        <h3 className="text-2xl font-semibold text-white mb-2">{caterer.name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{caterer.bio}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {caterer.specialties.map((dish, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-green-500/10 text-purple-300 text-sm"
            >
              {dish}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${
                  index < Math.round(caterer.avgRating)
                    ? "text-yellow-400"
                    : "text-gray-600"
                }`}
                fill={
                  index < Math.round(caterer.avgRating) ? "currentColor" : "none"
                }
              />
            ))}
          </div>
          <span className="text-gray-400 text-sm">
            {caterer.avgRating.toFixed(1)} / 5
          </span>
        </div>

        <button
          className="w-full py-2.5 rounded-xl bg-purple-500/20 text-white font-medium transition-all duration-300 hover:bg-green-500/30"
          onClick={handleCaterer}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

const CaterersSearchPage = () => {
  const [caterers, setCaterers] = useState([]);
  const [filteredCaterers, setFilteredCaterers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Set dummy data instead of fetching from API
    setCaterers(dummyCaterers);
    setFilteredCaterers(dummyCaterers);
  }, []);

  useEffect(() => {
    const filtered = caterers.filter(
      (caterer) =>
        caterer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        caterer.specialties.some((dish) =>
          dish.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
    setFilteredCaterers(filtered);
  }, [searchQuery, caterers]);

  return (
    <div className="min-h-screen bg-black pt-10">
      <div className="relative container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Find the Best Caterers Near You
          </h1>
          <p className="text-gray-400">Search for top-rated caterers for your event</p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative flex items-center p-2 rounded-xl bg-white/5 backdrop-blur-xl">
            <Search className="w-5 h-5 text-gray-400 ml-3" />
            <input
              type="text"
              placeholder="Search by name or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none text-white placeholder-gray-400 focus:outline-none focus:ring-0 px-4 py-2"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {filteredCaterers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCaterers.map((caterer) => (
                <CatererCard key={caterer.catererId} caterer={caterer} />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center">No caterers found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaterersSearchPage;
