import React, { useState, useEffect } from "react";
import { Search, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const dummyDecorators = [
  {
    decoratorId: 1,
    name: "Elegant Events Decor",
    bio: "Transforming spaces with creative and elegant decor themes.",
    specialties: ["Weddings", "Corporate Events", "Birthday Parties"],
    avgRating: 4.7,
  },
  {
    decoratorId: 2,
    name: "Dreamy Decorations",
    bio: "Bringing your event vision to life with stunning decor.",
    specialties: ["Floral Arrangements", "Stage Setup", "Themed Decor"],
    avgRating: 4.9,
  },
  {
    decoratorId: 3,
    name: "Glamorous Touch",
    bio: "Adding a touch of glam to every special occasion.",
    specialties: ["Luxury Events", "Baby Showers", "Anniversaries"],
    avgRating: 4.5,
  },
];

const DecoratorCard = ({ decorator }) => {
  const navigate = useNavigate();
  const handleDecoratorClick = () => {
    navigate(`/decoratorprofile/${decorator.decoratorId}`);
  };

  return (
    <div className="relative group bg-white/5 backdrop-blur-xl rounded-2xl transition-all duration-300 hover:bg-white/10">
      <div className="relative p-6 rounded-2xl overflow-hidden flex flex-col">
        <h3 className="text-2xl font-semibold text-white mb-2">{decorator.name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{decorator.bio}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {decorator.specialties.map((specialty, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm"
            >
              {specialty}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${
                  index < Math.round(decorator.avgRating)
                    ? "text-yellow-400"
                    : "text-gray-600"
                }`}
                fill={
                  index < Math.round(decorator.avgRating) ? "currentColor" : "none"
                }
              />
            ))}
          </div>
          <span className="text-gray-400 text-sm">
            {decorator.avgRating.toFixed(1)} / 5
          </span>
        </div>

        <button
          className="w-full py-2.5 rounded-xl bg-blue-500/20 text-white font-medium transition-all duration-300 hover:bg-blue-500/30"
          onClick={handleDecoratorClick}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

const DecoratorsPage = () => {
  const [decorators, setDecorators] = useState([]);
  const [filteredDecorators, setFilteredDecorators] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Set dummy data instead of fetching from API
    setDecorators(dummyDecorators);
    setFilteredDecorators(dummyDecorators);
  }, []);

  useEffect(() => {
    const filtered = decorators.filter(
      (decorator) =>
        decorator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        decorator.specialties.some((specialty) =>
          specialty.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
    setFilteredDecorators(filtered);
  }, [searchQuery, decorators]);

  return (
    <div className="min-h-screen bg-black pt-10">
      <div className="relative container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Find the Best Event Decorators
          </h1>
          <p className="text-gray-400">Search for top-rated decorators for your event</p>
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
          {filteredDecorators.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDecorators.map((decorator) => (
                <DecoratorCard key={decorator.decoratorId} decorator={decorator} />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center">No decorators found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DecoratorsPage;
