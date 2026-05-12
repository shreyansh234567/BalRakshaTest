import React from "react";

// ==========================================
// CAMPAIGN DATA — sirf yahan edit karo
// ==========================================
const campaigns = [
    {
        id: 1,
        image: "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/edu-camp.webp",
        title: "Every child deserves to learn. Help them thrive.",
        description:
            "Education empowers every future. Donate to Bal Raksha Bharat India and support quality learning for children everywhere. Together, let's ensure no child is left behind.",
        buttonLabel: "Donate Now",
        buttonIcon:
            "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/eduwht1.webp",
        buttonColor: "bg-cyan-400",   // Tailwind color class
        link: "/education-empowers/",
    },
    {
        id: 2,
        image: "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/donate.webp",
        title: "Join us in making a difference.",
        description:
            "Since 2004, we have partnered with the Government of India to empower over 10 million children. Your support allows us to reach even more children and ensure they can access a safe and nurturing environment.",
        buttonLabel: "Donate Now",
        buttonIcon:
            "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/genericwht.webp",
        buttonColor: "bg-pink-400",
        link: "/donate/",
    },
    {
        id: 3,
        image: "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/dona-two.webp",
        title: "Let's use technology to ignite young minds.",
        description:
            'Join us in creating vibrant learning hubs for children nationwide. Donate to the "Making Schools Smart" project and equip 50 schools with STEM labs and smart classrooms, fostering scientific thinking and empowering future generations.',
        buttonLabel: "Donate Now",
        buttonIcon:
            "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/donatwhite.webp",
        buttonColor: "bg-green-400",
        link: "/making-schools-smarter/",
    },
];

// ==========================================
// SINGLE CARD COMPONENT
// ==========================================
function CampaignCard({ campaign }) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col">

            {/* Card Image */}
            <img
                src={campaign.image}
                alt={campaign.title}
                className=" px-4 py-4  w-100 h-62 object-cover "
                loading="lazy"
                onError={(e) => {
                    e.target.src = "https://placehold.co/400x208/eeeeee/999999?text=Campaign";
                }}
            />

            {/* Card Body */}
            <div className="p-5 flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
                    {campaign.title}
                </h3>
                <p className="text-sm text-gray-900 leading-relaxed">
                    {campaign.description}
                </p>
            </div>

            {/* Donate Button */}
            <a
                href={campaign.link}
                className={`flex items-center justify-center px-5 py-4 text-white font-bold text-xl tracking-wide ${campaign.buttonColor} hover:opacity-90 transition-opacity`}
            >
                {campaign.buttonLabel}
                <img
                    src={campaign.buttonIcon}
                    alt="icon"
                    className="w-9 h-9 object-contain"
                    onError={(e) => (e.target.style.display = "none")}
                />
            </a>

        </div>
    );
}

// ==========================================
// MAIN SECTION COMPONENT
// ==========================================
export default function OngoingCampaigns() {
    return (
        <section className="bg-gray-100 py-16 px-4 md:px-8">

            {/* Section Heading */}
            <h2 className="text-center text-2xl md:text-3xl uppercase font-black text-red-600 mb-10">
                ONGOING CAMPAIGNS WHICH NEED YOUR SUPPORT
            </h2>

            {/* Cards Grid — 1 col mobile, 3 col desktop */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {campaigns.map((campaign) => (
                    <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
            </div>

        </section>
    );
}