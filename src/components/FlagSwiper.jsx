import React, { useEffect, useRef, useState } from 'react';

import flag1 from '../assets/flags/be.png';
import flag2 from '../assets/flags/ca.png';
import flag3 from '../assets/flags/ho.png';
import flag4 from '../assets/flags/ire.png';
import flag5 from '../assets/flags/mal.png';
import flag6 from '../assets/flags/malt.png';
import flag7 from '../assets/flags/netherland.png';
import flag8 from '../assets/flags/ph.png';
import flag9 from '../assets/flags/sb.png';
import flag10 from '../assets/flags/sp.png';
import flag11 from '../assets/flags/sf.png';
import flag12 from '../assets/flags/spain.png';
import flag13 from '../assets/flags/sl.png';
import flag14 from '../assets/flags/sw.png';
import flag15 from '../assets/flags/th.png';
import flag16 from '../assets/flags/mrcgp.png';
import flag17 from '../assets/flags/uk.png';

const flags = [
  { src: flag1, label: 'Belgium' },
  { src: flag2, label: 'Canada' },
  { src: flag3, label: 'Hong Kong' },
  { src: flag4, label: 'Ireland' },
  { src: flag5, label: 'Malaysia' },
  { src: flag6, label: 'Malta' },
  { src: flag7, label: 'Netherlands' },
  { src: flag8, label: 'Philippines' },
  { src: flag9, label: 'South Arabia' },
  { src: flag10, label: 'Singapore' },
  { src: flag11, label: 'South Africa' },
  { src: flag12, label: 'Spain' },
  { src: flag13, label: 'Sri Lanka' },
  { src: flag14, label: 'Sweden' },
  { src: flag15, label: 'Thailand' },
  { src: flag16, label: 'UK' },
  { src: flag17, label: 'United Kingdom' },
];

const FlagCarousel = () => {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const pauseScroll = useRef(false);
  const animationFrame = useRef(null);
  const [loopPoint, setLoopPoint] = useState(0);

  const allFlags = [...flags, ...flags];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const updateLoopPoint = () => {
      setLoopPoint(container.scrollWidth / 2);
    };

    updateLoopPoint();

    const observer = new ResizeObserver(updateLoopPoint);
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scroll = () => {
      if (!pauseScroll.current) {
        container.scrollLeft += 0.5;
        if (container.scrollLeft >= loopPoint) {
          container.scrollLeft = 0;
        }
      }
      animationFrame.current = requestAnimationFrame(scroll);
    };

    animationFrame.current = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame.current);
  }, [loopPoint]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onMouseDown = (e) => {
      isDragging.current = true;
      pauseScroll.current = true;
      container.classList.add('grabbing');
      startX.current = e.clientX;
      scrollStart.current = container.scrollLeft;
    };

    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      const dx = e.clientX - startX.current;
      container.scrollLeft = scrollStart.current - dx;
    };

    const stopDragging = () => {
      if (isDragging.current) {
        isDragging.current = false;
        pauseScroll.current = false;
        container.classList.remove('grabbing');
      }
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('mouseleave', stopDragging);

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('mouseleave', stopDragging);
    };
  }, []);

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .grabbing { cursor: grabbing !important; }
      `}</style>

      <div className="w-full mt-10 overflow-hidden ">
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll no-scrollbar cursor-grab gap-6 py-4 px-2 "
        >
          {allFlags.map((flag, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center text-center"
              style={{ width: '100px' }}
            >
              <img
                src={flag.src}
                alt={flag.label}
                className="w-20 h-20 object-cover rounded-md "
                draggable={false}

              />
              <p className="mt-2 text-sm text-gray-700 font-medium whitespace-nowrap">
                {flag.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FlagCarousel;
