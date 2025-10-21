"use client";
import { useRef, useEffect } from "react";
import styles from "../../../app/page.module.css";

export default function OrbAutoPlay() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = () => {
      videoRef.current?.play().catch(() => {});
      document.removeEventListener("touchstart", playVideo);
    };
    document.addEventListener("touchstart", playVideo);
    return () => document.removeEventListener("touchstart", playVideo);
  }, []);

  return (
    <video
      ref={videoRef}
      src="https://www.apple.com/105/media/us/siri/2018/ee7c4c16_aae5_4678_9cdd_7ca813baf929/films/siri_orb_large.mp4"
      muted
      loop
      autoPlay
      playsInline
      preload="auto"
      className={`${styles.orbVideo} rounded-[999px]`}
    />
  );
}
