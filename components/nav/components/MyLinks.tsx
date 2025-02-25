import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineMediumWorkmark } from "react-icons/ai";
import styles from "./headinglinks.module.scss";

export const MyLinks = () => {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link
          href="https://www.linkedin.com/in/rudraksh-monga/"
          target="_blank"
          rel="nofollow"
        >
          <AiFillLinkedin size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link
          href="https://github.com/whyismynamerudy"
          target="_blank"
          rel="nofollow"
        >
          <AiFillGithub size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link
          href="https://twitter.com/wimnr9745"
          target="_blank"
          rel="nofollow"
        >
          <AiFillTwitterCircle size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link
          href="https://medium.com/@whyismynamerudy"
          target="_blank"
          rel="nofollow"
        >
          <AiOutlineMediumWorkmark size="2.4rem" />
        </Link>
      </motion.span>
    </div>
  );
};
