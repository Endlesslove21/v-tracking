import { Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface AnimatedNumberProps {
  targetNumber: number;
  animationDuration: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  targetNumber,
  animationDuration,
}) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      if (progress < animationDuration) {
        const nextCount = Math.ceil(
          (targetNumber * progress) / animationDuration
        );
        setCount(nextCount);
        requestAnimationFrame(step);
      } else {
        setCount(targetNumber);
      }
    };

    const animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [targetNumber, animationDuration]);

  return (
    <Heading as={"h4"} fontSize={"36px"} color={"second"}>
      {new Intl.NumberFormat("de-DE").format(count)}
    </Heading>
  );
};

export default AnimatedNumber;
