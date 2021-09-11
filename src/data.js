import { v4 as uuidv4 } from "uuid";

function songLibrary() {
  //Use https://www.mailboxdrive.com/home/ to upload
  return [
    {
      name: "Valerian X Basic Battle Theme",
      artist: "Ryan Coppa",
      cover: "https://i.imgur.com/1K4Yq7x.png",
      id: uuidv4(),
      active: true,
      color: ["#4C4846", "#13161F"],
      audio: "https://www.mboxdrive.com/Capstone Battle Theme (Temp.).mp3",
    },
    {
      name: "Valerian X Snow Theme",
      artist: "Ryan Coppa",
      cover: "https://i.imgur.com/3Gk9Dhl.jpg",
      id: uuidv4(),
      active: false,
      color: ["#B3C6E7", "#0E2E5F"],
      audio: "https://www.mboxdrive.com/Valerian X Snow Theme.mp3",
    },
    {
      name: "Valerian X Temple Theme",
      artist: "Ryan Coppa",
      cover: "https://i.imgur.com/OBo7jZt.png",
      id: uuidv4(),
      active: false,
      color: ["#C2967F", "#4B3C52"],
      audio: "https://www.mboxdrive.com/Valerian X Temple Theme.mp3",
    },
    {
      name: "Valerian X Wetland Theme",
      artist: "Ryan Coppa",
      cover: "https://i.imgur.com/Qg3XAyp.jpg",
      id: uuidv4(),
      active: false,
      color: ["#5C6C3F", "#293A24"],
      audio: "https://www.mboxdrive.com/Valerian X Wetland Theme.mp3",
    },
    {
      name: "Valerian X Temple Boss Theme",
      artist: "Ryan Coppa",
      cover: "https://i.imgur.com/S9GmwLf.png",
      id: uuidv4(),
      active: false,
      color: ["#876C69", "#45394F"],
      audio: "https://www.mboxdrive.com/Boss Theme 1.mp3",
    },
    {
      name: "Valerian X Main Menu Theme",
      artist: "Ryan Coppa",
      cover: "https://i.imgur.com/AxzAE2B.png",
      id: uuidv4(),
      active: false,
      color: ["#7CBA86", "#1A3E30"],
      audio: "https://www.mboxdrive.com/Main Menu Theme.mp3",
    },
  ];
}

export default songLibrary;
