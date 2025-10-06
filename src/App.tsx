import Header from "./components/Header.tsx";
import HeroSection from "./components/HeroSection.tsx";
import SponsorRow from "./components/SponsorRow.tsx";
import Solutions from "./components/Solutions.tsx";
import About from "./components/About.tsx";
import WhyChose from "./components/WhyChose.tsx";
import FAQ from "./components/FAQ.tsx";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <HeroSection />
      <SponsorRow />
      <Solutions />
      <About />
      <WhyChose />
      <FAQ />
    </div>
  );
}

export default App;
