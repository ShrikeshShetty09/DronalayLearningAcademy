"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Users, BookOpen, Video, ClipboardCheck, 
  Award, Monitor, Phone, ArrowRight, 
  CheckCircle, GraduationCap, MapPin, Eye, Lightbulb, Target
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
  {
    icon: Eye,
    title: "CCTV Surveillance",
    description: "Safe and secure learning environment with monitoring",
  },
  {
    icon: Target,
    title: "Parent Reporting",
    description: "Regular updates to parents about student progress",
  },
];

const courses = [
  { standard: "5th - 8th", subjects: ["Mathematics", "Science", "English", "All Subjects"] },
  { standard: "9th - 10th", subjects: ["Mathematics", "Science", "Board Preparation"] },
  { standard: "11th - 12th Science", subjects: ["Physics", "Chemistry", "Mathematics", "Biology"] },
  { standard: "JEE Foundation", subjects: ["Mathematics", "Physics", "Chemistry"] },
  { standard: "NEET Foundation", subjects: ["Physics", "Chemistry", "Biology"] },
  { standard: "CET Preparation", subjects: ["Complete Syllabus Coverage"] },
];

const classroomImages = [
  { src: "/content/classroom_pics/pic1.png", alt: "Classroom at Dronalay Learning Academy" },
  { src: "/content/classroom_pics/pic2.png", alt: "Students learning at Dronalay" },
];

const testImages = [
  { src: "/content/classroom_pics/test1.png", alt: "Weekly Test at Dronalay" },
  { src: "/content/classroom_pics/test2.png", alt: "Test Series at Dronalay" },
  { src: "/content/classroom_pics/test3.png", alt: "Assessment at Dronalay" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[70vh] overflow-hidden bg-primary">
        <Image
          src="/content/aboutus/about_hero.png"
          alt="About Dronalay Learning Academy"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* About Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Our <span className="text-primary">Story</span>
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
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-gray-600">Students Taught</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary">25</div>
                  <div className="text-gray-600">Students/Batch</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Vision */}
              <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="text-primary" size={24} />
                  <h3 className="font-bold text-xl text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600">
                  To be the leading educational institution that nurtures young minds, builds strong academic foundations, and prepares students for competitive examinations while instilling values of discipline and excellence.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="text-primary" size={24} />
                  <h3 className="font-bold text-xl text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-600">
                  To provide quality education through personalized attention, innovative teaching methods, and comprehensive study materials, ensuring every student achieves their academic goals and excels in their chosen path.
                </p>
              </div>

              {/* Values */}
              <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="text-primary" size={24} />
                  <h3 className="font-bold text-xl text-gray-900">Our Values</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {["Excellence", "Discipline", "Integrity", "Innovation", "Dedication", "Results"].map((value) => (
                    <div key={value} className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-600 text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
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
                src="/content/aboutus/features_image.png"
                alt="Our Features"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all hover:bg-primary hover:text-white group"
                >
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-white mb-3" />
                  <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-200 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="pt-20 pb-12 bg-white">
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
                key={course.standard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all border-t-4 border-primary"
              >
                <GraduationCap className="text-primary mb-3" size={32} />
                <h3 className="font-bold text-xl text-gray-900 mb-3">{course.standard}</h3>
                <div className="flex flex-wrap gap-2">
                  {course.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Classroom Images Section */}
      <section className="pt-12 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary">Classrooms</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern, air-conditioned classrooms with projector-based learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {classroomImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Tests Section */}
      <section className="pt-12 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Weekly <span className="text-primary">Tests</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Regular assessments to track progress and improve performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
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
              Ready to Join Dronalay?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Take the first step towards academic excellence. Contact us today for admissions.
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
