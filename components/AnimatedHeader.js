// components/AnimatedHeader.js
import { motion } from 'framer-motion';
import styles from './AnimatedHeader.module.css';

const AnimatedHeader = ({ isLeaving }) => {
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
      y: 20,  // Same as starting position
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

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
          <p>Last updated: 11/02/24 at 9:38PM</p>
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
        <p>I like to design and prototype and strive for <br /> interface excellence in all my work.</p>
        <p>I'm currently leading design projects across <br /> Stories and Labs teams at Instagram.</p>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedHeader;