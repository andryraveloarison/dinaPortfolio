import React, { useEffect, useRef } from 'react';
import styles from './App.module.css';
import Home from './pages/Home/Home.jsx';

function App() {
  const crRef = useRef(null);
  const crrRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (crRef.current && crrRef.current) {
        const { clientX: x, clientY: y } = e;
        crRef.current.style.left = `${x}px`;
        crRef.current.style.top = `${y}px`;

        // Slight delay for ring
        setTimeout(() => {
          if (crrRef.current) {
            crrRef.current.style.left = `${x}px`;
            crrRef.current.style.top = `${y}px`;
          }
        }, 50);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={styles.App}>
      <div className={styles.cursor} ref={crRef}></div>
      <div className={styles.cursorRing} ref={crrRef}></div>
      <Home />
    </div>
  );
}

export default App;
