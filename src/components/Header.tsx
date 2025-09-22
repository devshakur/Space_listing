import Navbar from "./NavBar";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-5 px-6">
      {/* Logo */}
      <div>
        <img src="/image/logo.png" alt="logo" className="w-24 h-24" />
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
