import { HighlightParagraph, Paragraph } from "@/ui/typography/Paragraph";
import s from "./page.module.css";
import { Section } from "@/ui/section/Section";
import { Heading } from "@/ui/typography/Heading";
import { Button } from "@/ui/button/Button";
import { isMobileServer } from "@/features/device-detector/device-detector.server";
import { Card } from "@/ui/card/Card";
import { ArrowRightUpIcon, CleanIcon, CrownIcon, PlayIcon, SupportIcon, TargetIcon } from "@/ui/icons";
import { IconWrapper } from "@/ui/icons/IconWrapper";
import { Flex } from "@/ui/flex/Flex";


const cards = [
  {
    top: <IconWrapper><TargetIcon /></IconWrapper>,
    bottom: <div className={s.cardText}>Fully personalized training tailored to you</div>,
  },
  {
    top: <IconWrapper><CrownIcon /></IconWrapper>,
    bottom: <div className={s.cardText}>Suitable for all levels - from beginner to pro</div>,
  },
  {
    top: <IconWrapper><CleanIcon /></IconWrapper>,
    bottom: <div className={s.cardText}>Clean, fully sanitized equipment provided</div>,
  },
  {
    top: <IconWrapper><SupportIcon /></IconWrapper>,
    bottom: <div className={s.cardText}>Automatic confirmation and Support 24/7</div>,
  },
];


export default async function Home() {
  const isMobile = await isMobileServer();

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
        <Section className={s.worthSection}>
          <Heading className={s.worthHeading} fontStyle="rough" level={2}>
            Why It’s Worth Trying
          </Heading>
          {
            isMobile ? <>
               <HighlightParagraph className={s.highlight}>
                The trainer will bring
              </HighlightParagraph>
              <HighlightParagraph className={s.highlight}>
                all necessary equipment
              </HighlightParagraph>
            </>: <>
               <HighlightParagraph className={s.highlight}>
                The trainer will bring all necessary equipment
              </HighlightParagraph>
            </>
          }
          <div className={s.cards}>
            {
              cards.map((card, i) => (
                <Card className={s.cardWorth} key={i} top={card.top} bottom={card.bottom} />
              ))
            }
          </div>
        </Section>
        <Section className={s.videoSection}>
            <div className={s.videoImage}>
              <HighlightParagraph className={s.optional}>
                optional
              </HighlightParagraph>
              <IconWrapper className={s.playIcon} style="dark"><PlayIcon /></IconWrapper>
            </div>
            <Flex direction="column" gap="8">
              <Heading className={s.worthHeading} fontStyle="rough" level={2}>
                Keep the Memory Alive
              </Heading>
              <Paragraph className={s.paragraph}>
                A beautifully filmed, professionally edited video of your session — dynamic, atmospheric, and unforgettable. Available as an optional add-on.
              </Paragraph>
              <Flex direction="column" gap="8" className={s.bookinCards}>
                <Card 
                  top={
                  <Flex className={s.cardBook} gap="8">
                    <HighlightParagraph className={s.highlightBooking}>1-min</HighlightParagraph>
                    <HighlightParagraph className={s.highlightBooking}>+4800 THB</HighlightParagraph>
                    <Flex className={s.bookBtn} align="center" gap="4">
                      Book <ArrowRightUpIcon />
                    </Flex>
                  </Flex>
                  }
                  bottom={
                    <div>Reel video + drone footage option</div>
                  }
                />
                <Card 
                  top={
                    <Flex className={s.cardBook} gap="8">
                      <HighlightParagraph className={s.highlightBooking}>5-min</HighlightParagraph>
                      <HighlightParagraph className={s.highlightBooking}>+8000 THB</HighlightParagraph>
                      <Flex className={s.bookBtn} align="center" gap="4">
                        Book <ArrowRightUpIcon />
                      </Flex>
                    </Flex>
                  }
                  bottom={
                    <div>Horizontal video + drone footage option</div>
                  }
                />
              </Flex>
            </Flex>
        </Section>
      
      </main>
    </div>
  );
}
