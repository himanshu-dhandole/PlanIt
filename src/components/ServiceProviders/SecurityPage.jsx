import React, { useState, useEffect } from "react";
import { Search, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const dummySecurityServices = [
  {
    securityId: 1,
    name: "Elite Guard Services",
    description: "Professional security personnel for corporate and private events.",
    specialties: ["Event Security", "Corporate Guards", "VIP Protection"],
    experience: "10+ years",
    avgRating: 4.9,
  },
  {
    securityId: 2,
    name: "Night Shield Security",
    description: "Experienced bouncers and night event security experts.",
    specialties: ["Nightclub Security", "Private Events", "Crowd Control"],
    experience: "8 years",
    avgRating: 4.7,
  },
  {
    securityId: 3,
    name: "Safe Haven Patrol",
    description: "Mobile patrol and surveillance for large-scale events.",
    specialties: ["Mobile Patrol", "Surveillance", "CCTV Monitoring"],
    experience: "12 years",
    avgRating: 4.8,
  },
];

const SecurityCard = ({ security }) => {
  const navigate = useNavigate();
  const handleSecurityClick = () => {
    navigate(`/securityprofile/${security.securityId}`);
  };

  return (
    <div className="relative group bg-white/5 backdrop-blur-xl rounded-2xl transition-all duration-300 hover:bg-white/10">
      <div className="relative p-6 rounded-2xl overflow-hidden flex flex-col">
        <h3 className="text-2xl font-semibold text-white mb-2">{security.name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{security.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {security.specialties.map((specialty, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-green-500/10 text-green-300 text-sm"
            >
              {specialty}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-blue-400" />
          <span className="text-gray-400 text-sm">{security.experience} experience</span>
        </div>

        <button
          className="w-full py-2.5 rounded-xl bg-green-500/20 text-white font-medium transition-all duration-300 hover:bg-green-500/30"
          onClick={handleSecurityClick}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

const SecurityPage = () => {
  const [securityServices, setSecurityServices] = useState([]);
  const [filteredSecurity, setFilteredSecurity] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Set dummy data instead of fetching from API
    setSecurityServices(dummySecurityServices);
    setFilteredSecurity(dummySecurityServices);
  }, []);

  useEffect(() => {
    const filtered = securityServices.filter(
      (service) =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.specialties.some((specialty) =>
          specialty.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
    setFilteredSecurity(filtered);
  }, [searchQuery, securityServices]);

  return (
    <div className="min-h-screen bg-black pt-10">
      <div className="relative container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Reliable Security Services for Your Event
          </h1>
          <p className="text-gray-400">
            Hire trained security personnel for crowd control, surveillance, and event protection.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative flex items-center p-2 rounded-xl bg-white/5 backdrop-blur-xl">
            <Search className="w-5 h-5 text-gray-400 ml-3" />
            <input
              type="text"
              placeholder="Search security services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none text-white placeholder-gray-400 focus:outline-none focus:ring-0 px-4 py-2"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {filteredSecurity.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSecurity.map((security) => (
                <SecurityCard key={security.securityId} security={security} />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center">No security services found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
