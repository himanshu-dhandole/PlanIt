import React, { useState } from 'react';
import { MapPin, Phone, Mail, Calendar, Clock, FileText, Wallet, BarChart, MessageSquare, CheckCircle, XCircle } from 'lucide-react';

const HostProfile = () => {
    // Dummy Data for Host Profile
    const [host, setHost] = useState({
        name: "Eventful Gatherings Inc.",
        address: "456 Oak Avenue, Suite 200, Anytown USA",
        contact: "555-123-4567",
        email: "info@eventfulgatherings.com",
        role: "Event Host",
        joinedDate: "2023-01-15",
        balance: 2500
    });

    // Dummy Data for Previous Events
    const [previousEvents, setPreviousEvents] = useState([
        { id: 1, title: "Tech Conference 2023", date: "2023-11-20", status: "Completed" },
        { id: 2, title: "Charity Gala 2023", date: "2023-12-10", status: "Completed" },
        { id: 3, title: "Summer Wedding 2024", date: "2024-06-05", status: "Upcoming" }
    ]);

    // Dummy Data for Transaction History
    const [transactions, setTransactions] = useState([
        { id: 1, date: "2024-01-20", description: "Event Payment - Tech Conference", amount: -1500, type: "Debit" },
        { id: 2, date: "2024-02-10", description: "Refund - Cancelled Event", amount: 500, type: "Credit" },
        { id: 3, date: "2024-03-01", description: "Event Payment - Wedding", amount: -1000, type: "Debit" }
    ]);

    // Dummy Data for Mini Dashboard
    const [dashboardStats, setDashboardStats] = useState({
        quoteStatus: { pending: 5, accepted: 3, declined: 2 },
        requestStatus: { new: 8, approved: 5, rejected: 3 }
    });

    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <div className="bg-gray-900 text-white min-h-screen p-8">
            <div className="container mx-auto max-w-5xl">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold">{host.name}</h1>
                    <p className="text-gray-400">{host.role} (Joined: {host.joinedDate})</p>
                </div>

                {/* Profile Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-800 rounded-md p-4">
                        <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
                        <div className="text-gray-400 space-y-2">
                            <div><MapPin className="inline-block mr-1" size={16} /> {host.address}</div>
                            <div><Phone className="inline-block mr-1" size={16} /> {host.contact}</div>
                            <div><Mail className="inline-block mr-1" size={16} /> {host.email}</div>
                            <div><FileText className="inline-block mr-1" size={16} /> {host.bio}</div>
                        </div>
                    </div>

                    {/* Mini Wallet */}
                    <div className="bg-gray-800 rounded-md p-4">
                        <h2 className="text-xl font-semibold mb-2">Mini Wallet</h2>
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-gray-400">Current Balance</div>
                            <div className="text-2xl font-bold">${host.balance.toFixed(2)}</div>
                        </div>

                        <h3 className="text-lg font-semibold mb-2">Transaction History</h3>
                        <ul>
                            {transactions.slice(0, 3).map(transaction => (
                                <li key={transaction.id} className="flex justify-between items-center py-2 border-b border-gray-700">
                                    <div className="text-sm">{transaction.date} - {transaction.description}</div>
                                    <div className={transaction.type === "Credit" ? "text-green-500" : "text-red-500"}>
                                        {transaction.type === "Credit" ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Previous Events */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Previous Events</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr className="bg-gray-800 text-left">
                                    <th className="px-5 py-3 border-b-2 border-gray-700 text-sm font-semibold uppercase tracking-wider">
                                        Title
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-700 text-sm font-semibold uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-700 text-sm font-semibold uppercase tracking-wider">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {previousEvents.map(event => (
                                    <tr key={event.id} className="hover:bg-gray-800">
                                        <td className="px-5 py-4 border-b border-gray-700 text-sm">{event.title}</td>
                                        <td className="px-5 py-4 border-b border-gray-700 text-sm">{event.date}</td>
                                        <td className="px-5 py-4 border-b border-gray-700 text-sm">{event.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Mini Dashboard */}
                <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800 rounded-md p-4">
                        <h2 className="text-xl font-semibold mb-2">Quote Status</h2>
                        <div className="text-gray-400 space-y-2">
                            <div>Pending: {dashboardStats.quoteStatus.pending}</div>
                            <div>Accepted: {dashboardStats.quoteStatus.accepted}</div>
                            <div>Declined: {dashboardStats.quoteStatus.declined}</div>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-md p-4">
                        <h2 className="text-xl font-semibold mb-2">Request Status</h2>
                        <div className="text-gray-400 space-y-2">
                            <div>New: {dashboardStats.requestStatus.new}</div>
                            <div>Approved: {dashboardStats.requestStatus.approved}</div>
                            <div>Rejected: {dashboardStats.requestStatus.rejected}</div>
                        </div>
                    </div>
                </div>

                {/* AI Chatbot */}
                <div className="mb-8">
                    <button onClick={() => setIsChatOpen(!isChatOpen)} className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md">
                        <MessageSquare className="inline-block mr-2" size={16} /> {isChatOpen ? "Close AI Chat" : "Open AI Chat"}
                    </button>

                    {isChatOpen && (
                        <div className="mt-4 bg-gray-800 rounded-md p-4">
                            <h3 className="text-lg font-semibold mb-2">AI Chat</h3>
                            <p className="text-gray-400">This is a placeholder for an AI chat interface. You can integrate with a chat service here.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default HostProfile;
