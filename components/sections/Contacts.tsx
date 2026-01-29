"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* LEFT SIDE – FORM */}
      <div className="flex items-center justify-center px-6 py-16 bg-[#fafafa]">
        <div className="w-full max-w-md">
          {/* Title */}
          <h2 className="text-4xl font-extrabold tracking-wide text-center">
            CONTACT US
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 my-6">
            <span className="w-16 h-px bg-black/40" />
            <span className="text-black/60">✦</span>
            <span className="w-16 h-px bg-black/40" />
          </div>

          {/* Subtitle */}
          <p className="text-center italic text-black/60 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>

          {/* Form */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-black/40 px-4 py-3 outline-none focus:border-black"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-black/40 px-4 py-3 outline-none focus:border-black"
            />

            <textarea
              placeholder="Write a message..."
              rows={4}
              className="w-full border border-black/40 px-4 py-3 outline-none focus:border-black resize-none"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-4 tracking-widest font-semibold hover:bg-black/90 transition"
            >
              SEND
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE – IMAGE */}
      <div className="relative hidden md:block">
        <Image
          src="/background/background4.jpg"
          alt="Office workspace"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
