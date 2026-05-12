import React from "react";

// ==========================================
// DATA — edit only here
// ==========================================
const donorCards = [
    {
        id: 1,
        // Person image URL
        image:
            "https://balrakshabharat.org/wp-content/uploads/2025/04/Bhavesh-N-Parmar.png",
        name: "Bhavesh N. Parmar",
        location: "Gujarat",
        message: `
                  I truly appreciate Bal Raksha Bharat for the incredible work they do in
                  standing up for those in need. It’s heartening to see how small acts of
                  kindness can bring real change.
                When each of us contributes in our own way, we help build a more caring and united world.
                 Thank you to the entire team for your dedication to this beautiful cause.
                  Jai Hind, Jai Bharat!`,
    },

    {
        id: 2,
        // Person image URL
        image:
            "https://balrakshabharat.org/wp-content/uploads/2025/04/Pola-Venkatappaiah.png",
        name: "Pola venkatappaiah",
        location: "Telangana",

        message: `
                It’s a simple contribution from my end, but it brings me immense happiness and fulfillment.
                  I truly admire the heartfelt efforts of your organization in uplifting children in need.
                    Your selfless service is inspiring, and I hope more people come forward to support this cause.
                   Wishing Bal Raksha Bharat continued strength and success in the wonderful work you do.`,
    },
];

// ==========================================
// SINGLE CARD
// ==========================================
function DonorCard({ donor }) {
    return (
        <div
            className=" relative bg-[#f4f4f4] rounded-[28px] shadow-md px-12 pt-24  pb-16 text-center overflow-hidden">

            {/* Top Image */}
            <div
                className=" absolute top-0 left-1/2 -translate-x-1/2 z-10" >
                <img
                    src={donor.image}
                    alt={donor.name}
                    className="  w-40 h-40 rounded-full object-cover border-[8px] border-[#ece7e3] shadow-lg"
                />
            </div>

            {/* Opening Quote */}
            <span
                className=" absolute left-8 top-40 text-[90px] text-gray-500 font-bold leading-none " >
                &ldquo;
            </span>

            {/* Stars */}
            <div className="flex justify-center gap-1 mt-6 mb-8 mt-20">
                {Array.from({ length: 5 }).map((_, i) => (
                    <span
                        key={i}
                        className="text-[#f4a300] text-2xl"
                    >
                        ★
                    </span>
                ))}
            </div>

            {/* Message */}
            <p
                className=" text-sm leading-8 text-[#222] italic max-w-[90%] mx-auto whitespace-pre-line  ">
                {donor.message}
            </p>

            {/* Name */}
            <h3
                className=" mt-7 text-[24px] font-bold text-[#111]">
                {donor.name}
            </h3>

            {/* Location */}
            <p
                className=" text-base italic text-[#222] mt-1" >
                {donor.location}
            </p>

            {/* Cloging Quote */}
            <span
                className=" absolute right-6 bottom-2 text-[90px] text-gray-500 font-bold leading-none" >
                &ldquo;
            </span>
        </div>
    );
}

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function DonorSaysSection() {
    return (
        <section className="bg-[#f5f5f5] py-20 px-6">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <h2
                    className=" text-center text-[#df2a13] text-2xl md:text-3xl font-black uppercase tracking-wide ">
                    What Donor Says
                </h2>

                {/* Intro Text */}
                <p
                    className=" text-center text-[#111] text-sm leading-[2] max-w-6xl mx-auto mt-10 mb-28">
                    Donors across the country share our commitment to providing every child
                    with a safe and nurturing environment. Here, you can read inspiring
                    words written by people like you about how they value investing in
                    underprivileged children and showing them a brighter future.Through
                    their words, you will discover that every rupee and every person matter
                    in our common journey towards a better tomorrow.
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {donorCards.map((donor) => (
                        <DonorCard key={donor.id} donor={donor} />
                    ))}

                </div>
            </div>
        </section>
    );
}