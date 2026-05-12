import React, { useState } from "react";

const awardsData = [
    {
        id: 1,
        image: "https://balrakshabharat.org/wp-content/uploads/2024/10/CSR-award.webp",
        title: "CSR Times Awards 2024",
        description: "Wins Silver for Best NGO in Rural Development and Infrastructure",
    },
    {
        id: 2,
        image: "https://balrakshabharat.org/wp-content/uploads/2024/10/Shark-award.webp",
        title: "ET Shark Awards 2024",
        description: "Wins Bronze in The Plants Projects",
    },
    {
        id: 3,
        image: "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/award1-2.webp",
        title: "Tuberculosis Support Appreciation",
        description: "Certificate of Appreciation for providing valuable support to People with TB.",
    },
    {
        id: 4,
        image: "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/award2-2.webp",
        title: "5th ICC Social Impact Awards 2023",
        description: "Runners up in Large Project category",
    },
    {
        id: 5,
        image: "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/award3-2.webp",
        title: "Radio City Delhi Icon Award 2023",
        description: "Youth Skilling and Vocational Training for Livelihoods",
    },
];

function AwardCard({ award }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="flex flex-col items-center text-center w-50">
            {/* Circular image with gold border */}
            <div
                className="rounded-full overflow-hidden transition-all duration-300"
                style={{
                    width: "170px",
                    height: "170px",
                    border: "5px solid #f5a623",
                    backgroundColor: "#fff",
                    flexShrink: 0,
                    transform: hovered ? "scale(1.07)" : "scale(1)",
                    boxShadow: hovered
                        ? "0 0 0 6px rgba(245,166,35,0.30)"
                        : "0 0 0 0px rgba(245,166,35,0)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = `https://placehold.co/148x148/1a6b7c/fff?text=Award`;
                    }}
                />
            </div>

            {/* Title */}
            <p className="mt-4 text-sm font-bold text-white leading-snug">
                {award.title}
            </p>

            {/* Description */}
            <p className="mt-1 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
                {award.description}
            </p>
        </div>
    );
}

export default function AwardsRecognitions() {
    return (
        <section className="py-16 px-4 md:px-8 bg-gray-50">
            <div className="max-w-8xl mx-auto">

                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-black uppercase mb-6 text-red-600">
                        Recent Awards & Recognitions
                    </h2>
                    <p className="max-w-5xl mx-auto text-gray-700 leading-8">
                        From allyship to health outreach, awards won continue to recognise
                        our unrelenting efforts to transform young lives. The ever-expanding
                        list of recognition for our work reflects our deepening national
                        footprint and impact - reaching and uplifting marginalized children
                        across cities to rural hinterlands. Strengthened by public support,
                        our quest to ensure India's future generations can thrive, continues.
                    </p>
                </div>

                {/* Teal Awards Strip */}
                <div
                    className="rounded-2xl py-12 px-6"
                    style={{ backgroundColor: "#2ab3b3" }}
                >
                    <div className="flex flex-wrap justify-center gap-8">
                        {awardsData.map((award) => (
                            <AwardCard key={award.id} award={award} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}