import Hero from './components/Hero';
import Header from './components/Header';
import ImageMarquee from './components/ImageMarquee';
import VisionMission from './components/VisionMission';
import MarketOverview from './components/MarketOverview';
import TechnicalArchitecture from './components/TechnicalArchitecture';
import ProductFeatures from './components/ProductFeatures';
import SocialCommunity from './components/SocialCommunity';
import Roadmap from './components/Roadmap';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="home">
          <Hero />
          <ImageMarquee />
        </div>
        <div id="about">
          <VisionMission />
        </div>
        <div id="market">
          <MarketOverview />
        </div>
        <TechnicalArchitecture />
        <div id="features">
          <ProductFeatures />
          <SocialCommunity />
        </div>
        <div id="roadmap">
          <Roadmap />
        </div>
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
