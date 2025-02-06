import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { MapPin, Wallet, Calendar, User, CreditCard, TicketCheck, Ticket } from 'lucide-react';

const ParticipantProfile = () => {
    const [user] = useState({
        name: "Alex Johnson",
        address: "789 Pine Avenue, Anytown USA",
        email: "alex.j@example.com",
        phone: "555-987-6543",
        balance: 750,
        memberSince: "2023-06-15"
    });

    const [transactions] = useState([
        { id: 1, date: "2024-01-10", description: "Ticket Purchase - Tech Conference", amount: -120, type: "Debit" },
        { id: 2, date: "2024-02-05", description: "Refund - Cancelled Workshop", amount: 60, type: "Credit" },
        { id: 3, date: "2024-03-15", description: "Ticket Purchase - Music Festival", amount: -80, type: "Debit" }
    ]);

    const [tickets] = useState([
        { id: 1, eventName: "Tech Conference", name: "Alex Johnson", seatNo: "A12", qrCode: "tech_conference_qr_data", date: "2024-05-20", venue: "City Convention Center", price: "₹500" },
        { id: 2, eventName: "Music Festival", name: "Alex Johnson", seatNo: "VIP-05", qrCode: "music_festival_qr_data", date: "2024-07-15", venue: "Outdoor Stadium", price: "₹700" }
    ]);

    const generateQRCode = (text) => {
        try {
            return <QRCode value={text} size={128} level="H" />;
        } catch (error) {
            console.error("QR Code generation error:", error);
            return <div className="text-red-500">Error generating QR Code</div>;
        }
    };

    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen p-8">
            <div className="container mx-auto max-w-6xl space-y-8">
                {/* User Profile Section */}
                <section className="bg-gray-800 rounded-xl shadow-lg p-6">
                    <h1 className="text-3xl font-bold mb-6 flex items-center">
                        <User className="mr-3 text-blue-400" size={32} />
                        User Profile
                    </h1>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                            <ProfileDetail icon={<User className="mr-2" size={20} />} label="Name" value={user.name} />
                            <ProfileDetail icon={<MapPin className="mr-2" size={20} />} label="Address" value={user.address} />
                        </div>
                        <div className="space-y-3">
                            <ProfileDetail label="Email" value={user.email} />
                            <ProfileDetail label="Phone" value={user.phone} />
                            <ProfileDetail label="Member Since" value={user.memberSince} />
                        </div>
                    </div>
                </section>

                {/* Wallet Section */}
                <section className="bg-gray-800 rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-6 flex items-center">
                        <Wallet className="mr-3 text-green-400" size={28} />
                        Wallet
                    </h2>
                    <div className="flex items-center justify-between mb-6">
                        <div className="text-gray-400 flex items-center">
                            <CreditCard className="mr-2" size={24} />
                            Current Balance
                        </div>
                        <div className="text-3xl font-bold text-green-500">${user.balance.toFixed(2)}</div>
                    </div>

                    <TransactionTable transactions={transactions} />
                </section>

                {/* Tickets Section */}
                <section className="bg-gray-800 rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-6 flex items-center">
                        <TicketCheck className="mr-3 text-purple-400" size={28} />
                        Tickets
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {tickets.map(ticket => (
                            <TicketCard 
                                key={ticket.id} 
                                ticket={ticket} 
                                generateQRCode={generateQRCode} 
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

const ProfileDetail = ({ icon, label, value }) => (
    <div className="flex items-center text-gray-300">
        {icon}
        <span className="font-semibold mr-2">{label}:</span>
        <span>{value}</span>
    </div>
);

const TransactionTable = ({ transactions }) => (
    <div className="overflow-x-auto">
        <table className="w-full">
            <thead>
                <tr className="bg-gray-700 text-left">
                    {['Date', 'Description', 'Amount'].map(header => (
                        <th key={header} className="px-4 py-3 uppercase text-sm font-semibold">{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {transactions.map(transaction => (
                    <tr key={transaction.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                        <td className="px-4 py-3">{transaction.date}</td>
                        <td className="px-4 py-3">{transaction.description}</td>
                        <td className="px-4 py-3">
                            <span className={transaction.type === "Credit" ? "text-green-400" : "text-red-400"}>
                                {transaction.type === "Credit" ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const TicketCard = ({ ticket, generateQRCode }) => (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 max-w-sm mx-auto">
        {/* Header with Event Name */}
        <div className="bg-sky-600 text-white py-3 px-4 text-center">
            <h3 className="text-xl font-bold uppercase tracking-wider">{ticket.eventName}</h3>
        </div>

        {/* Ticket Body */}
        <div className="p-5 space-y-4">
            {/* Ticket Details */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <span className="text-xs text-gray-500 uppercase">Name</span>
                    <div className="font-semibold text-gray-800">{ticket.name}</div>
                </div>
                <div className="text-right">
                    <span className="text-xs text-gray-500 uppercase">Seat</span>
                    <div className="font-semibold text-gray-800">{ticket.seatNo}</div>
                </div>
            </div>

            {/* Event Details */}
            <div className="space-y-2 ">
                <div className="flex items-center text-gray-600">
                    <Calendar className="mr-2 text-red-600" size={20} />
                    <span>{ticket.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                    <MapPin className="mr-2 text-red-600" size={20} />
                    <span>{ticket.venue}</span>
                </div>
            </div>

            {/* QR Code */}
            <div className="pt-4 flex justify-center bg-gray-100 rounded-lg p-4">
                {generateQRCode(ticket.qrCode)}
            </div>
        </div>

        {/* Footer with Price */}
        <div className="bg-gray-100 py-3 px-4 flex justify-between items-center">
            <div className="text-sm text-gray-500">Price</div>
            <div className="font-bold text-green-600 text-lg">{ticket.price}</div>
        </div>

        {/* Decorative Tear */}
        <div className=" pb-10 absolute top-1/2 left-0 right-0 border-t-2 border-dashed border-gray-300 transform -translate-y-1/2"></div>
    </div>
);

export default ParticipantProfile;
