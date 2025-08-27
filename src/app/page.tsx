import Image from "next/image";
import styles from "./page.module.css";
import { isMobileServer } from "@/features/device-detector/device-detector.server";

export default async function Home() {
  const isMobile = await isMobileServer();
  
  return (
    <div className={styles.page}>
      <main>
        <h1>Private Muay Thai Training at Your Villa</h1>
        <p>
          A fully personalized one-on-one session that strengthens your body, sharpens your mind, and connects you to the cultural heritage of Thailand’s national treasure — Muay Thai — all in the comfort and privacy of your own villa.
        </p>
      </main>
    </div>
  );
}
