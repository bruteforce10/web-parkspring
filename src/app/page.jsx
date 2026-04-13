import { getLandingPageData } from "@/app/lib/landing-page";
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
import NewsLetterSection from "./components/NewsLetterSection";
import CallToAction from "./components/CallToAction";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await getLandingPageData();
  const { dataLandingPages } = data;

  return (
    <main>
      <Header />
      <Feature {...dataLandingPages[0]} />
      <About {...dataLandingPages[0]} />
      <TextDirect />
      <ImageFeature {...dataLandingPages[0]} />
      <Location {...dataLandingPages[0]} />
      <FeatureList {...dataLandingPages[0]} />
      <HookSection {...dataLandingPages[0]} />
      <TypeSection {...dataLandingPages[0]} />
      <NewsLetterSection />
      <LocationMap />
      <Footer />
      <div className="fixed bottom-0 z-[99] w-full">
        <CallToAction />
      </div>
    </main>
  );
}
