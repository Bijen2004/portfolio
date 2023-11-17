import React from "react";
import { FaReact , FaHtml5 , FaJava , FaNode , FaPython , FaDesktop} from "react-icons/fa";
import chatGptCloneImg from "@/public/chatGptClone.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import javaHotelBookingImg from "@/public/javaHotelBooking.png";
import {IoLogoCss3 , IoLogoJavascript} from "react-icons/io"
import {SiMysql , SiTypescript , SiTailwindcss , SiMongodb , SiExpress} from "react-icons/si"
import {TbBrandNextjs , TbBrandFramerMotion} from "react-icons/tb"
import {MdOutlineDesignServices} from "react-icons/md"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Expertise",
    hash: "#expertise",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "MERN Stack",
    language: "(React , Mongodb , Express , Nodejs)",
    description:
      "Learning the MERN stack opened my eyes to the incredible potential of creating highly functional websites. MERN's blend of MongoDB, Express.js, React, and Node.js presents a dynamic synergy helps manage data well, makes communication smooth between server and client, and creates impressive, user-friendly websites.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Desktop Applications",
    language: "(Java , Pythom)",
    description:
      "Exploring desktop application development using Java and Python has broadened my understanding of software development beyond web-based platforms. Working with these languages has enabled me to create versatile, robust applications suited for desktop environments.",
    icon: React.createElement(FaDesktop),
    date: "2023",
  },
  {
    title: "Next.js",
    language: "(Next.js , React)",
    description:
      "Diving into Next.js has elevated my web development skills by leveraging its features like server-side rendering and static site generation. Its seamless integration with React has empowered me to build high-performance web applications with enhanced SEO capabilities.",
    icon: React.createElement(TbBrandNextjs),
    date: "2023-present",
  },
] as const;

export const projectsData = [
  {
    title: "Hotel Booking App",
    description:
      "This is a full-stack Java application for hotels where customers can access different hotel services.",
    tags: ["Java", "MySQL", "JDBC"],
    imageUrl: javaHotelBookingImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: chatGptCloneImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
    { name: "HTML", icon: React.createElement(FaHtml5) },
    { name: "CSS", icon: React.createElement(IoLogoCss3) },
    { name: "Java", icon: React.createElement(FaJava) },
    { name: "My SQL", icon: React.createElement(SiMysql) },
    { name: "JavaScript", icon: React.createElement(IoLogoJavascript) },
    { name: "TypeScript", icon: React.createElement(SiTypescript) },
    { name: "React", icon: React.createElement(FaReact) },
    { name: "Next.js", icon: React.createElement(TbBrandNextjs) },
    { name: "Node.js", icon: React.createElement(FaNode) },
    { name: "Tailwind", icon: React.createElement(SiTailwindcss) },
    { name: "MongoDB", icon: React.createElement(SiMongodb) },
    { name: "Express", icon: React.createElement(SiExpress) },
    { name: "Python", icon: React.createElement(FaPython) },
    { name: "Framer Motion", icon: React.createElement(TbBrandFramerMotion) },
    { name: "UI/UX", icon: React.createElement(MdOutlineDesignServices) },
  ] as const;