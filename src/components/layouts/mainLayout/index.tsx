import Header from "../../header";
import Footer from "../../footer";
import { Outlet } from "react-router-dom";
type Props = React.PropsWithChildren<{}>;

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children ? children : <Outlet />}
      <Footer />
    </>
  );
};

export default MainLayout;
