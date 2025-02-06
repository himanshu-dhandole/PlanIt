import React, { useState } from 'react';
import { Calendar, Clock, Video, X, User, BookOpen, Award, FileText, Wallet, BarChart, TrendingUp, MessageSquare, Settings, LogOut, CheckCircle, XCircle } from 'lucide-react';

const OrganizerDashboard = () => {
    // Dummy data for demonstration
    const [profile, setProfile] = useState({
        name: "Visionary Events Co.",
        email: "info@visionaryevents.com",
        location: "123 Main St, Anytown USA",
        bio: "Crafting unforgettable events with precision and creativity.",
        balance: 5000
    });

    const [quotes, setQuotes] = useState([
        { id: 1, customer: "John Doe", eventType: "Wedding", date: "2024-05-20", status: "Pending" },
        { id: 2, customer: "Jane Smith", eventType: "Corporate", date: "2024-06-15", status: "Accepted" },
        { id: 3, customer: "David Lee", eventType: "Conference", date: "2024-07-01", status: "Declined" }
    ]);

    const [requests, setRequests] = useState([
        { id: 1, customer: "Alice Johnson", eventType: "Party", date: "2024-05-25" },
        { id: 2, customer: "Bob Williams", eventType: "Seminar", date: "2024-06-10" }
    ]);

    const [transactions, setTransactions] = useState([
        { id: 1, date: "2024-04-01", description: "Event Payment - Wedding", amount: 2500, type: "Credit" },
        { id: 2, date: "2024-04-15", description: "Withdrawal to Bank", amount: -1000, type: "Debit" }
    ]);

    const [stats, setStats] = useState({
        totalEvents: 120,
        revenueThisMonth: 12000,
        newRequests: 15,
        quoteConversionRate: 0.6
    });

    // Handlers for actions
    const handleAcceptQuote = (id) => {
        setQuotes(quotes.map(quote => quote.id === id ? { ...quote, status: "Accepted" } : quote));
    };

    const handleDeclineQuote = (id) => {
        setQuotes(quotes.map(quote => quote.id === id ? { ...quote, status: "Declined" } : quote));
    };

    const handleApproveRequest = (id) => {
        setRequests(requests.filter(request => request.id !== id));
    };

    const handleRejectRequest = (id) => {
        setRequests(requests.filter(request => request.id !== id));
    };

    const handleGiveQuote = (requestId) => {
        alert(`Giving a quote for request ID: ${requestId}`); // Replace with quote creation form/logic
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen p-8">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold">Organizer Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md">
                            <Settings className="mr-2" size={16} /> Settings
                        </button>
                        <button className="flex items-center bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md">
                            <LogOut className="mr-2" size={16} /> Logout
                        </button>
                    </div>
                </div>

                {/* Profile & Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-800 rounded-md p-4">
                        <h2 className="text-xl font-semibold mb-2">Profile</h2>
                        <div className="text-gray-400 space-y-2">
                            <div><User className="inline-block mr-1" size={16} /> {profile.name}</div>
                            <div><FileText className="inline-block mr-1" size={16} /> {profile.bio}</div>
                            <div><MapPin className="inline-block mr-1" size={16} /> {profile.location}</div>
                            <div><MessageSquare className="inline-block mr-1" size={16} /> {profile.email}</div>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-md p-4 md:col-span-2">
                        <h2 className="text-xl font-semibold mb-2">Stats</h2>
                        <div className="grid grid-cols-2 gap-4 text-gray-400">
                            <div className="flex items-center">
                                <TrendingUp className="mr-2 text-green-500" size={20} />
                                Total Events: {stats.totalEvents}
                            </div>
                            <div className="flex items-center">
                                <Wallet className="mr-2 text-blue-500" size={20} />
                                Revenue (Month): ${stats.revenueThisMonth}
                            </div>
                            <div className="flex items-center">
                                <MessageSquare className="mr-2 text-yellow-500" size={20} />
                                New Requests: {stats.newRequests}
                            </div>
                            <div className="flex items-center">
                                <BarChart className="mr-2 text-purple-500" size={20} />
                                Quote Conversion: {(stats.quoteConversionRate * 100).toFixed(0)}%
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quotes */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Quotes</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr className="bg-gray-800 text-left">
                                    <th className="px-5 py-3  border-b-2 border-gray-700  text-sm font-semibold uppercase tracking-wider">
                                        Customer
                                    </th>
                                    <th className="px-5 py-3  border-b-2 border-gray-700  text-sm font-semibold uppercase tracking-wider">
                                        Event Type
                                    </th>
                                    <th className="px-5 py-3  border-b-2 border-gray-700  text-sm font-semibold uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-5 py-3  border-b-2 border-gray-700  text-sm font-semibold uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-5 py-3  border-b-2 border-gray-700 "></th>
                                </tr>
                            </thead>
                            <tbody>
                                {quotes.map(quote => (
                                    <tr key={quote.id} className="hover:bg-gray-800">
                                        <td className="px-5 py-5  border-b border-gray-700  text-sm">{quote.customer}</td>
                                        <td className="px-5 py-5  border-b border-gray-700  text-sm">{quote.eventType}</td>
                                        <td className="px-5 py-5  border-b border-gray-700  text-sm">{quote.date}</td>
                                        <td className="px-5 py-5  border-b border-gray-700  text-sm">{quote.status}</td>
                                        <td className="px-5 py-5  border-b border-gray-700  text-sm">
                                            {quote.status === "Pending" && (
                                                <>
                                                    <button onClick={() => handleAcceptQuote(quote.id)} className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded-md mr-2">
                                                        <CheckCircle className="inline-block mr-1" size={16} />Accept
                                                    </button>
                                                    <button onClick={() => handleDeclineQuote(quote.id)} className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-md">
                                                        <XCircle className="inline-block mr-1" size={16} />Decline
                                                    </button>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Requests */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Requests</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr className="bg-gray-800 text-left">
                                    <th className="px-5 py-3  border-b-2 border-gray-700  text-sm font-semibold uppercase tracking-wider">
                                        Customer
                                    </th>
                                    <th className="px-5 py-3  border-b-2 border-gray-700  text-sm font-semibold uppercase tracking-wider">
                                        Event Type
                                    </th>
                                    <th className="px-5 py-3  border-b-2 border-gray-700  text-sm font-semibold uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-5 py-3  border-b-2 border-gray-700 "></th>
                                </tr>
                            </thead>
                            <tbody>
                                {requests.map(request => (
                                    <tr key={request.id} className="hover:bg-gray-800">
                                        <td className="px-5 py-5  border-b border-gray-700  text-sm">{request.customer}</td>
                                        <td className="px-5 py-5  border-b border-gray-700  text-sm">{request.eventType}</td>
                                        <td className="px-5 py-5  border-b border-gray-700  text-sm">{request.date}</td>
                                        <td className="px-5 py-5  border-b border-gray-700  text-sm">
                                            <button onClick={() => handleGiveQuote(request.id)} className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-md mr-2">
                                                Give Quote
                                            </button>
                                            <button onClick={() => handleApproveRequest(request.id)} className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded-md mr-2">
                                                <CheckCircle className="inline-block mr-1" size={16} />Approve
                                            </button>
                                            <button onClick={() => handleRejectRequest(request.id)} className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-md">
                                                <XCircle className="inline-block mr-1" size={16} />Reject
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Wallet & Transaction History */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Wallet</h2>
                    <div className="bg-gray-800 rounded-md p-4 mb-8">
                        <div className="flex items-center justify-between">
                            <div className="text-gray-400">Current Balance</div>
                            <div className="text-3xl font-bold">${profile.balance.toFixed(2)}</div>
                        </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-4">Transaction History</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr className="bg-gray-800 text-left">
                                    <th className="px-5 py-3  border-b-2 border-gray-700  text-sm font-semibold uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-5 py-3  border-b-2 border-gray-700  text-sm font-semibold uppercase tracking-wider">
                                        Description
                                    </th>
                                    <th className="px-5 py-3  border-b-2 border-gray-700  text-sm font-semibold uppercase tracking-wider">
                                        Amount
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map(transaction => (
                                    <tr key={transaction.id} className="hover:bg-gray-800">
                                        <td className="px-5 py-5  border-b border-gray-700  text-sm">{transaction.date}</td>
                                        <td className="px-5 py-5  border-b border-gray-700  text-sm">{transaction.description}</td>
                                        <td className="px-5 py-5  border-b border-gray-700  text-sm">
                                            <span className={transaction.type === "Credit" ? "text-green-500" : "text-red-500"}>
                                                {transaction.type === "Credit" ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganizerDashboard;
