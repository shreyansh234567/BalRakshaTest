import React from "react";

// ==========================================
// DATA — sirf yahan edit karo
// ==========================================
const panels = [
    {
        id: 1,
        // Background image URL
        image: "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/ta-1-1.webp",
        imageAlt: "Donation organizations in India",

        // Button text + arrow icon URL
        buttonText: "Become a Supporter",
        arrowIcon: "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/arrow.png",

        // Where the button links to
        link: "https://balrakshabharat.org/support-children/",
    },
    {
        id: 2,
        image: "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/ta-4-1.webp",
        imageAlt: "Donate to children in need | Bal Raksha Bharat",

        buttonText: "Give one time or monthly",
        arrowIcon: "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/arrow.png",

        link: "https://balrakshabharat.org/donate/",
    },
];

// ==========================================
// SINGLE PANEL COMPONENT
// ==========================================
function ActionPanel({ panel }) {
    return (
        // Outer wrapper — position:relative so button can sit on top of image
        <div className="relative w-full md:w-1/2 overflow-hidden group">

            {/* ── Background Image (uses <img> tag, NOT bg-color) ── */}
            <img
                src={panel.image}
                alt={panel.imageAlt}
                loading="lazy"
                className="w-full h-[420px] object-cover block transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                    e.target.src = "https://placehold.co/800x420/cccccc/666666?text=Image";
                }}
            />

            {/* ── Dark overlay on hover ── */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

            {/* ── Button sits at bottom-left OVER the image ── */}
            <a
                href={panel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
          absolute bottom-7 left-7 z-10
          inline-flex items-center gap-3
          bg-black/70 hover:bg-[#e62a10]
          text-white font-bold text-sm tracking-wide
          px-5 py-3.5
          border border-white/25 hover:border-transparent
          backdrop-blur-sm
          transition-all duration-300
        "
            >
                {/* Button Text */}
                {panel.buttonText}

                {/* Arrow Icon — using img tag as per requirement */}
                <img
                    src={panel.arrowIcon}
                    alt="arrow"
                    className="w-5 h-5 object-contain"
                    onError={(e) => (e.target.style.display = "none")}
                />
            </a>

        </div>
    );
}

// ==========================================
// MAIN SECTION COMPONENT
// ==========================================
export default function TakeAction() {
    return (
        <section className="w-full">

            <h2 className=" text-red-600 text-4xl font-bold text-center mb-20 mt-20text-2xl text-red-600 md:text-3xl  flex justify-center font-extrabold uppercase mb-10">
                TAKE ACTION
            </h2>

            {/* Two panels side by side — stack on mobile */}
            <div className="flex  flex-col md:flex-row">
                {panels.map((panel) => (
                    <ActionPanel key={panel.id} panel={panel} />
                ))}


            </div>

        </section>
    );
}