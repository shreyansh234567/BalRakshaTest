export default function AnnualReportSectionPreview() {
    return (
        <section className="w-full overflow-hidden bg-white">
            <div className="grid grid-cols-[65%_35%]">

                {/* LEFT SIDE */}
                <div className="flex flex-col">

                    {/* Collage Image — white background pe */}
                    <div className="flex-1">
                        <picture>
                            <source
                                media="(max-width:768px)"
                                srcSet="https://balrakshabharat.org/wp-content/uploads/2026/03/3.png"
                            />
                            <img
                                src="https://balrakshabharat.org/wp-content/uploads/2026/03/2.png"
                                alt="Annual Report Children"
                                className="w-full h-full object-cover"
                            />
                        </picture>
                    </div>

                    {/* Bottom Dark Bar — sirf left side ke neeche */}
                    <div className="bg-[#3d3d3d] text-white px-8 py-5 flex items-center gap-3">
                        <h2 className="text-xl font-extrabold uppercase tracking-wide">
                            Annual Report 2025
                        </h2>
                        <span className="text-gray-300 text-lg font-normal">
                            Unlocking Potentials
                        </span>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="bg-[#63c7cf] flex flex-col">

                    {/* Teal Content — pura upar se neeche */}
                    <div className="flex-1 px-10 py-16 flex flex-col justify-center">
                        <h2 className="text-white w-80 text-3xl font-extrabold uppercase leading-tight mb-12">
                            Secure Your Tax Benefits While Securing Futures
                        </h2>
                        <button className="bg-white text-black px-8 py-4 rounded-lg text-lg font-bold hover:scale-105 transition duration-300 w-fit shadow">
                            Donate Now
                        </button>
                    </div>

                    {/* Read Now — sirf right side ke neeche */}
                    <button className="bg-[#b8b8b8] text-white text-xl font-semibold py-5 hover:bg-[#9d9d9d] transition duration-300 w-full">
                        Read Now
                    </button>

                </div>

            </div>
        </section>
    );
}
