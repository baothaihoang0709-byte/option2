import { ArrowRight, ArrowUpRight, Check, Database, Monitor, Network, ShieldCheck, Server, Wifi, Activity, Cloud, LockKeyhole, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

function InfrastructureScene({ t }) {
  return <div className="datacenter-stage" aria-label="Minh họa 3D hạ tầng máy chủ và mạng doanh nghiệp">
    <div className="dc-floor-grid"/>
    <div className="dc-atmosphere"/>
    <div className="dc-orbit dc-orbit-a"/><div className="dc-orbit dc-orbit-b"/>
    <div className="dc-network-globe"><span/><span/><span/><i/><i/><i/></div>
    <svg className="dc-wiring" viewBox="0 0 700 600" aria-hidden="true">
      <path d="M350 260 C230 190 175 190 105 300 S80 410 160 445 M350 260 C480 180 545 200 600 310 S590 420 520 455 M350 260 L350 500"/>
      <path d="M350 260 C230 190 175 190 105 300 S80 410 160 445 M350 260 C480 180 545 200 600 310 S590 420 520 455" className="dc-wiring-flow"/>
      <circle cx="105" cy="300" r="5"/><circle cx="600" cy="310" r="5"/><circle cx="350" cy="500" r="5"/>
    </svg>
    <div className="dc-rack dc-rack-back"><i/><i/><i/><i/></div>
    <div className="dc-rack dc-rack-main">
      <div className="dc-rack-top"><span>BIZWORK / CORE SYSTEM</span><b><i/> ONLINE</b></div>
      {Array.from({length:5},(_,i)=><div className="dc-server-unit" key={i}><span>SERVER NODE 0{i+1}</span><b/><b/><b/><em/></div>)}
      <div className="dc-rack-base"><span>SECURE INFRASTRUCTURE</span><span>24 / 7</span></div>
    </div>
    <div className="dc-node dc-node-os"><Monitor/><b>OS SUPPORT</b><small>Windows · Linux</small></div>
    <div className="dc-node dc-node-net"><Wifi/><b>NETWORK</b><small>LAN · Wi-Fi</small></div>
    <div className="dc-node dc-node-data"><Database/><b>DATABASE</b><small>Backup · Recovery</small></div>
    <div className="dc-node dc-node-cloud"><Cloud/><b>CLOUD</b><small>Hybrid systems</small></div>
    <div className="dc-float-label dc-label-a"><ShieldCheck/><span><b>Infrastructure care</b><small>Proactive support</small></span></div>
    <div className="dc-float-label dc-label-b"><Activity/><span><b>Connected systems</b><small>Reliable operations</small></span></div>
    <div className="dc-scene-caption"><span>FIG. 01 — IT INFRASTRUCTURE</span><span>BUILT AROUND YOUR BUSINESS</span></div>
  </div>;
}
const icons=[Monitor,Wifi,Database];
export default function HomePage({t,lang}) {
  return <main className="home-redesign">
    <section className="home-hero">
      <div className="home-hero-topline"><span>INDEPENDENT TECHNOLOGY SUPPORT</span><span>01 / 04 — BIZWORK-IT</span></div>
      <div className="hero-grid-bg"/>
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="hero-eyebrow"><i/> {t.hero.eyebrow}</span>
          <h1>{t.hero.title}</h1>
          <div className="slogan-line slogan-rotator" aria-label={t.hero.slogan.join(" ")}><span aria-hidden="true">{t.hero.slogan[0]}</span><span aria-hidden="true">{t.hero.slogan[1]}</span><span aria-hidden="true">{t.hero.slogan[2]}</span></div>
          <p>{t.hero.body}</p>
          <div className="hero-actions"><Link className="button button-primary" to={`/${lang}/contact`}>{t.nav.cta}<ArrowUpRight size={17}/></Link><Link className="button button-secondary" to={`/${lang}/services`}>{t.common.explore}<ArrowRight size={16}/></Link></div>
          <div className="hero-proof"><span className="proof-line"/><span>WINDOWS / LINUX / NETWORK / DATABASE</span></div>
        </div>
        <InfrastructureScene t={t}/>
      </div>
      <div className="hero-scroll-hint"><span>01</span><i/> SCROLL TO EXPLORE</div>
    </section>

    <section className="home-intro-band">
      <div><span className="section-index">01 — WHAT WE SUPPORT</span><h2>{t.home.introTitle}</h2></div>
      <p>{t.home.introBody}</p>
    </section>

    <section className="section-block capabilities-section">
      <div className="capability-cards">{t.services.cards.slice(0,3).map((card,i)=>{const Icon=icons[i];return <article className="capability-card hover-3d" key={card.title}><div className="capability-card-top"><span className="icon-tile"><Icon/></span><small>0{i+1} / {card.tag}</small></div><h3>{card.title}</h3><p>{card.body}</p><ul>{card.bullets.slice(0,3).map(b=><li key={b}><Check size={15}/>{b}</li>)}</ul><Link to={`/${lang}/services`} className="inline-link">{t.common.readMore}<ArrowUpRight size={15}/></Link></article>})}</div>
    </section>

    <section className="home-operations">
      <div className="operations-heading"><span className="section-index">02 — OUTSOURCED IT MANAGEMENT</span><h2>{t.home.roiTitle}</h2><p>{t.home.roiSubtitle}</p></div>
      <div className="operations-content"><blockquote>{t.services.roiQuote}</blockquote><div className="operations-points">{t.home.roiPoints.map((p,i)=><article key={p}><span>0{i+1}</span><div><h3>{p}</h3><p>{[t.services.roiBody,t.services.roiBody,t.services.lead,t.home.roiBody][i]}</p></div></article>)}</div></div>
      <Link className="operations-link" to={`/${lang}/services`}>{t.common.learn}<ArrowUpRight size={17}/></Link>
    </section>

    <section className="section-block comparison-section"><SectionHeading eyebrow={lang==="vi"?"SO SÁNH MÔ HÌNH":"MODEL COMPARISON"} title={t.home.compareTitle} body={t.home.compareBody} align="center"/><div className="comparison-table-wrap"><table className="comparison-table"><thead><tr><th>{lang==="vi"?"KHÍA CẠNH ĐÁNH GIÁ":"ASSESSMENT"}</th><th>{lang==="vi"?"MÔ HÌNH IT NỘI BỘ":"IN-HOUSE IT"}</th><th>{lang==="vi"?"MÔ HÌNH THUÊ NGOÀI BIZWORK-IT":"BIZWORK-IT OUTSOURCING"}</th></tr></thead><tbody>{t.home.compareRows.map(r=><tr key={r[0]}><th>{r[0]}</th><td>{r[1]}</td><td><Check size={15}/>{r[2]}</td></tr>)}</tbody></table></div></section>
    <section className="section-block faq-section"><SectionHeading eyebrow={lang==="vi"?"CÂU HỎI THƯỜNG GẶP":"FAQ"} title={t.home.faqTitle} body={t.home.faqBody} align="center"/><div className="faq-list">{t.home.faqs.map((f,i)=><details key={f[0]} open={i===0}><summary>{f[0]}<span>+</span></summary><p>{f[1]}</p></details>)}</div></section>
    <section className="closing-cta"><span className="eyebrow-pill">{lang==="vi"?"TƯ VẤN CÔNG NGHỆ":"TECHNOLOGY CONSULTATION"}</span><h2>{t.home.ctaTitle}</h2><p>{t.home.ctaBody}</p><div><Link className="button button-primary" to={`/${lang}/contact`}>{t.nav.cta}<ArrowUpRight size={16}/></Link><Link className="button button-dark-outline" to={`/${lang}/about`}>{t.nav.about}</Link></div></section>
  </main>;
}
