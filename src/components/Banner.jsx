import Image from "next/image";
import { Search, BookOpen, Users, Clock } from "lucide-react";
import bannerImg from "../../public/assets/banner.svg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background Image */}
      <Image
        src={bannerImg}
        alt="StudySpot Banner"
        fill
        priority
        className="object-cover opacity-30"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />

      {/* Decorative Blur */}
      <div className="absolute -left-30 -top-30 h-80 w-[320px] rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute -bottom-37.5 -right-30 h-80 w-[320px] rounded-full bg-emerald-500/20 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center lg:px-10">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md">
          <BookOpen className="h-4 w-4 text-emerald-400" />
          <span className="text-sm text-gray-200">
            Smart Study Room Booking Platform
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Find Your Perfect
          <span className="bg-linear-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
            {" "}Study Spot
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
          Discover quiet, modern, and fully equipped study rooms for
          individual focus sessions, group discussions, and collaborative
          learning experiences.
        </p>

        {/* Search Box */}
        <div className="mt-10 w-full max-w-4xl rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
          <div className="grid gap-4 md:grid-cols-4">
            {/* Search Input */}
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Search study rooms..."
                className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none placeholder:text-gray-400 focus:border-indigo-500"
              />
            </div>

            {/* Capacity */}
            <div>
              <select className="h-14 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 text-gray-200 outline-none focus:border-indigo-500">
                <option>Capacity</option>
                <option>1-2 People</option>
                <option>2-4 People</option>
                <option>5-8 People</option>
              </select>
            </div>

            {/* Search Button */}
            <button className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 font-semibold transition hover:bg-indigo-700">
              <Search className="h-5 w-5" />
              Explore
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-indigo-600 px-8 py-4 text-sm font-semibold transition hover:bg-indigo-700 md:text-base">
            Explore Rooms
          </button>

          <button className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold backdrop-blur-md transition hover:bg-white/20 md:text-base">
            Add Your Room
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid w-full max-w-4xl gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/20">
              <BookOpen className="h-7 w-7 text-indigo-400" />
            </div>
            <h3 className="mt-4 text-3xl font-bold">120+</h3>
            <p className="mt-2 text-gray-300">Available Study Rooms</p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20">
              <Users className="h-7 w-7 text-emerald-400" />
            </div>
            <h3 className="mt-4 text-3xl font-bold">5K+</h3>
            <p className="mt-2 text-gray-300">Active Students</p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/20">
              <Clock className="h-7 w-7 text-orange-400" />
            </div>
            <h3 className="mt-4 text-3xl font-bold">24/7</h3>
            <p className="mt-2 text-gray-300">Flexible Booking Access</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
