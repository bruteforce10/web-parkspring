import About from "./components/About";
import Feature from "./components/Feature";
import Header from "./components/Header";
import HighlightText from "./components/HighlightText";

export default function Home() {
  return (
    <main className="h-[4000px]">
      <Header />
      <Feature />
      <About />
      <HighlightText />
    </main>
  );
}
