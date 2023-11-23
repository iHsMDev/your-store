"use client";

import { createContext, useEffect, useState } from "react";
export const Menu = createContext<any>(null);
const Provider = ({ children }: { children?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<any>(false);

  useEffect(() => {
    document.querySelector("body")?.addEventListener("click", (e) => {
      setIsOpen(false);
    });
  }, []);
  return (
    <Menu.Provider value={{ isOpen, setIsOpen }}>{children}</Menu.Provider>
  );
};

export default Provider;
