import React, { useState, useEffect } from "react";
import { Search, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const dummyEntertainers = [
  {
    entertainerId: 1,
    name: "DJ Beats",
    bio: "Professional DJ with 10+ years of experience in weddings, corporate events, and private parties.",
    specialties: ["DJ", "Music Mixing", "Corporate Events"],
    avgRating: 4.8,
  },
  {
    entertainerId: 2,
    name: "The Magic Show",
    bio: "Magician performing interactive and mind-blowing magic tricks for all age groups.",
    specialties: ["Magic Shows", "Birthday Parties", "Stage Performances"],
    avgRating: 4.6,
  },
  {
    entertainerId: 3,
    name: "Fire Dancers Crew",
    bio: "A thrilling performance of fire dance and acrobatics for grand celebrations.",
    specialties: ["Fire Dance", "Cultural Shows", "Stage Performance"],
    avgRating: 4.9,
  },
];

const EntertainerCard = ({ entertainer }) => {
  const navigate = useNavigate();
  const handleEntertainerClick = () => {
    navigate(`/entertainmentprofile/${entertainer.entertainerId}`);
  };

  return (
    <div className="relative group bg-white/5 backdrop-blur-xl rounded-2xl transition-all duration-300 hover:bg-white/10">
      <div className="relative p-6 rounded-2xl overflow-hidden flex flex-col">
        <h3 className="text-2xl font-semibold text-white mb-2">{entertainer.name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{entertainer.bio}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {entertainer.specialties.map((specialty, index) => (
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
                  index < Math.round(entertainer.avgRating)
                    ? "text-yellow-400"
                    : "text-gray-600"
                }`}
                fill={
                  index < Math.round(entertainer.avgRating) ? "currentColor" : "none"
                }
              />
            ))}
          </div>
          <span className="text-gray-400 text-sm">
            {entertainer.avgRating.toFixed(1)} / 5
          </span>
        </div>

        <button
          className="w-full py-2.5 rounded-xl bg-blue-500/20 text-white font-medium transition-all duration-300 hover:bg-blue-500/30"
          onClick={handleEntertainerClick}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

const EntertainmentPage = () => {
  const [entertainers, setEntertainers] = useState([]);
  const [filteredEntertainers, setFilteredEntertainers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Set dummy data instead of fetching from API
    setEntertainers(dummyEntertainers);
    setFilteredEntertainers(dummyEntertainers);
  }, []);

  useEffect(() => {
    const filtered = entertainers.filter(
      (entertainer) =>
        entertainer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entertainer.specialties.some((specialty) =>
          specialty.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
    setFilteredEntertainers(filtered);
  }, [searchQuery, entertainers]);

  return (
    <div className="min-h-screen bg-black pt-10">
      <div className="relative container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Discover the Best Entertainment Services
          </h1>
          <p className="text-gray-400">
            Find DJs, magicians, dancers, and other entertainers for your event.
          </p>
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
          {filteredEntertainers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredEntertainers.map((entertainer) => (
                <EntertainerCard key={entertainer.entertainerId} entertainer={entertainer} />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center">No entertainers found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EntertainmentPage;
