export type AnimeSceneEntry = {
  src: string;
  offsetX: number;
  offsetY: number;
  rotate: number;
};

import attackOnTitan1 from "/attack-on-titan-1.gif";
import attackOnTitan2 from "/attack-on-titan-2.gif";
import attackOnTitan3 from "/attack-on-titan-3.gif";
import attackOnTitan4 from "/attack-on-titan-4.gif";
import attackOnTitan5 from "/attack-on-titan-5.gif";
// Bleach (5 GIFs)
import bleach1 from "/bleach-1.gif";
import bleach2 from "/bleach-2.gif";
import bleach3 from "/bleach-3.gif";
import bleach4 from "/bleach-4.gif";
import bleach5 from "/bleach-5.gif";

// Demon Slayer (4 GIFs)
import demonSlayer1 from "/demon-slayer-1.gif";
import demonSlayer2 from "/demon-slayer-2.gif";
import demonSlayer3 from "/demon-slayer-3.gif";
import demonSlayer4 from "/demon-slayer-4.gif";

// Your Name (4 GIFs)
import yourName1 from "/your-name-1.gif";
import yourName2 from "/your-name-2.gif";
import yourName3 from "/your-name-3.gif";
import yourName4 from "/your-name-4.gif";

// Hunter x Hunter (4 GIFs)
import hxh1 from "/HxH-1.gif";
import hxh2 from "/HxH-2.gif";
import hxh3 from "/HxH-3.gif";
import hxh4 from "/HxH-4.gif";

// Spirited Away (5 GIFs)
import spiritedAway1 from "/spirited-away-1.gif";
import spiritedAway2 from "/spirited-away-2.gif";
import spiritedAway3 from "/spirited-away-3.gif";
import spiritedAway4 from "/spirited-away-4.gif";
import spiritedAway5 from "/spirited-away-5.gif";

export const data: Record<string, AnimeSceneEntry[]> = {
  attackOnTitan: [
    { src: attackOnTitan1, offsetX: -420, offsetY: -110, rotate: -5 },
    { src: attackOnTitan2, offsetX: 50, offsetY: -200, rotate: 4 },
    { src: attackOnTitan3, offsetX: 450, offsetY: 20, rotate: 10 },
    { src: attackOnTitan4, offsetX: -250, offsetY: 230, rotate: -3 },
    { src: attackOnTitan5, offsetX: 500, offsetY: 250, rotate: -6 },
  ],
  bleach: [
    { src: bleach1, offsetX: -460, offsetY: -200, rotate: -8 },
    { src: bleach2, offsetX: -200, offsetY: -300, rotate: 2 },
    { src: bleach3, offsetX: 430, offsetY: -150, rotate: -4 },
    { src: bleach4, offsetX: -250, offsetY: 250, rotate: 5 },
    { src: bleach5, offsetX: 300, offsetY: 230, rotate: -6 },
  ],
  demonSlayer: [
    { src: demonSlayer1, offsetX: -460, offsetY: -190, rotate: -8 },
    { src: demonSlayer2, offsetX: -10, offsetY: -300, rotate: 2 },
    { src: demonSlayer3, offsetX: 430, offsetY: -100, rotate: -4 },
    { src: demonSlayer4, offsetX: -200, offsetY: 250, rotate: 5 },
  ],
  yourName: [
    { src: yourName1, offsetX: -500, offsetY: -100, rotate: 3 },
    { src: yourName2, offsetX: -10, offsetY: -270, rotate: -4 },
    { src: yourName3, offsetX: 400, offsetY: -70, rotate: -2 },
    { src: yourName4, offsetX: 200, offsetY: 220, rotate: 6 },
  ],
  hunterXHunter: [
    { src: hxh1, offsetX: -420, offsetY: -110, rotate: -5 },
    { src: hxh2, offsetX: 50, offsetY: -200, rotate: 4 },
    { src: hxh3, offsetX: 450, offsetY: 20, rotate: 10 },
    { src: hxh4, offsetX: -250, offsetY: 230, rotate: -3 },
  ],
  spiritedAway: [
    { src: spiritedAway1, offsetX: -500, offsetY: -10, rotate: -5 },
    { src: spiritedAway2, offsetX: -10, offsetY: -100, rotate: 3 },
    { src: spiritedAway3, offsetX: 370, offsetY: 200, rotate: -7 },
    { src: spiritedAway4, offsetX: 300, offsetY: -150, rotate: 5 },
    { src: spiritedAway5, offsetX: -200, offsetY: 250, rotate: -2 },
  ],
};
