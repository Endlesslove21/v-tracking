import { useState } from "react";
import Header from "../../header";
import Footer from "../../footer";
import { Outlet } from "react-router-dom";
import { SectionContext } from "@/context/ScrollSectionContext";
type Props = React.PropsWithChildren<{}>;

const MainLayout = ({ children }: Props) => {
  const [sectionId, setSectionId] = useState<string>("");

  const value = { sectionId, setSectionId };

  return (
    <>
      <SectionContext.Provider value={value}>
        <Header />
        {children ? children : <Outlet />}
        <Footer />
      </SectionContext.Provider>
    </>
  );
};

export default MainLayout;
