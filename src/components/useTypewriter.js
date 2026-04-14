import { useState, useEffect } from 'react';

export function useTypewriter(lines, typingSpeed = 65, deletingSpeed = 40, pauseMs = 1800) {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    let li = 0;
    let ci = 0;
    let deleting = false;
    let timeout;

    function tick() {
      const cur = lines[li];
      if (!deleting) {
        ci++;
        setDisplay(cur.slice(0, ci));
        if (ci === cur.length) {
          deleting = true;
          timeout = setTimeout(tick, pauseMs);
          return;
        }
      } else {
        ci--;
        setDisplay(cur.slice(0, ci));
        if (ci === 0) {
          deleting = false;
          li = (li + 1) % lines.length;
        }
      }
      timeout = setTimeout(tick, deleting ? deletingSpeed : typingSpeed);
    }

    timeout = setTimeout(tick, 800);
    return () => clearTimeout(timeout);
  }, []);

  return display;
}
