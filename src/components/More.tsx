const More = () => {
  const cards = [
    {
      img: "/image/circle.png",
      title: "GameFi Growth",
      subtitle: "Helping play-to-earn projects scale their communities.",
      link: "#",
    },
    {
      img: "/image/line.png",
      title: "DeFi Liquidity",
      subtitle: "Boosting liquidity pools and cross-chain adoption.",
      link: "#",
    },
    {
      img: "/image/graph.png",
      title: "NFT Market",
      subtitle: "Expanding the reach of digital collectibles worldwide.",
      link: "#",
    },
    {
      img: "/image/marketing.png",
      title: "Metaverse",
      subtitle: "Building immersive worlds for brands and users.",
      link: "#",
    },
    {
      img: "/image/stars.png",
      title: "DAO Tools",
      subtitle: "Supporting decentralized governance structures.",
      link: "#",
    },
  ];

  return (
    <section
      className="w-full bg-black py-12 px-6 overflow-hidden"
      id="services"
    >
      <h2 className="text-white text-2xl font-Manrope font-semibold mb-6 text-center">
        Explore Our Services
      </h2>

      {/* Auto-scrolling wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll space-x-6 w-max">
          {[...cards, ...cards].map((card, i) => (
            <div
              key={i}
              className="min-w-[260px] max-w-[280px] bg-[#222] rounded-xl shadow-md flex-shrink-0"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-white text-lg font-semibold">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind keyframes */}
      <style>{`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .animate-scroll {
    animation: scroll 20s linear infinite;
  }
`}</style>
    </section>
  );
};

export default More;
