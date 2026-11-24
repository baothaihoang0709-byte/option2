import { useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Database, Monitor, Network, Server, ShieldCheck, Wifi, Wrench, Cloud, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
const icons=[Monitor,Network,Database,Wrench];
const labels=["01 / ENDPOINTS","02 / CONNECTIVITY","03 / DATA SYSTEMS","04 / IT OPERATIONS"];
export default function ServicesPage({t,lang}) {
  const [active,setActive]=useState(0);
  const selected=t.services.cards[active];
  const ActiveIcon=icons[active];
  return <main className="inner-page services-redesign">
    <section className="services-masthead"><div className="services-masthead-copy"><span className="eyebrow-pill">{t.services.eyebrow}</span><h1>{t.services.title}</h1><p className="page-lead">{t.services.lead}</p></div><div className="services-masthead-art"><div className="services-cube cube-one"><Server/></div><div className="services-cube cube-two"><Network/></div><div className="services-cube cube-three"><Database/></div><div className="services-cube-shadow"/></div><div className="services-masthead-foot"><span>CAPABILITY INDEX / 04</span><span>WINDOWS · LINUX · NETWORK · DATA</span></div></section>
    <section className="service-explorer">
      <div className="service-explorer-heading"><span className="section-index">SELECT A CAPABILITY</span><h2>{lang==="vi"?"Khám phá phạm vi hỗ trợ":"Explore our support capabilities"}</h2><p>{lang==="vi"?"Chọn một nhóm dịch vụ để xem phạm vi hỗ trợ và các công việc trọng tâm.":"Choose a service area to review its scope and key support activities."}</p></div>
      <div className="service-explorer-layout">
        <div className="service-selector" role="tablist" aria-label={lang==="vi"?"Nhóm dịch vụ":"Service areas"}>{t.services.cards.map((card,i)=>{const Icon=icons[i];return <button key={card.title} role="tab" aria-selected={active===i} className={`service-tab ${active===i?"active":""}`} onClick={()=>setActive(i)}><span className="service-tab-number">0{i+1}</span><Icon/><span className="service-tab-copy"><b>{card.title}</b><small>{labels[i]}</small></span><ArrowUpRight/></button>})}</div>
        <article className="service-detail" role="tabpanel">
          <div className="service-detail-top"><span>{selected.tag}</span><span>0{active+1} / 04</span></div>
          <div className="service-detail-icon"><ActiveIcon size={32}/></div>
          <h3>{selected.title}</h3><p className="service-detail-intro">{selected.body}</p>
          <div className="service-detail-scope"><b>{lang==="vi"?"PHẠM VI HỖ TRỢ TRỌNG TÂM":"KEY SUPPORT SCOPE"}</b><ul>{selected.bullets.map(item=><li key={item}><Check size={16}/>{item}</li>)}</ul></div>
          <Link className="button button-primary" to={`/${lang}/contact`}>{lang==="vi"?"Trao đổi về dịch vụ này":"Discuss this service"}<ArrowUpRight size={16}/></Link>
          <div className="service-detail-watermark">BIZWORK</div>
        </article>
      </div>
    </section>
    <section className="roi-section service-roi"><div className="roi-layout"><div className="roi-copy"><span className="eyebrow-pill">{lang==="vi"?"GIẢI PHÁP — VẬN HÀNH QUẢN TRỊ":"SOLUTION — IT OPERATIONS"}</span><h2>{t.services.roiTitle}</h2><h3>{t.services.roiSubtitle}</h3><blockquote>{t.services.roiQuote}</blockquote><p>{t.services.roiBody}</p><Link className="button button-primary" to={`/${lang}/contact`}>{t.common.contact}<ArrowUpRight size={16}/></Link></div><div className="roi-points">{t.services.roiPoints.map((p,i)=><article key={p}><span>0{i+1}</span><div><h4>{p}</h4><p>{t.home.roiBody}</p></div></article>)}</div></div></section>
    <section className="section-block process-section"><SectionHeading eyebrow={lang==="vi"?"CÁCH THỨC PHỐI HỢP":"HOW WE WORK"} title={t.services.processTitle} align="center"/><div className="process-grid">{t.services.process.map(([n,h,b])=><article key={n}><span>{n}</span><h3>{h}</h3><p>{b}</p></article>)}</div></section>
    <section className="section-block faq-section"><SectionHeading eyebrow="FAQ" title={t.services.faqTitle} align="center"/><div className="faq-list">{t.services.faqs.map((f,i)=><details key={f[0]} open={i===0}><summary>{f[0]}<ChevronDown size={17}/></summary><p>{f[1]}</p></details>)}</div></section>
    <section className="closing-cta"><h2>{t.home.ctaTitle}</h2><p>{t.home.ctaBody}</p><Link className="button button-primary" to={`/${lang}/contact`}>{t.nav.cta}<ArrowUpRight size={16}/></Link></section>
  </main>;
}
