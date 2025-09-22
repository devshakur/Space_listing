const Order = () => {
  // Organized rows with real categories
  const row1 = ["DeFi", "Metaverse", "SpaceListing", "NFT"];
  const row2 = ["GameFi", "DAO Tools", "Web3 Marketing", "Exchanges", "IDO"];
  const row3 = ["Launchpads", "Community Growth", "Crypto PR"];

  const baseStyle =
    "bg-[#222] text-white py-6 px-4 rounded-xl font-Manrope font-medium flex items-center justify-center cursor-pointer shadow-md hover:shadow-xl hover:bg-amber-400 hover:text-black transition-all duration-300";

  return (
    <div className="w-full bg-black" id="industries">
      {/* Section Heading */}
      <div className="text-center px-6 pt-12">
        <h2 className="text-white text-2xl lg:text-[28px] font-Manrope font-semibold mb-3">
          Order Our Service and Get a
        </h2>
        <h2 className="text-amber-300 text-2xl lg:text-[28px] font-Manrope font-semibold">
          Personalized Strategy from SpaceListing
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-[14px] font-Manrope font-medium">
          Do you want to produce attractive content and further promote your
          account on social networks? All you need is to hire Coinband
          professionals. Fill out the form and get a special offer.
        </p>
        <button className="py-3 mt-6 px-8 rounded-3xl bg-amber-500 text-black font-semibold hover:bg-amber-400 transition">
          Get a Special Offer
        </button>
      </div>

      {/* Cards Section */}
      <section className="w-full py-12 px-6 space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {row1.map((text, i) => (
            <div key={i} className={baseStyle}>
              {text}
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
          {row2.map((text, i) => (
            <div key={i} className={baseStyle}>
              {text}
            </div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {row3.map((text, i) => (
            <div key={i} className={baseStyle}>
              {text}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Order;
