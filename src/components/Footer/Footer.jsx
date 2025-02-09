import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Footer() {
    const GlassmorphicCard = ({ children, className = "" }) => (
        <div className={`bg-zinc-900 border border-zinc-700/50 shadow-lg ${className}`}>
            {children}
        </div>
    );

    const footerLinks = {
        Product: [
            { name: 'Features', path: '/product/features' },
            { name: 'Pricing', path: '/product/pricing' },
            { name: 'Integrations', path: '/product/integrations' },
        ],
        Company: [
            { name: 'About Us', path: '/company/about' },
            { name: 'Careers', path: '/company/careers' },
            { name: 'Press', path: '/company/press' },
        ],
        Support: [
            { name: 'Help Center', path: '/support/help-center' },
            { name: 'Contact', path: '/support/contact' },
            { name: 'Documentation', path: '/support/documentation' },
        ],
        Dashboards: [
            { name: 'Admin Dashboard', path: '/admin' },
            { name: 'Organizer Dashboard', path: '/organizerdashboard' },
            { name: 'User Profile', path: '/profile' },
        ],
    };

    return (
        <footer className="border-t border-zinc-700">
            <GlassmorphicCard className="rounded-none">
                <div className="container mx-auto px-6 py-8">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="mb-8 md:mb-0">
                            <div className="flex items-center">
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Rocket className="h-8 w-8 text-purple-500" />
                                </motion.div>
                                <span className="ml-2 text-xl font-bold text-white">PlanIt</span>
                            </div>
                            <p className="mt-4 text-zinc-400 max-w-sm">
                                Empowering event professionals with smart tools and global connections.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {Object.entries(footerLinks).map(([section, links], index) => (
                                <motion.div
                                    key={section}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <h3 className="text-white font-semibold mb-4">{section}</h3>
                                    <ul className="space-y-2">
                                        {links.map(({ name, path }, i) => (
                                            <li key={i}>
                                                <Link
                                                    to={path}
                                                    className="text-zinc-400 hover:text-purple-500 transition-colors"
                                                >
                                                    {name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-zinc-700">
                        <p className="text-center text-zinc-400">
                            © 2025 PlanIt. All rights reserved.
                        </p>
                    </div>
                </div>
            </GlassmorphicCard>
        </footer>
    );
}
