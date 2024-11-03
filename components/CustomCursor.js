import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailPosition, setTrailPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setTrailPosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    const updateHoverState = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const isHoverable = hoveredElement?.tagName === 'A' || 
                         hoveredElement?.tagName === 'BUTTON' ||
                         hoveredElement?.onclick ||
                         hoveredElement?.style.cursor === 'pointer';
      setIsHovering(isHoverable);
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mousemove', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousemove', updateHoverState);
    };
  }, [position.x, position.y]);

  // Define cursor elements
  const cursorElements = (
    <>
      <div
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 2147483647, // Maximum z-index value
          width: '8px',
          height: '8px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease-in-out, height 0.2s ease-in-out',
          mixBlendMode: 'difference'
        }}
      />
      <div
        className="cursor-trail"
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 2147483646,
          width: '16px',
          height: '16px',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.1s ease-out'
        }}
      />
    </>
  );

  // Only render via portal when component is mounted (client-side)
  return mounted ? createPortal(cursorElements, document.body) : null;
}