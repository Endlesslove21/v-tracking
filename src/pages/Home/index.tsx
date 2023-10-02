import Agents from "@/components/main/section-agents";
import Features from "@/components/main/section-features";
import Models from "@/components/main/section-model";
import OurCustomers from "@/components/main/section-ourCustomers";
import ServiceCharges from "@/components/main/section-serviceCharges";
import Slider from "@/components/main/section-slider";
import TargetUsers from "@/components/main/section-target_users";
// import getCurrentSectionInView from "@/utilities/getCurrentSectionInView";
import { Box } from "@chakra-ui/react";

const Home = () => {
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
