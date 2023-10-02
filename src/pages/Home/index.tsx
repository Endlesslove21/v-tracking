import Agents from "@/components/main/section-agents";
import Features from "@/components/main/section-features";
import Models from "@/components/main/section-model";
import OurCustomers from "@/components/main/section-ourCustomers";
import ServiceCharges from "@/components/main/section-serviceCharges";
import Slider from "@/components/main/section-slider";
import TargetUsers from "@/components/main/section-target_users";
import { SectionContext } from "@/context/ScrollSectionContext";
import getCurrentSectionInView from "@/utilities/getCurrentSectionInView";
import { Box } from "@chakra-ui/react";
import { useContext, useEffect } from "react";

const Home = () => {
  const { sectionId, setSectionId } = useContext(SectionContext);
  useEffect(() => {
    const handleClickScroll = async (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        await new Promise((resolve) => requestAnimationFrame(resolve));
        window.scrollTo({
          top: element.offsetTop - 70,
          behavior: "smooth",
        });
      }
    };
    handleClickScroll(sectionId);
  }, [sectionId]);

  useEffect(() => {
    const handleScroll = () => {
      const currentSectionId = getCurrentSectionInView();
      if (currentSectionId !== sectionId) {
        setSectionId(currentSectionId);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionId, setSectionId]);

  return (
    <Box as="main" pos={"relative"}>
      <Slider />
      <section id="tinh-nang">
        <Features />
      </section>
      <section id="mo-hinh">
        <Models />
      </section>
      <section id="doi-tuong-su-dung">
        <TargetUsers />
      </section>
      <section id="phi-dich-vu">
        <ServiceCharges />
      </section>
      <section id="dai-ly">
        <Agents />
      </section>
      <OurCustomers />
    </Box>
  );
};

export default Home;
