import * as React from "react";
import { useEmitEvent } from "@casper124578/useful/hooks/useEmitEvent";
import TimelineSection from "@sections/TimelineSection";
import ProjectSection from "@sections/ProjectsSection";
import ContactSection from "@sections/ContactSection";
import SkillsSection from "@sections/SkillsSection";
import { SocialIcon } from "react-social-icons";
import { Seo } from "@components/Seo";
import mainStyles from "css/main.module.scss";

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
        <Seo title="Zaid Mukaddam - Web Developer" />

        <div className={mainStyles.mainTitle}>
          <h1>I am Zaid</h1>
          <h2>Frontend web developer & Ethical Hacker</h2>
        </div>

        <p className={mainStyles.mainText}>
          Hello, I am Zaid! I am a {age} year old programmer and student. I enjoy programming a lot.
          I&apos;ve created websites, Android Apps, and hacking scripts, etc. I am a self taught
          developer and I have been programming for nearly 1 and a half year and still learning new
          technologies every day, mostly focusing on React, TypeScript and App Development.
        </p>

        <div className={mainStyles.btnContainer}>
          <SocialIcon
            rel="noopener noreferrer"
            url={process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE_URL}
            target="_blank"
            onClick={dispatch}
            className="btn btn__icon"
          />
          <SocialIcon
            rel="noopener noreferrer"
            url={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL}
            target="_blank"
            className="btn btn__icon"
          />
          <SocialIcon url="#contact" className="btn btn__icon" />
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
