import Partners from "./Partners";

const Intro = () => {
  return (
    <>
      <div className="mt-12 w-full flex justify-center leading-6">
        <div className="text-center text-[20px] font-Manrope text-white font-medium space-y-1">
          <h3>Our Crypto Marketing Agency Attracts Over</h3>
          <h4>
            <span className="text-amber-300">100,000+ </span>
            Crypto Enthusiasts New Tokens Holder per month for our
          </h4>
          <h5>Clients</h5>
        </div>
      </div>
      <Partners />
    </>
  );
};

export default Intro;
