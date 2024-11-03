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
                        <p>Instagram Share Sheet</p>
                        <p className={styles.workYear}>2022</p> 
                    </div>
                </motion.div>

                {/* Video Container */}
                <motion.div 
                    variants={itemVariants} 
                    className={styles.videoContainer}
                >
                    <video autoPlay loop muted playsInline className={styles.workVideo}>
                        <source src="/videos/Super Share 2024.mp4" type="video/mp4" />
                    </video>

                </motion.div>

                {/* Footer */}
                <motion.div variants={itemVariants} className={styles.navContainer}>
                    <div className={styles.navLeftWork}> 
                        <p>with Nate Hajian, Angelina Tjung</p>
                    </div>
                </motion.div>

                <Footer />
            </motion.div>
        </div>
    );
}