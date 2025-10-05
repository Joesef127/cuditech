import Header from "./components/Header.tsx";
import HeroSection from "./components/HeroSection.tsx";
import SponsorRow from "./components/SponsorRow.tsx";
import Solutions from "./components/Solutions.tsx";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Header/>
      <HeroSection/>
      <SponsorRow />
      <Solutions />
    </div>
  )
}

export default App;
