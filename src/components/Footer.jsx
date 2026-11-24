import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
export default function Footer({ t, lang }) {
  const path = (page) => `/${lang}/${page === "home" ? "" : page}`;
  return <footer className="site-footer">
    <div className="footer-grid">
      <div className="footer-brand-block">
        <Link className="brand footer-brand" to={path("home")}><span className="brand-mark">B</span><span className="brand-name">BIZWORK <b>–IT<span>•</span></b><small>TECHNOLOGY ASSISTANCE</small></span></Link>
        <h3>{t.footer.tagline}</h3><p>{t.footer.description}</p>
      </div>
      <div><h4>{t.footer.navigation}</h4><div className="footer-links">{[["home",t.nav.home],["about",t.nav.about],["services",t.nav.services],["contact",t.nav.contact]].map(([p,l])=><Link key={p} to={path(p)}>{l}</Link>)}</div></div>
      <div><h4>{t.footer.legal}</h4><strong>BIZWORKIT (S) PTE LTD</strong><p className="footer-location"><MapPin size={13}/> {t.footer.registered}</p><p>{lang==="vi"?"Thông tin pháp nhân theo nội dung website tham khảo.":"Entity details based on the reference website content."}</p></div>
      <div><h4>{t.footer.contact}</h4><p>{lang==="vi"?"Bạn muốn tối ưu hạ tầng IT hoặc trao đổi về dự án sắp tới?":"Looking to review your IT infrastructure or discuss an upcoming project?"}</p><Link className="footer-cta" to={path("contact")}>{t.nav.cta} <ArrowUpRight size={14}/></Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} BIZWORK-IT. {t.footer.rights}</span><span>TECHNOLOGY · INFRASTRUCTURE · SUPPORT</span></div>
  </footer>;
}
