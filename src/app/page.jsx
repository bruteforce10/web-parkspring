import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[4000px]">
      <Image
        src="/cover-header.webp"
        alt="hero image"
        width={1920}
        className="min-w-screen object-contain -mt-40"
        height={1080}
      />
    </main>
  );
}
