import { useState, useEffect, useContext } from "react";
import NavList from "@/components/elements/nav-list";
import { NAV_MENU_DATA } from "@/components/configs/NAV_MENU_DATA";
import { Box, useMediaQuery } from "@chakra-ui/react";
import getCurrentSectionInView from "@/utilities/getCurrentSectionInView";
import { SectionContext } from "@/context/ScrollSectionContext";

const NavMenu = () => {
  const { sectionId, setSectionId, onCloseMobileNavMenu } =
    useContext(SectionContext);
  const [isSmallerThan995] = useMediaQuery("(max-width: 995px)");

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

      console.log(sectionId);
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
            {item.title}
          </Box>
        </Box>
      ))}
    </NavList>
  );
};

export default NavMenu;
