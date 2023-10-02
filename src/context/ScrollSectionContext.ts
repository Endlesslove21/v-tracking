import { Dispatch, SetStateAction, createContext } from "react";
type SectionContextType = {
  sectionId: string;
  setSectionId: Dispatch<SetStateAction<string>>;
  isOpenMobileNavMenu: boolean;
  onToggleMobileNavMenu: () => void;
  onCloseMobileNavMenu: () => void;
};
export const SectionContext = createContext<SectionContextType>({
  sectionId: "",
  setSectionId: () => {},
  isOpenMobileNavMenu: false,
  onCloseMobileNavMenu: () => {},
  onToggleMobileNavMenu: () => {},
});
