"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Source = "server-ua" | "client-ua" | "viewport";
type DeviceInfo = { isMobile: boolean; ua?: string; source: Source };

const Ctx = createContext<DeviceInfo>({ isMobile: false, source: "viewport" });

export function DeviceProvider({
  initial,
  children,
}: {
  initial?: Partial<DeviceInfo>;
  children: React.ReactNode;
}) {
  const [info, setInfo] = useState<DeviceInfo>({
    isMobile: initial?.isMobile ?? false,
    ua: initial?.ua,
    source: (initial?.source as Source) ?? "viewport",
  });

  useEffect(() => {
    const ua = navigator.userAgent;
    const uaMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(ua);
    const mq = window.matchMedia("(max-width: 768px)");

    const compute = () => {
      const widthMobile = mq.matches;
      const isMobile = uaMobile || widthMobile;
      setInfo({ isMobile, ua, source: uaMobile ? "client-ua" : "viewport" });
    };

    compute();
    mq.addEventListener("change", compute);
    window.addEventListener("resize", compute);
    return () => {
      mq.removeEventListener("change", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  const value = useMemo(() => info, [info]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useIsMobile = () => useContext(Ctx).isMobile;
export const useDevice = () => useContext(Ctx);
