import React, {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

import en from "../locales/en";
import ta from "../locales/ta";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) =>
      prev === "en" ? "ta" : "en"
    );
  };

  const t = language === "en" ? en : ta;

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);