import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const ParticleField = ({ theme }) => {
  const count = 4000;
  const mesh = useRef();
  const { viewport } = useThree();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const dotColor = theme === 'dark' ? '#A3A3A3' : '#5e5e5e';
  
  // Track global mouse position without relying on canvas pointer events
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
        // Broad field to cover varying screen sizes
        const x = (Math.random() - 0.5) * 40;
        const y = (Math.random() - 0.5) * 40;
        const z = (Math.random() - 0.5) * 20;
        temp.push({ 
          t: Math.random() * 100, 
          x, y, z, baseZ: z 
        });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    // Map normalized device coordinates to world viewport
    const mouseX = (mousePos.current.x * viewport.width) / 2;
    const mouseY = (mousePos.current.y * viewport.height) / 2;

    particles.forEach((particle, i) => {
      let { t, x, y, baseZ } = particle;

      // Antigravity upward flow effect
      t += 0.01;
      particle.t = t;
      const currentY = ((y + t * 2) % 40) - 20;

      // Distance from mouse in approximate projection plane
      const dx = mouseX - x;
      const dy = mouseY - currentY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      const repulseRadius = 6;
      let targetZ = baseZ;
      if (dist < repulseRadius) {
         const force = (repulseRadius - dist) / repulseRadius;
         // Inverted gravity well: pushes particles deeper into the void
         targetZ = baseZ - force * 15; 
      }

      // Ease towards target Z to make interaction smooth
      particle.z += (targetZ - particle.z) * 0.1;

      dummy.position.set(x, currentY, particle.z);
      
      // Make particles smaller as they retreat into the background
      const scale = particle.z < -5 ? 0.3 : 1;
      dummy.scale.set(scale, scale, scale);
      
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <circleGeometry args={[0.03, 8]} />
      <meshBasicMaterial color={dotColor} transparent opacity={0.4} />
    </instancedMesh>
  );
};

const WebGLBackground = ({ booted, theme }) => {
  const bgColor = theme === 'dark' ? '#050505' : '#fafafa';
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: booted ? 1 : 0 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    >
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ antialias: false, alpha: false }}>
         <color attach="background" args={[bgColor]} />
         <fog attach="fog" args={[bgColor, 5, 20]} />
         <ParticleField theme={theme} />
      </Canvas>
    </motion.div>
  );
};

export default WebGLBackground;
