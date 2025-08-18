import { AnimeTitle } from "./types";

export const ANIMATION_CONFIG = {
  initial: { scaleY: 1.15 },
  hover: { scaleY: 1.3 },
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 10,
    mass: 0.8,
  },
} as const;

export const ANIME_TITLES: AnimeTitle[] = [
  { id: "bleach", displayName: "Bleach", sound: "/bleach.mp3" },
  {
    id: "demonSlayer",
    displayName: "Demon Slayer",
    sound: "/demon-slayer.mp3",
  },
  { id: "yourName", displayName: "Your Name", sound: "/your-name.mp3" },
  {
    id: "hunterXHunter",
    displayName: "Hunter x Hunter",
    sound: "/hunter-x-hunter.mp3",
  },
  {
    id: "spiritedAway",
    displayName: "Spirited Away",
    sound: "/spirited-away.mp3",
  },
];
