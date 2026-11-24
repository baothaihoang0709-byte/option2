import { Building2, Globe2, MessageCircle, ShieldCheck, ArrowDownRight, MapPin } from "lucide-react";
import ContactForm from "../components/ContactForm";
export default function ContactPage({t,lang}) {
  return <main className="inner-page contact-redesign">
    <section className="contact-masthead"><div className="contact-masthead-copy"><span className="eyebrow-pill">{t.contact.eyebrow}</span><h1>{t.contact.title}</h1><p className="page-lead">{t.contact.lead}</p><div className="contact-trust"><span><ShieldCheck/> {lang==="vi"?"Trao đổi theo nhu cầu thực tế":"Needs-led consultation"}</span><span><Globe2/> Singapore</span></div></div><div className="contact-masthead-index"><span>LET'S</span><b>CONNECT</b><ArrowDownRight/></div></section>
    <section className="contact-main section-block">
      <aside className="contact-sidebar">
        <div className="contact-info-card"><span className="icon-tile"><Building2/></span><span className="contact-card-index">BIZWORK-IT / COMPANY</span><h3>{t.contact.companyTitle}</h3><div><small>{t.contact.legalName}</small><strong>{t.contact.legalValue}</strong></div><div><small>{t.contact.location}</small><strong><MapPin size={14}/>{t.contact.locationValue}</strong></div><div><small>{t.contact.channels}</small><p>{t.contact.channelsValue}</p></div></div>
        <div className="contact-chat-card"><span className="icon-tile"><MessageCircle/></span><span className="contact-card-index">DIRECT CONVERSATION</span><h3>{t.contact.chatTitle}</h3><p>{t.contact.chatBody}</p><small>{lang==="vi"?"Mở trợ lý BIZWORK-IT ở góc dưới màn hình.":"Open the BIZWORK-IT assistant at the bottom corner."}</small></div>
        <div className="contact-note">{lang==="vi"?"Chia sẻ vừa đủ về môi trường công nghệ và vấn đề bạn muốn giải quyết.":"Share a little about your IT environment and the challenge you want to solve."}</div>
      </aside>
      <div className="contact-form-column"><div className="contact-form-heading"><span className="section-index">01 / SEND AN ENQUIRY</span><h2>{lang==="vi"?"Bắt đầu cuộc trao đổi":"Start a conversation"}</h2><p>{lang==="vi"?"Điền thông tin bên dưới. Các trường có dấu * là bắt buộc.":"Complete the form below. Fields marked * are required."}</p></div><ContactForm t={t}/></div>
    </section>
  </main>;
}
