import { withAIEnhancement } from "next-ai-optimizer/react";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Reveal } from "@/components/utils/Reveal";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import styles from "./projects.module.scss";

interface ProjectProps {
  modalContent: JSX.Element;
  description: string;
  projectLink: string;
  imgSrc: string;
  tech: string[];
  title: string;
  code: string;
}

// Original component without forwarded ref
function OriginalProject({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}: ProjectProps) {
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
          id={`project-image-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <img
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            style={{
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}
          />
        </div>
        <div className={styles.projectCopy}>
          <Reveal width="100%">
            <div className={styles.projectTitle}>
              <h4>{title}</h4>
              <div className={styles.projectTitleLine} />
              {code !== "" && (
                <Link 
                  href={code} 
                  target="_blank" 
                  rel="nofollow"
                  id={`github-link-${title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <AiFillGithub size="2.8rem" />
                </Link>
              )}
              {projectLink !== "" && (
                <Link 
                  href={projectLink} 
                  target="_blank" 
                  rel="nofollow"
                  id={`live-link-${title.toLowerCase().replace(/\s+/g, '-')}`}
                >
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
              <span 
                onClick={() => setIsOpen(true)}
                id={`learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                Learn more {">"}
              </span>
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
}

// Wrapper component that applies the AI enhancement
const AIEnhancedProjectWrapper = (props: ProjectProps) => {
  return (
    <div data-ai-component="Project" data-ai-description="A project card component that displays project information with modal and external links">
      <OriginalProject {...props} />
    </div>
  );
};

// Apply withAIEnhancement to the wrapper
export const Project = withAIEnhancement(AIEnhancedProjectWrapper as any, {
  name: 'Project',
  description: 'A project card component that displays project information with modal and external links',
  interactionPoints: [
    {
      element: 'div.projectImage',
      type: 'click',
      description: 'Open project details modal'
    },
    {
      element: 'a[id^="github-link"]',
      type: 'click',
      description: 'Visit project code repository on GitHub'
    },
    {
      element: 'a[id^="live-link"]',
      type: 'click',
      description: 'Visit live project site'
    },
    {
      element: 'span[id^="learn-more"]',
      type: 'click',
      description: 'Learn more about the project',
      completes: true
    }
  ]
});