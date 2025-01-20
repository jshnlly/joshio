import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, {useRef, useEffect, useState, useCallback} from 'react'
import GridView from '../components/Project.js'
import { useRouter } from 'next/navigation';
import AnimatedHeader from '../components/AnimatedHeader';
import Footer from '../components/Footer';

export default function Home() {

  const [isLeaving, setIsLeaving] = useState(false);

  const cardData = [
    {
      imageUrl: "/gifs/collage.gif",
      title: "End of Year Collage",
      year: "2024",
      pageUrl: "/collage"
    },
    {
      imageUrl: "/gifs/Strings Only.gif",
      title: "Story Comments",
      year: "2024",
      pageUrl: "/comments"
    },
    {
      imageUrl: "/gifs/Mocks Music.gif",
      title: "Music Stories",
      year: "2024",
      pageUrl: "/music"
    },
    {
      imageUrl: "/gifs/Frame.gif",
      title: "Sticker Drops",
      year: "2024",
      pageUrl: "/stickers"
    },
    // {
    // imageUrl: "/gifs/Note Pogs.gif",
    // title: "Immersive Note Viewer",
    //  year: "2023",
    //  pageUrl: "/notes"
    // },
    // {
    //   imageUrl: "/gifs/candid.gif",
    //   title: "Candid Stories",
    //   year: "2023",
    //   pageUrl: "/candid"
    // },
    {
      imageUrl: "/gifs/airplane.gif",
      title: "Share Sheet",
      year: "2022",
      pageUrl: "/sharesheet"
    },
    {
      imageUrl: "/gifs/QS-Pill.gif",
      title: "Quick Send v2",
      year: "2022",
      pageUrl: "/quick-send"
    }
  ];


  return (

    <div className={styles.container}>

      <Head>
        <title>Josh Nelson, Interface Designer</title>
        <link rel="icon" href="/signature.png" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
        <meta name="description" content="Josh Nelson is an interface designer and prototyper currently at Instagram." />
      </Head>

        <div className={styles.content}>

          <AnimatedHeader isLeaving={isLeaving} />


          <div className={styles.projects}>
            <GridView 
              items={cardData}
              onStartLeaving={() => setIsLeaving(true)}
            />
          </div>

          <Footer />


        </div>
      </div>
  );
};