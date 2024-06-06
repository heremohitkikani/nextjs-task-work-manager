
import ActionSection from "@/components/homepage/ActionSection";
import ContactForm from "@/components/homepage/ContactForm";
import FeatureSection from "@/components/homepage/FeatureSection";
import BannerSection from "@/components/homepage/HomeBanner";
import TestimonialSection from "@/components/homepage/TestimonialSection";
import Image from "next/image";
import CustomNavbar from "./CustomNavbar";

export const metadata = {
  title: "Home : Work Manager",
};

export default function Homecomponent() {
  return (
    <div className="mt-10">
      {/* banner section  */}
    <CustomNavbar></CustomNavbar>
      <BannerSection />
      <FeatureSection />
      <ActionSection />
      <TestimonialSection />
      <ContactForm />
    </div>
  );
}