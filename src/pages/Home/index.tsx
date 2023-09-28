import Agents from "@/components/main/section-agents";
import Features from "@/components/main/section-features";
import Models from "@/components/main/section-model";
import OurCustomers from "@/components/main/section-ourCustomers";
import ServiceCharges from "@/components/main/section-serviceCharges";
import Slider from "@/components/main/section-slider";
import TargetUsers from "@/components/main/section-target_users";
import { SectionContext } from "@/context/ScrollSectionContext";
import { useContext, useEffect } from "react";

const Home = () => {
  const { sectionId } = useContext(SectionContext);
  const { headerHeight } = useContext(SectionContext);
  useEffect(() => {
    const handleClickScroll = async (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        // Wait for the next frame
        await new Promise((resolve) => requestAnimationFrame(resolve));
        // Scroll smoothly to the top of the next section
        window.scrollTo({
          top: element.offsetTop - 90,
          behavior: "smooth",
        });
      }
    };
    handleClickScroll(sectionId);
  }, [sectionId]);

  return (
    <main>
      <Slider />
      <div id="tinh-nang">
        <Features />
      </div>
      <div id="mo-hinh">
        <Models />
      </div>
      <div id="doi-tuong-su-dung">
        <TargetUsers />
      </div>
      <div id="phi-dich-vu">
        <ServiceCharges />
      </div>
      <div id="dai-ly">
        <Agents />
      </div>
      <OurCustomers />
    </main>
  );
};

export default Home;
