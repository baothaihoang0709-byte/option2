import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Globe, Menu, X } from "lucide-react";

export default function Header({ lang, t, onLanguageChange }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const items = [["home", t.nav.home], ["about", t.nav.about], ["services", t.nav.services], ["contact", t.nav.contact]];
  const pathFor = (page) => `/${lang}/${page === "home" ? "" : page}`;
  return (
    <header className="site-header">
      <NavLink className="brand" to={pathFor("home")} onClick={() => setOpen(false)} aria-label="BIZWORK-IT home">
        <span className="brand-mark">B</span>
        <span className="brand-name">BIZWORK <b>–IT<span>•</span></b><small>TECHNOLOGY ASSISTANCE</small></span>
      </NavLink>
      <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
        {items.map(([page, label]) => (
          <NavLink key={page} to={pathFor(page)} end={page === "home"} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} onClick={() => setOpen(false)}>{label}</NavLink>
        ))}
        <div className="language-switch" aria-label="Choose language">
          <Globe size={14}/>
          <button className={lang === "en" ? "active" : ""} onClick={() => { onLanguageChange("en"); setOpen(false); }}>EN</button>
          <span>/</span>
          <button className={lang === "vi" ? "active" : ""} onClick={() => { onLanguageChange("vi"); setOpen(false); }}>VI</button>
        </div>
        <NavLink className="nav-contact" to={pathFor("contact")} onClick={() => setOpen(false)}>{t.nav.cta}<ArrowUpRight size={15}/></NavLink>
      </nav>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
    </header>
  );
}
