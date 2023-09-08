interface ScreenshotType {
  imgName: string;
  imgAlt: string;
}

export interface LinkItemType {
  title: string;
  link: string;
  svgAlt: string;
  description: string;
  svgName: string;
  screenshots: ScreenshotType[];
  textArrow: string;
}

export const content: LinkItemType[] = [
  {
    title: "LinkedIn",
    textArrow: "профіль",
    link: "https://www.linkedin.com/in/anastasiia-prysiazhnaia/",
    description:
      "профіль у LinkedIn, де я висвітлюю всі свої роботи в новій області",
    svgName: "linkedin",
    svgAlt: "linkedin-svg",
    screenshots: [
      {
        imgName: "linkedin-1",
        imgAlt: "linkedin-screenshot-first",
      },
      {
        imgName: "linkedin-2",
        imgAlt: "linkedin-screenshot-second",
      },
      {
        imgName: "linkedin-3",
        imgAlt: "linkedin-screenshot-third",
      },
      {
        imgName: "linkedin-4",
        imgAlt: "linkedin-screenshot-fourth",
      },
    ],
  },
  {
    title: "GitHub",
    textArrow: "профіль",
    link: "https://github.com/Anastasia-front",
    description: "профіль у GitHub з усіма проектами та роботами",
    svgName: "github",
    svgAlt: "github-svg",
    screenshots: [
      {
        imgName: "github-1",
        imgAlt: "github-screenshot-first",
      },
      {
        imgName: "github-2",
        imgAlt: "github-screenshot-second",
      },
      {
        imgName: "github-3",
        imgAlt: "github-screenshot-third",
      },
      {
        imgName: "github-4",
        imgAlt: "github-screenshot-fourth",
      },
    ],
  },
  {
    title: "Instagram (Enjoy Stretch Studio)",
    textArrow: "аккаунт",
    link: "https://www.instagram.com/enjoy_stretch_studio/",
    description: "студія зі стретчингу, яку я заснувала й працювала 3 роки",
    svgName: "ess",
    svgAlt: "ess-svg",
    screenshots: [
      { imgName: "ess-1", imgAlt: "ess-screenshot-first" },
      {
        imgName: "ess-2",
        imgAlt: "ess-screenshot-second",
      },
      { imgName: "ess-3", imgAlt: "ess-screenshot-third" },

      {
        imgName: "ess-4",
        imgAlt: "ess-screenshot-fourth",
      },
    ],
  },
  {
    title: "Instagram (Clio Dance)",
    textArrow: "аккаунт",
    link: "https://www.instagram.com/cliodance/",
    description:
      "студія танців, де я викладала 5 років та займалася організаційними заходами",
    svgName: "clio",
    svgAlt: "clio-svg",
    screenshots: [
      {
        imgName: "clio-1",
        imgAlt: "clio-screenshot-first",
      },
      {
        imgName: "clio-2",
        imgAlt: "clio-screenshot-second",
      },

      {
        imgName: "clio-3",
        imgAlt: "clio-screenshot-third",
      },
      {
        imgName: "clio-4",
        imgAlt: "clio-screenshot-fourth",
      },
    ],
  },
  {
    title: "Резюме",
    textArrow: "резюме",
    link: "https://drive.google.com/file/d/1XvjBCqbkzoYmRMy31g1oNO4ZuTXQq48-/view?usp=sharing",
    description: "власне посилання на резюме",
    svgName: "cv",
    svgAlt: "cv-svg",
    screenshots: [
      {
        imgName: "cv",
        imgAlt: "cv-photo",
      },
    ],
  },
  {
    title: "SeeYour.info",
    textArrow: "сайт",
    link: "https://seeyour.info/nastia_stretching?fbclid=PAAaYfJOKPVXKZKKoJrd6GxzvGxByeUzeeerrRcW6uA_Q3B08yXLkDYjGfcDk_aem_AUk9PeLcQhiHG9eF2QxYFjNWo-4e4Osk13buQRs01hPSlN48tYrrwhvRx6cEiqAdtQk",
    description: "сторінка для звʼязку, коли була тренером та хореографом",
    svgName: "seeYouInfo",
    svgAlt: "see-you-info-svg",
    screenshots: [
      {
        imgName: "seeYouInfo",
        imgAlt: "see-you-info-website",
      },
    ],
  },
];
