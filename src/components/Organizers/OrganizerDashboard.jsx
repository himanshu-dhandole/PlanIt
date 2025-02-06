import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Video,
  X,
  User,
  BookOpen,
  Award,
  FileText,
  Wallet,
  BarChart,
  TrendingUp,
  MessageSquare,
  Settings,
  LogOut,
  CheckCircle,
  XCircle,
} from "lucide-react";

const OrganizerDashboard = () => {
  // Dummy data for demonstration
  const [profile, setProfile] = useState({
    name: "Visionary Events Co.",
    email: "info@visionaryevents.com",
    location: "123 Main St, Anytown USA",
    bio: "Crafting unforgettable events with precision and creativity.",
    balance: 5000,
  });

  const [quotes, setQuotes] = useState([
    {
      id: 1,
      customer: "John Doe",
      eventType: "Wedding",
      date: "2024-05-20",
      status: "Pending",
    },
    {
      id: 2,
      customer: "Jane Smith",
      eventType: "Corporate",
      date: "2024-06-15",
      status: "Accepted",
    },
    {
      id: 3,
      customer: "David Lee",
      eventType: "Conference",
      date: "2024-07-01",
      status: "Declined",
    },
  ]);

  const [requests, setRequests] = useState([
    {
      id: 1,
      customer: "Alice Johnson",
      eventType: "Party",
      date: "2024-05-25",
    },
    {
      id: 2,
      customer: "Bob Williams",
      eventType: "Seminar",
      date: "2024-06-10",
    },
  ]);

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "2024-04-01",
      description: "Event Payment - Wedding",
      amount: 2500,
      type: "Credit",
    },
    {
      id: 2,
      date: "2024-04-15",
      description: "Withdrawal to Bank",
      amount: -1000,
      type: "Debit",
    },
  ]);

  const [stats, setStats] = useState({
    totalEvents: 120,
    revenueThisMonth: 12000,
    newRequests: 15,
    quoteConversionRate: 0.6,
  });

  // Handlers for actions
  const handleAcceptQuote = (id) => {
    setQuotes(
      quotes.map((quote) =>
        quote.id === id ? { ...quote, status: "Accepted" } : quote,
      ),
    );
  };

  const handleDeclineQuote = (id) => {
    setQuotes(
      quotes.map((quote) =>
        quote.id === id ? { ...quote, status: "Declined" } : quote,
      ),
    );
  };

  const handleApproveRequest = (id) => {
    setRequests(requests.filter((request) => request.id !== id));
  };

  const handleRejectRequest = (id) => {
    setRequests(requests.filter((request) => request.id !== id));
  };

  const handleGiveQuote = (requestId) => {
    alert(`Giving a quote for request ID: ${requestId}`); // Replace with quote creation form/logic
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Organizer Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white hover:bg-gray-600">
              <Settings className="mr-2" size={16} /> Settings
            </button>
            <button className="flex items-center rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700">
              <LogOut className="mr-2" size={16} /> Logout
            </button>
          </div>
        </div>

        {/* Profile & Stats */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-md bg-gray-800 p-4">
            <h2 className="mb-2 text-xl font-semibold">Profile</h2>
            <div className="space-y-2 text-gray-400">
              <div>
                <User className="mr-1 inline-block" size={16} /> {profile.name}
              </div>
              <div>
                <FileText className="mr-1 inline-block" size={16} />{" "}
                {profile.bio}
              </div>
              <div> {profile.location}</div>
              <div>
                <MessageSquare className="mr-1 inline-block" size={16} />{" "}
                {profile.email}
              </div>
            </div>
          </div>

          <div className="rounded-md bg-gray-800 p-4 md:col-span-2">
            <h2 className="mb-2 text-xl font-semibold">Stats</h2>
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
                Quote Conversion: {(stats.quoteConversionRate * 100).toFixed(0)}
                %
              </div>
            </div>
          </div>
        </div>

        {/* Quotes */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Quotes</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="bg-gray-800 text-left">
                  <th className="border-b-2 border-gray-700 px-5 py-3 text-sm font-semibold uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="border-b-2 border-gray-700 px-5 py-3 text-sm font-semibold uppercase tracking-wider">
                    Event Type
                  </th>
                  <th className="border-b-2 border-gray-700 px-5 py-3 text-sm font-semibold uppercase tracking-wider">
                    Date
                  </th>
                  <th className="border-b-2 border-gray-700 px-5 py-3 text-sm font-semibold uppercase tracking-wider">
                    Status
                  </th>
                  <th className="border-b-2 border-gray-700 px-5 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {quotes.map((quote) => (
                  <tr key={quote.id} className="hover:bg-gray-800">
                    <td className="border-b border-gray-700 px-5 py-5 text-sm">
                      {quote.customer}
                    </td>
                    <td className="border-b border-gray-700 px-5 py-5 text-sm">
                      {quote.eventType}
                    </td>
                    <td className="border-b border-gray-700 px-5 py-5 text-sm">
                      {quote.date}
                    </td>
                    <td className="border-b border-gray-700 px-5 py-5 text-sm">
                      {quote.status}
                    </td>
                    <td className="border-b border-gray-700 px-5 py-5 text-sm">
                      {quote.status === "Pending" && (
                        <>
                          <button
                            onClick={() => handleAcceptQuote(quote.id)}
                            className="mr-2 rounded-md bg-green-600 px-3 py-1 text-white hover:bg-green-700"
                          >
                            <CheckCircle
                              className="mr-1 inline-block"
                              size={16}
                            />
                            Accept
                          </button>
                          <button
                            onClick={() => handleDeclineQuote(quote.id)}
                            className="rounded-md bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                          >
                            <XCircle className="mr-1 inline-block" size={16} />
                            Decline
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
          <h2 className="mb-4 text-2xl font-semibold">Requests</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="bg-gray-800 text-left">
                  <th className="border-b-2 border-gray-700 px-5 py-3 text-sm font-semibold uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="border-b-2 border-gray-700 px-5 py-3 text-sm font-semibold uppercase tracking-wider">
                    Event Type
                  </th>
                  <th className="border-b-2 border-gray-700 px-5 py-3 text-sm font-semibold uppercase tracking-wider">
                    Date
                  </th>
                  <th className="border-b-2 border-gray-700 px-5 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-800">
                    <td className="border-b border-gray-700 px-5 py-5 text-sm">
                      {request.customer}
                    </td>
                    <td className="border-b border-gray-700 px-5 py-5 text-sm">
                      {request.eventType}
                    </td>
                    <td className="border-b border-gray-700 px-5 py-5 text-sm">
                      {request.date}
                    </td>
                    <td className="border-b border-gray-700 px-5 py-5 text-sm">
                      <button
                        onClick={() => handleGiveQuote(request.id)}
                        className="mr-2 rounded-md bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
                      >
                        Give Quote
                      </button>
                      <button
                        onClick={() => handleApproveRequest(request.id)}
                        className="mr-2 rounded-md bg-green-600 px-3 py-1 text-white hover:bg-green-700"
                      >
                        <CheckCircle className="mr-1 inline-block" size={16} />
                        Approve
                      </button>
                      <button
                        onClick={() => handleRejectRequest(request.id)}
                        className="rounded-md bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                      >
                        <XCircle className="mr-1 inline-block" size={16} />
                        Reject
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
          <h2 className="mb-4 text-2xl font-semibold">Wallet</h2>
          <div className="mb-8 rounded-md bg-gray-800 p-4">
            <div className="flex items-center justify-between">
              <div className="text-gray-400">Current Balance</div>
              <div className="text-3xl font-bold">
                ₹{profile.balance.toFixed(2)}
              </div>
            </div>
          </div>

          <h3 className="mb-4 text-xl font-semibold">Transaction History</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="bg-gray-800 text-left">
                  <th className="border-b-2 border-gray-700 px-5 py-3 text-sm font-semibold uppercase tracking-wider">
                    Date
                  </th>
                  <th className="border-b-2 border-gray-700 px-5 py-3 text-sm font-semibold uppercase tracking-wider">
                    Description
                  </th>
                  <th className="border-b-2 border-gray-700 px-5 py-3 text-sm font-semibold uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-800">
                    <td className="border-b border-gray-700 px-5 py-5 text-sm">
                      {transaction.date}
                    </td>
                    <td className="border-b border-gray-700 px-5 py-5 text-sm">
                      {transaction.description}
                    </td>
                    <td className="border-b border-gray-700 px-5 py-5 text-sm">
                      <span
                        className={
                          transaction.type === "Credit"
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {transaction.type === "Credit" ? "+" : "-"}₹
                        {Math.abs(transaction.amount).toFixed(2)}
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
