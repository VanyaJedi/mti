import { headers } from "next/headers";

export type DeviceDetect = {
  isMobile: boolean;
  ua: string;
  source: "server-ua";
};

const MOBILE_RE = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;

export async function detectDeviceServer(): Promise<DeviceDetect> {
  const h = await headers(); 
  const ua = h.get("user-agent") ?? "";
  return { isMobile: MOBILE_RE.test(ua), ua, source: "server-ua" };
}

export const isMobileServer = async () => (await detectDeviceServer()).isMobile;