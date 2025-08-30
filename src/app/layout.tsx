import type { Metadata } from "next";
import "./globals.css";
import { detectDeviceServer } from "@/features/device-detector/deviceDetector.server";
import { DeviceProvider } from "@/features/device-detector/deviceProvider";
import { instrumentSans, instrumentSerifRough } from "./fonts/instrument-sans";


export const metadata: Metadata = {
  title: "Muay Thai Island",
  description: "Muay Thai Island",
};

export default async  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initial = await detectDeviceServer(); 
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerifRough.variable}`}>
        <DeviceProvider initial={initial}>
          {children} 
        </DeviceProvider>
      </body>
    </html>
  );
}
