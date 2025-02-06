import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  MessageSquare,
  Star,
  Link,
  Users,
} from "lucide-react";

const Organizer = () => {
  const organizerData = {
    name: "Visionary Events Co.",
    description:
      "We craft unforgettable experiences tailored to your unique vision. From corporate events to weddings, we handle every detail with precision and creativity.",
    location: "123 Main Street, Anytown, USA",
    priceRange: "$$$",
    services: [
      "Event Planning",
      "Venue Decoration",
      "Catering",
      "Entertainment",
      "Logistics Management",
    ],
    previousWork: [
      {
        id: 1,
        title: "Corporate Gala 2023",
        imageUrl:
          "https://cdn0.weddingwire.in/vendor/0959/3_2/960/jpg/shadi-events-6_15_250959-1569322400.jpeg",
      },
      {
        id: 2,
        title: "Summer Wedding",
        imageUrl:
          "https://cdn0.weddingwire.in/vendor/4597/3_2/960/png/capture_15_214597-1554805225.jpeg",
      },
      {
        id: 3,
        title: "Product Launch",
        imageUrl:
          "https://badhaihoevents.in/wp-content/uploads/2021/01/wedding-lawns-in-dwarka-delhi-to-host-the-most-special-day-of-your-life.jpg",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        rating: 5,
        comment: "Amazing service! They made our wedding day perfect.",
      },
      {
        id: 2,
        author: "Jane Smith",
        rating: 4,
        comment: "Great attention to detail and excellent communication.",
      },
    ],
  };

  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 px-6 py-12 text-white">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-2 text-4xl font-bold">{organizerData.name}</h1>
          <p className="text-gray-400">{organizerData.description}</p>
        </div>

        {/* Contact & Info Section */}
        <div className="flex items-start justify-between gap-8">
          <div className="flex-1">
            {/* Location */}
            <div className="mb-4 flex items-center text-gray-400">
              <MapPin className="mr-2 text-purple-500" size={20} />
              {organizerData.location}
            </div>
            {/* Price Range */}
            <div className="mb-4 flex items-center text-gray-400">
              <Star className="mr-2 text-purple-500" size={20} />
              Price Range: {organizerData.priceRange}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <button className="w-full rounded-md bg-purple-600 px-4 py-3 text-white transition duration-300 hover:bg-purple-700">
              <Calendar className="mr-2 inline-block" size={16} /> Book a
              Meeting
            </button>
            <button className="w-full rounded-md bg-blue-600 px-4 py-3 text-white transition duration-300 hover:bg-blue-700">
              Get a Quote
            </button>
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="w-full rounded-md bg-green-600 px-4 py-3 text-white transition duration-300 hover:bg-green-700"
            >
              <MessageSquare className="mr-2 inline-block" size={16} /> AI Chat
            </button>
          </div>
        </div>

        {/* Services */}
        <div className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold">Services Provided</h2>
          <ul className="grid grid-cols-1 gap-4 text-gray-400 md:grid-cols-2">
            {organizerData.services.map((service, index) => (
              <li
                key={index}
                className="rounded-md bg-gray-800 p-3 transition duration-200 hover:bg-gray-700"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Previous Work */}
        <div className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold">Previous Work</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {organizerData.previousWork.map((work) => (
              <div
                key={work.id}
                className="transform overflow-hidden rounded-lg shadow-md transition duration-300 hover:scale-105"
              >
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="h-48 w-full object-cover"
                />
                <div className="bg-gray-800 p-4">
                  <p className="font-medium text-white">{work.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold">Reviews</h2>
          {organizerData.reviews.map((review) => (
            <div key={review.id} className="mb-4 rounded-md bg-gray-800 p-4">
              <div className="mb-2 flex items-center">
                <Star className="mr-1 text-yellow-500" size={20} />
                <span className="font-medium text-yellow-500">
                  {review.rating}
                </span>
                <span className="ml-2 text-gray-400">by {review.author}</span>
              </div>
              <p className="text-gray-400">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* AI Chat (Conditionally Rendered) */}
        {isChatOpen && (
          <div className="fixed bottom-4 right-4 w-96 rounded-md border border-gray-600 bg-gray-700 p-6 shadow-lg">
            <h3 className="mb-2 text-lg font-semibold">AI Chat</h3>
            <p className="text-gray-400">
              This is a placeholder for an AI chat interface.
            </p>
            <button
              onClick={() => setIsChatOpen(false)}
              className="mt-4 rounded bg-red-500 px-4 py-2 text-white transition duration-300 hover:bg-red-600"
            >
              Close Chat
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Organizer;
