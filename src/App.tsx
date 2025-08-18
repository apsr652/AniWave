import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimePreview } from "./components/AnimePreview";
import { AnimeTitleText } from "./components/AnimeTitleText";
import { useMobileWarning } from "./hooks/useMobileWarning";
import { useMousePosition } from "./hooks/useMousePosition";
import { ANIME_TITLES } from "./lib/constant";
import { AnimeSceneEntry, data } from "./lib/data";
import "./App.css";
import { Toaster } from "sonner";

const Page = () => {
  const [hoveredText, setHoveredText] = useState<string | null>(null);
  const mousePosition = useMousePosition();
  useMobileWarning();

  return (
    <div className="relative flex w-screen flex-col items-center justify-center">
      <Toaster />

      {/* Animated Heading */}
      <motion.h1
        className="mb-10 text-center text-5xl font-extrabold text-transparent md:text-7xl"
        style={{
          textShadow: "0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff",
          color: "#fff",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: [1, 1.05, 1] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        Why You Should Start Watching Anime:
      </motion.h1>

      {/* Anime Titles */}
      <div className="flex flex-col items-center justify-center gap-4 text-nowrap text-3xl font-black text-zinc-300 *:cursor-default md:text-6xl">
        {ANIME_TITLES.map((title) => (
          <AnimeTitleText
            key={title.id}
            title={title}
            onHover={setHoveredText}
            onHoverEnd={() => setHoveredText(null)}
            className="transform scale-x-110"
          />
        ))}
      </div>

      {/* Previews */}
      <AnimatePresence>
        {hoveredText &&
          data[hoveredText] &&
          data[hoveredText].map((item: AnimeSceneEntry, index: number) => (
            <AnimePreview
              key={index}
              hoveredText={hoveredText}
              item={item}
              index={index}
              mousePosition={mousePosition}
            />
          ))}
      </AnimatePresence>
    </div>
  );
};

export default Page;
