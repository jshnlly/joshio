import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const containerStyles = {
  position: 'relative',
  width: '100%',
  height: '96px', // marginTop + padding + paddingBottom
  marginTop: '24px',
};

const footerStyles = {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '24px',
  cursor: 'pointer',
  userSelect: 'none',
  opacity: 0.8,
  transition: 'color 0.2s ease-in-out',
  fontSize: '14px',
  paddingBottom: '48px'
};

const emojiStyles = {
  display: 'block', // Ensures the emoji scales from its center
  lineHeight: 1, // Prevents any unexpected vertical spacing
  transform: 'translateZ(0)', // Enables hardware acceleration for smoother animation
};

const Footer = () => {
  const emojis = ["ツ", "✌️", "🤝", "👀", "👋", "⚡️", "😎"];
  const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [resetTimeout, setResetTimeout] = useState(null);

  const handleClick = () => {
    if (resetTimeout) {
      clearTimeout(resetTimeout);
    }

    setCurrentEmojiIndex((prev) => (prev + 1) % emojis.length);

    const timeout = setTimeout(() => {
      setCurrentEmojiIndex(0);
    }, 5000);

    setResetTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (resetTimeout) {
        clearTimeout(resetTimeout);
      }
    };
  }, [resetTimeout]);

  return (
    <div style={containerStyles}>
      <div
        style={{
          ...footerStyles,
          color: isHovered ? 'black' : 'inherit',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <motion.span
          style={emojiStyles}
          whileTap={{
            scale: 0.875,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 10
            }
          }}
        >
          {emojis[currentEmojiIndex]}
        </motion.span>
      </div>
    </div>
  );
};

export default Footer;