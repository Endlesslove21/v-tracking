import { Dispatch, SetStateAction, createContext } from "react";
type SectionContextType = {
  sectionId: string;
  setSectionId: Dispatch<SetStateAction<string>>;
  isOpenRegisterModal: boolean;
  onToggleRegisterModal: () => void;
  onCloseRegisterModal: () => void;
};
export const SectionContext = createContext<SectionContextType>({
  sectionId: "",
  setSectionId: () => {},
  isOpenRegisterModal: false,
  onCloseRegisterModal: () => {},
  onToggleRegisterModal: () => {},
});
