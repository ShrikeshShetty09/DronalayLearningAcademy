"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook, Twitter } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Results", href: "/results" },
];

const courseLinks = [
  { name: "5th - 10th Standard", href: "/about" },
  { name: "11th - 12th Science", href: "/about" },
  { name: "JEE Foundation", href: "/about" },
  { name: "NEET Foundation", href: "/about" },
  { name: "CET Preparation", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/content/logo/logo.png"
                alt="Dronalay Learning Academy"
                width={50}
                height={50}
                className="h-12 w-auto bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="font-bold text-xl">Dronalay</h3>
                <p className="text-sm text-gray-300">Learning Academy</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dronalay Learning Academy is a premier coaching institute in Panvel, dedicated to providing quality education and building strong academic foundations for students from 5th to 12th standard.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Courses</h4>
            <ul className="space-y-2">
              {courseLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://maps.app.goo.gl/ZniG8QRPidcn4BQb9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                  <span>Shop No. 7 & 10, Rose Garden, Plot No. 35, Kalundre, Panvel, Navi Mumbai – 401206</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:7744836803"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  <Phone size={18} />
                  <span>7744836803 / 8850156022</span>
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">Follow Us</h5>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/dronalay_learning_academy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@akshaysirdronalay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="https://wa.me/917744836803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 p-2 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.755-.732-2.036-.732-.282 0-.486.149-.644.297-.162.149-.644.732-.793.903-.149.149-.297.186-.594.06-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Dronalay Learning Academy. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/enquiry" className="text-gray-300 hover:text-white transition-colors">
                Enquiry
              </Link>
              <Link href="/admission" className="text-gray-300 hover:text-white transition-colors">
                Admission
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
