"use client";

export default function Hero() {
  const tags = ["#Import", "#ReliableShipping", "#BestProducts", "#Export"];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/container-ship.jpg')",
        }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark/80 via-neutral-dark/70 to-primary-dark/60 dark:from-neutral-dark/90 dark:via-neutral-dark/85 dark:to-primary-dark/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Delivering Quality Wood Charcoal Around The World
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-light/90 dark:text-neutral-text-dark/90 mb-12 leading-relaxed">
            Our high-quality hardwood charcoal burns faster, comes in customizable sizes, and is a top choice for industrial and household use thanks to its efficiency and affordability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-secondary dark:bg-secondary-dark text-white font-semibold rounded-lg hover:bg-secondary-light dark:hover:bg-secondary-light transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl text-center"
            >
              Get in Touch
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-center"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}