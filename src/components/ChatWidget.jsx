import { useEffect, useState } from "react";
import { MessageCircle, X, ExternalLink } from "lucide-react";

export default function ChatWidget({ t }) {
  const [open, setOpen] = useState(false);
  const propertyId = import.meta.env.VITE_TAWK_PROPERTY_ID;
  const widgetId = import.meta.env.VITE_TAWK_WIDGET_ID;
  const configured = Boolean(propertyId && widgetId);
  useEffect(() => {
    if (!configured || document.querySelector('script[data-bizwork-tawk="true"]')) return;
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.onLoad = () => window.Tawk_API.hideWidget?.();
    window.Tawk_LoadStart = new Date();
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    script.dataset.bizworkTawk = "true";
    document.body.appendChild(script);
  }, [configured, propertyId, widgetId]);
  const launch = () => configured && window.Tawk_API?.maximize ? window.Tawk_API.maximize() : setOpen((v) => !v);
  return <>
    {!configured && open && <aside className="chat-panel">
      <div className="chat-panel-head"><div><strong>{t.chat.title}</strong><small>Live Chat setup</small></div><button onClick={() => setOpen(false)} aria-label="Close"><X size={18}/></button></div>
      <div className="chat-panel-body"><p className="chat-bubble">{t.chat.intro}</p><p className="chat-config-note">{t.chat.unavailable}</p><a className="provider-link" href="https://www.tawk.to/" target="_blank" rel="noreferrer">Configure Tawk.to <ExternalLink size={13}/></a></div>
    </aside>}
    <button className="chat-launcher" onClick={launch} aria-label="Open Live Chat"><MessageCircle size={23}/></button>
  </>;
}
