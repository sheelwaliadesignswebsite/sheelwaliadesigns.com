import ConstructionVideos from "@/components/ConstructionVideos";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Videos | Sheelwalia Designs",
  description: "Explore construction and interior project videos by Sheelwalia Designs.",
};

export default function VideosPage() {
  return (
    <main role="main" className="bg-cream text-black min-h-screen">
      <ConstructionVideos />
      <Footer />
    </main>
  );
}