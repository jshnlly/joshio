import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '../components/Header.js'
import ProjectCell from '../components/ProjectCell.js'
import { gsap, Power3} from 'gsap'
import { TweenMax } from 'gsap'
import React, {useRef, useEffect} from 'react'

export default function Home() {

  let app = useRef(null)
  let text = useRef(null)
  let items = useRef(null)
  let sub = useRef(null)
  let proj = useRef(null)
  let foot = useRef(null)
  let main = useRef(null)

  let first = useRef(null)
  let second = useRef(null)
  let third = useRef(null)
  let fourth = useRef(null)
  let fifth = useRef(null)


  let tl = gsap.timeline();

  useEffect(() => {
    let header = text;
    let descriptions = items
    let secondary = sub
    let projgroup = proj
    let footcont = foot
    let cont = main
    let one = first
    let two = second
    let three = third
    let four = fourth
    let five = fifth

    tl.from(header,{opacity: 0, duration: 0.6, ease: Power3.easeOut, delay: 1})
    tl.to(descriptions, {y: -17, duration: 0.6, ease: Power3.easeOut, delay: 1})
    tl.to(descriptions, {y: -34, duration: 0.6, ease: Power3.easeOut, delay: 1})
    tl.to(descriptions, {y: -51, duration: 0.6, ease: Power3.easeOut, delay: 1})
    tl.to(descriptions, {y: -68, duration: 0.6, ease: Power3.easeOut, delay: 1})
    tl.from(secondary, {opacity: 0, duration: 0.6, ease: Power3.easeOut, delay: 0}, 7.4)
    tl.from(projgroup, {opacity: 0, duration: 0.6, ease: Power3.easeOut, delay: 0}, 7.4)
    tl.from(footcont, {opacity: 0, duration: 0.6, ease: Power3.easeOut, delay: 0}, 7.4)
    tl.to(secondary, {y: -68, duration: 0.6, ease: Power3.easeOut, delay: 0}, 5.4)
    tl.to(projgroup, {y: -68, duration: 0.6, ease: Power3.easeIn, delay: 0}, 5.4)
    tl.to(footcont, {y: -68, duration: 0.6, ease: Power3.easeOut, delay: 0}, 5.4)
    tl.from(main, {y: 120, duration: 0.6, ease: Power3.easeOut, delay: 0}, 7.4)
    tl.to(first, {opacity: 0, duration: 0.6, ease: Power3.easeOut, delay: 1}, 1.6)
    tl.from(second, {opacity: 0, duration: 0.6, ease: Power3.easeOut, delay: 1}, 1.6)
    tl.to(second, {opacity: 0, duration: 0.6, ease: Power3.easeOut, delay: 1}, 3.2)
    tl.from(third, {opacity: 0, duration: 0.6, ease: Power3.easeOut, delay: 1}, 3.2)
    tl.to(third, {opacity: 0, duration: 0.6, ease: Power3.easeOut, delay: 1}, 4.8)
    tl.from(fourth, {opacity: 0, duration: 0.6, ease: Power3.easeOut, delay: 1}, 4.8)
    tl.to(fourth, {opacity: 0, duration: 0.6, ease: Power3.easeOut, delay: 1}, 6.4)
    tl.from(fifth, {opacity: 0, duration: 0.6, ease: Power3.easeOut, delay: 1}, 6.4)


    
    gsap.to(app, 0, {css: {visibility: 'visible'}})
    console.log(app)
  })


  return (
    <div className={styles.container} ref={el => main = el}>
      <Head>
        <title>Josh Nelson, Designer</title>
        <link rel="icon" href="/signature.png" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
      </Head>
        <div className={styles.content} ref={el => app = el}>

          <div className={styles.titleContainer}>
              <div className={styles.header} ref={el => text = el}>Josh Nelson is 
                <div className={styles.items} ref={el => items = el}>
                  <span className={styles.item0} ref={el => first = el}>designing at Instagram</span>
                  <span className={styles.item1} ref={el => second = el}>making apps with craft</span>
                  <span className={styles.item2} ref={el => third = el}>caring about the details</span>
                  <span className={styles.item3} ref={el => fourth = el}>thinking about tomorrow</span>
                  <span className={styles.item4} ref={el => fifth = el}>designing at Instagram</span>
                </div>
              </div>

              <div className={styles.subtitle} ref={el => sub = el}>b. 1999. <span className={styles.inlineLink}><a href="mailto:josh@joshn.io" target="_blank" rel="noreferrer">josh&#91;at&#93;joshn.io</a></span></div>
          </div>

          {/*<div className={styles.projects} ref={el => proj = el}>
            <a href="/videos/super-share.mp4" target="_blank" rel="noreferrer"><ProjectCell name="Instagram Sharesheet" year="2023" image="/images/mp4.png" /></a>
              <a href="https://www.wsj.com/articles/instagram-challenges-bereal-and-adds-notes-short-message-feature-11670945979?mod=hp_lista_pos1" target="_blank" rel="noreferrer">
                <ProjectCell name="Instagram Candid Stories" year="2022" image="/images/ext.png" url="/" />
              </a>
              <a href="/videos/reshare-search.mp4" target="_blank" rel="noreferrer"><ProjectCell name="Instagram Direct Search" year="2022" image="/images/mp4.png" /></a>
              <a href="/videos/qs.mp4" target="_blank" rel="noreferrer"><ProjectCell name="Instagram Quick Send" year="2022" image="/images/mp4.png" /></a>
              <a href="/videos/almanac1.mp4" target="_blank" rel="noreferrer"><ProjectCell name="Almanac Files" year="2021" image="/images/mp4.png" /></a>
              <a href="/videos/almanac3.mp4" target="_blank" rel="noreferrer"><ProjectCell name="Almanac Search" year="2021" image="/images/mp4.png" /></a>
              <a href="/videos/cbs-gt.mp4" target="_blank" rel="noreferrer"><ProjectCell name="CBS Sports, Soccer Gametracker" year="2021" image="/images/mp4.png" /></a>
              <a href="/videos/cbs3.mp4" target="_blank" rel="noreferrer"><ProjectCell name="CBS Sports, 247 Homepage" year="2021" image="/images/mp4.png" /></a>
              <a href="/images/breathwrk.png" target="_blank" rel="noreferrer"><ProjectCell name="Breathwrk Paywalls" year="2020" image="/images/png.png" /></a>
          </div> */}

          <div className={styles.footer} ref={el => foot = el}>
           <div className={styles.line}></div>
            <div className={styles.footerText}>
              <p>I’m currently not open to full-time opportunities, but always open to talk to people interested in making products with craft. 
                <br></br>
                <br></br>
                I can be reached through  
                <span className={styles.inlineLink}><a href="mailto:josh@joshn.io" target="_blank" rel="noreferrer">email</a></span>,
                <span className={styles.inlineLink}><a href="https://twitter.com/jnelly2" target="_blank" rel="noreferrer">twitter</a></span>, 
                <span className={styles.inlineLink}><a href="https://linkedin.com/in/jshn" target="_blank" rel="noreferrer">linkedin</a></span>, or 
                <span className={styles.inlineLink}><a href="https://read.cv/josh" target="_blank" rel="noreferrer">readcv</a></span>.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}