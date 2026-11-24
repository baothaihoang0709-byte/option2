import { useState } from "react";
import { CheckCircle2, AlertCircle, Send, Paperclip } from "lucide-react";
export default function ContactForm({ t }) {
  const [form, setForm] = useState({name:"",email:"",company:"",subject:t.contact.subjects[0],message:""});
  const [errors,setErrors]=useState({});
  const [sent,setSent]=useState(false);
  const update=(k,v)=>{setForm(s=>({...s,[k]:v}));setSent(false);};
  const submit=(e)=>{
    e.preventDefault(); const next={};
    ["name","email","message"].forEach(k=>{if(!form[k].trim()) next[k]=t.contact.required;});
    if(form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email=t.contact.invalidEmail;
    setErrors(next); if(!Object.keys(next).length) setSent(true);
  };
  return <form id="contact-form" className="contact-form" onSubmit={submit} noValidate>
    <div className="form-top"><span> BIZWORK-IT / ENQUIRY</span><h3>{t.contact.title}</h3><p>{t.contact.lead}</p></div>
    <div className="form-grid">
      <label className="field"><span>{t.contact.name} *</span><input value={form.name} onChange={e=>update("name",e.target.value)} autoComplete="name"/>{errors.name&&<small className="field-error"><AlertCircle size={13}/>{errors.name}</small>}</label>
      <label className="field"><span>{t.contact.email} *</span><input type="email" value={form.email} onChange={e=>update("email",e.target.value)} autoComplete="email"/>{errors.email&&<small className="field-error"><AlertCircle size={13}/>{errors.email}</small>}</label>
      <label className="field"><span>{t.contact.company}</span><input value={form.company} onChange={e=>update("company",e.target.value)}/></label>
      <label className="field"><span>{t.contact.subject}</span><select value={form.subject} onChange={e=>update("subject",e.target.value)}>{t.contact.subjects.map(s=><option key={s}>{s}</option>)}</select></label>
      <label className="field field-full"><span>{t.contact.message} *</span><textarea rows="5" value={form.message} onChange={e=>update("message",e.target.value)}/>{errors.message&&<small className="field-error"><AlertCircle size={13}/>{errors.message}</small>}</label>
    </div>
    <div className="form-actions"><span className="form-demo-note"><Paperclip size={14}/>{t.contact.demoNote}</span><button className="button button-primary" type="submit">{t.contact.send}<Send size={15}/></button></div>
    {sent&&<div className="form-success" role="status"><CheckCircle2 size={17}/>{t.contact.success}</div>}
  </form>;
}
