export const Links = [
  {
    href: "/",
    value: "الصفحة الرئيسية",
    type: "Link",
  },
  {
    href: "/Products",
    value: "المنتجات",
    type: "Link",
  },
  {
    href: "#Features",
    value: "المميزات",
    type: "InView",
  },
];

export const HomeButtons = [
  {
    href: "/Products",
    value: "المنتجات",
    class: 1,
  },
  {
    href: "/Terms",
    value: "الشروط والأحكام",
    class: 2,
  },
];

export const StoreName = "اسم المتجر";
export const StoreDescription = "إن كنت تبحث عن منتج رائع فمكاننا هو اختيارك.";

export const FeaturesData = [
  {
    name: "اي شي",
  },
  {
    name: "اي شي",
  },
  {
    name: "اي شي",
  },
  {
    name: "اي شي",
  },
  {
    name: "اي شي",
  },
  {
    name: "اي شي",
  },
];

import MostImage from "public/Home.svg";
export const MostPopular = [
  {
    img: MostImage,
    name: "المنتج الاول",
    price: 200,
  },
  {
    img: MostImage,
    name: "المنتج الثاني",
    price: 700,
  },
  {
    img: MostImage,
    name: "المنتج الثالث",
    price: 250,
  },
  {
    img: MostImage,
    name: "المنتج الرابع",
    price: 400,
  },
  {
    img: MostImage,
    name: "المنتج الخامس",
    price: 800,
  },
  {
    img: MostImage,
    name: "المنتج السادس",
    price: 1800,
  },
  {
    img: MostImage,
    name: "المنتج السابع",
    price: 2400,
  },
  {
    img: MostImage,
    name: "المنتج الثامن",
    price: 8000,
  },
];

import { GiClothes } from "react-icons/gi";
import {
  MdDevices,
  MdHealthAndSafety,
  MdHouse,
  MdOutlinePets,
  MdOutlineSportsFootball,
} from "react-icons/md";
import { TbHealthRecognition } from "react-icons/tb";
export const categories = [
  {
    icon: MdOutlinePets,
    href: "/",
    name: "الحيوانات",
    count: 5,
  },
  {
    icon: MdDevices,
    href: "/",
    name: "الالكترونيات",
    count: 5,
  },
  {
    icon: TbHealthRecognition,
    href: "/",
    name: "العافية",
    count: 5,
  },
  {
    icon: MdHouse,
    href: "/",
    name: "المنزل",
    count: 5,
  },
  {
    icon: MdOutlineSportsFootball,
    href: "/",
    name: "بضائع رياضية",
    count: 5,
  },
  {
    icon: MdHealthAndSafety,
    href: "/",
    name: "الصحة الطبية",
    count: 5,
  },
  {
    icon: GiClothes,
    href: "/",
    name: "الملابس والاكسسوارات",
    count: 5,
  },
];
