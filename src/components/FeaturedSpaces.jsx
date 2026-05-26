"use client";

import Image from "next/image";
import {
    FaArrowRight,
    FaCalendarAlt,
    FaStar,
} from "react-icons/fa";

const FeaturedSpaces = () => {
    const spaces = [
        {
            id: 1,
            title: "Quiet Focus Room",
            image:
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
            price: "$5/hr",
            rating: "4.9",
            description:
                "Perfect for solo deep-focus sessions with quiet surroundings and modern facilities.",
        },
        {
            id: 2,
            title: "Collaboration Hub",
            image:
                "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
            price: "$8/hr",
            rating: "4.8",
            description:
                "Ideal for group discussions, brainstorming, and collaborative study activities.",
        },
        {
            id: 3,
            title: "Premium Study Suite",
            image:
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
            price: "$12/hr",
            rating: "5.0",
            description:
                "A premium environment equipped with advanced amenities for maximum productivity.",
        },
    ];

    return (
        <section className="bg-slate-50 px-4 py-20 dark:bg-slate-900 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">

                    <div className="max-w-2xl">

                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 dark:border-white/10 dark:bg-white/5">

                            <FaCalendarAlt className="text-indigo-500" />

                            <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                                Popular Study Spaces
                            </span>
                        </div>

                        <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl dark:text-white">
                            Explore Our
                            <span className="bg-linear-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent">
                                {" "}
                                Featured Rooms
                            </span>
                        </h2>

                        <p className="mt-5 text-base leading-7 text-slate-600 dark:text-gray-400 md:text-lg">
                            Discover beautifully designed study environments built for focus,
                            collaboration, and productivity.
                        </p>
                    </div>

                    {/* Button */}
                    <button className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
                        Explore All Rooms
                        <FaArrowRight />
                    </button>
                </div>

                {/* Cards */}
                <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {spaces.map((space) => (
                        <div
                            key={space.id}
                            className="
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                dark:border-white/10
                dark:bg-slate-950
              "
                        >

                            {/* Image */}
                            <div className="relative h-64 w-full overflow-hidden">

                                <Image
                                    src={space.image}
                                    alt={space.title}
                                    fill
                                    className="object-cover transition duration-500 hover:scale-110"
                                />

                                {/* Price Badge */}
                                <div className="absolute left-4 top-4 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                                    {space.price}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                {/* Rating */}
                                <div className="mb-4 flex items-center gap-2">
                                    <FaStar className="text-yellow-400" />
                                    <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                                        {space.rating} Rating
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                    {space.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-gray-400">
                                    {space.description}
                                </p>

                                {/* Button */}
                                <button className="mt-6 inline-flex items-center gap-2 font-semibold text-indigo-600 transition hover:gap-3 dark:text-indigo-400">
                                    View Details
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedSpaces;