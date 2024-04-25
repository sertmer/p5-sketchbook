'use client';

import p5 from 'p5';
import React, { useRef, useEffect } from 'react';

const SketchView = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(500, 500)
        p.noCursor()

        p.colorMode(p.HSB, 360, 100, 100)
        p.rectMode(p.CENTER)
        p.noStroke()
      }

      p.draw = () => {
        p.background(p.pmouseY / 2, 100, 100)
        p.fill(360 - p.pmouseY / 2, 100, 100)
        p.rect(250, 250, p.pmouseX + 1, p.pmouseX + 1)
      }
    }

    if (sketchRef.current) {
      const myP5 = new p5(sketch, sketchRef.current);

      return () => {
          myP5.remove();
      };
    }
  }, []);

  return (
    <div ref={sketchRef}>
      <p>this is the sketchview component</p>
    </div>
  )
}

export default SketchView;