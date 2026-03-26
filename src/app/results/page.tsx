"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, Star, Award, ArrowRight } from "lucide-react";

const topperResults = [
  {
    image: "/content/result/result1.png",
    name: "Top Performers",
    year: "2024",
    description: "Outstanding academic achievements by our students",
  },
  {
    image: "/content/result/result2.png",
    name: "Board Toppers",
    year: "2024",
    description: "Students excelling in board examinations",
  },
];

const achievements = [
  { number: "95%", label: "Pass Rate", icon: Trophy },
  { number: "50+", label: "Board Toppers", icon: Star },
  { number: "100+", label: "Distinctions", icon: Award },
  { number: "90%", label: "First Class", icon: Trophy },
];

const testimonials = [
  {
    name: "Parent of SSC Student",
    text: "Dronalay has been instrumental in my child's academic growth. The personal attention and regular updates about progress helped us stay involved.",
    rating: 5,
  },
  {
    name: "HSC Science Student",
    text: "The faculty here is exceptional. They made complex concepts easy to understand and the test series really helped in board preparation.",
    rating: 5,
  },
  {
    name: "JEE Foundation Student",
    text: "Best coaching for JEE foundation. The structured approach and doubt-solving sessions gave me confidence for competitive exams.",
    rating: 5,
  },
];

export default function ResultsPage() {
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
              Our <span>Results</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Celebrating the success of our students and their academic achievements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{item.number}</div>
                <div className="text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Topper Images Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary">Top Performers</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Students who have achieved excellence in their academic journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {topperResults.map((result, index) => (
              <motion.div
                key={result.image}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="relative h-80">
                  <Image
                    src={result.image}
                    alt={result.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {result.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{result.name}</h3>
                  <p className="text-gray-600">{result.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What <span className="text-primary">Parents & Students</span> Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our community about their experience with Dronalay
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See Our <span className="text-primary">Google Reviews</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Read authentic reviews from parents and students on Google
            </p>
            <a
              href="https://maps.app.goo.gl/ZniG8QRPidcn4BQb9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-xl"
            >
              View Google Reviews <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Be Our Next Success Story
            </h2>
            <p className="text-gray-200 mb-8">
              Join Dronalay and achieve your academic goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admission"
                className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-xl"
              >
                Apply for Admission
              </Link>
              <Link
                href="/enquiry"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Enquire Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
