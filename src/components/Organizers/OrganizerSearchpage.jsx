import React, { useState, useEffect } from "react";
import { Search, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import apiClient from "../Auth/ApiClient";

const OrganizationCard = ({ organization }) => {
  const navigate = useNavigate();
  const handleOrganization = () => {
    navigate(`/organizer`);
  };

  return (
    <div className="relative group bg-gray-800/70 backdrop-blur-xl rounded-2xl transition-all duration-300 hover:bg-gray-700/80 border border-purple-500/20">
      <div className="relative p-6 rounded-2xl overflow-hidden flex flex-col">
        <h3 className="text-2xl font-semibold text-white mb-2">
          {organization.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{organization.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {organization.expertise.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${
                  index < Math.round(organization.avgRating)
                    ? "text-yellow-400"
                    : "text-gray-600"
                }`}
                fill={
                  index < Math.round(organization.avgRating) ? "currentColor" : "none"
                }
              />
            ))}
          </div>
          <span className="text-gray-400 text-sm">
            {organization.avgRating.toFixed(1)} / 5
          </span>
        </div>

        <button
          className="w-full py-2.5 rounded-xl bg-purple-500/20 text-white font-medium transition-all duration-300 hover:bg-purple-500/30"
          onClick={handleOrganization}
        >
          View Organization
        </button>
      </div>
    </div>
  );
};

const LoadingState = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="relative animate-pulse">
        <div className="absolute inset-0 bg-gray-800/80 backdrop-blur-xl rounded-2xl" />
        <div className="relative p-6 rounded-2xl h-40">
          <div className="space-y-4">
            <div className="h-4 bg-gray-700 rounded w-3/4" />
            <div className="h-4 bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-700 rounded w-5/6" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ErrorState = ({ error, onRetry }) => (
  <div className="text-center py-12">
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-4">
      <svg
        className="w-8 h-8 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">
      Failed to load organizations
    </h3>
    <p className="text-gray-400 mb-4">{error}</p>
    <button
      onClick={onRetry}
      className="px-4 py-2 bg-purple-500/20 rounded-xl text-white hover:bg-purple-500/30 transition-all duration-300"
    >
      Try Again
    </button>
  </div>
);

const OrganizersSearchpage = () => {
  const [organizations, setOrganizations] = useState([]);
  const [filteredOrganizations, setFilteredOrganizations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const dummyData = [
    {
      organizationId: 1,
      name: "Eventastic",
      avgRating: 4.5,
      description: "Your premier partner for creating unforgettable events. From corporate galas to intimate gatherings, we handle every detail with precision and flair.",
      expertise: ["Corporate Events", "Weddings", "Conferences"],
    },
    {
      organizationId: 2,
      name: "Royal Events",
      avgRating: 4.2,
      description: "Specializing in high-end, luxury events. Our team delivers bespoke experiences tailored to exceed the expectations of the most discerning clients.",
      expertise: ["Luxury Events", "Private Parties", "Award Ceremonies"],
    },
    {
      organizationId: 3,
      name: "City Celebrations",
      avgRating: 4.0,
      description: "Experts in community events and festivals. We bring people together through engaging and well-organized celebrations.",
      expertise: ["Festivals", "Community Events", "Parades"],
    },
    {
      organizationId: 4,
      name: "Global Gatherings",
      avgRating: 4.8,
      description: "An international event management company with a focus on conferences and trade shows. We connect professionals from around the globe.",
      expertise: ["Conferences", "Trade Shows", "International Events"],
    },
    {
      organizationId: 5,
      name: "Dream Weddings",
      avgRating: 4.7,
      description: "Creating enchanting weddings with a touch of elegance and seamless planning.",
      expertise: ["Destination Weddings", "Theme Weddings", "Luxury Weddings"],
    },
    {
      organizationId: 6,
      name: "Urban Vibes",
      avgRating: 4.1,
      description: "Turning urban spaces into vibrant celebrations filled with creativity and joy.",
      expertise: ["Street Festivals", "Art Installations", "Pop-Up Events"],
    },
    {
      organizationId: 7,
      name: "The Grand Affair",
      avgRating: 4.3,
      description: "Meticulously planned events for unforgettable grand experiences.",
      expertise: ["Corporate Galas", "Fundraising Events", "Banquets"],
    },
    {
      organizationId: 8,
      name: "Elegant Occasions",
      avgRating: 4.9,
      description: "Tailoring luxury events with sophistication and impeccable service.",
      expertise: ["Luxury Weddings", "Exclusive Parties", "Celebrity Events"],
    },
    {
      organizationId: 9,
      name: "NextGen Conferences",
      avgRating: 4.6,
      description: "Innovative and interactive conferences that set the stage for thought leadership.",
      expertise: ["Tech Conferences", "Panel Discussions", "Workshops"],
    },
    {
      organizationId: 10,
      name: "Fiesta Creators",
      avgRating: 4.0,
      description: "Making every celebration a colorful and memorable experience.",
      expertise: ["Birthday Parties", "Family Gatherings", "Cultural Events"],
    },
    {
      organizationId: 11,
      name: "Corporate Synergy",
      avgRating: 4.4,
      description: "Delivering impactful corporate events that align with brand values.",
      expertise: ["Product Launches", "Seminars", "Networking Events"],
    },
    {
      organizationId: 12,
      name: "EcoCelebrations",
      avgRating: 4.3,
      description: "Sustainable event management for eco-conscious celebrations.",
      expertise: ["Green Weddings", "Eco-Friendly Conferences", "Charity Events"],
    },
    {
      organizationId: 13,
      name: "Party Pulse",
      avgRating: 4.2,
      description: "Bringing energy and excitement to parties with vibrant themes and entertainment.",
      expertise: ["Night Parties", "Music Events", "Theme Parties"],
    },
    {
      organizationId: 14,
      name: "The Celebration Hub",
      avgRating: 4.1,
      description: "One-stop solution for organizing events with a focus on unique experiences.",
      expertise: ["Festivals", "Carnivals", "Food Exhibitions"],
    },
    {
      organizationId: 15,
      name: "Serene Gatherings",
      avgRating: 4.7,
      description: "Crafting serene and tranquil events that leave lasting memories.",
      expertise: ["Retreats", "Spiritual Events", "Wellness Gatherings"],
    },
    {
      organizationId: 16,
      name: "Tradition Meets Modern",
      avgRating: 4.5,
      description: "Merging traditional values with contemporary event designs.",
      expertise: ["Cultural Festivals", "Heritage Events", "Traditional Weddings"],
    },
    {
      organizationId: 17,
      name: "Venture Events",
      avgRating: 4.6,
      description: "Partnering with startups to launch and celebrate their big moments.",
      expertise: ["Startup Launches", "Pitch Events", "Networking Sessions"],
    },
    {
      organizationId: 18,
      name: "Glamorous Affairs",
      avgRating: 4.9,
      description: "Elevating event experiences with glitz, glamour, and unmatched sophistication.",
      expertise: ["Red Carpet Events", "Luxury Dinners", "Fashion Shows"],
    },
    {
      organizationId: 19,
      name: "Fun & Frolic",
      avgRating: 4.3,
      description: "Creating joyous and playful events for children and families.",
      expertise: ["Kids' Parties", "Family Carnivals", "Entertainment Shows"],
    },
    {
      organizationId: 20,
      name: "Harmony Events",
      avgRating: 4.8,
      description: "Curating harmonious events where every element aligns perfectly.",
      expertise: ["Music Festivals", "Cultural Concerts", "Art Showcases"],
    },
  ];
  

  useEffect(() => {
    const fetchOrganizations = async () => {
      setIsLoading(true);
      try {
        // const response = await apiClient.get("/public/organizations");
        // const organizationsData = response.data.data.content;
        setOrganizations(dummyData);
        setFilteredOrganizations(dummyData);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch organizations. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchOrganizations();
  }, []);

  useEffect(() => {
    const filtered = organizations.filter(
      (organization) =>
        organization.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        organization.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        organization.expertise.some((skill) =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
    setFilteredOrganizations(filtered);
  }, [searchQuery, organizations]);

  return (
    <div className="min-h-screen bg-black pt-10">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-700/20 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Find the Best Event Organizers
          </h1>
          <p className="text-gray-400">
            Browse top-rated organizations to make your event a success
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-0 bg-gray-800/80 backdrop-blur-xl rounded-xl" />
            <div className="relative flex items-center p-2 rounded-xl">
              <Search className="w-5 h-5 text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Search by name, description, or expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-none text-white placeholder-gray-400 focus:outline-none focus:ring-0 px-4 py-2"
              />
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {isLoading ? (
            <LoadingState />
          ) : error ? (
            <ErrorState error={error} onRetry={() => window.location.reload()} />
          ) : filteredOrganizations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredOrganizations.map((organization) => (
                <OrganizationCard key={organization.organizationId} organization={organization} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/80 mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No organizations found
              </h3>
              <p className="text-gray-400">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrganizersSearchpage;
