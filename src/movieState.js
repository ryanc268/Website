//Import Images

//valerian x
import appicon from "./img/projectart/valerianx/App Icon.png";

import abyssmark from "./img/projectart/valerianx/characters/Abyssmark.png";
import crycio from "./img/projectart/valerianx/characters/Crycio.png";
import drakala from "./img/projectart/valerianx/characters/Drakala.png";
import faelie from "./img/projectart/valerianx/characters/Faelie.png";
import frocus from "./img/projectart/valerianx/characters/Frocus.png";
import lightnape from "./img/projectart/valerianx/characters/Lightnape.png";
import raingel from "./img/projectart/valerianx/characters/Raingel.png";
import valentyra from "./img/projectart/valerianx/characters/Valentyra.png";

import crocgeneral from "./img/projectart/valerianx/monsters/Croc General.png";
import foolfuse from "./img/projectart/valerianx/monsters/Foolfuse.png";
import gremlin from "./img/projectart/valerianx/monsters/Gremlin.png";
import kobold from "./img/projectart/valerianx/monsters/Kobold.png";
import mossgolem from "./img/projectart/valerianx/monsters/Moss Golem.png";
import mothilisk from "./img/projectart/valerianx/monsters/Mothilisk.png";
import mysticslime from "./img/projectart/valerianx/monsters/Mystic Slime.png";
import otterRider from "./img/projectart/valerianx/monsters/Otter Rider.png";
import rythbeast from "./img/projectart/valerianx/monsters/Rythbeast.png";
import snowdragon from "./img/projectart/valerianx/monsters/Snow Dragon.png";
import snowkobold from "./img/projectart/valerianx/monsters/Snow Kobold.png";
import snownecro from "./img/projectart/valerianx/monsters/Snow Necro.png";
import snowtroll from "./img/projectart/valerianx/monsters/Snow Troll.png";
import snowwolf from "./img/projectart/valerianx/monsters/Snow Wolf.png";
import snowyeti from "./img/projectart/valerianx/monsters/Snow Yeti.png";
import snowgolem from "./img/projectart/valerianx/monsters/snow-golem.png";
import templeeye from "./img/projectart/valerianx/monsters/Temple Eye.png";
import templegolem from "./img/projectart/valerianx/monsters/Temple Golem.png";
import templereaper from "./img/projectart/valerianx/monsters/Temple Reaper.png";
import templespider from "./img/projectart/valerianx/monsters/Temple Spider.png";

import snowland1 from "./img/projectart/valerianx/landscapes/Snowland1.jpg";
import snowland2 from "./img/projectart/valerianx/landscapes/Snowland2.jpg";
import temple1 from "./img/projectart/valerianx/landscapes/Temple1.png";
import temple2 from "./img/projectart/valerianx/landscapes/Temple2.png";
import wetland1 from "./img/projectart/valerianx/landscapes/Wetland1.jpg";
import wetland2 from "./img/projectart/valerianx/landscapes/Wetland2.jpg";

//react music player
//import reactsmall from "./img/projectart/musicplayer/react-icon.png";
import reactbig from "./img/projectart/musicplayer/react-icon-big.png";

//goonbot
import goonIcon from "./img/projectart/goonbot/goonbot-small.png";

export const MovieState = () => {
  return [
    {
      title: "Valerian X",
      carousels: [
        {
          carouselName: "Monsters",
          carouselImgs: [
            {
              name: "Croc General",
              image: crocgeneral,
            },
            {
              name: "Foolfuse",
              image: foolfuse,
            },
            {
              name: "Gremlin",
              image: gremlin,
            },
            {
              name: "Kobold",
              image: kobold,
            },
            {
              name: "Moss Golem",
              image: mossgolem,
            },
            {
              name: "Mothilisk",
              image: mothilisk,
            },
            {
              name: "Mystic Slime",
              image: mysticslime,
            },
            {
              name: "Otter Rider",
              image: otterRider,
            },
            {
              name: "Rythbeast",
              image: rythbeast,
            },
            {
              name: "Snow Dragon",
              image: snowdragon,
            },
            {
              name: "Snow Kobold",
              image: snowkobold,
            },
            {
              name: "Snow Necromancer",
              image: snownecro,
            },
            {
              name: "Snow Troll",
              image: snowtroll,
            },
            {
              name: "Snow Wolf",
              image: snowwolf,
            },
            {
              name: "Snow Yeti",
              image: snowyeti,
            },
            {
              name: "Snow Golem",
              image: snowgolem,
            },
            {
              name: "Temple Eye",
              image: templeeye,
            },
            {
              name: "Temple Golem",
              image: templegolem,
            },
            {
              name: "Temple Reaper",
              image: templereaper,
            },
            {
              name: "Temple Spider",
              image: templespider,
            },
          ],
        },
        {
          carouselName: "Characters",
          carouselImgs: [
            {
              name: "Abyssmark",
              image: abyssmark,
            },
            {
              name: "Crycio",
              image: crycio,
            },
            {
              name: "Drakala",
              image: drakala,
            },
            {
              name: "Faelie",
              image: faelie,
            },
            {
              name: "Frocus",
              image: frocus,
            },
            {
              name: "Lightnape",
              image: lightnape,
            },
            {
              name: "Raingel",
              image: raingel,
            },
            {
              name: "Valentyra",
              image: valentyra,
            },
          ],
        },
        {
          carouselName: "Landscapes",
          carouselImgs: [
            {
              name: "Wetland 1",
              image: wetland1,
            },
            {
              name: "Wetland 2",
              image: wetland2,
            },
            {
              name: "Temple 1",
              image: temple1,
            },
            {
              name: "Temple 2",
              image: temple2,
            },
            {
              name: "Snowland 1",
              image: snowland1,
            },
            {
              name: "Snowland 2",
              image: snowland2,
            },
          ],
        },
      ],
      secondaryImg: appicon,
      url: "/work/valerianX",
      awards: [
        {
          title: "Rogue-Like Adventure Mode!",
          description:
            "Keep the progression feeling fresh with a full featured Adventure Mode that lets you combine unique perks, find randomized items, spend reward currency at checkpoint shops, fight bosses, different monster types / encounter orders and finally progress through many different animated environments to see how far you can go! Every run starts fresh and the strategy you choose will always change!",
        },
        {
          title: "Unlockables and High-Scores!",
          description:
            "Many different characters and battle-runes to unlock using an in-game currency gained from playing any of the game modes! Compare your Adventure Mode high-scores with an online leaderboard to see how your runs compare to everyone else! ...And maybe use it as inspiration to push a little bit further on your next run!",
        },
        {
          title: "Made For Mobile Using Unity 2D!",
          description:
            "Unity game engine offers cross-platform deployment so both ios and android can be delivered the same amazing game with minimal development time! Engross yourself in a beautifully 2D animated experience that keeps the charm and immersion that any other platform would deliver, except in your pocket!",
        },
      ],
    },
    {
      title: "React Music Player",
      carousels: [
        {
          carouselName: "",
          carouselImgs: [],
        },
      ],
      secondaryImg: reactbig,
      url: "/work/react-music-player",
      awards: [
        {
          title: "PAGE STILL UNDER CONSTRUCTION",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Ryan the coding legend",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Wow",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Goon Bot",
      carousels: [
        {
          carouselName: "Artwork",
          carouselImgs: [
            {
              name: "Goon Squad Logo",
              image: goonIcon,
            },
          ],
        },
      ],
      secondaryImg: goonIcon,
      url: "/work/goon-bot",
      awards: [
        {
          title: "PAGE STILL UNDER CONSTRUCTION",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Ryan the coding legend",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Wow",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
