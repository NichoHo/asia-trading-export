"use client";

import { useState } from "react";
import Slider from "react-slick";
import { Flame, Package, Coffee, Images } from "lucide-react";

type CategoryKey = "briquette" | "coconut" | "shisha";

// Define the structure of gallery items
interface GalleryItem {
  type: "image" | "video";
  src: string;
}

const categoryMeta: Record<
  CategoryKey,
  { name: string; icon: React.ElementType; desc: string }
> = {
  briquette: {
    name: "Briquette Charcoal",
    icon: Package,
    desc: "High-density briquettes for consistent heat, long burn, and minimal ash—ideal for grilling and hookah.",
  },
  coconut: {
    name: "Coconut Charcoal",
    icon: Flame,
    desc: "100% coconut shell charcoal—eco-friendly, smokeless, odorless, and long-lasting with stable heat.",
  },
  shisha: {
    name: "Shisha Charcoal",
    icon: Coffee,
    desc: "Clean, even heat tailored for shisha/hookah with easy ignition and low ash for a smooth session.",
  },
};

// ✅ You can now use both images and videos
const galleries: Record<CategoryKey, GalleryItem[]> = {
  briquette: [
    { type: "image", src: "products/BriquetteCharcoal1.jpg" },
    { type: "image", src: "products/BriquetteCharcoal2.jpg" },
    { type: "video", src: "products/BriquetteCharcoal3.mp4" },
  ],
  coconut: [
    { type: "image", src: "products/CoconutCharcoal1.jpg" },
    { type: "video", src: "products/CoconutCharcoal2.mp4" }, 
    { type: "image", src: "products/CoconutCharcoal3.jpg" },
  ],
  shisha: [
    { type: "image", src: "products/ShishaCharcoal1.jpg" },
    { type: "image", src: "products/ShishaCharcoal2.jpg" },
    { type: "image", src: "products/ShishaCharcoal3.jpg" },
  ],
};

export default function Products() {
  const [active, setActive] = useState<CategoryKey>("coconut");

  const sliderSettings: Slider["props"] = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
  };

  const categories: CategoryKey[] = ["briquette", "coconut", "shisha"];
  const ActiveIcon = categoryMeta[active].icon;

  return (
    <section
      id="products"
      className="pt-28 pb-16 bg-neutral-50 dark:bg-neutral-surface-dark transition-colors duration-300 scroll-mt-28"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-text dark:text-neutral-text-dark mb-4">
            Our Products
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent dark:from-primary-dark dark:to-accent-dark mx-auto rounded-full mb-5" />
          <p className="text-base md:text-lg text-neutral-subtext dark:text-neutral-subtext-dark max-w-2xl mx-auto">
            Browse our charcoal range. Pick a category below to view images or
            videos you can scroll through.
          </p>
        </div>

        {/* Category Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {categories.map((key) => {
            const { name, icon: Icon } = categoryMeta[key];
            const isActive = active === key;
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`group w-full rounded-xl border p-4 text-left transition-all ${
                  isActive
                    ? "border-primary dark:border-primary-dark bg-neutral-light dark:bg-neutral-dark shadow-sm"
                    : "border-neutral-border dark:border-neutral-border-dark hover:border-primary/60 bg-white dark:bg-neutral-dark/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg p-2 bg-gradient-to-br from-primary to-accent dark:from-primary-dark dark:to-accent-dark text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base text-neutral-text dark:text-neutral-text-dark">
                      {name}
                    </p>
                    <p className="text-xs text-neutral-subtext dark:text-neutral-subtext-dark">
                      Click to view gallery
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Summary */}
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-lg p-2 bg-neutral-light dark:bg-neutral-dark border border-neutral-border dark:border-neutral-border-dark">
            <ActiveIcon className="w-4 h-4 text-primary dark:text-primary-light" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-text dark:text-neutral-text-dark">
              {categoryMeta[active].name}
            </h2>
            <p className="text-sm text-neutral-subtext dark:text-neutral-subtext-dark">
              {categoryMeta[active].desc}
            </p>
          </div>
        </div>

        {/* Image/Video Slider */}
        <div className="rounded-xl overflow-hidden border border-neutral-border dark:border-neutral-border-dark bg-neutral-light dark:bg-neutral-dark p-2 shadow-sm">
          {galleries[active].length ? (
            <Slider {...sliderSettings}>
              {galleries[active].map((item, i) => (
                <div key={i} className="px-1">
                  <div className="relative w-full overflow-hidden rounded-xl">
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-60 sm:h-72 md:h-80 lg:h-[30rem] object-cover rounded-xl"
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={`${categoryMeta[active].name} ${i + 1}`}
                        className="w-full h-60 sm:h-72 md:h-80 lg:h-[30rem] object-cover rounded-xl"
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="p-10 text-center text-neutral-subtext dark:text-neutral-subtext-dark">
              <Images className="w-6 h-6 inline-block mr-2" />
              No media yet for this category.
            </div>
          )}
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <a
            href="/#services"
            className="text-sm text-primary dark:text-primary-light hover:underline"
          >
            ← Back to Services
          </a>
        </div>
      </div>
    </section>
  );
}



