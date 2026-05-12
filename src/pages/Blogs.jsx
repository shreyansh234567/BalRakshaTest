function Blogs() {
    const stories = [
        {
            image: "https://balrakshabharat.org/wp-content/uploads/2026/04/18.png",
            title: "How to Make Your Donation More Effective:Tips For Fiorst Time Donors",
            description: "In today’s evolving giving landscape, donating has become more accessible and impactful than ever before...",
            link: "#",
        },
        {
            image: "https://balrakshabharat.org/wp-content/uploads/2026/04/4.png",
            title: "How NGOs Respond To Child Protection Emergencies In India ",
            description: "Introduction Child protection becomes critically important during emergency situations...",
            link: "#",

        },
        {

            image: "https://balrakshabharat.org/wp-content/uploads/2026/04/2.png",
            title: "Importance Of Digital Litreracy For Children In Rural India",
            description: "The current education system relies on technology more than ever before. Digital tools enable children to access knowledge...",
            link: "#",
        },
        {
            image: "https://balrakshabharat.org/wp-content/uploads/2026/04/6.png",
            title: "Importance Of Life Skills Education For Children In India",
            description: "Education today goes beyond textbooks and academic achievement. Children need practical abilities that help them navigate...",
            link: "#",

        },
    ]
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-2xl text-red-600 md:text-3xl  flex justify-center font-extrabold uppercase mb-10">
                    Blogs
                </h2>

                { /* Intro */}

                <p className="text-grey-700 text-sm leading-9 max-w-6xl mb-20">

                    The Bal Raksha Bharat blog brings to life how we are undeterred
                    to India's commitment to child welfare, child protection, and
                    empowerment. It provides a glimpse into the stories of children
                    who have seen their lives transform and communities uplifted.
                    These narratives will help readers learn how you can contribute
                    to creating bright futures.
                </p>

                {/* Cards*/}
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

            </div>
        </section>
    )
}

export default Blogs