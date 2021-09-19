import React from 'react';
import { useEffect } from 'react';
import './overlay.styles.css';

export default function Overlay({ ready, faded, setFaded }) {

  useEffect(() => {
    if (ready) setFaded(true)
  }, [ready, setFaded])

  return (
    <>
      <div
        className={`fullscreen bg ${ready ? 'ready' : 'notready'} ${faded && 'clicked'}`}
      >
        Loading...
      </div>
    </>
  );
}
