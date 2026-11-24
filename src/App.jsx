import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import RobotGuide from "./components/RobotGuide";
import PageTransition from "./components/PageTransition";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import { useLanguage } from "./hooks/useLanguage";

function WebsiteLayout() {
  const { lang, t, changeLanguage } = useLanguage();
  const location = useLocation();
  useEffect(() => { window.scrollTo({top:0,behavior:"auto"}); }, [location.pathname]);
  return <div className="app-shell">
    <Header lang={lang} t={t} onLanguageChange={changeLanguage}/>
    <Routes>
      <Route element={<PageTransition/>}>
        <Route index element={<HomePage t={t} lang={lang}/>}/>
        <Route path="about" element={<AboutPage t={t} lang={lang}/>}/>
        <Route path="services" element={<ServicesPage t={t} lang={lang}/>}/>
        <Route path="contact" element={<ContactPage t={t} lang={lang}/>}/>
        <Route path="*" element={<Navigate to={`/${lang}/`} replace/>}/>
      </Route>
    </Routes>
    <Footer t={t} lang={lang}/>
    <RobotGuide lang={lang} t={t}/>
    <ChatWidget t={t}/>
  </div>;
}

export default function App() {
  return <Routes>
    <Route path="/:lang/*" element={<WebsiteLayout/>}/>
    <Route path="*" element={<Navigate to={`/vi/`} replace/>}/>
  </Routes>;
}
