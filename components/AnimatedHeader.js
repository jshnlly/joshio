// components/AnimatedHeader.js
import { motion } from 'framer-motion';
import styles from './AnimatedHeader.module.css';
import React from 'react';

const AnimatedHeader = ({ isLeaving }) => {
  const [time, setTime] = React.useState(new Date());
            
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { 
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
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

  const formattedTime = `${time.toLocaleString('en-US', { 
    timeZone: 'America/New_York',
    weekday: 'long',
    month: 'long', 
    day: 'numeric'
  })} ${time.toLocaleString('en-US', {
    timeZone: 'America/New_York',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  })}`;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isLeaving ? "exit" : "visible"}
      className={styles.headerContainer}
    >
      {/* Nav Container */}
      <motion.div variants={itemVariants} className={styles.navContainer}>
        <div className={styles.navLeft}> 
          <a href="https://joshn.io" rel="noreferrer" className={styles.mainLinkText}>Josh Nelson</a>
          <p>{formattedTime}</p>
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

      {/* Intro Text */}
      <motion.div variants={itemVariants} className={styles.intro}>
        <p>I like to prototype dynamic interactions <br /> and care deeply about crafting interfaces that <br /> can communicate the future.</p>
        <p>I&apos;m currently leading design projects across <br /> Stories and Labs teams at Instagram. <br /></p>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedHeader;