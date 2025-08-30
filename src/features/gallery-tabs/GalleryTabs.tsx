
'use client';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import s from './styles.module.css';
import { useEffect, useState } from 'react';
import { Paragraph } from '@/ui/typography/Paragraph';
import { Dot } from '@/ui/dot/Dot';
import { useIsMobile } from '../device-detector/deviceProvider';
import { Heading } from '@/ui/typography/Heading';
import { Flex } from '@/ui/flex/Flex';
import { Button } from '@/ui/button/Button';
import classNames from 'classnames';

const galleryItems = [
  {
    id: 1,
    image: '/gallery/image-1.jpg',
    text: 'Our trainers are a hand-picked team of elite professionals'
  },
  {
    id: 2,
    image: '/gallery/image-2.jpg',
    text: 'Years of experience training clients from all walks of life'
  },
  {
    id: 3,
    image: '/gallery/image-3.jpg',
    text: 'Carefully chosen for their skills and dedication to the sport'
  },
  {
    id: 4,
    image: '/gallery/image-4.jpg',
    text: 'All have competed at the highest level, many as champions'
  },
  {
    id: 5,
    image: '/gallery/image-5.jpg',
    text: 'Bringing unmatched technical expertise to every session'
  },
]


export const GalleryTabs = () => {

  const [selectedIndex, setSelectedIndex] = useState(0)
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % galleryItems.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  if (isMobile) {
    return (
      <>
        <Heading className={s.worthHeading} fontStyle="rough" level={2}>
          Elite level Trainers 
        </Heading>
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex} className={s.galleryGroup}>
          <TabPanels>
            {
              galleryItems.map((item) => (
                <TabPanel className={s.panel} key={item.id}  >
                  <div className={s.image} style={{ backgroundImage: `url(${item.image})` }} />
                  <Paragraph className={s.text}>{item.text}</Paragraph>
                </TabPanel>
              ))
            }
          </TabPanels>
          <TabList className={s.tabs}>
            {
              galleryItems.map((item, i) => (
                <Tab className={s.tab} key={item.id} ><Dot active={selectedIndex === i} /></Tab>
              ))
            }
          </TabList>
        </TabGroup>
      </>
    )
  }

   return (
      <>
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex} className={s.galleryGroup}>
          <TabPanels>
            {
              galleryItems.map((item) => (
                <TabPanel className={s.panel} key={item.id}>
                  <div className={s.image} style={{ backgroundImage: `url(${item.image})` }}>
                    <Flex justify="between" align="center">
                      <Heading className={s.worthHeading} fontStyle="rough" level={2}>
                        Elite level Trainers 
                      </Heading>
                      <Button>
                        <span className={s.uppercase}>Book your training</span>
                      </Button>
                    </Flex>
                   
                  </div>
                </TabPanel>
              ))
            }
          </TabPanels>
          <TabList className={s.tabs}>
            {
              galleryItems.map((item, i) => (
                <Tab className={classNames(s.tab,{ [s.tabActive]: selectedIndex === i } )} key={item.id}><Paragraph>{item.text}</Paragraph></Tab>
              ))
            }
          </TabList>
        </TabGroup>
      </>
    )

}