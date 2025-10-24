"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: Phone,
      text: "+62 878 7286 1273",
      href: "https://wa.me/6287872861273",
    },
    {
      icon: MapPin,
      text: "Jakarta, Indonesia",
      href: null,
    },
  ];

  return (
    <footer className="bg-neutral-dark dark:bg-neutral-dark border-t border-neutral-border-dark">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-4 sm:gap-8 md:gap-12 lg:gap-24 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Asia Trading Export
            </h3>
            <p className="text-neutral-subtext-dark mb-6 leading-relaxed">
              Leading Indonesia coconut charcoal supplier, delivering premium
              products to global markets with commitment to quality and
              exceptional service.
            </p>
          </div>

          {/* Contact Info (Right Side) */}
          <div className="md:justify-self-end">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <li key={index} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-primary-dark flex-shrink-0 mt-0.5" />
                    {info.href ? (
                      <a
                        href={info.href}
                        target={
                          info.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-neutral-subtext-dark hover:text-primary-dark transition-colors duration-300"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-neutral-subtext-dark">
                        {info.text}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-border-dark">
        <div className="flex justify-center items-center">
            <p className="text-neutral-subtext-dark text-sm text-center">
            © {currentYear} Asia Trading Export. All rights reserved.
            </p>
        </div>
        </div>
      </div>
    </footer>
  );
}
