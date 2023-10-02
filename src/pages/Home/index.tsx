import Agents from "@/components/main/section-agents";
import Features from "@/components/main/section-features";
import Models from "@/components/main/section-model";
import OurCustomers from "@/components/main/section-ourCustomers";
import ServiceCharges from "@/components/main/section-serviceCharges";
import Slider from "@/components/main/section-slider";
import TargetUsers from "@/components/main/section-target_users";
import { SectionContext } from "@/context/ScrollSectionContext";
// import getCurrentSectionInView from "@/utilities/getCurrentSectionInView";
import { Box } from "@chakra-ui/react";
import { useContext, useEffect } from "react";

const Home = () => {
  // const { sectionId, setSectionId } = useContext(SectionContext);

  // const handleClickScroll = (id: string) => {

  //   console.log(idSection);
  //   // if (idSection) {
  //   //   //  new Promise((resolve) => requestAnimationFrame(resolve));
  //   //   window.scrollTo({
  //   //     top: idSection.offsetTop - 70,
  //   //     behavior: "smooth",
  //   //   });
  //   // }
  // };
  // handleClickScroll(sectionId);
  // useEffect(() => {

  // }, [setSectionId]);

  // useEffect(() => {
  //   // const handleScroll = () => {
  //   //   // const currentSectionId = getCurrentSectionInView();
  //   //   // if (currentSectionId !== sectionId) {
  //   //   //   setSectionId(currentSectionId);
  //   //   // }
  //   // };

  //   // Attach the scroll event listener
  //   window.addEventListener("scroll", getCurrentSectionInView);
  // });

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
