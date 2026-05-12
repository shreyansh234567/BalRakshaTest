export default function IndiaProgramsMapPreview() {
    return (
        <div className="h-auto py-10 px-4">
            <div className="max-w-none mx-auto bg-white p-8 md:p-14">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl text-red-600 md:text-3xl font-extrabold uppercase leading-tight mb-8">
                            BAL RAKSHA BHARAT'S PROGRAMMES
                            <br />
                            ACROSS INDIA
                        </h2>
                        <p className="text-gray-700 text-lg leading-8 mb-6">
                            Bal Raksha Bharat is implementing numerous programmes across
                            various states in India, all aimed at improving the lives of
                            underprivileged children.These initiatives focus on education, health and nutrition, and child protection, while also equipping children to be resilient in the face of emergencies and crises.
                        </p>
                        <p className="text-gray-700 text-lg leading-8 mb-8">
                            Explore our state-wise programmes by clicking on the map&apos;s state.
                        </p>

                    </div>

                    {/* Right Side Map */}
                    {/* ✅ Bug fix: relative parent ko fixed height deni chahiye */}
                    <div className="relative w-full">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/011/097/357/non_2x/grey-india-map-free-vector.jpg"
                            alt="India Map"
                            className="w-full max-w-xl mx-auto block"
                        />

                    </div>

                </div>


            </div>
        </div>
    );
}