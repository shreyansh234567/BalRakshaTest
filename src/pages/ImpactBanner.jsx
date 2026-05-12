function ImpactBanner() {
    return (
        <section className="w-full py-4 bg-white">
            <div className="max-w-8xl mx-auto px-4">

                <div className="overflow-hidden rounded-2xl">

                    <picture>

                        {/* Mobile Image */}
                        <source
                            media="(max-width: 576px)"
                            srcSet="https://balrakshabharat.org/wp-content/uploads/2025/11/impact-banner-mobile-final.webp"
                            type="image/webp"
                        />

                        {/* Desktop Image */}
                        <img
                            src="https://balrakshabharat.org/wp-content/uploads/2025/11/impact-banner-desktop-final.webp"
                            alt="Bal Raksha Bharat Work Last Year"
                            className="w-full h-auto object-cover"
                        />

                    </picture>

                </div>
            </div>
        </section>
    );
}

export default ImpactBanner;