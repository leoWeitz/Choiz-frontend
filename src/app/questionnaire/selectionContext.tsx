"use client"

import { createContext, useContext } from "react";

export type selectionContextType = {
    isOptionSelected: boolean,
    setIsOptionSelected: (value: boolean) => void,
    selectedOptions: string[],
    setSelectedOptions: (value: string[]) => void,
}

const SelectionContext = createContext<selectionContextType | null>(null);


export function useSelectionContext() {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error("useSelectionContext must be used within a SelectionProvider");
  }
  return context;
}

export default SelectionContext;