import Ecosystem from "./components/Ecosystem";
import Familiar from "./components/Familiar";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InstallGuide from "./components/InstallGuide";
import LocalAi from "./components/LocalAi";
import Nav from "./components/Nav";
import Results from "./components/Results";
import Vision from "./components/Vision";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Vision />
      <Results />
      <LocalAi />
      <Familiar />
      <Ecosystem />
      <InstallGuide />
      <Faq />
      <Footer />
    </>
  );
}
