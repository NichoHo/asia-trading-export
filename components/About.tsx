"use client";

import { Award, Globe, Leaf, Flame } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {
  const features = [
    {
      icon: Flame,
      title: "Efficient Burning Power",
      description: "Coconut charcoal delivers consistent, long-lasting heat.",
    },
    {
      icon: Award,
      title: "Customizable Shapes & Sizes",
      description: "Available in cubes, hexagonal, and briquette forms to suit your needs.",
    },
    {
      icon: Globe,
      title: "Global Export Quality",
      description: "Trusted by clients worldwide for shisha, BBQ, and industrial applications.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly & Sustainable",
      description: "Made from 100% coconut shells. Renewable, smokeless, and chemical-free.",
    },
  ];

  const galleryImages = [
    "/Coco_Charcoal1.jpg",
    "/Coco_Charcoal2.jpg",
    "/Coco_Charcoal3.jpg",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
  };

  return (
    <section
      id="about"
      className="py-20 bg-neutral-light dark:bg-neutral-dark transition-colors duration-300 overflow-x-clip"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-text dark:text-neutral-text-dark mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent dark:from-primary-dark dark:to-accent-dark mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-neutral-text dark:text-neutral-text-dark leading-relaxed">
              Asia Trading Export is a leading Indonesian manufacturer and exporter of premium coconut shell charcoal.
              With over 20 years of experience, we specialize in producing eco-friendly, smokeless, and long-burning charcoal for shisha, BBQ, and industrial applications.
            </p>
            <p className="text-lg text-neutral-text dark:text-neutral-text-dark leading-relaxed">
              Our expertise lies in delivering sustainable charcoal solutions to global partners across Asia, Europe, the Middle East, and North America. Every batch of our coconut charcoal is carefully inspected to ensure uniform density, high heat output, and low ash content for exceptional combustion performance.
            </p>
          </div>

          {/* Image Gallery */}
          <div className="relative px-6 sm:px-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Slider {...sliderSettings}>
                {galleryImages.map((src, i) => (
                  <div key={i}>
                    <img
                      src={src}
                      alt={`Gallery image ${i + 1}`}
                      className="w-full aspect-[16/9] sm:aspect-[4/3] object-cover"
                    />
                  </div>
                ))}
              </Slider>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-0 sm:-left-6 bg-secondary dark:bg-secondary-dark text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm font-medium">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-neutral-surface-dark p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-neutral-border dark:border-neutral-border-dark"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent dark:from-primary-dark dark:to-accent-dark rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-text dark:text-neutral-text-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-subtext dark:text-neutral-subtext-dark">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
