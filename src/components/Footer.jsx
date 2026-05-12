import { useState } from "react";

// ==========================================
// ALL DATA — edit here, never in the JSX
// ==========================================
const footerData = {
  newsletter: {
    heading: "SIGN UP FOR THE NEWSLETTER HERE:",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    buttonLabel: "SUBSCRIBE",
  },

  brand: {
    logoSrc: "https://balrakshabharat.org/wp-content/themes/ngo/images/logo.png",
    logoAlt: "Bal Raksha Bharat",
    name: "Bal\nRaksha\nBharat",
    tagline: "Also known as",
    taglineBold: "Save the Children",
    followText: "Follow us on",
  },

  socials: [
    {
      label: "Facebook",
      url: "#",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      url: "#",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      label: "X / Twitter",
      url: "#",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      url: "#",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      url: "#",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
        </svg>
      ),
    },
  ],

  linkGroups: [
    {
      title: "About Us",
      links: [
        { label: "Overview", url: "#" },
        { label: "Mission & Vision", url: "#" },
        { label: "Governing Council", url: "#" },
        { label: "Our Team", url: "#" },
        { label: "Award and Recognition", url: "#" },
        { label: "Certificates", url: "#" },
        { label: "Financials", url: "#" },
      ],
    },
    {
      title: "What We Do?",
      links: [
        { label: "Our Strategy", url: "#" },
        { label: "Our Presence", url: "#" },
        { label: "Education", url: "#" },
        { label: "Health and Nutrition", url: "#" },
        { label: "Economic well being", url: "#" },
        { label: "Child Protection", url: "#" },
        { label: "Humanitarian", url: "#" },
        { label: "Resilience", url: "#" },
      ],
    },
    {
      title: "Take Action",
      links: [
        { label: "Donate", url: "#" },
        { label: "Volunteer", url: "#" },
        { label: "Donation Receipt", url: "#" },
        { label: "Other Ways To Help", url: "#" },
        { label: "High Value Gifting", url: "#" },
        { label: "Child Safeguarding", url: "#" },
        { label: "Contact Us", url: "#" },
        { label: "Careers", url: "#" },
        { label: "Donation Receipt", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Latest Blog", url: "#" },
        { label: "Press Coverage", url: "#" },
        { label: "News", url: "#" },
        { label: "Reports", url: "#" },
        { label: "FAQs", url: "#" },
        { label: "Webstories", url: "#" },
      ],
    },
  ],

  popularSearches: [
    "Income Tax Exemption", "Education Donation", "Online Donation",
    "Corporate NGO Partnerships", "Child Protection", "Gender Equality",
    "Child Welfare In India", "Child Nutrition", "Education NGO",
    "child resilience program", "Disaster relief organisations in India",
    "Child Poverty", "Child Champion", "Daan Utsav", "NGO Volunteer",
    "Helping Poor Children", "Child Participation", "Child Safeguarding",
    "Education empowers", "Prevention of Child Labour",
    "Fundamental Rights Of Children", "How To Help Street Children",
    "80G Income Tax", "Child Abuse In India", "Causes of Gender Inequality",
    "Marginalization In Education", "Importance Of Girl Child Education",
    "Help Underprivileged Children", "Child Protection Policy", "RTE Act",
    "NGO Working For Education", "Role Of NGO In Education",
    "Donations Tax Exemption", "Charity Donation Tax Deduction",
    "Section 80G Of Income Tax Act", "How To Donate", "Right To Education",
    "Donate For Girl Child Education", "Ways To Donate", "Discrimination against women",
    "joy of giving", "Women enterpreneurs in india", "Role of Youth in Nation Building",
    "Why are Women Employed in Low Paid Work", "No Detention Policy", "CSR Fund", "Stem Educastion in india"
  ],

  copyright: `© ${new Date().getFullYear()} Bal Raksha Bharat |All Rights Reserved.`,

};

// ==========================================
// COMPONENT
// ==========================================
export default function NgoFooterV2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (name.trim() && email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setName("");
      setEmail("");
    }
  };

  return (
    <footer className="w-full font-sans" style={{ backgroundColor: "#1c1c1c" }}>

      {/* ── Newsletter Bar ── */}
      <div
        className="w-full px-6 md:px-12 py-15"
        style={{ backgroundColor: "#252525", borderBottom: "1px solid #333" }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-white font-bold text-sm tracking-widest uppercase mb-5">
            {footerData.newsletter.heading}
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-end">
            {/* Name */}
            <div className="flex-1">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={footerData.newsletter.namePlaceholder}
                className="w-full bg-transparent text-white placeholder-gray-400 text-sm pb-2 outline-none"
                style={{ borderBottom: "1px solid #666" }}
              />
            </div>
            {/* Email */}
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={footerData.newsletter.emailPlaceholder}
                className="w-full bg-transparent text-white placeholder-gray-400 text-sm pb-2 outline-none"
                style={{ borderBottom: "1px solid #666" }}
              />
            </div>
            {/* Button */}
            <button
              onClick={handleSubscribe}
              className="px-8 py-3 font-black text-sm tracking-widest uppercase transition-all duration-200 hover:opacity-90 active:scale-95 shrink-0"
              style={{ backgroundColor: "#fff", color: "#1c1c1c" }}
            >
              {subscribed ? "✓ SUBSCRIBED" : footerData.newsletter.buttonLabel}
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Footer Body ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* ── Brand Column ── */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            {/* Logo + Name */}
            <div className="flex items-center gap-4">
              <img
                src={footerData.brand.logoSrc}
                alt={footerData.brand.logoAlt}
                className="w-20 h-20 object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback circle logo */}
              <div
                className="hidden w-20 h-20 rounded-full items-center justify-center text-white font-bold text-xs text-center"
                style={{ backgroundColor: "#e62a10", display: "none" }}
              >
                BRB
              </div>
              <div>
                <p className="text-white font-black text-2xl leading-tight whitespace-pre-line">
                  {footerData.brand.name}
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm">
              {footerData.brand.tagline}{" "}
              <strong className="text-white font-bold">
                {footerData.brand.taglineBold}
              </strong>
            </p>

            {/* Follow us on */}
            <div>
              <p className="text-white text-sm mb-3">{footerData.brand.followText}</p>
              <div className="flex items-center gap-4">
                {footerData.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    aria-label={s.label}
                    className="text-white transition-all duration-200 hover:opacity-60"
                  >
                    {s.svg}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Link Columns ── */}
          {footerData.linkGroups.map((group) => (
            <div key={group.title} className="lg:col-span-1">
              <h3
                className="font-black text-white text-sm uppercase tracking-wider mb-5 pb-2"
                style={{ borderBottom: "none" }}
              >
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="text-white text-sm transition-colors duration-200 "
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Popular Searches ── */}
      <div
        className="w-full px-6 md:px-12 py-8"
        style={{ borderTop: "1px solid #333" }}
      >
        <div className="max-w-7xl mx-auto">
          <h4 className="text-white font-bold text-sm mb-4">Popular Searches</h4>
          <p className="text-white text-xs leading-7">
            {footerData.popularSearches.map((term, i) => (
              <span key={i}>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-150"
                >
                  {term}
                </a>
                {i < footerData.popularSearches.length - 1 && (
                  <span className="mx-2 text-gray-600">|</span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>

      { /* Paragraph  */}
      <div className="w-full px-6 md:px-75 py-8">

        <p className=" text-white text-xs"> Disclaimer: Please note that the products mentioned are to
          illustrate activities and the change that your donation can make
          to the lives of children. Bal Raksha Bharat, based on the need
          on the ground, will allocate resources to areas that need funds the most
          . Data Security: We take utmost precautions with your data,
          we will never share your information. We also do not store any sensitive
          information like your credit card or bank details. All donations are
          tax-exempted under section 80G of the Income Tax Act, 1961.
        </p>


        <p className="text-white text-xs mt-5">
          As per the provisions of Indian Income Tax, a donor is required to
          give its Full Name, Complete Address (not merely Pin Code and City)
          to ensure the maximum benefit to the cause by avoiding diversion of
          a good part of the donation towards taxes. For any person whose total
          contribution exceeds Rs. 50,000/- up to the end of the current financial year
          , the Name, Address, PAN and Aadhar (if available) of of such individuals
          including their relatives* (details as per attachment) are also required as per
          the provisions of Income Tax and may please be provided. To claim tax exemption
          against this donation under section 80G providing PAN is essential.
        </p>
      </div>

      {/* ── Copyright Bar ── */}
      <div
        className="w-full px-6 md:px-12 py-4 text-center"
        style={{ borderTop: "1px solid #333" }}
      >
        <p className="text-gray-600 text-xs">{footerData.copyright}</p>
      </div>




    </footer>
  );
}
