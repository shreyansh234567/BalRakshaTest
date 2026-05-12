function SuccessStories() {
    const stories = [
        {
            image: "https://balrakshabharat.org/wp-content/uploads/2026/01/Thumbnail.png",
            title: "From Nagole To New Horizons: A Teen's Journey Of Leadership",
            description: "Abhishek has always wanted to help others, but Bal Raksha Bharat has given him the confidence and direction to do so...",
            link: "#",
        },
        {
            image: "https://balrakshabharat.org/wp-content/uploads/2025/11/Ram-Kumar-Thumbnail.png",
            title: "Ram Kumar's Journey: From Addiction To Social Change",
            description: "Change begins the moment you decide to fight your own battles — not with others, but within yourself...",
            link: "#",
        },
        {
            image: "https://balrakshabharat.org/wp-content/uploads/2025/10/story-thumbnail.png",
            title: "Nourishing The Future: Shadab's Path To Recovery And Hope",
            description: "Born on December 29, 2022, at the Community Health Center in Malhipur...",
            link: "#",
        },
        {
            image: "https://balrakshabharat.org/wp-content/uploads/2025/09/IMG_7911.png",
            title: "Breaking Barriers In Learning: The Story Of Ramya Madam",
            description: "At PMSHRI GHPS Channamanahalli, Ramanagara, TGT Teacher Ramya Paul is redefining the way children learn...",
            link: "#",
        },
    ];

    return (
        <section className="bg-white py-14">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-2xl text-red-600 md:text-3xl  flex justify-center font-extrabold uppercase mb-5">
                    Success Stories
                </h2>

                {/* Intro */}
                <p className="text-gray-700 text-sm leading-9 max-w-6xl mb-20">
                    Bal Raksha Bharat's interventions have empowered countless
                    marginalised children to transform their own lives. From the slums of
                    Delhi to remote rural reaches, we have witnessed stories of triumph
                    in the face of child marriage, poverty, health struggles and more.
                    The organisation's investment in instilling skills, mindsets,
                    and values is fuelling journeys to education, financial
                    independence and advocacy roles within communities.
                    Be it defeating poverty or combating chronic diseases,
                    success stories speak of incredible resilience and change
                    catalysed in the most vulnerable communities. These tales
                    of determination showcase how with the right support, the most
                    vulnerable can build futures of security, self-reliance, and dignity.
                    Bal Raksha Bharat continues to kindle their indomitable spirit,
                    seeding systemic transformation - one child at a time.
                </p>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stories.map((story, index) => (
                        <div
                            key={index}
                            className="bg-white text-red-600 rounded-2xl overflow-hidden  transition duration-300 flex flex-col"
                        >
                            {/* Image */}
                            <div className="overflow-hidden rounded-2xl">
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    className="w-full h-[250px] object-cover  transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold leading-8 mb-4">
                                    {story.title}
                                </h3>
                                <p className="text-gray-600 leading-7 text-sm flex-1">
                                    {story.description}
                                </p>

                                {/* ✅ button — a tag ki jagah */}
                                <button
                                    onClick={() => window.open(story.link, "_blank")}
                                    className="mt-6 bg-gray-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition"
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Button */}
                <div className="flex justify-center mt-16">
                    <button className="bg-red-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-red-500 transition duration-300">
                        Read More Stories
                    </button>
                </div>

            </div>
        </section>
    );
}

export default SuccessStories;