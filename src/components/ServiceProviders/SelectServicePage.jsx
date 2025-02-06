import React, { useState } from 'react';
import { User, Building2, UtensilsCrossed, Users, Briefcase, Calendar, Star, Flower, MicVocal, LucideSquareChevronUp, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const ServiceSelection = () => {
  const [selectedRole, setSelectedRole] = useState(null);
    const navigate = useNavigate();
  const roles = [
    {
      id: 'Caterers',
      title: 'Caterers',
      description: 'Plan and manage seamless events with ease',
      icon: UtensilsCrossed,
      accent: 'from-purple-600 to-purple-800'
    },
    {
      id: 'Decorators',
      title: 'Decorators',
      description: 'Execute flawless events with precision and expertise',
      icon: Flower,
      accent: 'from-purple-600 to-purple-800'
    },
    {
      id: 'Entertainment',
      title: 'Entertainment',
      description: 'Deliver essential services to elevate events',
      icon: MicVocal,
      accent: 'from-purple-600 to-purple-800'
    },
    {
      id: 'Security',
      title: 'Security',
      description: 'Engage and enjoy well-planned events',
      icon: Shield,
      accent: 'from-purple-600 to-purple-800'
    }
  ];
  const handleSubmit = (e) => {
    navigate(`/services/${selectedRole}`)
  };
  return (
    <div className="min-h-screen w-full bg-gray-900 p-6 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-100">
          Select Your Services Providers
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Select the service you need to integrate for your event management
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
                  bg-gray-800 hover:shadow-lg
                  ${selectedRole === role.id ? 'border-purple-500' : 'border-gray-700'}
                `}
              >
                <Icon className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  {role.title}
                </h3>
                <p className="text-sm text-gray-400 text-center">
                  {role.description}
                </p>

              </div>
            );
          })}
        </div>
        <div className='flex justify-center'>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-[20%] py-3 px-4 mt-5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all duration-200 shadow-md "
            onClick={(e)=>handleSubmit(e)}
          >
            Submit
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSelection;
