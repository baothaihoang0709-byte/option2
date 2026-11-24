import { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";

export default function PageTransition() {
  const location = useLocation();
  const [key, setKey] = useState(location.pathname);
  const [phase, setPhase] = useState("enter");
  useEffect(() => {
    setPhase("leave");
    const timer = window.setTimeout(() => {
      setKey(location.pathname);
      setPhase("enter");
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 360);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);
  return (
    <div className={`route-stage route-${phase}`} key={key}>
      <div className="route-robot" aria-hidden="true">
        <span className="route-robot-aura"/>
        <span className="route-robot-antenna"><i/></span>
        <span className="route-robot-head"><i/><i/><b/></span>
        <span className="route-robot-body"><i/></span>
        <span className="route-robot-arm left"/><span className="route-robot-arm right"/>
        <span className="route-robot-leg left"/><span className="route-robot-leg right"/>
      </div>
      <Outlet/>
    </div>
  );
}
