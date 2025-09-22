// Social links (just update these handles)
const socialLinks = {
  twitter: "https://x.com/Spacelisting?t=Uuj1Sxm3dHCyVEW8BxjYaQ&s=09",
  telegram: "https://t.me/faisal1980A",
  telegram1: "https://t.me/Web3_Aaron1",
  telegram2: "https://t.me/Pipsquea4bridge2",
};

const services = [
  "Community Management",
  "Growth Marketing",
  "PR & Media Outreach",
  "Paid Advertising",
  "Content Creation",
];

const industries = [
  "Crypto & Blockchain",
  "FinTech",
  "E-commerce",
  "HealthTech",
  "Gaming & Entertainment",
];

const ContactUs = () => {
  return (
    <section className="w-full bg-black text-white py-16">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Contact Us
      </h2>

      {/* Social Media */}
      <div className="flex justify-center gap-6 mb-12">
        {/* Twitter/X (using EnvelopeIcon as placeholder) */}
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
          {/* <EnvelopeIcon className="w-8 h-8 hover:text-amber-400 transition" /> */}
          <img src="/image/X.png" alt="twiiter" width={40} height={40} />
        </a>

        {/* Telegram (inline SVG) */}
        <a
          href={socialLinks.telegram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-8 hover:text-amber-400 transition"
          >
            <path d="M9.999 15.2l-.39 5.52c.56 0 .8-.24 1.1-.53l2.64-2.49 5.47 4.01c1 .55 1.72.26 1.98-.93l3.6-16.88h.01c.32-1.5-.54-2.08-1.52-1.72l-21.3 8.2c-1.45.55-1.43 1.34-.25 1.7l5.45 1.7 12.63-7.98c.59-.36 1.12-.16.68.22l-10.1 9.48z" />
          </svg>
        </a>
        <a
          href={socialLinks.telegram1}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-8 hover:text-amber-400 transition"
          >
            <path d="M9.999 15.2l-.39 5.52c.56 0 .8-.24 1.1-.53l2.64-2.49 5.47 4.01c1 .55 1.72.26 1.98-.93l3.6-16.88h.01c.32-1.5-.54-2.08-1.52-1.72l-21.3 8.2c-1.45.55-1.43 1.34-.25 1.7l5.45 1.7 12.63-7.98c.59-.36 1.12-.16.68.22l-10.1 9.48z" />
          </svg>
        </a>
        <a
          href={socialLinks.telegram2}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-8 hover:text-amber-400 transition"
          >
            <path d="M9.999 15.2l-.39 5.52c.56 0 .8-.24 1.1-.53l2.64-2.49 5.47 4.01c1 .55 1.72.26 1.98-.93l3.6-16.88h.01c.32-1.5-.54-2.08-1.52-1.72l-21.3 8.2c-1.45.55-1.43 1.34-.25 1.7l5.45 1.7 12.63-7.98c.59-.36 1.12-.16.68.22l-10.1 9.48z" />
          </svg>
        </a>
      </div>

      {/* Services & Industries */}
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16 px-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-300">
            {services.map((service, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Industries We Serve</h3>
          <ul className="space-y-2 text-gray-300">
            {industries.map((industry, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Logos */}
      <div className="flex justify-center gap-10 flex-wrap px-6">
        <img
          src="/image/logo.png"
          alt="logo"
          className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition"
        />
      </div>
    </section>
  );
};

export default ContactUs;
