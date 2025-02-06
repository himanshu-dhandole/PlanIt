import React, { useState, useEffect } from 'react';
import {
    Users, Calendar, FileText, CheckCircle, XCircle,
    Badge,  TrendingUp, MessageSquare, Settings, LogOut,
    UserPlus, UserMinus, AlertTriangle
} from 'lucide-react';

const AdminDashboard = () => {
    // Dummy Data
    const [requests, setRequests] = useState([
        { id: 1, type: "Host", name: "New Event Host", details: "Request from John Doe", status: "Pending" },
        { id: 2, type: "Organizer", name: "Eventful Org", details: "Registration request", status: "Pending" },
        { id: 3, type: "Service Provider", name: "Catering Services", details: "Request for partnership", status: "Approved" },
        { id: 4, type: "Host", name: "Another Host", details: "Request from Jane Smith", status: "Rejected" }
    ]);

    const [adminStats, setAdminStats] = useState({
        totalUsers: 250,
        activeUsers: 200,
        organizers: 50,
        hosts: 100,
        serviceProviders: 30
    });

    const [userFeedback, setUserFeedback] = useState([
        { id: 1, user: "User 1", type: "Feedback", details: "App is very easy to use", date: "2024-01-20" },
        { id: 2, user: "User 2", type: "Issue", details: "I keep getting errors with the chat bot", date: "2024-02-15" },
        { id: 3, user: "User 3", type: "Suggestion", details: "Can you add more payment methods", date: "2024-03-01" }
    ]);

    // Handlers
    const handleApproveRequest = (id) => {
        setRequests(requests.map(req => req.id === id ? { ...req, status: "Approved" } : req));
    };

    const handleRejectRequest = (id) => {
        setRequests(requests.map(req => req.id === id ? { ...req, status: "Rejected" } : req));
    };

    const handleDeleteUserFeedback = (id) => {
        setUserFeedback(userFeedback.filter(item => item.id !== id));
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen p-8">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md">
                            <Settings className="mr-2" size={16} /> Settings
                        </button>
                        <button className="flex items-center bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md">
                            <LogOut className="mr-2" size={16} /> Logout
                        </button>
                    </div>
                </div>

                {/* Admin Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-800 rounded-md p-4">
                        <div className="text-gray-400">Total Users</div>
                        <div className="text-2xl font-bold"><Users className="inline-block mr-1" size={24} /> {adminStats.totalUsers}</div>
                    </div>
                    <div className="bg-gray-800 rounded-md p-4">
                        <div className="text-gray-400">Active Users</div>
                        <div className="text-2xl font-bold"><CheckCircle className="inline-block mr-1" size={24} /> {adminStats.activeUsers}</div>
                    </div>
                    <div className="bg-gray-800 rounded-md p-4">
                        <div className="text-gray-400">Number of Organizers</div>
                        <div className="text-2xl font-bold"><Calendar className="inline-block mr-1" size={24} /> {adminStats.organizers}</div>
                    </div>
                    <div className="bg-gray-800 rounded-md p-4">
                        <div className="text-gray-400">Number of Hosts</div>
                        <div className="text-2xl font-bold"><Badge className="inline-block mr-1" size={24} /> {adminStats.hosts}</div>
                    </div>
                    <div className="bg-gray-800 rounded-md p-4">
                        <div className="text-gray-400">Number of Service Providers</div>
                        <div className="text-2xl font-bold"> {adminStats.serviceProviders}</div>
                    </div>
                </div>

                {/* Requests Management */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Requests Management</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr className="bg-gray-800 text-left">
                                    <th className="px-5 py-3 border-b-2 border-gray-700 text-sm font-semibold uppercase tracking-wider">
                                        Type
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-700 text-sm font-semibold uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-700 text-sm font-semibold uppercase tracking-wider">
                                        Details
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-700 text-sm font-semibold uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-700"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {requests.map(request => (
                                    <tr key={request.id} className="hover:bg-gray-800">
                                        <td className="px-5 py-4 border-b border-gray-700 text-sm">{request.type}</td>
                                        <td className="px-5 py-4 border-b border-gray-700 text-sm">{request.name}</td>
                                        <td className="px-5 py-4 border-b border-gray-700 text-sm">{request.details}</td>
                                        <td className="px-5 py-4 border-b border-gray-700 text-sm">{request.status}</td>
                                        <td className="px-5 py-4 border-b border-gray-700 text-sm">
                                            {request.status === "Pending" && (
                                                <>
                                                    <button onClick={() => handleApproveRequest(request.id)} className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded-md mr-2">
                                                        <CheckCircle className="inline-block mr-1" size={16} />Approve
                                                    </button>
                                                    <button onClick={() => handleRejectRequest(request.id)} className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-md">
                                                        <XCircle className="inline-block mr-1" size={16} />Reject
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
                {/* User Feedback */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">User Feedback</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr className="bg-gray-800 text-left">
                                    <th className="px-5 py-3 border-b-2 border-gray-700 text-sm font-semibold uppercase tracking-wider">
                                        User
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-700 text-sm font-semibold uppercase tracking-wider">
                                        Type
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-700 text-sm font-semibold uppercase tracking-wider">
                                        Details
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-700 text-sm font-semibold uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-700"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {userFeedback.map(item => (
                                    <tr key={item.id} className="hover:bg-gray-800">
                                        <td className="px-5 py-4 border-b border-gray-700 text-sm">{item.user}</td>
                                        <td className="px-5 py-4 border-b border-gray-700 text-sm">{item.type}</td>
                                        <td className="px-5 py-4 border-b border-gray-700 text-sm">{item.details}</td>
                                        <td className="px-5 py-4 border-b border-gray-700 text-sm">{item.date}</td>
                                        <td className="px-5 py-4 border-b border-gray-700 text-sm">
                                            <button onClick={() => handleDeleteUserFeedback(item.id)} className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded-md">
                                                <XCircle className="inline-block mr-1" size={16} />Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* User Growth */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">User Growth</h2>
                    <div className="bg-gray-800 rounded-md p-4 mb-8">
                        <div className="grid grid-cols-2 gap-4 text-gray-400">
                            <div className="flex items-center">
                                <UserPlus className="mr-2 text-green-500" size={20} />
                                New Users This Month: 20
                            </div>
                            <div className="flex items-center">
                                <UserMinus className="mr-2 text-red-500" size={20} />
                                Users Removed This Month: 5
                            </div>
                        </div>
                    </div>
                </div>
                {/* System Alerts */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">System Alerts</h2>
                    <div className="bg-gray-800 rounded-md p-4 mb-8">
                        <div className="grid grid-cols-1 gap-4 text-gray-400">
                            <div className="flex items-center">
                                <AlertTriangle className="mr-2 text-yellow-500" size={20} />
                                High server load detected
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
