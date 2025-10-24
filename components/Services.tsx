"use client";

import { Truck, Flame, MessageSquare, Package, Shield, Clock } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Flame,
      title: "Premium Charcoal",
      description:
        "High-quality wood charcoal sourced from the finest natural hardwood. Our products are tasteless, odorless, and long-burning, perfect for both industrial and household applications.",
      features: [
        "Customizable sizes and shapes",
        "Superior density and consistency",
        "Eco-friendly and sustainable",
        "Competitive pricing",
      ],
      color: "from-secondary to-secondary-light dark:from-secondary-dark dark:to-secondary-light",
    },
    {
      icon: Truck,
      title: "Global Logistics",
      description:
        "Reliable shipping and distribution services ensuring your orders reach you safely and on time. We handle all export documentation and customs procedures for a seamless experience.",
      features: [
        "Worldwide shipping coverage",
        "Expert logistics handling",
        "Secure packaging",
        "Timely delivery guarantee",
      ],
      color: "from-primary to-primary-light dark:from-primary-dark dark:to-accent-dark",
    },
    {
      icon: MessageSquare,
      title: "Expert Consultation",
      description:
        "Professional guidance to help you choose the right charcoal products for your specific needs. Our team provides tailored solutions and ongoing support throughout your business journey.",
      features: [
        "Product recommendations",
        "Market insights",
        "Custom order planning",
        "Dedicated support team",
      ],
      color: "from-accent to-accent-dark dark:from-accent-dark dark:to-primary-light",
    },
  ];

  const additionalServices = [
    {
      icon: Package,
      title: "Quality Inspection",
      description: "Every package meticulously inspected for consistency",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Products that exceed industry standards",
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Efficient order fulfillment and quick turnaround",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-white dark:bg-neutral-surface-dark transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-text dark:text-neutral-text-dark mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent dark:from-primary-dark dark:to-accent-dark mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-subtext dark:text-neutral-subtext-dark max-w-2xl mx-auto">
            Comprehensive solutions for all your wood charcoal needs, from
            sourcing to delivery
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-neutral-light dark:bg-neutral-dark rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-neutral-border dark:border-neutral-border-dark"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-neutral-text dark:text-neutral-text-dark mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-subtext dark:text-neutral-subtext-dark mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-neutral-text dark:text-neutral-text-dark"
                    >
                      <svg
                        className="w-5 h-5 text-accent dark:text-accent-dark mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-br from-neutral-light to-white dark:from-neutral-dark dark:to-neutral-surface-dark rounded-2xl p-8 md:p-12 border border-neutral-border dark:border-neutral-border-dark">
          <h3 className="text-2xl md:text-3xl font-semibold text-neutral-text dark:text-neutral-text-dark mb-8 text-center">
            Why Choose Us
          </h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {additionalServices.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent dark:from-primary-dark dark:to-accent-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-text dark:text-neutral-text-dark mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-neutral-subtext dark:text-neutral-subtext-dark">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}