import React, { useState, createContext } from "react";
import { getLanguage } from "../utils/common";
import { useParams } from "next/navigation";

export const MainLanguageValueContext = createContext();

const MainLanguageValueProvider = ({ children }) => {
  const { lang } = useParams()
  const [langValue, setLangValue] = useState(lang ?? 'en')

  const handleLanguage = (status) => {
    setLangValue(status)
  }

  console.log(lang);

  return (
    <MainLanguageValueContext.Provider value={{ langValue, handleLanguage }}>
      {children}
    </MainLanguageValueContext.Provider>
  );
};

export default MainLanguageValueProvider;
