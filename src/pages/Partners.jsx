import { useEffect, useState } from "react";

// ==========================================
// DATA — edit only here
// ==========================================
const slides = [
    [
        "https://balrakshabharat.org/wp-content/uploads/2025/10/harish-binashah-foundation.jpg",
        "https://balrakshabharat.org/wp-content/uploads/2024/11/Sattva-Logo.png",
        "https://balrakshabharat.org/wp-content/uploads/2024/11/Zee-logo.jpg",
        "https://balrakshabharat.org/wp-content/uploads/2024/08/tata-blue.jpg",
        "https://balrakshabharat.org/wp-content/uploads/2024/08/pg.jpg",
    ],

    [
        "https://balrakshabharat.org/wp-content/uploads/2025/04/LT.png",
        "https://balrakshabharat.org/wp-content/uploads/2025/04/samsung.png",
        "https://balrakshabharat.org/wp-content/uploads/2025/08/future-generali-partner.png",
        "https://balrakshabharat.org/wp-content/uploads/2025/04/marico.png",
        "https://balrakshabharat.org/wp-content/uploads/2025/04/honda.png",
    ],

    [
        "https://balrakshabharat.org/wp-content/uploads/2024/08/vishal.jpg",
        "https://balrakshabharat.org/wp-content/uploads/2026/02/norton.png",
        "https://balrakshabharat.org/wp-content/uploads/2025/04/salesforce.png",
        "https://balrakshabharat.org/wp-content/uploads/2024/08/give.jpg",
        "https://balrakshabharat.org/wp-content/uploads/2024/08/synopsis.jpg",
    ],

    [
        "https://balrakshabharat.org/wp-content/uploads/2024/11/HM-logo.jpg",
        "https://balrakshabharat.org/wp-content/uploads/2024/08/logo-hcl.jpg",
        "https://balrakshabharat.org/wp-content/uploads/2024/08/mond.jpg",
        "https://balrakshabharat.org/wp-content/uploads/2025/04/zelestra.png",
        "https://balrakshabharat.org/wp-content/uploads/2024/11/GDN-logo.jpg",
    ],

    [
        "https://balrakshabharat.org/wp-content/uploads/2025/04/kimbal.png",
        "https://balrakshabharat.org/wp-content/uploads/2024/08/vgaurd.jpg",
        "https://balrakshabharat.org/wp-content/uploads/2025/04/shahi.png",
    ],
];

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function CorporatePartnership() {
    const [activeSlide, setActiveSlide] = useState(0);

    // Auto Slide
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full py-16 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <h2
                    className="
            text-center
            text-[#da291c]
            text-2xl
            md:text-3xl
            font-extrabold
            uppercase
            mb-14
          "
                >
                    Corporate Partnership
                </h2>

                {/* Slider */}
                <div className="relative overflow-hidden">

                    {/* Slides */}
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${activeSlide * 100}%)`,
                        }}
                    >

                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                className="
                  min-w-full
                  grid
                  grid-cols-2
                  md:grid-cols-3
                  lg:grid-cols-5
                  gap-6
                  px-4
                "
                            >

                                {slide.map((logo, index) => (
                                    <div
                                        key={index}
                                        className="
                      bg-white
                      border
                      border-gray-200
                      rounded-xl
                      shadow-sm
                      h-[140px]
                      flex
                      items-center
                      justify-center
                      p-4
                    "
                                    >
                                        <img
                                            src={logo}
                                            alt="Partner Logo"
                                            loading="lazy"
                                            className="
                        max-h-[80px]
                        w-auto
                        object-contain
                      "
                                        />
                                    </div>
                                ))}

                            </div>
                        ))}

                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-3 mt-10">

                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveSlide(index)}
                                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${activeSlide === index
                                        ? "bg-[#da291c] scale-125"
                                        : "bg-gray-300"
                                    }
                `}
                            />
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}