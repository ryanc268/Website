//Import Images
import card from "./img/valerianX-card.jpg";
import snowGolem from "./img/snow-golem.png";
import goonIcon from "./img/goonbot-small.png";

export const MovieState = () => {
  return [
    {
      title: "Valerian X",
      mainImg: card,
      secondaryImg: snowGolem,
      url: "/work/valerianX",
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
      mainImg: goonIcon,
      url: "/work/goon-bot",
      secondaryImg: goonIcon,
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
