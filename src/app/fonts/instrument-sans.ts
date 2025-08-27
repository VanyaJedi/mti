import localFont from "next/font/local";

export const instrumentSans = localFont({
  src: [
    {
      path: "./Instrument_Sans/InstrumentSans-VariableFont_wdth,wght.ttf",
      style: "normal",
    },
    {
      path: "./Instrument_Sans/InstrumentSans-Italic-VariableFont_wdth,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-instrument-sans",
  display: "swap",
});