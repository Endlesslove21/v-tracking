import { useState } from "react";
import Wrapper from "@/components/elements/Wrapper";
import NavList from "@/components/elements/nav-list";
import { Box, Button, Image, Link } from "@chakra-ui/react";

const NAV_MENU_DATA = [
  {
    id: "tinh-nang",
    title: "Tính năng",
  },
  {
    id: "mo-hinh",
    title: "Mô hình",
  },
  {
    id: "doi-tuong-su-dung",
    title: "Đối tượng sử dụng",
  },
  {
    id: "phi-dich-vu",
    title: "Phí dịch vụ",
  },
  {
    id: "dai-ly",
    title: "Đại lý",
  },
];

const NavBar = () => {
  const [selectedNavItemID, setSelectedNavItemID] = useState<string>("");
  const handleMoveToSection = (id: string) => {
    setSelectedNavItemID(id);
  };

  return (
    <Wrapper py={2} justifyContent={"space-between"} alignItems={"center"}>
      <Link href="" display={"block"}>
        <Image src={"/assets/imgs/logo-n.png"} />
      </Link>

      <NavList
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
      >
        {NAV_MENU_DATA.map((item) => (
          <Box
            key={item.id}
            as="li"
            listStyleType={"none"}
            p={"10px 15px"}
            borderBottom={
              item.id === selectedNavItemID ? "3px solid #EA0D34" : "none"
            }
            _hover={{
              borderBottom: "3px solid #EA0D34",
            }}
          >
            <Box
              as={"a"}
              display={"inline-block"}
              _hover={{
                color: "second",
              }}
              fontWeight={"600"}
              borderColor={selectedNavItemID === item.id ? "second" : "none"}
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

      <Button>Đăng nhập</Button>
    </Wrapper>
  );
};

export default NavBar;
