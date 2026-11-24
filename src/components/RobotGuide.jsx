import { useEffect, useState } from "react";
import { MessageCircle, X, ArrowUpRight } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

export default function RobotGuide({ lang, t }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const page = location.pathname.split("/")[2] || "home";
  const guideText = {
    vi: {
      home: ["Xin chào! Tôi là trợ lý BIZWORK-IT.", "Cùng khám phá cách công nghệ có thể hỗ trợ doanh nghiệp của bạn.", "Khám phá dịch vụ"],
      about: ["Rất vui được gặp bạn!", "Tìm hiểu về định hướng hỗ trợ công nghệ và thông tin BIZWORK-IT.", "Tìm hiểu dịch vụ"],
      services: ["Bạn đang tìm giải pháp IT?", "Bạn có thể xem các nhóm hỗ trợ Windows, Linux, mạng và cơ sở dữ liệu.", "Trao đổi nhu cầu"],
      contact: ["Tôi có thể giúp gì?", "Hãy gửi yêu cầu qua biểu mẫu hoặc mở Live Chat khi đã được kết nối.", "Gửi yêu cầu"]
    },
    en: {
      home: ["Hello! I'm your BIZWORK-IT guide.", "Explore how practical technology support can help your business.", "Explore services"],
      about: ["Nice to meet you!", "Learn about BIZWORK-IT's technology support approach and company information.", "Explore services"],
      services: ["Looking for IT support?", "Explore operating systems, networking and database support areas.", "Discuss your needs"],
      contact: ["How can I help?", "Send an enquiry using the form or open Live Chat when connected.", "Send an enquiry"]
    }
  };
  const copy = guideText[lang][page] || guideText[lang].home;
  const target = page === "contact" ? "#contact-form" : `/${lang}/contact`;
  return (
    <aside className={`robot-guide ${open ? "is-open" : ""}`} aria-label="BIZWORK-IT assistant">
      {open && <div className="robot-guide-card">
        <div className="robot-guide-card-head"><span><i/> BIZWORK-IT ASSISTANT</span><button onClick={() => setOpen(false)} aria-label="Close"><X size={16}/></button></div>
        <strong>{copy[0]}</strong><p>{copy[1]}</p>
        {page === "contact" ? <a href="#contact-form" className="guide-cta">{copy[2]} <ArrowUpRight size={14}/></a> : <Link to={target} className="guide-cta">{copy[2]} <ArrowUpRight size={14}/></Link>}
      </div>}
      <button className="robot-guide-button" onClick={() => setOpen(!open)} aria-label={open ? "Close assistant" : "Open BIZWORK-IT assistant"}>
        {open ? <X size={22}/> : <MessageCircle size={22}/>}
        <span className="mini-robot">
          <i className="mini-antenna"/><i className="mini-head"><b/><b/></i><i className="mini-body"/>
        </span>
      </button>
    </aside>
  );
}
