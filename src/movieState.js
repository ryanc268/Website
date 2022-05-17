//Import Images
import card from "./img/valerianX-card.jpg";
import logo from "./img/valerianX-logo.png";
import goonIcon from "./img/goonbot-small.png";

export const MovieState = () => {
  return [
    {
      title: "UNDER CONSTRUCTION",
      mainImg: card,
      secondaryImg: logo,
      url: "/work/valerianX",
      awards: [
        {
          title: "Ryan the coding legend",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Wow!",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Smile :)",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "UNDER CONSTRUCTION",
      mainImg: goonIcon,
      url: "/work/goon-bot",
      secondaryImg: goonIcon,
      awards: [
        {
          title: "Ryan the coding legend",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Wow!",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Smile :)",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
