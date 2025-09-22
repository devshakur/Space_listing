import "./index.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Intro from "./components/Intro";
import Directives from "./components/Directives";
import Awards from "./components/Awards";
import More from "./components/More";
import Order from "./components/Order";
import Platforms from "./components/Platforms";
import Testimonials from "./components/Testimoney";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Intro />
      <Directives />
      <Awards />
      <More />
      <Order />
      <Platforms />
      <Testimonials />
      <ContactUs />
    </>
  );
}

export default App;
