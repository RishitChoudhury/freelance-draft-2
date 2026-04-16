import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredElement, setHoveredElement] = useState(null);

  // Smooth springs for delayed ring
  const springConfigVar = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(0, springConfigVar);
  const cursorYSpring = useSpring(0, springConfigVar);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!hoveredElement) {
        cursorXSpring.set(e.clientX);
        cursorYSpring.set(e.clientY);
      }
    };

    const handleMouseOver = (e) => {
      // Find nearest interactive element up the DOM tree
      const target = e.target.closest('[data-cursor-interactive]');
      if (target) {
        setHoveredElement(target.getBoundingClientRect());
      } else {
        setHoveredElement(null);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorXSpring, cursorYSpring, hoveredElement]);

  useEffect(() => {
    if (hoveredElement) {
      cursorXSpring.set(hoveredElement.left + hoveredElement.width / 2);
      cursorYSpring.set(hoveredElement.top + hoveredElement.height / 2);
    } else {
      cursorXSpring.set(mousePosition.x);
      cursorYSpring.set(mousePosition.y);
    }
  }, [mousePosition, hoveredElement, cursorXSpring, cursorYSpring]);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] mix-blend-difference overflow-hidden">
      {/* Central Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-stark-white rounded-full mix-blend-difference"
        style={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{ duration: 0 }}
      />

      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 border border-stark-white mix-blend-difference z-[-1]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: hoveredElement ? hoveredElement.width : 32,
          height: hoveredElement ? hoveredElement.height : 32,
          translateX: '-50%',
          translateY: '-50%',
          borderRadius: hoveredElement ? '0px' : '50%', // Snap to sharp edges for elements
          backgroundColor: hoveredElement ? 'rgba(255, 255, 255, 1)' : 'transparent',
        }}
      />
    </div>
  );
};

export default CustomCursor;
