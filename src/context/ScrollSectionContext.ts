import { Dispatch, SetStateAction, createContext } from "react";
type SectionContextType = {
  sectionId: string;
  setSectionId: Dispatch<SetStateAction<string>>;
};
export const SectionContext = createContext<SectionContextType>({
  sectionId: "",
  setSectionId: () => {},
});
