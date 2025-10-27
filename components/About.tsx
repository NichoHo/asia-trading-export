"use client";

import { Award, Globe, Leaf, Flame } from "lucide-react";
import dynamic from "next/dynamic";
import type { Settings } from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamic import to avoid SSR/hydration quirks with react-slick
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function About() {
  const features = [
    { icon: Flame, title: "Efficient Burning Power", description: "Coconut charcoal delivers consistent, long-lasting heat." },
    { icon: Award, title: "Customizable Shapes & Sizes", description: "Available in cubes, hexagonal, and briquette forms to suit your needs." },
    { icon: Globe, title: "Global Export Quality", description: "Trusted by clients worldwide for shisha, BBQ, and industrial applications." },
    { icon: Leaf, title: "Eco-Friendly & Sustainable", description: "Made from 100% coconut shells. Renewable, smokeless, and chemical-free." },
  ];

  const galleryImages = [
    { src: "/Coco_Charcoal1.jpg", alt: "Coconut shell charcoal briquettes" },
    { src: "/Coco_Charcoal2.jpg", alt: "Glowing coconut charcoal embers" },
    { src: "/Coco_Charcoal3.jpg", alt: "Packaged coconut charcoal for export" },
  ];

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: prefersReduced ? 0 : 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !prefersReduced,
    autoplaySpeed: 3500,
    arrows: false,
    fade: true, // keep fade for tablet/desktop
    swipe: true,
    initialSlide: 0,
    waitForAnimate: false,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    lazyLoad: "ondemand",
    adaptiveHeight: false, // prevents slick-track height creep
    responsive: [
      {
        breakpoint: 640, // mobile
        settings: {
          fade: false,    // fixes WebKit blank first slide
          dots: true,
          arrows: false,
          autoplaySpeed: 5000,
        },
      },
    ],
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-12 md:py-20 bg-neutral-light dark:bg-neutral-dark transition-colors duration-300 md:overflow-x-clip"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bold text-neutral-text dark:text-neutral-text-dark mb-4"
          >
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent dark:from-primary-dark dark:to-accent-dark mx-auto rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* Text Content */}
          <div className="space-y-4 md:space-y-6">
            <p className="text-base md:text-lg text-neutral-text dark:text-neutral-text-dark leading-relaxed">
              Asia Trading Export is a leading Indonesian manufacturer and exporter of premium coconut shell charcoal. With over
              20 years of experience, we specialize in producing eco-friendly, smokeless, and long-burning charcoal for shisha,
              BBQ, and industrial applications.
            </p>
            <p className="text-base md:text-lg text-neutral-text dark:text-neutral-text-dark leading-relaxed">
              Our expertise lies in delivering sustainable charcoal solutions to global partners across Asia, Europe, the Middle East,
              and North America. Every batch of our coconut charcoal is carefully inspected to ensure uniform density, high heat
              output, and low ash content for exceptional combustion performance.
            </p>
          </div>

          {/* Image Gallery */}
          <div className="relative px-2 sm:px-0">
            {/* Card wrapper; pb ensures dots never clash with badge */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl pb-12 sm:pb-10 z-0">
              {/* 1) Aspect-ratio spacer reserves the height */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]" />

              {/* 2) Slider fills reserved box */}
              <div
                className="
                  absolute inset-0 z-10
                  [&_.slick-list]:h-full
                  [&_.slick-track]:h-full
                  [&_.slick-slide]:h-full
                  [&_.slick-slide>div]:h-full
                "
              >
                <Slider {...sliderSettings}>
                  {galleryImages.map((img, i) => (
                    <div key={i} className="outline-none h-full">
                      <div className="relative w-full h-full">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          priority={i === 0}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
                          className="object-cover"
                          draggable={false}
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>

              {/* 3) Overlay below dots */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent z-0" />

              {/* 4) Badge IN THE IMAGE corner on all breakpoints */}
              <div
                className="
                  absolute z-30
                  bottom-3 left-3            /* mobile corner */
                  sm:bottom-4 sm:left-4      /* desktop/tablet corner */
                  bg-secondary dark:bg-secondary-dark text-white
                  px-5 py-4 sm:px-6 sm:py-5
                  rounded-xl shadow-xl text-center
                "
                role="note"
                aria-label="Over 20 years experience"
              >
                <div className="text-2xl sm:text-3xl font-bold leading-none">20+</div>
                <div className="text-xs sm:text-sm font-medium mt-1">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-neutral-surface-dark p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-neutral-border dark:border-neutral-border-dark h-full"
              >
                <div
                  className="w-12 h-12 bg-gradient-to-br from-primary to-accent dark:from-primary-dark dark:to-accent-dark rounded-lg flex items-center justify-center mb-4"
                  aria-hidden="true"
                >
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








