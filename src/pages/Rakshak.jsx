import React from "react";

// ==========================================
// DATA — Edit Only Here
// ==========================================
const sectionData = {
    heading: "OUR COMMITMENT TO BE THE RAKSHAKS OF CHILDREN'S FUTURE",

    introText: `
We invite you behind the scenes to witness the transformations made possible by donors like you. Through poignant video testimonials, you'll see the tangible impact your compassion has already made in the lives of underprivileged children in India.
Watch their eyes light up as they gain access to education, medical care, and safety — opportunities to learn, grow, and dream.
Hear them speak about their hopes for the future, fuelled by the chance you've given them. These are more than inspiring stories; they are glimpses into young lives infused with promise.
By contributing, you join a community devoted to nurturing India's next generation.
Browse through and discover how even the smallest act of kindness can plant seeds of change.
  `,

    // Video Banner Image
    videoThumbnail:
        "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/video-banner-cover.webp",

    // Youtube Link
    videoUrl: "https://www.youtube.com/watch?v=CKxOZpl1jDM",

    rightHeading:
        "Bal Raksha Bharat's Ongoing Mission to Empower 4 Million Children!",

    paragraphs: [
        `At Bal Raksha Bharat, we believe in creating a secure future by ensuring every child has a secure childhood. Our ongoing mission is to empower 4 million children.`,

        `India's children possess immense potential, yet they face numerous challenges and limited opportunities. We are dedicated to tailoring our support to meet their unique needs.`,

        `Join us in building a world where every child has access to equal opportunities and can grow with confidence.`,
    ],
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function CommitmentSection() {
    return (
        <section className="w-full bg-white py-16 md:py-24">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h2
                    className="
            text-center
            text-3xl
            md:text-3xl
            font-extrabold
            uppercase
            leading-tight
            text-red-600
          "
                >
                    OUR COMMITMENT TO BE THE RAKSHAKS OF
                    <br className="hidden md:block" />
                    CHILDREN'S FUTURE
                </h2>

                {/* Intro Text */}
                <p
                    className="
            mt-8
            text-center
            text-black
            text-base
            md:text-sm
            leading-9
            max-w-6xl
            mx-auto
          "
                >
                    {sectionData.introText}
                </p>

                {/* Main Content */}
                <div
                    className="
            mt-20
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-14
            items-center
          "
                >

                    {/* LEFT VIDEO IMAGE */}
                    <a
                        href={sectionData.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block rounded-2xl overflow-hidden shadow-xl"
                    >

                        {/* Thumbnail */}
                        <img
                            src={sectionData.videoThumbnail}
                            alt="Video Banner"
                            className="
                w-full
                h-full
                object-cover
              "
                        />

                        {/* Play Button */}
                        <div
                            className="
                absolute
                inset-0
                flex
                items-center
                justify-center
              "
                        >

                            <div
                                className="
                  w-24
                  h-24
                  rounded-full
                  bg-white/70
                  backdrop-blur-sm

                  flex
                  items-center
                  justify-center

                  shadow-lg
                "
                            >
                                <div
                                    className="
                    w-0
                    h-0
                    border-t-[18px]
                    border-t-transparent
                    border-b-[18px]
                    border-b-transparent
                    border-l-[28px]
                    border-l-gray-700
                    ml-2
                  "
                                />
                            </div>

                        </div>
                    </a>

                    {/* RIGHT CONTENT */}
                    <div>

                        {/* Right Heading */}
                        <h3
                            className="
                text-[#df2a13]
                text-3xl
                md:text-3xl
                font-bold
                leading-tight
              "
                        >
                            {sectionData.rightHeading}
                        </h3>

                        {/* Paragraphs */}
                        <div className="mt-8 space-y-6">

                            {sectionData.paragraphs.map((text, index) => (
                                <p
                                    key={index}
                                    className="
                    text-black
                    text-lg
                    md:text-[16px]
                    leading-10
                  "
                                >
                                    {text}
                                </p>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}