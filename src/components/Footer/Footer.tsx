import styles from "./footer.module.scss";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          Created by{" "}
          <a href="https://github.com/zaidmukaddam/realzaidmukaddam.tech">zaidmukaddam</a> with ❤️
          <br />
          Colors: Visual Studio Code Abyss Theme. Built with{" "}
          <a href="https://nextjs.org">Next.js</a>
        </p>

        <div className={styles.footerLinks}>
          <SocialIcon
            rel="noopener noreferrer"
            url={process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE_PROFILE_URL}
            target="_blank"
            className="btn btn__icon"
          />
          <SocialIcon
            url={process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL}
            target="_blank"
            className="btn btn__icon"
          />
          <SocialIcon
            url={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL}
            target="_blank"
            className="btn btn__icon"
          />
        </div>
      </div>
    </footer>
  );
};
