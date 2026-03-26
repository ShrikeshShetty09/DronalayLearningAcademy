"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, Phone } from "lucide-react";

export default function EnquiryPage() {
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
              <span>Enquiry</span> Form
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Have questions? We are here to help you with all the information you need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {submitted ? (
                  <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
                    <p className="text-gray-600 mb-6">
                      Your enquiry has been submitted successfully. Our team will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-primary font-semibold hover:underline"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us Your Enquiry</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Enter your full name"
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
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Standard <span className="text-red-500">*</span>
                          </label>
                          <select
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          >
                            <option value="">Select</option>
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
                            <option value="">Select</option>
                            <option value="SSC">SSC</option>
                            <option value="CBSE">CBSE</option>
                            <option value="ICSE">ICSE</option>
                          </select>
                        </div>
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
                          Your Enquiry <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          rows={4}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                          placeholder="Write your enquiry here..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-600 text-white py-4 rounded-lg font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2"
                      >
                        <Send size={20} />
                        Submit Enquiry
                      </button>
                    </form>
                  </div>
                )}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <a
                      href="tel:7744836803"
                      className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                    >
                      <Phone className="text-primary" />
                      <span>7744836803 / 8850156022</span>
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">Why Enquire?</h3>
                  <ul className="space-y-3">
                    {[
                      "Quick response within 24 hours",
                      "Free career counseling session",
                      "Information about fees and batch timings",
                      "Details about courses and subjects",
                      "Guidance for competitive exam preparation",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">WhatsApp Us</h3>
                  <p className="text-gray-600 mb-4">
                    For instant response, connect with us on WhatsApp
                  </p>
                  <a
                    href="https://wa.me/917744836803"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.755-.732-2.036-.732-.282 0-.486.149-.644.297-.162.149-.644.732-.793.903-.149.149-.297.186-.594.06-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">Our Location</h3>
                  <div className="rounded-xl overflow-hidden h-[250px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!4v1774523390935!6m8!1m7!1swo2UrNgYRRqjN0UnfhVWnw!2m2!1d18.97925648961672!2d73.1280663122594!3f232.87831090282427!4f5.570026649615883!5f1.13411524468886"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
