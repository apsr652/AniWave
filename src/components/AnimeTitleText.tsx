import { motion } from "framer-motion";
import { AnimeTitle } from "../lib/types";

let currentAudio: HTMLAudioElement | null = null;
let stopTimeout: ReturnType<typeof setTimeout> | null = null;

const audioCache: Record<string, HTMLAudioElement> = {};

type AnimeTitleTextProps = {
  title: AnimeTitle;
  onHover: (text: string) => void;
  onHoverEnd: () => void;
  className?: string;
};

export const AnimeTitleText = ({
  title,
  onHover,
  onHoverEnd,
  className = "",
}: AnimeTitleTextProps) => {
  const getAudio = () => {
    if (!audioCache[title.id]) {
      const audio = new Audio(title.sound);
      audio.preload = "auto";
      audioCache[title.id] = audio;
    }
    return audioCache[title.id];
  };

  // 🚨 Stop and reset current audio immediately
  const stopCurrent = () => {
    if (stopTimeout) clearTimeout(stopTimeout);
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio = null;
    }
  };

  // 🎵 Play instantly, stop after 10s
  const playSound = () => {
    stopCurrent(); // stop anything playing

    const audio = getAudio();
    audio.currentTime = 0;
    audio.volume = 0.7;

    audio.play().catch((err) => {
      console.warn("Audio play failed:", err);
    });

    // auto-stop after 10s
    stopTimeout = setTimeout(() => {
      stopCurrent();
    }, 10000);

    currentAudio = audio;
  };

  return (
    <motion.span
      data-text={title.id}
      className={`transition-colors duration-300 ${className}`}
      whileHover={{
        scale: 1.2,
        textShadow: "0 0 10px #ff073a, 0 0 20px #faff00, 0 0 40px #ff073a",
      }}
      onMouseEnter={(e) => {
        onHover(e.currentTarget.dataset.text!);
        playSound();
      }}
      onMouseMove={(e) => onHover(e.currentTarget.dataset.text!)}
      onMouseLeave={() => {
        onHoverEnd();
        stopCurrent(); // 🔥 stop immediately when leaving
      }}
    >
      {title.displayName}
    </motion.span>
  );
};
