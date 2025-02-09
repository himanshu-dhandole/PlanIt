import React from 'react';
import { ChevronRight, Calendar, MapPin, Users, Clock, Star, Shield, MessageSquare, Image, ArrowRight, Mail, PhoneCall, HelpCircle, CheckCircle, Globe, Zap, Share2, Heart, Award, Camera, CalendarCheckIcon, CalendarCheck2Icon, BrainCircuit, UserRoundCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-black via-slate-900 to-slate-800 text-white">
      {/* Hero Section - Full Viewport */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl animate-pulse delay-2000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative">
          <div className="space-y-8 text-center">
            {/* <div className="inline-flex items-center px-6 py-2 bg-purple-900/50 backdrop-blur-sm rounded-full text-purple-300 font-medium border border-purple-700/50">
              <Star className="w-4 h-4 mr-2" />
              ajj konse color chaddi pehni hai
            </div> */}
            <h1 className="pt-24 text-7xl font-bold tracking-tight leading-tight">
              Where Vision Meets
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
                Perfect Execution
              </span>
            </h1>
            <p className="text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Transform your events from concept to reality with PlanIt's comprehensive suite of planning tools and expert support.
            </p>
            <div className="flex justify-center gap-6 pt-8">
              <button className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-all shadow-lg shadow-purple-500/25">
                <Link to="/organizer">
                Start Planning
                </Link>
                <ChevronRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-medium border border-white/10 hover:bg-white/10 transition-all">
                <Link to="/login">
                  Get Started
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Full Viewport */}
      <section className="min-h-screen relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything you need to create unforgettable events, all in one platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: UserRoundCheck, title: 'Customer Satisfaction', description: 'Not satisfied? Get a 10% refund.', color: 'from-purple-500 to-indigo-500' },
              { icon: Zap, title: 'Instant Booking', description: 'Real-time availability and confirmations', color: 'from-indigo-500 to-blue-500' },
              { icon: Users, title: 'Team Collaboration', description: 'Work seamlessly with your entire event team', color: 'from-blue-500 to-purple-500' },
              { icon: Shield, title: 'Secure Payments', description: 'Protected transactions and fraud prevention', color: 'from-purple-500 to-blue-500' },
              { icon: CalendarCheck2Icon , title: 'Event Hosting', description: 'Self-host or hire a professional firm.', color: 'from-indigo-500 to-purple-500' },
              { icon: BrainCircuit, title: 'AI based Event Planning', description: 'Share details, and AI plans for you.', color: 'from-blue-500 to-indigo-500' }
            ].map(({ icon: Icon, title, description, color }) => (
              <div key={title} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-xl" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-slate-600/50 transition-all">
                  <div className={`bg-gradient-to-r ${color} p-3 rounded-2xl w-fit mb-6`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-2xl mb-4">{title}</h3>
                  <p className="text-slate-400 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="min-h-screen py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Trusted by Event Professionals
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Join thousands of successful event planners who have transformed their business with PlanIt
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Wedding Planner', quote: 'PlanIt has revolutionized how I manage my events. The automated tools save me hours of work.' },
              { name: 'Michael Chen', role: 'Corporate Event Manager', quote: 'The virtual tours feature has been a game-changer for our international clients.' },
              { name: 'Emma Davis', role: 'Festival Organizer', quote: 'The team collaboration tools make coordinating large-scale events so much easier.' }
            ].map(({ name, role, quote }) => (
              <div key={name} className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                    <span className="text-lg font-bold">{name[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{name}</h4>
                    <p className="text-slate-400">{role}</p>
                  </div>
                </div>
                <p className="text-slate-300 italic">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;