import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import apiClient from './ApiClient';

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const signup = async ({ email, password }) => {
    // try {
    //   const response = await apiClient.post(`${import.meta.env.BASE_URL}/auth/signup`, { email, password });
    //   const accessToken = await response.data.data.accessToken;
    //   console.log("accessToken", accessToken);
    //   if (!accessToken) {
    //     setError("Invalid email or password");
    //     navigate('/signup');
    //   }
    //   localStorage.setItem('accessToken', accessToken);
    //   if (accessToken) {
    //     navigate('/');
    //   }
    // } catch (error) {
    //   console.error(error);
    //   setError('Invalid credentials. Please try again.');
    // }
    console.log("signup")
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-gray-800 shadow-lg rounded-3xl overflow-hidden border border-gray-700"
      >
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-5/12 p-8 bg-gradient-to-b from-gray-700 to-gray-800 flex flex-col justify-center">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-center lg:text-left">
              <h1 className="text-3xl font-bold text-white mb-4">PlanIt</h1>
              <h2 className="text-xl font-semibold text-gray-300 mb-4">Create Account</h2>
              <p className="text-gray-400 mb-6">
                Join our community of professionals.
              </p>
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link to="/login" className="text-purple-400 hover:underline font-medium">
                  Sign In
                </Link>
              </p>
            </motion.div>
          </div>

          <div className="lg:w-7/12 p-8">
            {error && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-center mb-4">
                {error}
              </motion.p>
            )}

            <form onSubmit={handleSubmit(signup)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">Full Name</label>
                <input
                  {...register("name", {
                    required: "Name is required"
                  })}
                  className="w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 text-gray-200 focus:border-purple-500 focus:ring-purple-500 focus:ring-1 focus:bg-gray-800 transition-all duration-200 "
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">Email</label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                  })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 focus:border-purple-500 focus:ring-purple-500 focus:ring-1 focus:bg-gray-800 transition-all duration-200"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">Password</label>
                <input
                  {...register("password", { required: true })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-200 focus:border-purple-500 focus:ring-purple-500 focus:ring-1 focus:bg-gray-800 transition-all duration-200"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 px-4 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all duration-200 shadow-md"
              >
                signup
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
