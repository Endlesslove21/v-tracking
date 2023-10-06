import { useEffect, useState } from "react";
import MainHeader from "@/components/header/mainHeader";
import Footer from "@/components/footer";
import { Outlet } from "react-router-dom";
import { SectionContext } from "@/context/ScrollSectionContext";
import ScrollTopBtn from "@/components/elements/fixedElements/ScrollTopBtn";
import { useDisclosure } from "@chakra-ui/react";
import RegisterBtn from "@/components/elements/fixedElements/RegisterBtn";
import RegisterModal from "@/components/elements/modal/RegisterModal";

type Props = React.PropsWithChildren<{}>;

const MainLayout = ({ children }: Props) => {
  const [sectionId, setSectionId] = useState<string>("");
  const {
    isOpen: isOpenRegisterModal,
    onToggle: onToggleRegisterModal,
    onClose: onCloseRegisterModal,
  } = useDisclosure();

  const [isShowScrollBtn, setIsShowScrollBtn] = useState<boolean>(false);
  const value = {
    sectionId,
    setSectionId,
    isOpenRegisterModal,
    onToggleRegisterModal,
    onCloseRegisterModal,
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShowSrollTopBtn);

    return () => {
      window.removeEventListener("scroll", handleShowSrollTopBtn);
    };
  }, []);

  const handleShowSrollTopBtn = () => {
    if (window.scrollY > 350) {
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
        <MainHeader />
        {children ? children : <Outlet />}

        <Footer />
        {isShowScrollBtn && <ScrollTopBtn onClick={handleScrollToTop} />}
        <RegisterBtn onOpenRegisterModal={onToggleRegisterModal} />
        <RegisterModal
          isOpen={isOpenRegisterModal}
          onClose={onCloseRegisterModal}
        />
      </SectionContext.Provider>
    </>
  );
};

export default MainLayout;
