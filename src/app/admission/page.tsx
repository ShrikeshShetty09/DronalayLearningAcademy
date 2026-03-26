"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, Phone, MapPin, GraduationCap } from "lucide-react";

export default function AdmissionPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span>Admission</span> Form
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Take the first step towards academic excellence. Apply for admission today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                  Thank you for applying to Dronalay Learning Academy. Our team will review your application and contact you within 24-48 hours with further details.
                </p>
                <div className="bg-gray-50 rounded-xl p-4 mb-6 max-w-md mx-auto">
                  <p className="text-sm text-gray-600">
                    <strong>Next Steps:</strong> Our counselor will call you to discuss batch timings, fee structure, and other details.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary font-semibold hover:underline"
                >
                  Submit another application
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                  <GraduationCap className="text-primary" size={28} />
                  <h2 className="text-2xl font-bold text-gray-900">Student Admission Form</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Student Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Enter student's full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-4">Academic Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Standard <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        >
                          <option value="">Select Standard</option>
                          {[5, 6, 7, 8, 9, 10, 11, 12].map((std) => (
                            <option key={std} value={std}>
                              {std}th Standard
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Board <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        >
                          <option value="">Select Board</option>
                          <option value="SSC">SSC (Maharashtra Board)</option>
                          <option value="CBSE">CBSE</option>
                          <option value="ICSE">ICSE</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        >
                          <option value="">Select Subject</option>
                          <option value="all">All Subjects</option>
                          <option value="maths">Mathematics</option>
                          <option value="science">Science</option>
                          <option value="physics">Physics</option>
                          <option value="chemistry">Chemistry</option>
                          <option value="biology">Biology</option>
                          <option value="JEE">JEE Foundation</option>
                          <option value="NEET">NEET Foundation</option>
                          <option value="CET">CET Preparation</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          School Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Enter school name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-4">Additional Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last Year Percentage <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="e.g., 85%"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Residential Location <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Enter your area/locality"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Declaration */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <span className="text-sm text-gray-600">
                        I hereby declare that the information provided above is true and accurate to the best of my knowledge. I understand that providing false information may result in cancellation of admission.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-600 text-white py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Submit Application
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <Phone className="text-primary mb-3" size={24} />
                <h3 className="font-bold text-lg text-gray-900 mb-2">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  Contact us for any queries regarding admission process
                </p>
                <a
                  href="tel:7744836803"
                  className="text-primary font-semibold hover:underline"
                >
                  7744836803 / 8850156022
                </a>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <MapPin className="text-primary mb-3" size={24} />
                <h3 className="font-bold text-lg text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">
                  Shop No. 7 & 10, Rose Garden, Plot No. 35, Kalundre, Panvel, Navi Mumbai – 401206
                </p>
                <a
                  href="https://maps.app.goo.gl/ZniG8QRPidcn4BQb9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
