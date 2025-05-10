import HeroSection from "./components/HeroSection/index.tsx";
import PhotoGallery from "./components/PhotoGallery/index.tsx";
import ProfileOverview from "./components/ProfileOverview/index.tsx";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhotoGallery />
      <ProfileOverview />
    </>
  );
}
