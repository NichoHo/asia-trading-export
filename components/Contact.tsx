"use client";

import { Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/containers.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary-dark/80 to-accent/75 dark:from-primary-dark/90 dark:via-neutral-dark/85 dark:to-accent-dark/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Do Business Together
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Let's forge a path of success together through collaborative business endeavors.
          </p>

          {/* Phone and Button Row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Phone Number */}
            <div className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <a 
                href="tel:+6287872861273"
                className="text-xl md:text-2xl font-semibold hover:text-white/80 transition-colors"
              >
                +62 878 7286 1273
              </a>
            </div>

            {/* Contact Us Button */}
            <a
              href="https://wa.me/6287872861273"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white text-primary dark:text-primary-dark font-semibold rounded-lg hover:bg-neutral-light transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}