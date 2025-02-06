import React, { useState, useEffect } from 'react';
import {
    Clapperboard,
    Music,
    Mic2,
    Calendar,
    Users,
    X,
    Sparkles,
    Heart,
    Camera,
    FlowerIcon,
    Gem,
    Badge,
    Trophy
} from 'lucide-react';

// Gradient background component
const GradientOrb = ({ className }) => (
    <div className={`absolute rounded-full blur-3xl opacity-20 ${className}`} />
);

// Mock data structure
const DUMMY_ENTERTAINMENT = {
    entertainmentId: 1,
    genres: ["Pop", "Rock", "Jazz", "Classical"],
    user: {
        name: "Ava Thompson",
        title: "Lead Vocalist & Event Coordinator",
        email: "ava@musicmotion.com",
        bio: "Energetic and versatile vocalist with a passion for creating memorable event experiences. Specializing in live music performances for weddings, corporate events, and private parties. Over 8 years of experience.",
        company: "Music In Motion",
        imageUrl: null
    },
    performances: [
        {
            id: 1,
            title: "Summer Wedding Serenade",
            description: "Acoustic set for an intimate garden wedding",
            location: "Botanical Gardens"
        },
        {
            id: 2,
            title: "Corporate Year-End Bash",
            description: "High-energy performance to celebrate achievements",
            location: "Grand Ballroom"
        }
    ],
    services: [
        {
            id: 1,
            title: "Full Band Performance",
            coverage: "Up to 4 hours",
            price: 3000.00,
            type: "PACKAGE",
            description: "Full band performance with vocalist, guitarist, bassist, and drummer."
        },
        {
            id: 2,
            title: "Solo Acoustic Set",
            coverage: "Up to 2 hours",
            price: 1200.00,
            type: "PACKAGE",
            description: "Solo acoustic performance perfect for intimate settings."
        }
    ],
    specialFeatures: [
        "Custom Song Requests",
        "Professional Sound System",
        "Stage Lighting",
        "Interactive Performances",
        "Themed Entertainment Packages"
    ]
};

// Booking Modal Component (Reused, but you might want to adjust labels)
const BookingModal = ({ service, onClose, onSubmit }) => {
    const [bookingData, setBookingData] = useState({
        date: '',
        venue: '',
        eventType: '',
        guestCount: '',
        theme: '',
        specialRequests: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...bookingData, serviceId: service.id });
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="w-full max-w-xl backdrop-blur-xl bg-gray-900/80 rounded-2xl p-8 border border-white/10 shadow-2xl">
                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl font-bold text-white">Book Entertainment Service</h2>
                    <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                        <X className="text-white/70 hover:text-white" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-white/90 mb-2">Event Date</label>
                            <input
                                type="date"
                                value={bookingData.date}
                                onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/20 text-white"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-white/90 mb-2">Guest Count</label>
                            <input
                                type="number"
                                value={bookingData.guestCount}
                                onChange={(e) => setBookingData({ ...bookingData, guestCount: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/20 text-white"
                                placeholder="Number of guests"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-white/90 mb-2">Venue</label>
                        <input
                            type="text"
                            value={bookingData.venue}
                            onChange={(e) => setBookingData({ ...bookingData, venue: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/20 text-white"
                            placeholder="Event venue name and address"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-white/90 mb-2">Event Type</label>
                        <select
                            value={bookingData.eventType}
                            onChange={(e) => setBookingData({ ...bookingData, eventType: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/20 text-white"
                            required
                        >
                            <option value="">Select event type</option>
                            <option value="wedding">Wedding</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="social">Social Gathering</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-white/90 mb-2">Preferred Genre/Style</label>
                        <input
                            type="text"
                            value={bookingData.theme}
                            onChange={(e) => setBookingData({ ...bookingData, theme: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/20 text-white"
                            placeholder="Describe your preferred music genre or style"
                        />
                    </div>

                    <div>
                        <label className="block text-white/90 mb-2">Special Requests</label>
                        <textarea
                            value={bookingData.specialRequests}
                            onChange={(e) => setBookingData({ ...bookingData, specialRequests: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/20 text-white h-32 resize-none"
                            placeholder="Any specific requirements or preferences"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            type="submit"
                            className="flex-1 py-3 px-4 bg-blue-500/80 hover:bg-blue-500/90 rounded-xl font-medium text-white transition-colors backdrop-blur-sm"
                        >
                            Confirm Booking
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-3 px-4 bg-white/5 hover:bg-white/10 rounded-xl font-medium text-white transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const EntertainmentProfile = () => {
    const [entertainment, setEntertainment] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        // Simulate API call with dummy data
        setTimeout(() => {
            setEntertainment(DUMMY_ENTERTAINMENT);
            setLoading(false);
        }, 500);
    }, []);

    const handleBookService = async (bookingData) => {
        console.log('Booking service:', bookingData);
        setSelectedService(null);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-6 relative overflow-hidden">
            {/* Decorative gradient background */}
            <GradientOrb className="w-96 h-96 bg-purple-500 -left-48 -top-48" />
            <GradientOrb className="w-96 h-96 bg-blue-500 -right-48 -bottom-48" />

            <div className="max-w-7xl mx-auto relative">
                <div className="pt-24 flex flex-col lg:flex-row gap-6">
                    {/* Profile Section */}
                    <div className="flex-1">
                        <div className="backdrop-blur-xl bg-gray-900/30 rounded-2xl p-6 md:p-8 border border-white/10">
                            {/* Profile Header */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                                <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Clapperboard size={48} className="text-white/50" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        {entertainment.user.name}
                                    </h1>
                                    <p className="text-xl text-white/80 mb-2">{entertainment.user.title}</p>
                                    <p className="text-white/60">{entertainment.user.company}</p>
                                </div>
                            </div>

                            {/* Genre Section */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                        <Music className="text-white/70" />
                                        <span>Genres</span>
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        {entertainment.genres.map((genre, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
                                            >
                                                {genre}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Performances Section */}
                                <div>
                                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                        <Mic2 className="text-white/70" />
                                        <span>Past Performances</span>
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {entertainment.performances.map((performance) => (
                                            <div
                                                key={performance.id}
                                                className="bg-white/5 rounded-xl p-4 border border-white/10"
                                            >
                                                <h3 className="font-semibold mb-2">{performance.title}</h3>
                                                <p className="text-sm text-white/60">{performance.description}</p>
                                                <p className="text-sm text-white/40 mt-2">{performance.location}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Special Features Section */}
                                <div>
                                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                        <Sparkles className="text-white/70" />
                                        <span>Special Features</span>
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {entertainment.specialFeatures.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2 text-white/70"
                                            >
                                                <Badge className="w-4 h-4" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bio Section */}
                                <div>
                                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                        <Heart className="text-white/70" />
                                        <span>About</span>
                                    </h2>
                                    <p className="text-white/70 leading-relaxed">{entertainment.user.bio}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Service Booking Section */}
                    <div className="lg:w-96">
                        <div className="backdrop-blur-xl bg-gray-900/30 rounded-2xl p-6 border border-white/10 lg:sticky lg:top-6">
                            <h2 className="text-2xl font-semibold mb-6">Entertainment Packages</h2>
                            <div className="space-y-4">
                                {entertainment.services.map((service) => (
                                    <div
                                        key={service.id}
                                        className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-colors"
                                    >
                                        <h3 className="font-semibold mb-2">{service.title}</h3>
                                        <p className="text-sm text-white/60 mb-3">{service.description}</p>
                                        <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                                            <span className="flex items-center gap-1">
                                                <Trophy size={16} />
                                                {service.coverage}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-medium">
                                                ${service.price.toLocaleString()}
                                            </span>
                                            <button
                                                onClick={() => setSelectedService(service)}
                                                className="px-4 py-2 bg-blue-500/80 hover:bg-blue-500/90 rounded-xl font-medium transition-colors"
                                            >
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Modal */}
            {selectedService && (
                <BookingModal
                    service={selectedService}
                    onClose={() => setSelectedService(null)}
                    onSubmit={handleBookService}
                />
            )}
        </div>
    );
};

export default EntertainmentProfile;
