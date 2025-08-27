import { Paragraph } from "@/ui/typography/Paragraph";
import s from "./page.module.css";
import { Section } from "@/ui/section/Section";
import { Heading } from "@/ui/typography/Heading";
import { Button } from "@/ui/button/Button";

export default async function Home() {
  
  return (
    <div className={s.page}>
      <main>
        <Section className={s.headSection}>
          <Heading className={s.mainHeading} fontStyle="rough" level={1}>
            <span className={s.uppercase}>Private</span> <span className={s.italic}>Muay&nbsp;Thai </span> <span className={s.uppercase}>Training at&nbsp;Your Villa</span></Heading>
          <Paragraph className={s.paragraph}>
            A fully personalized one-on-one session that strengthens your body, sharpens your mind, and connects you to the cultural heritage of Thailand’s national treasure — Muay Thai — all in the comfort and privacy of your own villa.
          </Paragraph>
          <Button className={s.headButton}>
            <span className={s.uppercase}>Book your training</span>
          </Button>
        </Section>
      
      </main>
    </div>
  );
}
