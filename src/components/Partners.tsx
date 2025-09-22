import "../index.css";

const partnerLogos = [
  "/image/partners/001.png",
  "/image/partners/002.png",
  "/image/partners/003.png",
  "/image/partners/004.png",
  "/image/partners/005.png",
  "/image/partners/006.png",
  "/image/partners/007.png",
  "/image/partners/008.png",
  "/image/partners/009.png",
  "/image/partners/010.png",
  "/image/partners/011.jpg",
  "/image/partners/012.jpg",
  "/image/partners/013.png",
  "/image/partners/014.jpg",
  "/image/partners/015.jpg",
  "/image/partners/017.jpg",
  "/image/partners/018.png",
];

const Partners = () => {
  return (
    <div className="w-full bg-black py-12" id="partners">
      <div className="space-y-6">
        {/* First Row (scroll left) */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left">
            {partnerLogos.map((src, i) => (
              <div
                key={`row1-${i}`}
                className="partner-card flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`partner-${i}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate for infinite loop */}
            {partnerLogos.map((src, i) => (
              <div
                key={`row1-dup-${i}`}
                className="partner-card flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`partner-dup-${i}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row (scroll right) */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-right">
            {partnerLogos.map((src, i) => (
              <div
                key={`row2-${i}`}
                className="partner-card flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`partner-${i}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate */}
            {partnerLogos.map((src, i) => (
              <div
                key={`row2-dup-${i}`}
                className="partner-card flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`partner-dup-${i}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
