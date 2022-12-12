import Head from 'next/head'
import Image from 'next/image'
import styles from '/components/ProjectCell.module.css'
import Link from 'next/link'
import { gsap, Power3} from 'gsap'
import { TweenMax } from 'gsap'
import React, {useRef, useEffect} from 'react'

export default function Home(props) {

    let cell = useRef(null)
    let image = useRef(null)

    useEffect(() => {
        let animation = gsap.to(image, {paused: true, x: -4, duration: 0.1, ease: Power3.easeOut});

        cell.addEventListener('mouseenter', () => animation.play());
        cell.addEventListener('mouseleave', () => animation.reverse());
    
    })


    return (
            <div className={styles.projectCell} ref={el => cell = el}>
                <div className={styles.projectCellContent}>
                    <p className={styles.projectName}>{props.name}</p>
                    <p className={styles.projectYear}>{props.year}</p>
                </div>

                <div className={styles.projectIcon} ref={el => image = el} >
                    <Image src={props.image} width={22} height={16} />
                </div>
        </div>
    )
}