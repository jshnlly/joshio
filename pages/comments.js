// comments.js
'use client';
import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Footer from '../components/Footer';

export default function Comments() {
    const router = useRouter();
    const [isLeaving, setIsLeaving] = useState(false);

    const handleBack = () => {
        setIsLeaving(true);
        setTimeout(() => {
            router.back();
        }, 500); // Same timeout as grid animations
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1]
            }
        },
        exit: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.4,
                ease: [0.23, 1, 0.32, 1]
            }
        }
    };

    return (
        <div className={styles.container}>

            <motion.div 
                className={styles.content}
                variants={containerVariants}
                initial="hidden"
                animate={isLeaving ? "exit" : "visible"}
            >
                {/* Header */}
                <motion.div variants={itemVariants} className={styles.navContainer}>
                    <div className={styles.navLeftWork}> 
                        <button onClick={handleBack}>
                            Back
                        </button>
                    </div>

                    <div className={styles.navRight}>
                        <a href="mailto:josh@joshn.io" target="_blank" rel="noreferrer" className={styles.mainLinkText}>
                            josh[at]joshn.io
                        </a>
                        <p>
                            <a href="https://read.cv/josh" target="_blank" rel="noreferrer" className={styles.mainLinkText}>
                                read.cv/josh
                            </a>
                        </p>
                    </div>
                </motion.div>

                {/* Project Title */}
                <motion.div variants={itemVariants} className={styles.workContent}>
                    <div className={styles.workTitle}>
                        <p>Story Comments</p>
                        <p className={styles.workYear}>2024</p> 
                    </div>
                </motion.div>

                {/* Video Container */}
                <motion.div 
                    variants={itemVariants} 
                    className={styles.videoContainer}
                >
                    <video autoPlay loop muted playsInline className={styles.workVideo}>
                        <source src="/videos/Hype Strings Phone.mp4" type="video/mp4" />
                    </video>

                </motion.div>

                <motion.div 
                    variants={itemVariants} 
                    className={styles.videoContainer}
                >
                    <video autoPlay loop muted playsInline className={styles.workVideo}>
                        <source src="/videos/Hype Original.mp4" type="video/mp4" />
                    </video>

                </motion.div>

                {/* Footer */}
                <motion.div variants={itemVariants} className={styles.navContainer}>
                    <div className={styles.navLeftWork}> 
                        <p>with Nate Hajian + more</p>
                    </div>

                    <div className={styles.navRight}>
                        <p>
                            <a href="https://mashable.com/article/instagram-stories-comments#:~:text=You%20can%20now%20leave%20comments%20on%20Instagram%20Stories.,begged%2C%20and%20down%20and%20out." target="_blank" rel="noreferrer" className={styles.mainLinkText}>
                                Mashable
                            </a>
                            ,&nbsp;
                            <a href="https://www.theverge.com/2024/9/3/24235292/instagram-stories-disappearing-comments-from-friends" target="_blank" rel="noreferrer" className={styles.mainLinkText}>
                                The Verge
                            </a>
                            ,&nbsp;
                            <a href="https://www.instagram.com/reel/C_dfWiqPK3p/?igsh=MXNzemVjcGptcmNudw==" target="_blank" rel="noreferrer" className={styles.mainLinkText}>
                                Launch Post
                            </a>
                        </p>
                        
                    </div>
                </motion.div>

                <Footer />
            </motion.div>
        </div>
    );
}