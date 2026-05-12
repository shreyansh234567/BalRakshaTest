import { useState } from "react";

function FieldsOfWork() {
    const [activeTab, setActiveTab] = useState("education");

    const tabs = [
        {
            id: "education",
            title: "EDUCATION",
            text: "text-cyan-600",
            hexColor: "#06b6d4",
            background: "bg-cyan-100",
            button: "bg-cyan-600",
            cardImg:
                "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/education.webp",
            image:
                "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/shiksha-tab.webp",
            heading: "SHIKSHA KI RAKSHA,\nBHAVISHYA ki RAKSHA!",
            description:
                "From early childhood to adolescence, quality education unlocks human potential. Bal Raksha Bharat (Save the Children, India) champions the cause of India's underserved since 2004, aligning inclusive learning with national ethos. Safe classrooms, girls' participation, digital access - their interventions remove barriers spanning from urban slums to rural communities. Uplifting over 80,000 students, we have seeded future innovation and powered sustainable solutions. Click here to learn more about its transformative impact on our children.",
        },
        {
            id: "health",
            title: "HEALTH",
            hexColor: "#ec4899",
            background: "bg-pink-100",
            button: "bg-pink-500",
            cardImg:
                "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/health.webp",
            image:
                "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/healthtab.webp",
            heading: "AROGYA KI RAKSHA,\nBHAVISHYA ki RAKSHA!",
            description:
                "Bal Raksha Bharat aims to guarantee healthcare and nutrition for children across India. Through awareness drives, health system strengthening, and tackling health issues, we aim to empower underserved communities that were once underserved through key partnerships with the Health Ministry and NITI Aayog to further access and support major schemes.",
        },
        {
            id: "resilience",
            title: "RESILIENCE",
            hexColor: "#eab308",
            background: "bg-yellow-100",
            button: "bg-yellow-500",
            cardImg:
                "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/resilience.webp",
            image:
                "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/reslietab.webp",
            heading: "TANAAV SE RAKSHA,\nBHAVISHYA ki RAKSHA!",
            description:
                "With climate change and disasters disproportionately impacting children, Bal Raksha Bharat (Save the Children India) strives to build their resilience through community-centred adaptation - from strengthening local governance and schools to providing green livelihoods and building technologies like early warning systems for communities.",
        },
        {
            id: "livelihood",
            title: "LIVELIHOOD",
            hexColor: "#22c55e",
            background: "bg-green-100",
            button: "bg-green-600",
            cardImg:
                "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/nutrition.webp",
            image:
                "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/nutritab.webp",
            heading: "POSHAN ki RAKSHA,\nBHAVISHYA RAKSHA!",
            description:
                "Despite progress, swathes of India's youth still confront poverty economic challenges, lacking pathways of empowerment. Since 2004, Bal Raksha Bharat has championed pertinent ways to upskilling women and girls and boosting the incomes of vulnerable families from rural communities.",
        },
        {
            id: "protection",
            title: "PROTECTION",
            hexColor: "#f97316",
            background: "bg-orange-100",
            button: "bg-orange-500",
            cardImg:
                "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/protection.webp",
            image:
                "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/protectiontab.webp",
            heading: "SHOSHAN SE RAKSHA,\nBHAVISHYA ki RAKSHA!",
            description:
                "As front-runners to safeguarding India's children from exploitation, Bal Raksha Bharat tirelessly fights trafficking, child labour, early marriage and more. From cementing legislation to system reforms, our interventions span awareness drives, psychosocial support, online safety training and beyond.",
        },
        {
            id: "humanitarian",
            title: "HUMANITARIAN",
            hexColor: "#a855f7",
            background: "bg-purple-100",
            button: "bg-purple-600",
            cardImg:
                "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/inclusion.webp",
            image:
                "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/inclutab.webp",
            heading: "SAMAANTA KI RAKSHA,\nBHAVISHYA ki RAKSHA!",
            description:
                "Since 2004, Bal Raksha Bharat has tirelessly worked to aid over 600,000 across 40+ emergencies as early responders- being the first to reach and last to leave. From cyclones to floods, our response includes providing supplies, rebuilding efforts and creating child-friendly spaces.",
        },
    ];

    const activeContent = tabs.find((tab) => tab.id === activeTab);

    return (
        <section className="py-20 bg-white">
            <div className="w-450 mx-auto px-6">

                {/* Heading */}
                <h2 className="text-red-600 text-4xl font-bold text-center mb-14">
                    OUR FIELDS OF WORK
                </h2>

                {/* Tabs - Card Style */}
                <div className="flex flex-wrap justify-center gap-15 mb-16">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                borderColor:
                                    activeTab === tab.id ? tab.hexColor : "transparent",
                            }}
                            className="cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-200 w-24 sm:w-28 bg-white shadow-sm hover:-translate-y-1"
                        >
                            <img
                                src={tab.cardImg}
                                alt={tab.title}
                                className="w-full aspect-square object-cover"
                            />
                            <div
                                style={{
                                    color: tab.hexColor,
                                }}
                                className="text-center text-xs font-bold py-1.5"
                            >
                                {tab.title}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className={`${activeContent.background} rounded-3xl p-8`}>
                    <div className="grid md:grid-cols-2 gap-14 items-center">

                        {/* Image */}
                        <div>
                            <img
                                src={activeContent.image}
                                alt={activeContent.title}
                                className="rounded-2xl w-full h-80 object-cover"
                            />
                        </div>

                        {/* Text */}
                        <div>
                            <h3
                                style={{ color: activeContent.hexColor }}
                                className="text-3xl font-bold whitespace-pre-line mb-6"
                            >
                                {activeContent.heading}
                            </h3>

                            <p className="text-black leading-8 mb-8">
                                {activeContent.description}
                            </p>

                            <button
                                className={`${activeContent.button} text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition`}
                            >
                                Know More
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default FieldsOfWork;
