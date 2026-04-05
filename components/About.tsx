"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = ()=>{
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-4 font-medium leading-7">
        I&rsquo;m Bijen Shrestha, a Software Engineer from Kathmandu. I build
        web applications and backend systems, and I take my work seriously. I
        like writing code that is clean, thought through, and built to last.
      </p>

      <p className="mb-4 font-medium leading-7">
        Outside of my professional works, I have been spending time learning AI,
        machine learning and FastAPI. It is a different kind of problem solving and I find
        that interesting. I am still early in that path but I am putting in the
        work.
      </p>

      <p className="font-medium leading-7">
        When I am not coding, I play basketball, go on bike rides, and recently
        I have been into trekking. I have done Langtang and Tilicho so far and
        I want to keep moving around. I also stay open to freelance projects
        where I can add real value.
      </p>
    </motion.section>
  );
}

export default About