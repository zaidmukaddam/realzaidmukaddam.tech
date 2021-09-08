import * as React from "react";
import { useEmitEvent } from "@casper124578/useful/hooks/useEmitEvent";
import TimelineSection from "@sections/TimelineSection";
import ProjectSection from "@sections/ProjectsSection";
import ContactSection from "@sections/ContactSection";
import SkillsSection from "@sections/SkillsSection";
import { motion } from "framer-motion";
import { Seo } from "@components/Seo";
import mainStyles from "css/main.module.scss";
import { ContactIcon, GitHubIcon, LinkedInIcon } from "@components/icons/about";

const LINKS = [
  {
    name: "Contact",
    href: "#contact",
    Icon: ContactIcon,
  },
  {
    name: "GitHub",
    href: process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL,
    Icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    href: process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL,
    Icon: LinkedInIcon,
  },
];

const Index = () => {
  const age = calculateAge();
  const { dispatch } = useEmitEvent("focusOnContact", true);

  function calculateAge() {
    return ((Date.now() - new Date("08/29/2002").getTime()) / (60 * 60 * 24 * 365.25 * 1000))
      .toString()
      .split(".")[0];
  }

  return (
    <>
      <main className={mainStyles.main} id="about">
        <Seo title="Zaid Mukaddam - Developer" />

        <div className={mainStyles.mainTitle}>
          <h1>I am Zaid</h1>
          <h2>Web and App developer &amp; Ethical Hacker</h2>
        </div>

        <p className={mainStyles.mainText}>
          Hello, I am Zaid! I am a {age} year old programmer and student. I enjoy programming a lot.
          I&apos;ve created websites, android apps, and hacking scripts, etc. I am a self taught
          developer and I have been programming for nearly 1 and a half year and still learning new
          technologies every day, mostly focusing on React, TypeScript and App Development.
        </p>

        <div className={mainStyles.btnContainer}>
          {LINKS.map((link, idx) => (
            <motion.a
              key={link.name}
              initial={{
                opacity: 0,
                translateY: -10,
              }}
              animate={{
                opacity: 1,
                translateY: 0,
              }}
              transition={{ duration: 0.3, delay: 0.1 * idx }}
              onClick={link.name === "Contact" ? dispatch : null}
              className="btn btn__light btn__icon"
              href={link.href}
            >
              <link.Icon />
              {link.name}
            </motion.a>
          ))}
        </div>
      </main>

      <SkillsSection />

      <ProjectSection />

      <TimelineSection />

      <ContactSection />
    </>
  );
};

export default Index;
