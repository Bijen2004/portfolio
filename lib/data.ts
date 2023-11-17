import React from "react";
import { FaReact , FaHtml5 , FaJava , FaNode , FaPython , FaDesktop} from "react-icons/fa";
import chatGptCloneImg from "@/public/chatGptClone.png";
import javaHotelBookingImg from "@/public/javaHotelBooking.png";
import {IoLogoCss3 , IoLogoJavascript} from "react-icons/io"
import {IoLogoFirebase} from "react-icons/io5"
import {SiMysql , SiTypescript , SiTailwindcss , SiMongodb , SiExpress , SiAppwrite , SiPrisma} from "react-icons/si"
import {TbBrandNextjs , TbBrandFramerMotion} from "react-icons/tb"
import {MdOutlineDesignServices} from "react-icons/md"
import trelloAiCloneImg from "@/public/trelloAiClone.png" 

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
    language: "(Java , Python)",
    description:
      "Exploring desktop application development using Java and Python has broadened my understanding of software development beyond web-based platforms. Working with these languages has enabled me to create versatile, robust applications suited for desktop environments.",
    icon: React.createElement(FaDesktop),
    date: "2023",
  },
  {
    title: "Next.js",
    language: "(Next.js , React)",
    description:
      "Diving into Next.js has elevated my web development skills by using its features like server-side rendering and static site generation. Its seamless integration with React has empowered me to build high-performance web applications with enhanced SEO capabilities.",
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
    title: "ChatGpt Clone",
    description:
      "Building a ChatGPT replica, using the OpenAI API key for AI conversational capabilities.",
    tags: ["Next.js", "React", "Firebase", "Tailwind", "Open-ai Api"],
    imageUrl: chatGptCloneImg,
  },
  {
    title: "Trello Clone",
    description:
      "Creating a Trello-like platform and integrating the OpenAI API to generate daily task summaries for enhanced productivity.",
    tags: ["Appwrite","Next.js","React","DnD","Open-AI API"],
    imageUrl: trelloAiCloneImg,
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
    { name: "Appwrite", icon: React.createElement(SiAppwrite) },
    { name: "Prisma", icon: React.createElement(SiPrisma) },
    { name: "Firebase", icon: React.createElement(IoLogoFirebase) },
  ] as const;