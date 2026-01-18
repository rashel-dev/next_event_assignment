import HeroSection from "@/components/pages/home/heroSection";
import { ServiceSection } from "@/components/pages/home/ServiceSection";
import { SubscribeSection } from "@/components/pages/home/SubscribeSection";
import { TestimonialSection } from "@/components/pages/home/TestimonialSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <TestimonialSection />
      <SubscribeSection />
    </div>
  );
}
