"use client";

import React, { useState } from "react";
import Image from "next/image";
import MotorcycleIcon from "@/assets/motorcycle";
import ShoppingBagIcon from "@/assets/shopping-bag";

const Hero = () => {
  const [serviceType, setServiceType] = useState<"delivery" | "pickup">(
    "delivery"
  );
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="w-full bg-primary min-h-[600px] flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 lg:px-32 xl:px-40 pt-12 lg:py-0">
      <div className="flex-1 space-y-8 mb-8 lg:mb-0 lg:pr-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Are you starving?
        </h1>

        <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
          Within a few clicks, find meals that are accessible near you
        </p>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setServiceType("delivery")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                serviceType === "delivery"
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <MotorcycleIcon />
              <span>Delivery</span>
            </button>
            <button
              onClick={() => setServiceType("pickup")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                serviceType === "pickup"
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <ShoppingBagIcon />
              <span>Pickup</span>
            </button>
          </div>

          <form className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="What do you like to eat today?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-100 text-gray-900 placeholder-gray-500 pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-colors"
              />
            </div>
            <button
              type="submit"
              className="bg-secondary text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span>Find Meal</span>
            </button>
          </form>
        </div>
      </div>

      <div className="relative bottom-0 flex items-end self-end justify-end lg:justify-end mt-8 lg:mt-0 lg:pl-8">
        <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-2xl">
          <div className="relative w-full rounded-2xl overflow-hidden">
            <Image
              src="/hero-image-ramen.png"
              alt="hero image ramen"
              width={800}
              height={800}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
