import React from "react";
import HeroSection from "./components/HeroSection";
import PhotoGallery from "./components/PhotoGallery";
import ProfileOverview from "./components/ProfileOverview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhotoGallery />
      <ProfileOverview />
    </>
  );
}
