import { useState } from "react";
import NavList from "@/components/elements/nav-list";
import { NAV_MENU_DATA } from "@/components/configs/NAV_MENU_DATA";
import { Box } from "@chakra-ui/react";

type Props = {};

const NavMenu = (props: Props) => {
  const [selectedNavItemID, setSelectedNavItemID] = useState<string>("");

  const handleMoveToSection = (id: string) => {
    setSelectedNavItemID(id);
  };

  return (
    <NavList
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={3}
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
            opacity: item.id === selectedNavItemID ? 1 : 0,
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
            as={"a"}
            display={"inline-block"}
            _hover={{
              color: "second",
              transition: "1s ease",
            }}
            fontWeight={"600"}
            color={selectedNavItemID === item.id ? "second" : "primary"}
            cursor={"pointer"}
            fontSize={"16px"}
            onClick={() => handleMoveToSection(item.id)}
          >
            {item.title}
          </Box>
        </Box>
      ))}
    </NavList>
  );
};

export default NavMenu;
