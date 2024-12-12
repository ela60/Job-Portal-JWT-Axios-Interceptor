import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/images.jfif';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/banner.webp';

const JobPortalSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 py-20 px-5">
      <div className="max-w-6xl mx-auto text-center text-white">
        <motion.h2
          className="text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Your Gateway to Career Success
        </motion.h2>
        <motion.p
          className="text-lg mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Explore endless job opportunities, gain career insights, and connect with top employers—all in one place.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            className="bg-white shadow-lg p-8 rounded-lg text-blue-600 hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img src={img1}alt="Search Jobs" className="h-42 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Search Jobs</h3>
            <p className="text-gray-700">
              Browse thousands of jobs tailored to your skills and interests and land your dream role.
            </p>
          </motion.div>
          <motion.div
            className="bg-white shadow-lg p-8 rounded-lg text-blue-600 hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img src={img2} alt="Career Guidance" className="h-42 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Career Guidance</h3>
            <p className="text-gray-700">
              Access expert resources to perfect your resume and ace your next interview.
            </p>
          </motion.div>
          <motion.div
            className="bg-white shadow-lg p-8 rounded-lg text-blue-600 hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img src={img3} alt="Connect with Employers" className="h-42 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Connect with Employers</h3>
            <p className="text-gray-700">
              Build connections with leading employers and showcase your talents effectively.
            </p>
          </motion.div>
        </div>
        <motion.button
          className="mt-12 bg-yellow-500 text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 hover:text-white transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Get Started Now
        </motion.button>
      </div>
    </section>
  );
};

export default JobPortalSection;
