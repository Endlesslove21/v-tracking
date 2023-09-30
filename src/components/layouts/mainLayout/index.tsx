import { useEffect, useState } from "react";
import Header from "../../header";
import Footer from "../../footer";
import { Outlet } from "react-router-dom";
import { SectionContext } from "@/context/ScrollSectionContext";
import ScrollTopBtn from "@/components/fixedElements/ScrollTopBtn";

type Props = React.PropsWithChildren<{}>;

const MainLayout = ({ children }: Props) => {
  const [sectionId, setSectionId] = useState<string>("");
  const [isShowScrollBtn, setIsShowScrollBtn] = useState<boolean>(false);
  const value = { sectionId, setSectionId };

  useEffect(() => {
    window.addEventListener("scroll", handleShowSrollTopBtn);

    return () => {
      window.removeEventListener("scroll", handleShowSrollTopBtn);
    };
  }, []);

  const handleShowSrollTopBtn = () => {
    if (window.screenY > 80) {
      setIsShowScrollBtn(true);
    } else {
      setIsShowScrollBtn(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SectionContext.Provider value={value}>
        <Header />
        {children ? children : <Outlet />}
        <Footer />
        {isShowScrollBtn && <ScrollTopBtn onClick={handleScrollToTop} />}
      </SectionContext.Provider>
    </>
  );
};

export default MainLayout;
