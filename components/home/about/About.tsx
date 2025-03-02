import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Stats } from "./Stats";
import styles from "./about.module.scss";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="about" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              hello world🫡, i&apos;m rudy. i&apos;m pursuing knowledge at the intersection of 
              ai and software engineering, with a focus on building systems that scale and bring value 
              to users.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              outside of tech, i&apos;m into rock climbing, hip-hop, and working out. you&apos;ll often find me listening
              to the latest{" "}
              <a target="_blank" href="https://spotify.link/LpGiJgTTMBb">
                hip-hop
              </a>{" "}
              songs or filming a{" "}
              <a target="_blank" href="https://www.youtube.com/channel/UCG-cKd4nkUg4U-UKeIbt1iw">
                youtube
              </a>{" "}
              video about my life as a university student.
            </p>
          </Reveal>
          <Reveal>
            <div>
              <p className={styles.aboutText} style={{ fontWeight: "bold" }}>
                now:
              </p>
              <p className={styles.aboutText}>
                engineering dependency visualization systems in clojure/angular, automating openshift cluster management, 
                and streamlining release cycles at{" "}
                <a target="_blank" href="https://www.intactfc.com/">
                  intact financial corporation
                </a>{" "}
                as a software engineering intern.
              </p>
              <p className={styles.aboutText}>
                building and contributing to the ai/ml ecosystem as an entrepreneur at{" "}
                <a target="_blank" href="https://www.shopify.com/">
                  shopify builder sundays
                </a>.
              </p>
              <p className={styles.aboutText}>
                entering my final year at uoft (cgpa: 3.91/4.00), studying computer science 
                with a focus in ai, mathematics, and statistics.
              </p>

              <p className={styles.aboutText} style={{ fontWeight: "bold" }}>
                previously:
              </p>
              <p className={styles.aboutText}>
                researched logical query answering over knowledge graphs using llms at{" "}
                <a target="_blank" href="https://csslab.cs.toronto.edu/">
                  the computational social sciences lab
                </a>{" "}
                under prof. ashton anderson.
              </p>
              <p className={styles.aboutText}>
                developed ontology-guided entity extraction systems using llms at the{" "}
                <a target="_blank" href="https://urbandatacentre.com/">
                  urban data center
                </a>.
              </p>
              <p className={styles.aboutText}>
                worked on autocolorization of black and white images at{" "}
                <a target="_blank" href="https://utmist.gitlab.io/">
                  utmist
                </a>, implementing and expanding on &ldquo;colorful image colorization&rdquo; by richard zhang et al.
              </p>
              <p className={styles.aboutText}>
                led development of an open-source dashboard cloning system at{" "}
                <a target="_blank" href="https://www.unicef.org/">
                  unicef
                </a>{" "}
                that reduced clone times by 93.6% across 100+ offices.
              </p>
              <p className={styles.aboutText}>
                co-founded and served as cto of an ed-tech startup in the{" "}
                <a target="_blank" href="https://hatchery.engineering.utoronto.ca/nest-info-page/">
                  uoft hatchery
                </a>{" "}
                nest program.
              </p>
              <p className={styles.aboutText}>
                built the website and developer platform as a full stack developer at{" "}
                <a target="_blank" href="https://hackthe6ix.com">
                  hack the 6ix
                </a>.
              </p>
              <p className={styles.aboutText}>
                automated testing processes as a swe intern at{" "}
                <a target="_blank" href="https://enrichai.com">
                  enrichai
                </a>.
              </p>
              <p className={styles.aboutText}>
                published{" "}
                <a target="_blank" href="https://link.springer.com/article/10.1007/s11277-020-07301-6">
                  research
                </a>{" "}
                on particle swarm optimization for feature selection in classification models.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>continue the conversation:</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};