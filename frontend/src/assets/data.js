// popular
import p1_img from './product_1.png'
import p2_img from './product_2.png'
import p3_img from './product_3.png'
import p4_img from './product_4.png'

// latest 
import p5_img from "./product_12.png";
import p6_img from "./product_35.png";
import p7_img from "./product_14.png";
import p8_img from "./product_8.png";
import p9_img from "./product_15.png";
import p10_img from "./product_2.png";
import p11_img from "./product_17.png";
import p12_img from "./product_28.png";

// Footer
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import youtube from './youtube.svg'
import linkedin from './linkedin.svg'


const POPULAR = [
  {
    id:1,
    name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image:p1_img,
    new_price:499,
    old_price:799,
  },
  {id:2,
    name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image:p2_img,
    new_price:849,
    old_price:1199,
  },
  {id:3,
    name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image:p3_img,
    new_price:599,
    old_price:999,
  },
  {id:4,
    name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image:p4_img,
    new_price:999,
    old_price:1499,
  },
];
export default POPULAR;


const LATEST = [
  {
    id: 5,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p5_img,
    new_price: 499,
    old_price: 799,
  },
  {
    id: 6,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    image: p6_img,
    new_price: 849,
    old_price: 999,
  },
  {
    id: 7,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: p7_img,
    new_price: 599,
    old_price: 999,
  },
  {
    id: 8,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p8_img,
    new_price: 999,
    old_price: 1999,
  },
  {
    id: 9,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: p9_img,
    new_price: 499,
    old_price: 799,
  },
  {
    id: 10,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p10_img,
    new_price: 849,
    old_price: 999,
  },
  {
    id: 11,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    image: p11_img,
    new_price: 599,
    old_price: 899,
  },
  {
    id: 12,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    image: p12_img,
    new_price: 1299,
    old_price: 1999,
  },
];
export default LATEST;

// FOOTER SECTION
const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Us",
      "Categories",
      "Exchange Policy",
      "Order Now",
      "FAQ",
      "Privacy Policy",
    ],
  },
  {
    title: "Our Community",
    links: [
      "Terms and Conditions",
      "Special Offers",
      "Customer Reviews",
    ],
  },
];

export default FOOTER_LINKS

const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Contact Number", value: "9874214558" },
    { label: "Email Address", value: "info@goshop.com" },
  ],
};
export default FOOTER_CONTACT_INFO

const SOCIALS = {
  title: "Social",
  links: [
    facebook,
    instagram,
    twitter,
    youtube,
    linkedin,
  ],
};
export default SOCIALS