const Directives = () => {
  return (
    <div className="bg-black w-full py-12 px-4">
      {/* Section Heading */}
      <div className="text-center sm:text-start sm:grid grid-cols-2 px-4 lg:px-20 mb-10">
        <div>
          <h6 className="text-amber-300 font-medium text-xs">
            We present the directions of our work
          </h6>
          <h2 className="font-Manrope font-medium text-[24px] text-[#fff]">
            The Full-Service Crypto Marketing <br /> Agency for Achieving
            Results
          </h2>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="w-full bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 w-full px-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <img
              src="/image/img1.avif"
              alt="img1"
              className="w-full aspect-[28/29] object-cover rounded-md"
            />
            <img
              src="/image/img2.avif"
              alt="img2"
              className="w-full aspect-[18/5] object-cover rounded-md"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <img
              src="/image/img3.avif"
              alt="img3"
              className="w-full aspect-[18/15] object-cover rounded-md"
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <img
              src="/image/img4.avif"
              alt="img4"
              className="w-full aspect-[18/4] object-cover rounded-md"
            />
            <img
              src="/image/img5.avif"
              alt="img5"
              className="w-full aspect-[10/8] object-cover rounded-md"
            />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4 lg:-mt-22">
            <img
              src="/image/img6.avif"
              alt="img6"
              className="w-full aspect-[8/12] object-cover rounded-md"
            />
            <img
              src="/image/img7.avif"
              alt="img7"
              className="w-full aspect-[14/18] object-cover rounded-md"
            />
          </div>

          {/* Column 5 */}
          <div className="flex flex-col gap-4 lg:-mt-28">
            <img
              src="/image/img8.avif"
              alt="img8"
              className="w-full aspect-[16/22] object-cover rounded-md"
            />
            <img
              src="/image/img9.avif"
              alt="img9"
              className="w-full aspect-[8/6] object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directives;
