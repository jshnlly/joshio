'use client';
import React from 'react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

import Image from 'next/image';

const containerVariants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
        delay: 1,
      opacity: 1,
      transition: {
        when: "beforeChildren",    // Add this line
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    },
    exit: {
      opacity: 0,                  // Change this from 1 to 0
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "beforeChildren"     // Add this line
      }
    }
  };

const projectVariants = {
  hidden: { 
    opacity: 0,
    y: 48,
    scale: 1
  },
  visible: {
    delay: 1,
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.32, 1],
    }
  },
  exit: {
    opacity: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const Project = ({ imageUrl, title, year, pageUrl, isLeaving, onProjectClick }) => {
    const [isHovered, setIsHovered] = useState(false);


    const projectStyle = {
      aspectRatio: '1 / 1',
      backgroundColor:"#f5f5f5",
      overflow: 'hidden',
      position: 'relative',
      cursor: 'pointer',
      width: '100%',
      border: 'none',
    };
  
    const imageStyle = {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      border: 'none',
    };

    const imageContainerStyle = {
        width: '100%',
        height: '100%',
        border: 'none',
      };
  
    const overlayStyle = {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '16px',
      color: 'black',
      border: 'none',
    };
  
    const titleStyle = {
      margin: '0 0 4px 0',
      fontSize: '14px',
      fontWeight: 'normal',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    };
  
    const yearStyle = {
      margin: 0,
      fontSize: '14px',
      opacity: 0.3,
    };

      return (
        <motion.div 
          style={projectStyle}
          variants={projectVariants}
          initial="hidden"
          animate={isLeaving ? "exit" : "visible"}
          whileHover={!isLeaving && "hover"}
          onClick={() => onProjectClick(pageUrl)}
          onHoverStart={() => !isLeaving && setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.div 
            style={imageContainerStyle}
            animate={{ 
              scale: isLeaving ? 1 : isHovered ? 1 : 1
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <img 
              src={imageUrl} 
              alt={title}
              style={imageStyle}
            />
          </motion.div>
          
          <AnimatePresence>
            {isHovered && !isLeaving && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                exit={{ 
                  opacity: 0, 
                  y: 10,
                  transition: { duration: 0.15, ease: "easeIn" }
                }}
                style={overlayStyle}
              >
                <h3 style={titleStyle}>{title}</h3>
                <p style={yearStyle}>{year}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      );
  };
  

  const GridView = ({ items = [], onStartLeaving }) => {

    const router = useRouter();
    const [isLeaving, setIsLeaving] = useState(false);

    const containerStyle = {
        width: '100%',
        boxSizing: 'border-box',
        padding: '8px',
      };

    const gridStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px',
      width: '100%',
      gridTemplateColumns: '1fr',
        '@media (min-width: 640px)': {
            // Tablet layout (2 columns)
            gridTemplateColumns: 'repeat(2, 1fr)'
        },

        '@media (min-width: 1024px)': {
            // Desktop layout (3 columns)
            gridTemplateColumns: 'repeat(3, 1fr)'
        }
    };

    React.useEffect(() => {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
          .responsive-grid {
            display: grid;
            gap: 16px;
            width: 100%;
            grid-template-columns: 1fr;  /* Mobile first - single column */
          }
    
          @media (min-width: 640px) {
            .responsive-grid {
              grid-template-columns: repeat(2, 1fr);  /* Tablet - 2 columns */
            }
          }
    
          @media (min-width: 1024px) {
            .responsive-grid {
              grid-template-columns: repeat(3, 1fr);  /* Desktop - 3 columns */
            }
          }
        `;
        document.head.appendChild(styleSheet);
        return () => document.head.removeChild(styleSheet);
      }, []);

      const handleProjectClick = (pageUrl) => {
        setIsLeaving(true);
        onStartLeaving();
        
        setTimeout(() => {
          router.push(pageUrl);
        }, 250);
      };
  
      return (
        <div style={containerStyle}>
          <motion.div 
            className="responsive-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {items.map((item, index) => (
              <Project 
                key={index}
                imageUrl={item.imageUrl}
                title={item.title}
                year={item.year}
                pageUrl={item.pageUrl}
                isLeaving={isLeaving}
                onProjectClick={handleProjectClick}
              />
            ))}
          </motion.div>
        </div>
      );
  };

  export default GridView;