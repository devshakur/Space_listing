const Awards = () => {
  return (
    <section className="w-full bg-black py-16 px-6">
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h6 className="text-amber-300 text-sm font-medium uppercase tracking-wide">
          About SpaceListing
        </h6>
        <h2 className="text-white font-Manrope text-2xl sm:text-3xl font-semibold mt-2">
          6+ Years of Experience in Crypto & Web3 Marketing
        </h2>
        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          SpaceListing has been helping crypto projects grow since 2018. With a
          proven track record in blockchain promotions, we’ve built strong
          communities and delivered results for startups and enterprises.
        </p>
      </div>

      {/* Awards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <img
            src="/image/award3.png"
            alt="Award 1"
            className="w-40 h-40 object-contain"
          />
          <p className="text-gray-300 mt-4 text-sm font-medium">
            Best Web3 Marketing Agency 2022
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="/image/award2.png"
            alt="Award 2"
            className="w-40 h-40 object-contain"
          />
          <p className="text-gray-300 mt-4 text-sm font-medium">
            Blockchain Excellence Award 2023
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="/image/award1.png"
            alt="Award 3"
            className="w-40 h-40 object-contain"
          />
          <p className="text-gray-300 mt-4 text-sm font-medium">
            Top Marketing Innovator 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default Awards;
