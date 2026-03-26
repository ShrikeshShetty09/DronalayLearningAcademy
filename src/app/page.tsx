"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Users, BookOpen, Video, ClipboardCheck, 
  Award, Monitor, Phone, ArrowRight, 
  CheckCircle, GraduationCap, MapPin 
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Limited Batch Size",
    description: "Only 25 students per batch for personal attention and focused learning",
  },
  {
    icon: Award,
    title: "Experienced Faculty",
    description: "Dedicated and qualified teachers with proven track record",
  },
  {
    icon: BookOpen,
    title: "Handwritten Notes",
    description: "Comprehensive study materials provided for better understanding",
  },
  {
    icon: ClipboardCheck,
    title: "Weekly Test Series",
    description: "Regular assessments with performance tracking for improvement",
  },
  {
    icon: Monitor,
    title: "Digital Learning",
    description: "Projector-based teaching for enhanced visual learning",
  },
  {
    icon: Video,
    title: "Video Lectures",
    description: "Lecture videos on Instagram & YouTube for anytime revision",
  },
];

const courses = [
  { name: "5th - 10th Standard", subjects: "All Subjects" },
  { name: "11th - 12th Science", subjects: "Physics, Chemistry, Maths, Biology" },
  { name: "JEE Foundation", subjects: "Maths, Physics, Chemistry" },
  { name: "NEET Foundation", subjects: "Physics, Chemistry, Biology" },
  { name: "CET Preparation", subjects: "Complete Syllabus Coverage" },
];

const stats = [
  { number: "500+", label: "Students Taught" },
  { number: "25", label: "Students per Batch" },
  { number: "100%", label: "Pass Rate" },
  { number: "10+", label: "Years Experience" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-primary flex items-center justify-center">
          <Image
            src="/content/home/about_details.png"
            alt="Dronalay Learning Academy"
            fill
            className="object-contain sm:object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/75" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span>Dronalay</span>
              <br />
              <span className="text-3xl md:text-5xl">Learning Academy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Building Strong Foundations for Academic Excellence
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Premier coaching institute in Panvel for 5th to 12th standard students with specialized preparation for JEE, NEET & CET
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admission"
                className="bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl hover:scale-105"
              >
                Apply for Admission
              </Link>
              <Link
                href="/enquiry"
                className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl hover:scale-105"
              >
                Enquire Now
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center"
        >
          <p className="text-sm mb-2">Scroll Down</p>
          <div className="flex flex-col items-center gap-1">
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <svg className="w-6 h-6 animate-bounce delay-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About <span className="text-primary">Dronalay Learning Academy</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dronalay Learning Academy is a well-known coaching institute located in Panvel, Navi Mumbai, dedicated to providing quality education and strong academic support to students. The academy focuses on building a solid conceptual foundation through experienced faculty, modern teaching methods, and a disciplined learning environment.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To ensure personal attention and effective learning, each batch is limited to around 25 students, allowing teachers to closely monitor every student&apos;s progress. The academy provides handwritten notes, regular test series, and doubt-solving sessions to help students perform better in school and board examinations.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Dronalay Learning Academy also uses digital learning methods, including lecture videos shared through Instagram and YouTube, so students can revise concepts anytime. With structured teaching, continuous assessments, and regular communication with parents, the academy aims to help students achieve academic excellence.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
              >
                Learn More About Us <ArrowRight size={20} />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/content/home/students_interaction.png"
                alt="About Dronalay Learning Academy"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <GraduationCap size={40} />
                  <div>
                    <div className="text-2xl font-bold">5th - 12th</div>
                    <div className="text-sm">Standard Coaching</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-primary">Dronalay?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive learning experience with modern facilities and dedicated support
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/content/home/features_image.png"
                alt="Our Features"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all hover:bg-primary hover:text-white group"
                >
                  <feature.icon className="w-10 h-10 text-primary group-hover:text-white mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-200 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary">Courses</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive coaching programs designed for academic excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-primary"
              >
                <h3 className="font-bold text-xl text-gray-900 mb-2">{course.name}</h3>
                <p className="text-gray-600 mb-4">{course.subjects}</p>
                <Link
                  href="/enquiry"
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Enquire Now <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Have Questions?
              </h2>
              <p className="text-gray-200 mb-8 text-lg">
                Fill out the enquiry form and our team will get back to you with all the information you need about admissions, courses, and fees.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-400" />
                  <span>Quick Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-400" />
                  <span>Free Career Counseling</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-400" />
                  <span>Batch Timing Flexibility</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Enquiry Form</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Standard</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option value="">Select</option>
                      {[5,6,7,8,9,10,11,12].map(std => (
                        <option key={std} value={std}>{std}th Standard</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Board</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option value="">Select</option>
                      <option value="SSC">SSC</option>
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Enquiry</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Write your enquiry here..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-600 text-white py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
                >
                  Submit Enquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit <span className="text-primary">Our Academy</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Panvel, easily accessible from all parts of Navi Mumbai
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Our Address</h3>
                  <p className="text-gray-600">
                    Shop No. 7 & 10, Rose Garden,<br />
                    Plot No. 35, Kalundre,<br />
                    Panvel, Navi Mumbai – 401206
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <Phone className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Contact Numbers</h3>
                  <p className="text-gray-600">
                    <a href="tel:7744836803" className="hover:text-primary">7744836803</a><br />
                    <a href="tel:8850156022" className="hover:text-primary">8850156022</a>
                  </p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/ZniG8QRPidcn4BQb9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Get Directions <ArrowRight size={20} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1774523390935!6m8!1m7!1swo2UrNgYRRqjN0UnfhVWnw!2m2!1d18.97925648961672!2d73.1280663122594!3f232.87831090282427!4f5.570026649615883!5f1.13411524468886"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Join Dronalay Learning Academy today and take the first step towards academic excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admission"
                className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl"
              >
                Apply for Admission
              </Link>
              <a
                href="https://wa.me/917744836803"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.755-.732-2.036-.732-.282 0-.486.149-.644.297-.162.149-.644.732-.793.903-.149.149-.297.186-.594.06-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
