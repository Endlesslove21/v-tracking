import Copyright from "@/components/footer/Copyright";
import SecondHeader from "@/components/header/secondHeader";
import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

type Props = PropsWithChildren<{}>;

const SecondLayout = ({ children }: Props) => {
  return (
    <>
      <SecondHeader />
      {children ? children : <Outlet />}
      <Box as="footer" width="100%" pos={"fixed"} bottom={0}>
        <Copyright description="Hệ thống Quản lý và Giám sát phương tiện vận tải - Cơ quan chủ quản: Tập đoàn Công nghiệp - Viễn Thông Quân đội. Giấy phép số: 144/GP-BC do Bộ Thông tin - Truyền thông cấp ngày 18/04/2007" />
      </Box>
    </>
  );
};

export default SecondLayout;
