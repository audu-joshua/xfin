import Hero from "@/components/homeComponents/hero";
import Testimonial from "@/components/homeComponents/testimonial";
import Mission from "@/components/homeComponents/mission&vission";
import Branding from "@/components/homeComponents/branding";
import Review from "@/components/homeComponents/reviews";
import CarouselWithContent from "@/components/homeComponents/reviews/carousel";
import Blogs from "@/components/homeComponents/blogs/indes";
import Career from "@/components/homeComponents/joinus";
import ContactForm from "@/components/homeComponents/form";


export default function Home() {
  return (
   <>
      <Hero/>
      <Testimonial/>
      <Mission/>
      <Branding/>
      <Review/>
      <CarouselWithContent/>
      <Blogs/>
      <Career/>
      <ContactForm/>
   </>
  );
}
