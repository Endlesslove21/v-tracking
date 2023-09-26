import Features from "@/components/main/section-features";
import Models from "@/components/main/section-model";
import Slider from "@/components/main/section-slider";
import TargetUsers from "@/components/main/section-target_users";

const Home = () => {
  return (
    <main>
      <Slider />
      <Features />
      <Models />
      <TargetUsers />
    </main>
  );
};

export default Home;
