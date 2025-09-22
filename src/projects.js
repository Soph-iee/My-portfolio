import rating from "./images/rating.png";
import landingpage from "./images/landingpage.png";
import ecommerce from "./images/ecommerce.png";
import agecalculator from "./images/agecalculator.png";
import musicplayer from "./images/musicplayer.png";
import accordion from "./images/accordion.png";
import bookmark from "./images/bookmark.png";
import Segsalerty from "./images/segsalerty.png";

const projects = [
  {
    name: "Segsalerty",
    image: Segsalerty,
    url: "https://segsalertylanding.netlify.app",
    id: 11,
    responsive: true,
  },
  {
    name: "Rating Component",
    image: rating,
    url: "https://soph-iee.github.io/-interactive-rating-component/",
    id: 1,
    responsive: true,
  },
  {
    name: "Landing page",
    image: landingpage,
    url: "https://soph-iee.github.io/INTRO-SECTION-WITH-DROPDOWN-MENU/",
    id: 2,
    responsive: false,
  },
  {
    name: "E-commerce",
    image: ecommerce,
    url: "https://soph-iee.github.io/ecommerce-product-page/",
    id: 3,
    responsive: false,
  },
  {
    name: "Age Calculator",
    image: agecalculator,
    url: "https://soph-iee.github.io/age-calculator-app/",
    id: 4,
    responsive: false,
  },
  {
    name: "Bookmark Landing",
    image: bookmark,
    url: "https://bookmark-landinng.netlify.app/",
    id: 7,
    responsive: false,
    mobile: true,
  },

  {
    name: "Accordion",
    image: accordion,
    url: "https://accordion-fmc.netlify.app/",
    id: 6,
    responsive: true,
  },
  {
    name: "Music Player",
    image: musicplayer,
    url: "https://soph-iee.github.io/Virtual-Music-Playlist/",
    id: 5,
    responsive: true,
  },
];

export default projects;
