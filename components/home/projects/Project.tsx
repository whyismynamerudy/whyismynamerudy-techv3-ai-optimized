/* eslint-disable @next/next/no-img-element */
import { Reveal } from "@/components/utils/Reveal";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "postcss";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import styles from "./projects.module.scss";
import { withAIEnhancement } from "next-ai-optimizer/react";

interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink: string;
  imgSrc: string;
  tech: string[];
  title: string;
  code: string;
}

export const ProjectBase = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}: Props) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className={styles.projectImage}
        >
          <img
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            style={{
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}
            // sizes={`${hovered ? "90vw" : "85vw"}`}
          />
        </div>
        <div className={styles.projectCopy}>
          <Reveal width="100%">
            <div className={styles.projectTitle}>
              <h4>{title}</h4>
              <div className={styles.projectTitleLine} />
              {code !== "" && (
                <Link href={code} target="_blank" rel="nofollow">
                  <AiFillGithub size="2.8rem" />
                </Link>
              )}
              {projectLink !== "" && (
                <Link href={projectLink} target="_blank" rel="nofollow">
                  <AiOutlineExport size="2.8rem" />
                </Link>
              )}
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.projectTech}>{tech.join(" - ")}</div>
          </Reveal>
          <Reveal>
            <p className={styles.projectDescription}>
              {description}{" "}
              <span onClick={() => setIsOpen(true)}>Learn more {">"}</span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};

export const Project = withAIEnhancement(ProjectBase as any, {
  name: 'Project',
  description: 'A project card component that displays project information with modal and external links',
  interactionPoints: [
    {
      element: 'div.projectImage',
      type: 'click',
      description: 'Open project details modal'
    },
    {
      element: 'a[href][target="_blank"]',
      type: 'click',
      description: 'Visit external project link'
    },
    {
      element: 'p.projectDescription span',
      type: 'click',
      description: 'Learn more about the project',
      completes: true
    },
    {
      element: 'a svg[size="2.8rem"]',
      type: 'click',
      description: 'Visit project code repository or live site'
    }
  ]
});
