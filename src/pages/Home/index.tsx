import Features from "@/components/main/section-features";
import Models from "@/components/main/section-model";
import OurCustomers from "@/components/main/section-ourCustomers";
import ServiceCharges from "@/components/main/section-serviceCharges";
import Slider from "@/components/main/section-slider";
import TargetUsers from "@/components/main/section-target_users";

const Home = () => {
  return (
    <main>
      <Slider />
      <Features />
      <Models />
      <TargetUsers />
      <ServiceCharges />
      <OurCustomers />
    </main>
  );
};

export default Home;
