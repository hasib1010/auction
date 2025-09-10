// pages/index.js or app/page.js (depending on your Next.js version)
import Header from "@/components/Header";
import MainContentCards from "@/components/MainContentCards";
import ComingSoonSection from "@/components/ComingSoonSection";
import NewAuctionItems from "@/components/NewAuctionItems";
import HeroCTASection from "@/components/HeroCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MainContentCards />
      <ComingSoonSection />
      <NewAuctionItems />
      <HeroCTASection />
      <Footer />
    </div>
  );
}