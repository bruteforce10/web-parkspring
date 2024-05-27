import About from "./components/About";
import Feature from "./components/Feature";
import FeatureList from "./components/FeatureList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HookSection from "./components/HookSection";
import ImageFeature from "./components/ImageFeature";
import Location from "./components/Location";
import LocationMap from "./components/LocationMap";
import TextDirect from "./components/TextDirect";
import TypeSection from "./components/TypeSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Feature />
      <About />
      <TextDirect />
      <ImageFeature />
      <Location />
      <FeatureList />
      <HookSection />
      <TypeSection />
      <LocationMap />
      <Footer />
    </main>
  );
}
