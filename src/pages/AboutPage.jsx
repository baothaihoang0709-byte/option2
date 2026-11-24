import { ArrowUpRight, Building2, CheckCircle2, Globe2, ShieldCheck, Compass, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
export default function AboutPage({t,lang}) {
  return <main className="inner-page about-redesign">
    <section className="about-masthead">
      <div className="about-masthead-number">02</div>
      <div className="about-masthead-copy"><span className="eyebrow-pill">{t.about.eyebrow}</span><h1>{t.about.title}</h1><p className="page-lead">{t.about.lead}</p></div>
      <div className="about-masthead-mark"><div className="about-mark-orbit"/><div className="about-mark-core"><Building2 size={42}/><b>BIZWORK</b><small>SINGAPORE</small></div><span className="about-coordinate">1°17' N / 103°50' E</span></div>
      <div className="about-masthead-bottom"><span>OUR COMPANY / OUR APPROACH</span><span>SCROLL TO DISCOVER ↓</span></div>
    </section>
    <section className="about-story section-block">
      <div className="story-aside"><span className="section-index">A PRACTICAL APPROACH</span><div className="story-aside-line"/><p>{lang==="vi"?"Công nghệ có giá trị khi giải quyết đúng vấn đề và phù hợp với cách doanh nghiệp vận hành.":"Technology matters when it solves real problems and fits the way a business operates."}</p></div>
      <div className="story-copy"><span className="eyebrow-pill">{lang==="vi"?"CÂU CHUYỆN DOANH NGHIỆP":"OUR APPROACH"}</span><h2>{lang==="vi"?"Công nghệ đáng tin cậy, dễ tiếp cận và phù hợp thực tế.":"Reliable, accessible technology shaped around real needs."}</h2>{t.about.paragraphs.map(p=><p key={p}>{p}</p>)}</div>
      <aside className="entity-card"><div className="entity-card-head"><span><Building2/><b>{t.about.entityTitle}</b></span><small><i/>{lang==="vi"?"Thông tin tham khảo":"Reference details"}</small></div>{t.about.entityFields.map(([k,v])=><div className="entity-row" key={k}><small>{k}</small><strong>{v}</strong></div>)}<Link to={`/${lang}/contact`} className="entity-link">{t.common.contact}<ArrowUpRight size={15}/></Link></aside>
    </section>
    <section className="about-principles">
      <div className="principles-heading"><span className="section-index">OUR PRINCIPLES / 03</span><h2>{t.about.valuesTitle}</h2><p>{lang==="vi"?"Những nguyên tắc định hình cách tiếp cận, tư vấn và phối hợp trong từng nhu cầu công nghệ.":"Principles that shape how we approach, advise and collaborate on technology needs."}</p></div>
      <div className="principles-list">{t.about.values.map(([title,body],i)=>{const Icon=[Compass,ShieldCheck,Layers3,CheckCircle2][i];return <article className="principle-row" key={title}><span className="principle-number">0{i+1}</span><Icon/><div><h3>{title}</h3><p>{body}</p></div><ArrowUpRight className="principle-arrow"/></article>})}</div>
    </section>
    <section className="promise-section"><SectionHeading eyebrow={lang==="vi"?"CAM KẾT KHÁCH HÀNG":"CUSTOMER COMMITMENT"} title={t.about.promiseTitle} body={t.about.promiseLead} align="center"/><div className="promise-panel"><div className="promise-shield"><ShieldCheck size={76}/></div><div><span className="eyebrow-pill">{lang==="vi"?"LỜI HỨA & CAM KẾT DỊCH VỤ":"SERVICE COMMITMENT"}</span><blockquote>“{t.about.promiseQuote}”</blockquote><small>— BIZWORK-IT</small></div><div className="promise-cards">{t.about.promiseCards.map((x,i)=><div key={x}><b>0{i+1}</b><strong>{x}</strong></div>)}</div></div></section>
    <section className="closing-cta compact-cta"><h2>{lang==="vi"?"Cùng trao đổi về nhu cầu công nghệ của doanh nghiệp bạn.":"Let's discuss your business technology needs."}</h2><Link className="button button-primary" to={`/${lang}/contact`}>{t.nav.cta}<ArrowUpRight size={16}/></Link></section>
  </main>;
}
