import "../index.css";

const LightningBox = () => {
  const categories = [
    "GameFi",
    "DeFi",
    "NFTs",
    "Metaverse",
    "DAO",
    "Staking",
    "DEX",
    "Layer2",
    "Wallets",
    "Launchpads",
    "Oracles",
    "Smart Contracts",
  ];

  return (
    <div className="w-full  flex justify-center items-center">
      <div className="grid grid-cols-4 sm:grid-cols-6 grid-cols-custom md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-2 w-full max-w-6xl">
        {categories.map((item, idx) => (
          <div
            key={idx}
            className="lightning-box flex items-center justify-center h-28 w-26 w-custom xl:w-30 rounded-lg bg-[#333] text-gray-700 font-semibold text-lg"
            style={{ animationDelay: `${idx * 0.5}s` }} // stagger glow
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LightningBox;
