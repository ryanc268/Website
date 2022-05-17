import { v4 as uuidv4 } from "uuid";
//Music Imports
import FutureDnb from "./music/FutureDnb.mp3";
import HeavyDub from "./music/HeavyDub.mp3";
import HukaeThingRyanGina from "./music/HukaeThingRyanGina.mp3";
import MidTempo from "./music/MidTempo.mp3";
import Mystery from "./music/Mystery.mp3";
import NeuroDnb from "./music/NeuroDnb.mp3";
import NightRide from "./music/NightRide.mp3";
import OldschoolDark from "./music/OldschoolDark.mp3";
import SadboiWubs from "./music/SadboiWubs.mp3";
import Sunset from "./music/Sunset.mp3";
import ThisIsYourGod from "./music/ThisIsYourGod.mp3";
import ValerianBattleTheme from "./music/ValerianBattleTheme.mp3";
import ValerianBossTheme1 from "./music/ValerianBossTheme1.mp3";
import ValerianMenuTheme from "./music/ValerianMenuTheme.mp3";
import ValerianSnowTheme from "./music/ValerianSnowTheme.mp3";
import ValerianTempleTheme from "./music/ValerianTempleTheme.mp3";
import ValerianWetlandTheme from "./music/ValerianWetlandTheme.mp3";
import WubbyRap from "./music/WubbyRap.mp3";

//picture imports
import dnbrandom from "./img/musicart/dnbrandom.jpg";
import skrollex from "./img/musicart/skrollex.jpg";
import tehryanlogo from "./img/musicart/tehryanlogo.png";
import heavy from "./img/musicart/Heavy-Metal.jpg";
import dark from "./img/musicart/dark-forest.jpg";
import prosncons from "./img/musicart/prosncons.jpg";
import robotdnb from "./img/musicart/robot-dnb.jpg";
import glitchy from "./img/musicart/glitchy.jpg";
import yourgod from "./img/musicart/your-god.jpg";
import sunsetlogo from "./img/musicart/night-stroll.jpg";
import nightridelogo from "./img/musicart/night-drive.jpg";
import mysterylogo from "./img/musicart/mystery.jpg";

function songLibrary() {
  return [
    {
      name: "Neuro DnB [CLIP]",
      artist: "Ryan Coppa",
      year: 2022,
      url: "/music/neuro-dnb",
      cover: dnbrandom,
      id: uuidv4(),
      active: true,
      color: ["#3B4E59", "#1B272F"],
      audio: NeuroDnb,
    },
    {
      name: "Sad Melodic Tune [CLIP]",
      artist: "Ryan Coppa",
      year: 2020,
      url: "/music/sad-melodic-tune",
      cover: skrollex,
      id: uuidv4(),
      active: false,
      color: ["#3B4E59", "#1B272F"],
      audio: SadboiWubs,
    },
    {
      name: "Ryan and Gina Riddim Collab [CLIP]",
      artist: "Ryan Coppa & Gina",
      year: 2021,
      url: "/music/ryan-and-gina-riddim-collab",
      cover: tehryanlogo,
      id: uuidv4(),
      active: false,
      color: ["#3B4E59", "#1B272F"],
      audio: HukaeThingRyanGina,
    },
    {
      name: "Heavy Dubstep Metal Tune [CLIP]",
      artist: "Ryan Coppa",
      year: 2021,
      url: "/music/heavy-dubstep-metal-tune",
      cover: heavy,
      id: uuidv4(),
      active: false,
      color: ["#3B4E59", "#1B272F"],
      audio: HeavyDub,
    },
    {
      name: "Dark Oldschool Dubstep Tune [CLIP]",
      artist: "Ryan Coppa",
      year: 2022,
      url: "/music/dark-oldschool-dubstep-tune",
      cover: dark,
      id: uuidv4(),
      active: false,
      color: ["#3B4E59", "#1B272F"],
      audio: OldschoolDark,
    },
    {
      name: "Rap Dubstep Tune [CLIP]",
      artist: "Ryan Coppa",
      year: 2022,
      url: "/music/rap-dubstep-tune",
      cover: prosncons,
      id: uuidv4(),
      active: false,
      color: ["#3B4E59", "#1B272F"],
      audio: WubbyRap,
    },
    {
      name: "Futuristic DnB [CLIP]",
      artist: "Ryan Coppa",
      year: 2022,
      url: "/music/futuristic-dnb",
      cover: robotdnb,
      id: uuidv4(),
      active: false,
      color: ["#3B4E59", "#1B272F"],
      audio: FutureDnb,
    },
    {
      name: "Glitchy Mid-Tempo [CLIP]",
      artist: "Ryan Coppa",
      year: 2021,
      url: "/music/glitchy-mid-tempo",
      cover: glitchy,
      id: uuidv4(),
      active: false,
      color: ["#3B4E59", "#1B272F"],
      audio: MidTempo,
    },
    {
      name: "This is Your God [CLIP]",
      artist: "Ryan Coppa",
      year: 2021,
      url: "/music/this-is-your-god",
      cover: yourgod,
      id: uuidv4(),
      active: false,
      color: ["#3B4E59", "#1B272F"],
      audio: ThisIsYourGod,
    },
    {
      name: "Sunset",
      artist: "Ryan Coppa",
      year: 2022,
      url: "/music/sunset",
      cover: sunsetlogo,
      id: uuidv4(),
      active: false,
      color: ["#3B4E59", "#1B272F"],
      audio: Sunset,
    },
    {
      name: "Night Ride",
      artist: "Ryan Coppa",
      year: 2022,
      url: "/music/night-ride",
      cover: nightridelogo,
      id: uuidv4(),
      active: false,
      color: ["#3B4E59", "#1B272F"],
      audio: NightRide,
    },
    {
      name: "Mystery",
      artist: "Ryan Coppa",
      year: 2022,
      url: "/music/mystery",
      cover: mysterylogo,
      id: uuidv4(),
      active: false,
      color: ["#3B4E59", "#1B272F"],
      audio: Mystery,
    },
    {
      name: "Valerian X Basic Battle Theme",
      artist: "Ryan Coppa",
      year: 2017,
      url: "/music/valerian-x-basic-battle-theme",
      cover: "https://i.imgur.com/1K4Yq7x.png",
      id: uuidv4(),
      active: false,
      color: ["#4C4846", "#13161F"],
      audio: ValerianBattleTheme,
    },
    {
      name: "Valerian X Snow Theme",
      artist: "Ryan Coppa",
      year: 2017,
      url: "/music/valerian-x-snow-theme",
      cover: "https://i.imgur.com/3Gk9Dhl.jpg",
      id: uuidv4(),
      active: false,
      color: ["#B3C6E7", "#0E2E5F"],
      audio: ValerianSnowTheme,
    },
    {
      name: "Valerian X Temple Theme",
      artist: "Ryan Coppa",
      year: 2017,
      url: "/music/valerian-x-temple-theme",
      cover: "https://i.imgur.com/OBo7jZt.png",
      id: uuidv4(),
      active: false,
      color: ["#C2967F", "#4B3C52"],
      audio: ValerianTempleTheme,
    },
    {
      name: "Valerian X Wetland Theme",
      artist: "Ryan Coppa",
      year: 2017,
      url: "/music/valerian-x-wetland-theme",
      cover: "https://i.imgur.com/Qg3XAyp.jpg",
      id: uuidv4(),
      active: false,
      color: ["#5C6C3F", "#293A24"],
      audio: ValerianWetlandTheme,
    },
    {
      name: "Valerian X Temple Boss Theme",
      artist: "Ryan Coppa",
      year: 2017,
      url: "/music/valerian-x-temple-boss-theme",
      cover: "https://i.imgur.com/S9GmwLf.png",
      id: uuidv4(),
      active: false,
      color: ["#876C69", "#45394F"],
      audio: ValerianBossTheme1,
    },
    {
      name: "Valerian X Main Menu Theme",
      artist: "Ryan Coppa",
      year: 2017,
      url: "/music/valerian-x-main-menu-theme",
      cover: "https://i.imgur.com/AxzAE2B.png",
      id: uuidv4(),
      active: false,
      color: ["#7CBA86", "#1A3E30"],
      audio: ValerianMenuTheme,
    },
  ];
}

export default songLibrary;
