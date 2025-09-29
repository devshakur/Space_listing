import Navbar from "./NavBar";

const Header = () => {
  return (
    <div className="flex justify-between items-center  px-6">
      {/* Logo */}
      <div>
        <img src="/image/logo4.jpeg" alt="logo" className="w-65 h-40 -mt-4" />
      </div>

      {/* Navbar - hidden on small screens */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Contact button - hidden on small screens */}
      <div className="hidden md:block">
        <button className="h-11 w-[171px] rounded-2xl px-5 text-black font-medium bg-amber-400">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Header;
