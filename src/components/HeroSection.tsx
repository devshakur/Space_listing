import LightningBox from "./LightningBox";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-12 lg:px-20 py-10 text-white">
      {/* Left Content */}
      <div>
        {/* Heading */}
        <h1 className="text-[42px] sm:text-[48px] font-semiBold leading-11 font-Manrope">
          Web 3.0 Marketing <br />
          <span className="text-[#fff]">Agency</span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg text-[#fff]">
          Promoting crypto, blockchain, and web3 projects
        </p>

        {/* CTA Button */}
        <button className="mt-10 h-12 w-[210px] rounded-2xl px-6 text-gray-500 font-semibold bg-amber-500 hover:bg-amber-400 transition">
          Get a free Proposal
        </button>

        {/* Description */}
        <p className="mt-8 text-gray-400 text-sm leading-relaxed font-Manrope max-w-lg">
          SpaceListing is a marketing agency with first-class customer
          experience and advanced growth marketing tools, which will make your
          project noticeable and attractive to the Web3 community.
        </p>
      </div>

      {/* Right Content (e.g. Image / Graphic placeholder) */}
      <div className="w-[90%] flex justify-center md:justify-end">
        <LightningBox />
      </div>
    </section>
  );
};

export default HeroSection;
