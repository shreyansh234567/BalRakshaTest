import { useState } from "react";

// ==========================================
// FAQ DATA — Edit Only Here
// ==========================================
const faqData = [
    {
        question:
            "ARE THERE ANY TAX BENEFITS INVOLVED WHILE DONATING TO BAL RAKSHA BHARAT?",
        answer:
            "All donations made to Bal Raksha Bharat (Save the Children India) are 50% tax-exempt under section 80G of the Income Tax Act 1961. Section 80G of the Income Tax Act allows tax exemptions for various entities, including individuals, Hindu Undivided Families (HUFs), companies, and partnership firms. Its benefits are also available to Non-Residential Indians (NRIs)..",
    },

    {
        question:
            "WHAT IS THE PROCESS TO AVAIL TAX EXEMPTION CERTIFICATE?",
        answer:
            "Bal Raksha Bharat will provide your details to the Income Tax department by May 31, i.e. immediately following the financial year in which the donation was received. We will provide your Full Name, PAN number, and Complete Address to the Income Tax department to issue a Tax Exemption Certificate (10BE).",
    },

    {
        question: "HOW CAN I DONATE ONLINE?",
        answer:
            "Visit the Bal Raksha Bharat donation page, where you will find two options - One-Time Donation: Choose this option if you want to make a single contribution.- Monthly Donation: Opt for monthly donations to provide sustained support. Select your preferred payment method. Ensure you provide your full name, address, and PAN number, to claim tax exemption..",
    },

    {
        question:
            "IS THERE ANY ADVANTAGE TO DONATING ONLINE?",
        answer:
            "Donating online is cost-effective as it does not require regular visits to field offices or call centres. It is also faster, as online donations are instantaneous. Online donation generates instant documentation, which is sent to the donor's email address, ensuring transparency and ease of access - useful when filing a tax rebate..",
    },

    {
        question:
            "IS IT SAFE TO GIVE MY CREDIT CARD DETAILS ONLINE?",
        answer:
            "As a part of our commitment to protecting user data, we will never share your information. We also do not store any sensitive information like your credit card or bank details. We also make stringent efforts to require all third-party service providers to hold personal information in strict confidence..",
    },

    {
        question:
            "HOW DO I CONTACT YOU REGARDING MY DONATION?",
        answer:
            "Reach out to us at donorsupport@balrakshabharat.org, at +91 9870127127 / +91 9870147147 (telephone), or via mail at the below-mentioned correspondence address: Bal Raksha Bharat Donor Support D-61, East of Kailash, New Delhi-110065.",
    },

    {
        question:
            "IS IT COMPLICATED TO MAKE A DONATION ONLINE?",
        answer:
            "To donate online on Bal Raksha Bharat's website: - Specify your donation details and preferred mode of payment - You will be taken to a secure payment gateway - Fill in your credit card details; after which, you will get an immediate confirmation of your donation on the screen and via email.",
    },

    {
        question:
            "HOW SAFE IS MY PERSONAL INFORMATION WITH BAL RAKSHA BHARAT?",
        answer:
            "We are committed to protecting the privacy of our website's users. Bal Raksha Bharat has implemented the necessary security mechanisms; only designated employees can access your personal information. All online transactions are done on a secure server, and the information you provide on the donation transaction page is encrypted using SSL..",
    },
];

// ==========================================
// SINGLE FAQ ITEM
// ==========================================
function FAQItem({ item, isOpen, onClick }) {
    return (
        <div className="border-b border-gray-300">

            {/* Question */}
            <button
                onClick={onClick}
                className=" w-full flex justify-between items-center gap-6 text-left py-6 px-6 bg-white hover:bg-gray-50 transition"
            >

                <h3
                    className=" text-sm md:text-base font-bold uppercase text-[#111] leading-7"
                >
                    {item.question}
                </h3>

                {/* Icon */}
                <span
                    className=" text-3xl text-[#da291c] font-light shrink-0 "
                >
                    {isOpen ? "−" : "+"}
                </span>

            </button>

            {/* Answer */}
            <div
                className={` overflow-hidden transition-all duration-300
          ${isOpen
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }
        `}
            >

                <div className="px-6 pb-6 text-gray-700 leading-8 text-sm md:text-base">
                    {item.answer}
                </div>

            </div>
        </div>
    );
}

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-[#f8f8f8] py-20 px-6">

            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <h2
                    className=" text-center text-[#da291c] text-3xl md:text-3xl font-extrabold mb-14"
                >
                    FAQs
                </h2>

                {/* Accordion */}
                <div
                    className=" bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200"
                >

                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => toggleFAQ(index)}
                        />
                    ))}

                </div>
            </div>
        </section>
    );
}