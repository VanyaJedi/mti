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

export const instrumentSerifRough = localFont({
  src: [
    {
      path: "./Instrument_Serif_Rough/instrumentserifrough-rough-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Instrument_Serif_Rough/instrumentserifrough-rough-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Instrument_Serif_Rough/InstrumentSerifRough-Rough.ttf",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-instrument-serif-rough",
  display: "swap",
});