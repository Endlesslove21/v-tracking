import { useEffect, useContext } from "react";
import NavList from "@/components/elements/nav-list";
import { NAV_MENU_DATA } from "@/configs/NAV_MENU_DATA";
import { Box, useMediaQuery } from "@chakra-ui/react";
import getCurrentSectionInView from "@/utilities/getCurrentSectionInView";
import { SectionContext } from "@/context/ScrollSectionContext";
import { useTranslation } from "react-i18next";

type Props = {
  onCloseMobileNavMenu?: () => void;
};

const NavMenu = ({ onCloseMobileNavMenu }: Props) => {
  const { sectionId, setSectionId } = useContext(SectionContext);
  const [isSmallerThan995] = useMediaQuery("(max-width: 995px)");
  const { t } = useTranslation();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentSectionId = getCurrentSectionInView();
      if (currentSectionId) {
        setSectionId(currentSectionId);
      } else {
        setSectionId("");
      }
    });
  }, []);

  const handleClickNavItem = (id: string) => {
    const sectionClick = document.getElementById(id);
    if (sectionClick) {
      window.scrollTo({
        top: sectionClick.offsetTop - 70,
        behavior: "smooth",
      });
    }
    if (onCloseMobileNavMenu) {
      onCloseMobileNavMenu();
    }
  };

  return (
    <NavList
      display={"flex"}
      flexDir={isSmallerThan995 ? "column" : "row"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={isSmallerThan995 ? 6 : 3}
    >
      {NAV_MENU_DATA.map((item) => (
        <Box
          key={item.id}
          pos={"relative"}
          as="li"
          listStyleType={"none"}
          p={"10px 15px"}
          _after={{
            content: `""`,
            pos: "absolute",
            width: "100%",
            opacity: item.id === sectionId ? 1 : 0,
            height: "3px",
            bottom: 0,
            left: 0,
            bgColor: "second",
            transition: "1s ease",
          }}
          _hover={{
            _after: {
              opacity: 1,
              transition: "1s ease",
            },
          }}
        >
          <Box
            // className="link-nav__item"
            as={"a"}
            display={"inline-block"}
            _hover={{
              color: "second",
              transition: "1s ease",
            }}
            fontWeight={"600"}
            color={sectionId === item.id ? "second" : "primary"}
            cursor={"pointer"}
            fontSize={"16px"}
            onClick={() => {
              handleClickNavItem(item.id);
            }}
          >
            {t(`${item.title}`)}
          </Box>
        </Box>
      ))}
    </NavList>
  );
};

export default NavMenu;
