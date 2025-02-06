import React, { useState, useEffect } from 'react';
import {
    Shield,
    Eye,
    Clock,
    Users,
    X,
    Sparkles,
    Heart,
    Camera,
    FlowerIcon,
    Gem,
    KeyRound,
    UserCheck
} from 'lucide-react';

// Gradient background component
const GradientOrb = ({ className }) => (
    <div className={`absolute rounded-full blur-3xl opacity-20 ${className}`} />
);

// Mock data structure
const DUMMY_SECURITY = {
    securityId: 1,
    expertise: ["Event Security", "Personal Protection", "Surveillance", "Risk Assessment"],
    user: {
        name: "Marcus Cole",
        title: "Chief Security Officer",
        email: "marcus@secureevents.com",
        bio: "Highly experienced security professional with over 15 years in risk management and event security. Specializing in creating safe and secure environments for high-profile events and providing discreet personal protection.",
        company: "Secure Events Pro",
        imageUrl: null
    },
    deployments: [
        {
            id: 1,
            title: "International Film Festival",
            description: "Managed security for VIP guests and event locations",
            location: "Cannes, France"
        },
        {
            id: 2,
            title: "High-Profile Corporate Summit",
            description: "Ensured a secure environment for executive meetings",
            location: "New York City"
        }
    ],
    services: [
        {
            id: 1,
            title: "Full Event Security Package",
            coverage: "Complete security detail for the entire event duration",
            price: 5000.00,
            type: "PACKAGE",
            description: "Comprehensive security solution including risk assessment, on-site personnel, and surveillance systems"
        },
        {
            id: 2,
            title: "Executive Protection Service",
            coverage: "Up to 8 hours",
            price: 3500.00,
            type: "PACKAGE",
            description: "Discreet and professional personal protection for executives and VIPs"
        }
    ],
    specialFeatures: [
        "Advanced Surveillance Technology",
        "Trained Security Personnel",
        "Emergency Response Planning",
        "Threat Assessment Analysis",
        "Confidentiality Agreements"
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
                    <h2 className="text-2xl font-bold text-white">Book Security Service</h2>
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
                            <option value="corporate">Corporate Event</option>
                            <option value="conference">Conference</option>
                            <option value="private">Private Party</option>
                            <option value="public">Public Event</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-white/90 mb-2">Specific Security Needs</label>
                        <input
                            type="text"
                            value={bookingData.theme}
                            onChange={(e) => setBookingData({ ...bookingData, theme: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/20 text-white"
                            placeholder="e.g., VIP protection, crowd control, surveillance"
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

const SecurityProfile = () => {
    const [security, setSecurity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        // Simulate API call with dummy data
        setTimeout(() => {
            setSecurity(DUMMY_SECURITY);
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
                                    <Shield size={48} className="text-white/50" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        {security.user.name}
                                    </h1>
                                    <p className="text-xl text-white/80 mb-2">{security.user.title}</p>
                                    <p className="text-white/60">{security.user.company}</p>
                                </div>
                            </div>

                            {/* Expertise Section */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                        <Eye className="text-white/70" />
                                        <span>Areas of Expertise</span>
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        {security.expertise.map((expertise, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
                                            >
                                                {expertise}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Deployments Section */}
                                <div>
                                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                        <UserCheck className="text-white/70" />
                                        <span>Past Deployments</span>
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {security.deployments.map((deployment) => (
                                            <div
                                                key={deployment.id}
                                                className="bg-white/5 rounded-xl p-4 border border-white/10"
                                            >
                                                <h3 className="font-semibold mb-2">{deployment.title}</h3>
                                                <p className="text-sm text-white/60">{deployment.description}</p>
                                                <p className="text-sm text-white/40 mt-2">{deployment.location}</p>
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
                                        {security.specialFeatures.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2 text-white/70"
                                            >
                                                <KeyRound className="w-4 h-4" />
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
                                    <p className="text-white/70 leading-relaxed">{security.user.bio}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Service Booking Section */}
                    <div className="lg:w-96">
                        <div className="backdrop-blur-xl bg-gray-900/30 rounded-2xl p-6 border border-white/10 lg:sticky lg:top-6">
                            <h2 className="text-2xl font-semibold mb-6">Security Packages</h2>
                            <div className="space-y-4">
                                {security.services.map((service) => (
                                    <div
                                        key={service.id}
                                        className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-colors"
                                    >
                                        <h3 className="font-semibold mb-2">{service.title}</h3>
                                        <p className="text-sm text-white/60 mb-3">{service.description}</p>
                                        <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                                            <span className="flex items-center gap-1">
                                                <Shield size={16} />
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

export default SecurityProfile;
