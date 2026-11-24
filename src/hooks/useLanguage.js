import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { content } from "../content";

export function useLanguage() {
  const location = useLocation();
  const navigate = useNavigate();
  const lang = location.pathname.startsWith("/en") ? "en" : "vi";
  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("bizwork-language", lang);
    const page = location.pathname.split("/")[2] || "home";
    const titles = {
      vi: { home: "Trang chủ", about: "Giới thiệu", services: "Dịch vụ", contact: "Liên hệ" },
      en: { home: "Home", about: "About", services: "Services", contact: "Contact" }
    };
    document.title = `BIZWORK-IT | ${titles[lang][page] || titles[lang].home}`;
  }, [lang, location.pathname]);
  const changeLanguage = (next) => {
    if (!["vi", "en"].includes(next)) return;
    const page = location.pathname.split("/")[2] || "home";
    navigate(`/${next}/${page}`, { replace: false });
  };
  return { lang, t: content[lang], changeLanguage };
}
