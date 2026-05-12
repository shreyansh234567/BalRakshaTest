import { useState } from "react";

function AboutSection() {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="bg-[#f8e3e8] py-20 px-6 md:px-20">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-pink-300 mb-10">
                    BAL RAKSHA, BHAVISHYA RAKSHA
                </h2>

                {/* Paragraphs */}
                <div className="space-y-4 text-black text-sm leading-9">
                    <p>
                        At Bal Raksha Bharat (also known as Save the Children), nurturing
                        children is nurturing the promise of India. Since 2004, we have made
                        it our mission to transform childhood landscapes nationwide through
                        compassion, care and relentless efforts.We are steadfast in our resolve
                        to help the children of India build a Secure Childhood and thus a Secure Future.
                    </p>

                    <p>
                        Our approach at Bal Raksha Bharat is HOLISTIC as we address
                        numerous aspects of childhood: access to health and nutrition,
                        quality education, protection from harm, supporting with
                        psychosocial needs and driving a well-rounded development of
                        children. Protection from exploitation and access to equal opportunities
                        help children thrive as architects of the nation's future.
                    </p>

                    {/* Hidden Content */}
                    {showMore && (
                        <>
                            <p>
                                We, at Bal Raksha Bharat, pledge to make every impact holistic for India's children - but we cannot walk alone, because shaping young lives cannot happen in isolation. It calls for unified effort from communities, government and supporters. Collaborating with on-ground workers, policymakers and donors, we build an ecosystem where children can flourish.
                            </p>

                            <p>
                                In 15 years, we have touched lives of over 1 crore young children through our outreach programmes. Between April 2022 and March 2023, we provided 13.8 lakh children across 15 states with resources, support and opportunities to build a childhood they can cherish. Right from the inception of our work, we have been working right in the middle of communities, understanding ground realities, and engineering every initiative based on their unique needs. Be it facilitating access to healthcare, bridging gaps in education or providing crucial humanitarian aid during emergencies - we cater to every aspect of child welfare. Beyond short-term relief, we also empower families and communities to be more resilient in the face of adversities.
                            </p>

                            <P>
                                In 2022-23, our education programs assisted over 3.3 lakh children. Healthcare support was provided to 3.4 lakh children. Our humanitarian drives reached over 6.2 lakh children in disaster-hit zones with urgent aid and long-term rehabilitation. We aided communities during COVID-19, cyclones, provided relief to migrant workers and facilitated vaccination access. Each milestone fuels our conviction that we can transform childhood with compassion, care and unity.
                            </P>

                            <P>
                                Over the years, through our groundwork, we have cultivated strong ties with communities, government bodies, our donors and support to build an enabling ecosystem through which children can benefit. Whether it is listening to community needs, co-designing localised initiatives, contributing towards shaping of national policy through insights and research, and forging partnerships: all of this in pursuit of ushering in holistic child development.
                            </P>

                            <P>
                                We pledge to continue to reach more and more children in need and ensure that no child is left behind. We are committed to help bridge the gap between the childhood some children endure and the one they deserve. While we have come far, the journey is still on. And we can only walk this path together with our supporters. Your contribution can help us cover crucial distances- empower children with education, health, safety and help them tap the opportunities they deserve. Choose how you would like to make a difference in a child's life. In big and small ways, let us come together as guardians to help shape India's tomorrow. Donate now to Bal Raksha Bharat India to create lasting change - child by child.
                            </P>
                        </>
                    )}
                </div>

                {/* Button */}
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="mt-10 bg-pink-300 hover:bg-pink-400 text-white font-semibold px-8 py-4 rounded-xl transition duration-300"
                >
                    {showMore ? "Read Less..." : "Read More..."}
                </button>
            </div>
        </section>
    );
}

export default AboutSection;