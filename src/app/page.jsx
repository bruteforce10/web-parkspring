import About from "./components/About";
import Feature from "./components/Feature";
import FeatureList from "./components/FeatureList";
import Header from "./components/Header";
import ImageFeature from "./components/ImageFeature";
import Location from "./components/Location";
import TextDirect from "./components/TextDirect";
import { useAppContext } from "./utils/stateContext";

export default function Home() {
  return (
    <main className="h-[40000px] ">
      <Header />
      <Feature />
      <About />
      <TextDirect />
      <ImageFeature />
      <Location />
      <FeatureList />
    </main>
  );
}
