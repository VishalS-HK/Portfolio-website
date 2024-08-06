import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg"
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import instagramLight from "../../assets/instagram-light.svg";
import instagramDark from "../../assets/instagram-dark.svg";
import leetcodeLight from "../../assets/leetcode-light.svg";
import leetcodeDark from "../../assets/leetcode-dark.svg";


import CV from "../../assets/Vishal_S_Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const leetcodeIcon = theme === 'light' ? leetcodeLight : leetcodeDark;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile pic of Vishal S"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Vishal S
        </h1>
        <h2>Senior at PES University</h2>
        <span>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="GitHub icon" />
          </a>
          <a href="https://leetcode.com/" target="_blank">
            <img src={leetcodeIcon} alt="Instagram icon" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://instagram.com/" target="_blank">
            <img src={instagramIcon} alt="Instagram icon" />
          </a>
        </span>
        <p className={styles.description}>
          Final year BTech Computer Science and Engineering student at PES
          University with a specialization in Machine Intelligence and Data
          Science.
        </p>
        <a href={CV}>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
