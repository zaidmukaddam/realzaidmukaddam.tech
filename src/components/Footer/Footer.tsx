import * as React from "react";
import format from "date-fns/format";
import styles from "./footer.module.scss";
import { SocialIcon } from "react-social-icons";

async function fetchLastUpdated(setLastUpdated) {
  const data = await fetch("https://api.github.com/repos/zaidmukaddam/realzaidmukaddam.tech")
    .then((v) => v.json())
    .catch(() => null);

  if (!data) return null;

  if (data.updated_at) {
    const formatted = format(new Date(data.updated_at), "MMMM dd, yyyy HH:mm");
    setLastUpdated(formatted);
  }
}
export const Footer = () => {
  const [lastUpdated, setLastUpdated] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetchLastUpdated(setLastUpdated);
  }, []);
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          Created by{" "}
          <a href="https://github.com/zaidmukaddam/realzaidmukaddam.tech">zaidmukaddam</a> with ❤️
          <br />
          Colors: Royal Blue Varients Theme. Built with <a href="https://nextjs.org">Next.js</a>
          <br />
          {lastUpdated ? <>Last updated: {lastUpdated}</> : null}
        </p>

        <div className={styles.footerLinks}>
          <SocialIcon
            rel="noopener noreferrer"
            url={process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE_URL}
            target="_blank"
            className="btn btn__icon"
          />
          <SocialIcon
            rel="noopener noreferrer"
            url={process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL}
            target="_blank"
            className="btn btn__icon"
          />
          <SocialIcon
            rel="noopener noreferrer"
            url={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL}
            target="_blank"
            className="btn btn__icon"
          />
        </div>
      </div>
    </footer>
  );
};
