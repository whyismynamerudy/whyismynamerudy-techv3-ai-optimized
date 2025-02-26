import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { withAIEnhancement } from "next-ai-optimizer/react";

const SideBarComponent = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.sideBar}
    >
      <span className={styles.logo}>
        1<span>.</span>
      </span>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        href="#about"
        onClick={() => {
          setSelected("about");
        }}
        className={selected === "about" ? styles.selected : ""}
      >
        about
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        href="#projects"
        onClick={() => setSelected("projects")}
        className={selected === "projects" ? styles.selected : ""}
      >
        projects
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        href="#experience"
        onClick={() => setSelected("experience")}
        className={selected === "experience" ? styles.selected : ""}
      >
        exp.
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        href="#contact"
        onClick={() => setSelected("contact")}
        className={selected === "contact" ? styles.selected : ""}
      >
        contact
      </motion.a>
    </motion.nav>
  );
};

export const SideBar = withAIEnhancement(SideBarComponent as any, {
  name: "SideBar",
  description: "A vertical sidebar navigation component with animated links to portfolio sections",
  interactionPoints: [
    {
      element: "a[href='#about']",
      type: "click",
      description: "Navigate to the About section"
    },
    {
      element: "a[href='#projects']",
      type: "click",
      description: "Navigate to the Projects section"
    },
    {
      element: "a[href='#experience']",
      type: "click",
      description: "Navigate to the Experience section"
    },
    {
      element: "a[href='#contact']",
      type: "click",
      description: "Navigate to the Contact section"
    }
  ]
});