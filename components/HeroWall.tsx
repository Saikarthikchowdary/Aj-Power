"use client";

import { useEffect, useRef, useState } from "react";

// Licensed stock footage (Pexels — free for commercial use, no attribution
// required), each matched to a core service line and all genuine HD/4K
// sources. Two <video> layers crossfade into each other — the next clip
// preloads silently behind the current one and is already playing by the
// time it's revealed, so the cut has no black gap or buffering hitch.
const CLIPS = [
  "https://videos.pexels.com/video-files/10151854/10151854-hd_1920_1080_24fps.mp4", // HT & LT works — electricians at a substation
  "https://videos.pexels.com/video-files/5846675/5846675-hd_1920_1080_25fps.mp4", // engineering & design — technical project on screen
  "https://videos.pexels.com/video-files/10058463/10058463-hd_1920_1080_25fps.mp4", // HT & LT works — close-up of substation insulators
  "https://videos.pexels.com/video-files/7314025/7314025-uhd_4096_2160_25fps.mp4", // maintenance & service — electrician at work, 4K
];
const POSTER = "https://images.unsplash.com/photo-1509390673020-a5b2450e33f1?auto=format&fit=crop&w=2400&q=85";
const PLAYBACK_RATE = 1.3;

export default function HeroWall() {
  const [slotClip, setSlotClip] = useState([0, 1]);
  const [active, setActive] = useState(0);
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotionRef.current) {
      videoRefs[0].current?.pause();
      videoRefs[1].current?.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (reduceMotionRef.current) return;
    const other = active === 0 ? 1 : 0;
    videoRefs[active].current?.play().catch(() => {});
    videoRefs[other].current?.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  function handleActiveEnded() {
    if (reduceMotionRef.current) return;
    const inactive = active === 0 ? 1 : 0;
    const outgoing = active;
    setActive(inactive);
    setSlotClip((prev) => {
      const next = [...prev];
      next[outgoing] = (prev[inactive] + 1) % CLIPS.length;
      return next;
    });
  }

  function applyPlaybackRate(e: React.SyntheticEvent<HTMLVideoElement>) {
    e.currentTarget.playbackRate = PLAYBACK_RATE;
  }

  return (
    <div className="herostage">
      {[0, 1].map((slot) => (
        <video
          key={`${slot}-${slotClip[slot]}`}
          ref={videoRefs[slot]}
          className={"herovideo" + (slot === active ? " active" : "")}
          preload="auto"
          muted
          playsInline
          poster={slot === 0 ? POSTER : undefined}
          aria-hidden="true"
          onEnded={slot === active ? handleActiveEnded : undefined}
          onLoadedMetadata={applyPlaybackRate}
          onPlay={applyPlaybackRate}
        >
          <source src={CLIPS[slotClip[slot]]} type="video/mp4" />
        </video>
      ))}
    </div>
  );
}
