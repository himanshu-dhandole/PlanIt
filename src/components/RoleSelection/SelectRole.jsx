import React, { useState } from 'react';
import { User, Building2, UtensilsCrossed, Users, Briefcase, Calendar, Star } from 'lucide-react';

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      id: 'host',
      title: 'Event Host',
      description: 'Plan and manage seamless events with ease',
      icon: Calendar,
      accent: 'from-gray-100 to-gray-200'
    },
    {
      id: 'organizer',
      title: 'Event Organizer',
      description: 'Execute flawless events with precision and expertise',
      icon: Briefcase,
      accent: 'from-gray-100 to-gray-200'
    },
    {
      id: 'provider',
      title: 'Service Provider',
      description: 'Deliver essential services to elevate events',
      icon: Star,
      accent: 'from-gray-100 to-gray-200'
    },
    {
      id: 'participant',
      title: 'Attendee',
      description: 'Engage and enjoy well-planned events',
      icon: Users,
      accent: 'from-gray-100 to-gray-200'
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
          Select Your Role
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Choose the role that best describes your participation in the event management process.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <div
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`
                  p-6 rounded-lg shadow-md border
                  flex flex-col items-center justify-center
                  cursor-pointer transition-all duration-300
                  bg-white hover:shadow-lg
                  ${selectedRole === role.id ? 'border-gray-700' : 'border-gray-200'}
                `}
              >
                <Icon className="w-10 h-10 text-gray-700 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {role.title}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {role.description}
                </p>
                <button>Submit</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
