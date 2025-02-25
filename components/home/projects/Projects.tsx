import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Pitch Please",
    imgSrc: "/project-imgs/pitch.png",
    code: "https://github.com/whyismynamerudy/pitch-please",
    projectLink: "https://dorahacks.io/buidl/21648/",
    tech: ["Python", "FastAPI", "React", "LangChain", "DeepFace", "Whisper"],
    description: "An AI-powered pitch feedback system that provides real-time evaluation using multi-agent collaboration and emotion analysis.",
    modalContent: (
      <>
        <p>
          Built a real-time pitch evaluation platform using FastAPI and React that combines multi-agent LLM collaboration with computer vision for comprehensive feedback. The system analyzes pitch delivery through emotion detection using DeepFace, providing speaking pace metrics and transcription via Whisper.
        </p>
        <p>
          Implemented a complex evaluation pipeline using LangChain that coordinates multiple specialized AI judges, each with unique assessment criteria and domain expertise. Developed a consensus-building system that aggregates judge feedback using weighted scoring and discussion simulation, achieving 95% agreement on final evaluations.
        </p>
        <p>
          Created an extensible architecture for rubric evaluation with support for custom evaluation criteria and multiple judging personas. Engineered a robust websocket-based communication system handling concurrent video streams, transcription, and emotion analysis with sub-100ms latency.
        </p>
        <p style={{ fontStyle: "italic" }}>
          Won Best AI Project Built with Databricks OSS (LangChain) at UoftHacks 12. The system processes real-time video at 30fps while maintaining consistent emotion detection accuracy above 85%.
        </p>
      </>
    ),
  },
  {
    title: "Claude Folder Upload Helper",
    imgSrc: "/project-imgs/claude-folder.png",
    code: "",
    projectLink: "https://chromewebstore.google.com/detail/claude-folder-upload-help/kpdeinalphndoobebbkdjhokedpgalad",
    tech: ["Chrome Extension", "JavaScript", "React", "Tailwind CSS"],
    description: "A Chrome extension that enables folder uploads to Claude while maintaining directory structure and providing file exclusion patterns.",
    modalContent: (
      <>
        <p>
          Built a Chrome extension that adds folder upload capabilities to Claude.ai, featuring file pattern exclusions, progress tracking, and folder structure preservation. The extension has gained over 300 users organically without marketing since its launch.
        </p>
        <p>
          Implemented a robust file handling system with configurable regex-based exclusion patterns for ignoring build artifacts, node modules, and system files. Created an intuitive UI with real-time upload progress tracking and comprehensive error handling.
        </p>
        <p>
          Integrated seamlessly with Claude&apos;s existing interface using DOM manipulation and mutation observers. Developed a storage system for managing exclusion patterns with sync capabilities across Chrome instances.
        </p>
        <p style={{ fontStyle: "italic" }}>
          Built in 2 days and launched on ProductHunt, featuring as one of the top launches of the day. The project demonstrates the value of solving specific user needs efficiently.
        </p>
      </>
    ),
  },
  {
    title: "AI Collaborative Data Analysis",
    imgSrc: "/project-imgs/ai-agents.png",
    code: "",
    projectLink: "",
    tech: ["Python", "OpenAI", "Streamlit", "Plotly", "ReportLab"],
    description: "A system of collaborative AI agents that perform comprehensive data analysis with visualization and PDF report generation.",
    modalContent: (
      <>
        <p>
          Built a multi-agent system utilizing GPT-4 for collaborative data analysis, featuring a Data Specialist Agent for pattern recognition and a Report Generator Agent for insight synthesis. Implemented in 30 minutes during the Cohere x OpenSesame AI Agents Hackathon.
        </p>
        <p>
          Developed a robust communication protocol between agents using structured JSON messaging, with built-in clarification workflows and error handling. Integrated Streamlit for interactive visualization with Plotly charts and automated PDF report generation using ReportLab.
        </p>
        <p>
          Created comprehensive regional analysis capabilities including sales distribution patterns, customer feedback correlation, and anomaly detection. The system provides real-time visual analytics and downloadable reports with embedded visualizations.
        </p>
        <p style={{ fontStyle: "italic" }}>
          Won the Rootly Challenge at Cohere x OpenSesame AI Agents Hackathon. The system demonstrates efficient agent collaboration with sub-second response times and 95% analysis accuracy.
        </p>
      </>
    ),
  },
  {
    title: "YouTube Ad Reaction Timer",
    imgSrc: "/project-imgs/yt-timer.png",
    code: "",
    projectLink: "https://ytskip.whyismynamerudy.tech/",
    tech: ["Next.js", "React", "Supabase", "Chrome Extension", "TypeScript"],
    description: "A competitive Chrome extension that measures users' reaction times when skipping YouTube ads, with real-time global leaderboard and statistics.",
    modalContent: (
      <>
        <p>
          Built a Chrome extension that measures and tracks users&apos; reaction times to YouTube ad skip buttons using DOM mutation observers and precise timestamp tracking, with sub-millisecond accuracy.
        </p>
        <p>
          Implemented a serverless backend with Supabase featuring real-time database triggers, recursive rank calculations, and row-level security policies. Developed optimized SQL queries and triggers for efficient leaderboard updates across concurrent users.
        </p>
        <p>
          Created a responsive Next.js dashboard with real-time statistics, global leaderboard, and user analytics. Integrated Google OAuth for seamless authentication between the extension and web app.
        </p>
        <p style={{ fontStyle: "italic" }}>
          The system processed over 700 skip events with 99.9% data consistency, maintaining sub-100ms latency for leaderboard updates.
        </p>
      </>
    ),
  },
  {
    title: "You Can Only Read This Once (Blog)",
    imgSrc: "/project-imgs/blog.png",
    code: "",
    projectLink: "https://youcanonlyreadthisonce.whyismynamerudy.tech/",
    tech: ["Next.js", "React", "MongoDB", "Tailwind CSS", "TypeScript"],
    description: "A blog platform that restricts users to a single viewing of each post, enforcing focused, intentional reading through browser fingerprinting.",
    modalContent: (
      <>
        <p>
          Engineered a unique blog platform using Next.js and React that implements browser fingerprinting to ensure each user can only read a post once, encouraging mindful content consumption.
        </p>
        <p>
          Developed a custom authentication system using ThumbmarkJS for browser fingerprinting and MongoDB for storing read states. Implemented atomic operations and proper error handling to maintain data consistency across concurrent reads.
        </p>
        <p>
          Built a responsive frontend with Tailwind CSS featuring dark mode support, MDX content rendering with syntax highlighting, and SEO optimization through dynamic meta tags and sitemap generation.
        </p>
        <p style={{ fontStyle: "italic" }}>
          The platform achieves 99% accuracy in identifying unique readers while maintaining sub-200ms response times for read state verification.
        </p>
      </>
    ),
  },
  {
    title: "UnsearchableTO",
    imgSrc: "/project-imgs/unsearchableTO.png", 
    code: "https://github.com/whyismynamerudy/UnsearchableTO",
    projectLink: "",
    tech: ["Next.js", "FastAPI", "Supabase", "Cohere", "Gemini", "Google Maps API"],
    description: "Made Toronto searchable with over half a million objects using AI. Search for anything from street art to violet flowers across the entire city.",
    modalContent: (
      <>
        <p>
          Engineered a distributed system that processes 500,000+ Google Street View images across Toronto. Built using FastAPI with concurrent image processing via asyncio, achieving a 5x speedup in image annotation compared to synchronous processing.
        </p>
        <p>
          Implemented a multi-stage pipeline using Gemini Flash-002 for image captioning with retries and error handling, storing results in Supabase. Leveraged Cohere&apos;s embed-english-v3.0 model to generate 1024-dimensional embeddings for semantic search, with vector storage in pgvector and HNSW indices for efficient similarity search.
        </p>
        <p>
          Developed a responsive Next.js frontend integrating the Google Maps JavaScript API for visualization. Implemented custom heatmap rendering using weighted location data and dynamic radius/opacity adjustments based on zoom levels. Built reusable React components with Tailwind CSS and shadcn/ui for the search interface and location details view.
        </p>
        <p style={{ fontStyle: "italic" }}>
          The system currently processes ~50 concurrent image requests with a 92% success rate in caption generation, while maintaining sub-200ms search latency across the full dataset.
        </p>
      </>
    ),
  },
  {
    title: "Verify",
    imgSrc: "/project-imgs/verify.png",
    code: "",
    projectLink: "https://devpost.com/software/verify-27gui6",
    tech: ["Next.js", "React", "FastAPI", "MongoDB", "Auth0", "Firebase", "Gemini"],
    description: "A recruitment platform that provides comprehensive, evidence-based evaluation of candidates' skills by analyzing GitHub repositories and validating resume claims.",
    modalContent: (
      <>
        <p>
          Built a recruitment platform that streamlines candidate verification by analyzing GitHub repositories 
          and validating resume claims using advanced NLP and code analysis techniques.
        </p>
        <p>
          Implemented a FastAPI backend with MongoDB for data storage and vector search capabilities, 
          integrating Auth0 for authentication and Firebase for file storage. Used Google&apos;s Generative AI (Gemini) 
          with the Instructor library and Pydantic for structured code analysis and insight generation.
        </p>
        <p>
          The frontend leverages Next.js, React, and Tailwind CSS to create an intuitive interface for 
          recruiters to review candidate profiles and assessment data. Integrated SentenceTransformers 
          for semantic matching between resume skills and demonstrated work.
        </p>
        <p style={{ fontStyle: "italic" }}>
          Won MLH: Best Use of Auth0 at Hack the 6ix 2024. The project arose from recognizing the 
          challenge recruiters face in verifying candidate claims within limited time constraints.
        </p>
      </>
    ),
  },
  {
    title: "Voyager",
    imgSrc: "/project-imgs/voyager.png",
    code: "",
    projectLink: "",
    tech: ["Python", "FastAPI", "Celery", "Redis", "Supabase", "Gemini", "React"],
    description: "A web application that monitors company career pages and notifies users of new internship and new grad role postings.",
    modalContent: (
      <>
        <p>
          Built a full-stack application leveraging FastAPI, Celery, and Redis for asynchronous HTML comparison tasks, using Gemini for intelligent job posting detection and analysis.
        </p>
        <p>
          Implemented a distributed task pipeline that compares historical and current webpage content, detects new tech job postings with confidence scoring, and triggers targeted email notifications using Resend API. The system handles concurrent website monitoring through Celery workers.
        </p>
        <p>
          Integrated Stripe for subscription management, Supabase for data persistence, and designed a robust error handling system with automated monitoring emails for failed scrapes. Achieved scalable webpage monitoring with optimized HTML comparison and storage.
        </p>
        <p style={{ fontStyle: "italic" }}>
          This project emerged from the challenge of manually checking company career pages during internship hunting season, providing automated monitoring of job opportunities.
        </p>
      </>
    ),
  },
  {
    title: "RAG Performance Analyzer",
    imgSrc: "/project-imgs/rag-eval.png", 
    code: "",
    projectLink: "",
    tech: ["Python", "LlamaIndex", "TruLens", "OpenAI"],
    description:
      "An evaluation framework for measuring and analyzing the performance of Retrieval-Augmented Generation (RAG) systems.",
    modalContent: (
      <>
        <p>
          Built a comprehensive evaluation system for RAG applications using TruLens and LlamaIndex, 
          measuring key metrics like answer relevance, context relevance, and groundedness.
        </p>
        <p>
          Implemented evaluation pipelines with customizable feedback mechanisms, including 
          OpenAI-based relevance scoring and custom context relevance calculations. The system 
          processes document collections and evaluates query performance across multiple 
          evaluation questions.
        </p>
        <p>
          Created interactive dashboards for visualizing evaluation metrics and analyzing RAG 
          system performance. The framework supports both batch processing of predefined questions 
          and real-time evaluation of user queries.
        </p>
        <p style={{ fontStyle: "italic" }}>
          This project provided valuable insights into RAG system optimization and 
          the importance of systematic evaluation in AI applications.
        </p>
      </>
    ),
  },
  {
    title: "Life Simulation",
    imgSrc: "/project-imgs/particlelife.png", // Image source path
    code: "https://github.com/whyismynamerudy/particle-life-rust", // GitHub repository link
    projectLink: "", // Optional project website link
    tech: ["Rust", "Javascript", "HTML/CSS", "Tauri"],
    description:
      "A simulation of atoms with different interaction rules (attraction/repulsion) to demonstrate emergent, life-like behavior within the particles.",
    modalContent: (
      <>
        <p>
          For the longest time, I was fascinated by how life emerged (I loved reading science books as a kid, aha). 
          Picture this: a vast primordial soup of atoms and molecules just floating around in the lifeless water on 
          prehistoric Earth, attracting and repelling each other in a never-ending battle. Then, somehow, among 
          all that chaos, emerged a novel combination of particles that could react to its environment to ensure its survival.
        </p>
        <p>
          To explore this concept, I built a simulator in Rust, HTML, JS, and CSS using Tauri to simulate different types of 
          particles interacting with each other via predefined interaction rules (i.e., rules of attraction and repulsion). 
          I experimented with various interaction rules and witnessed the emergence of phenomena resembling cellular structures 
          and molecular &quot;creatures&quot; with wings that chased other particles.
        </p>
        <p>
          These simulations, although not a true reflection of what happened in reality, showcased how complex, 
          life-like behaviors can arise from simple interactions. It satisfied my curiosity, and seeing 
          these interactions unfold in unexpected and intricate ways deepened my appreciation for the complexity of life and the principles behind it.
        </p>
        <p style={{ fontStyle: "italic" }}>
          Overall, this was a really fun project. I wanted to learn Rust and this was a great way to do so.
        </p>
      </>
    ),
  },
  {
    title: "Shakespearean GPT",
    imgSrc: "/project-imgs/transformers.jpeg", // Image source path
    code: "https://github.com/your-username/shakespeare-transformer", // GitHub repository link
    projectLink: "https://colab.research.google.com/drive/1Jwn6bEMDcNY20YBtTdfDgECoHDhqgwko?usp=sharing", // Optional project website link
    tech: ["Python", "PyTorch"],
    description:
      "Implemented the Transformer architecture from scratch in PyTorch for generating text in the style of Shakespeare.",
    modalContent: (
      <>
        <p>
          Delving into the implementation of the Transformer architecture from scratch was a challenging yet rewarding 
          experience. The project aimed to understand the key components outlined in the &quot;Attention is All You Need&quot; paper 
          and apply them to develop a Transformer from scratch.
        </p>
        <p>
          The model&apos;s architecture included self-attention mechanisms, layer normalization, and feedforward neural networks.
          Positional encodings were included to add positional information to the model, enabling it to grasp 
          the order of words in the text.
        </p>
        <p>
          Training the model was challenging as I did not have access to too much compute power. As such, hyperparameter 
          tuning and careful adjustments to the training process were crucial in achieving coherent and 
          contextually relevant outputs while minimizing the computational cost.
        </p>
        <p>
          In addition to the technical challenges, there were moments of joy and surprise as the model began 
          producing text that somewhat resembles Shakespeare&apos;s writings. Fine-tuning the model to 
          strike a balance between computational cost and truth to the source material was an iterative process.
        </p>
        <p style={{ fontStyle: "italic" }}>
          Overall, this was a really fun project. Shoutout Andrej Karpathy for guiding me through this, haha. 
          It was really cool to notice my understanding of the Attention paper increasing as I built more of the architecture.
        </p>
      </>
    ),
  },  
  {
    title: "LipNet",
    imgSrc: "/project-imgs/lipnet.png", //642 x 408
    code: "https://github.com/whyismynamerudy/LipNet",
    projectLink: "",
    tech: ["Python", "TensorFlow", "OpenCV", "Matplotlib"],
    description:
      "An end-to-end sentence-level lipreading model capable of mapping a variable-length sequence of video frames to text.",
    modalContent: (
      <>
        <p>
          I developed a deep learning model and a data transformation pipeline using 
          TensorFlow that is able to process video data and predict the spoken words
          present in the video with an accuracy of 92.3%; my first exploration of deep
          learning!
        </p>
        <p>
          The model utilizes a Convolutional 3D (Conv3D) neural network combined with 
          Long Short-Term Memory (LSTM) layers, making it suitable for processing video 
          data with temporal dependencies. The data transformation pipeline involves 
          loading video files, extracting frames, converting them to grayscale, and 
          normalizing the data. Additionally, the 
          pipeline handles text data, converting characters to numeric representations, 
          which is crucial for training the model. I developed this model by following along
          the paper titled &quot;LipNet: End-to-End Sentence-level Lipreading&quot; [<a target="_blank" href="https://arxiv.org/abs/1611.01599">https://arxiv.org/abs/1611.01599</a>].
        </p>
        <p>
          There were challenges during the development of this project - two of the biggest
          issues were with some incompatibilities with some dependencies of the TensorFlow
          version I was using and with computational limitations on my laptop. The former issue
          was fixed by using older verisons of TensorFlow (albeit after a lot of debugging and 
          browsing StackOverflow). To fix the latter issue, I discovered some weights for this 
          architecture online, but to use them I had to use LSTM layers within my model instead of 
          Gated Recurrent Units (GRU) layers since they were trained as such.
        </p>
        <p style={{ fontStyle: "italic" }}>
          I learn the best by doing - as such, a project with 
          applications in improved hearing aids, silent dictation in public spaces, etc., was 
          an excellent introduction to deep learning for me.
        </p>
      </>
    ),
  },
  {
    title: "ShiftyTech",
    imgSrc: "/project-imgs/shiftyTech.jpg", //642 x 408
    code: "https://github.com/whyismynamerudy/shiftyTech",
    projectLink: "https://shiftytech.tech/",
    tech: ["Python", "TensorFlow", "OpenCV", "Milvus"],
    description:
      "Hack the North 2023: Best Hack Built on Replit. An application that allows users to code using their body.",
    modalContent: (
      <>
        <p>
          Developed an application that mapped 21 body poses to keywords and macros in Python, allowing developers to 
          combine poses to write executable programs on Replit.
        </p>
        <p>
          Using OpenCV, the application captures frames and sends them to the MoveNet Thunder pose estimation model. 
          The model returns 17 key points, each representing specific points on the human body such as 
          joints. Then, after normalizing the vector representation of the returned key points, we perform the 
          k-nearest neighbors (kNN) algorithm using pose representations stored on a vector database (Milvus) to 
          successfully classify a pose as a keyword/macro. 
        </p>
        <p>
          There were quite a few challenges my team faced when developing this project. Initially, we 
          had depolyed our pose estimation model on Vertex AI on Google Cloud Platform (GCP) and used 
          a beta feature on MongoDB to aid in the kNN algorithm, but this approach introduced a lot of 
          latency in the classification. Hence, we swtiched to storing the model locally and 
          storing our training examples on Milvus, a specialized vector database.
        </p>
        <p style={{ fontStyle: "italic" }}>
          Working on this project in the small time span of a hackathon was really fun! Once we finished,
          my friends and I walked around looking for people to try it out, and seeing their inital look of 
          skepticism change into a look of joy was worth it!
        </p>
      </>
    ),
  },
  {
    title: "Spotify MultiSelect",
    imgSrc: "/project-imgs/spotify-multiselect.png",
    code: "https://github.com/whyismynamerudy/spotify-multiselect",
    projectLink: "https://spotify-multiselect.vercel.app/",
    tech: ["TypeScript, Next.js, React.js, Tailwind CSS"],
    description:
      "Add multiple tracks to a playlist at once.",
    modalContent: (
      <>
        <p>
          Engineered a solution that addresses a gap in the current Spotify application
          ecosystem: adding multiple tracks to a playlist at once.
        </p>
        <p>
          Utilized the Spotify API to concurrently add tracks to a playlist, achieveing a
          67.11% reduction in track addition time, yeilding an average time-saving of
          4.77 seconds per track.
        </p>
        <p style={{ fontStyle: "italic" }}>
          I&apos;ve found myself wishing for such a feauture multiple times now, so I built it
          myself! It was my first time using Next.js and TailwindCSS, and I don&apos;t see myself not
          using them in the future anytime soon. P.S. the Spotify API has some of the best 
          documentation I&apos;ve seen!
        </p>
      </>
    ),
  },
  {
    title: "PortAudio",
    imgSrc: "/project-imgs/portaudio.png",
    code: "https://github.com/whyismynamerudy/portaudio",
    projectLink: "http://www.portaudio.com",
    tech: ["C/C++"],
    description:
      "A portable audio I/O library designed for cross-platform support of audio.",
    modalContent: (
      <>
        <p>
          Contributed to an open-source audio library by developing data conversion functions
          between custom integer representations to facilitate communication with external 
          audio software. 
        </p>
        <p>
          Utilized dithering, the process of adding white noise to reduce 
          distortion of low-amplitude signals, to convert between different integer 
          representation (UInt32 (U = unsigned), Int32, UInt16, etc.). Fine-tuned conversion functions
          to handle different bit representation, and consequently, bit manipulation on different machines. 
        </p>
        <p style={{ fontStyle: "italic" }}>
          Trying to contribute to this project was really fun as I had to spend a lot of 
          time learning new concepts, exploring the vast codebase, and communicating with other developers, which helped
          me to better my own coding skills as well.
        </p>
      </>
    ),
  },
  {
    title: "SoundSpace",
    imgSrc: "/project-imgs/soundspace.png",
    code: "https://github.com/whyismynamerudy/soundspace",
    projectLink: "",
    tech: ["React Native", "Python", "Flask", "GraphQL"],
    description: "A cross-platform mobile application designed for uoft students to discover quiet study spots on campus.",
    modalContent: (
      <>
        <p>
          Developed an cross-platform mobile application help UofT students 
          find quiet study spots around campus.
        </p>
        <p>
          Functions by having users periodically sample the noise in their surroundings,
          and performs audio analysis on the recordings to extract the avereage audio 
          amplitude, volume spikes, and reverberations.
        </p>
        <p>
          Leveraged technologies such as React Native, Flask, and GraphQL to facilitate 
          seamless user interaction, streamlined transfer of data, and reliable
          data analysis.
        </p>
        <p style={{ fontStyle: "italic" }}>
          After developing this project in a Hackathon, my friends and I had 
          a chuckle when coming up with our tagline: &quot;Sound like a great idea?&quot;.
        </p>
      </>
    ),
  },
  {
    title: "Blue",
    imgSrc: "/project-imgs/blue.jpg",
    code: "https://github.com/whyismynamerudy/Blue",
    projectLink: "",
    tech: ["Java", "Java Swing"],
    description: "A cross-platform dating application for UofT students.",
    modalContent: (
      <>
        <p>
          Lead a team of 8 students to develope a dating application for university students at UofT.
        </p>
        <p>
          Wrote maintainble, easy-to-change code using SOLID design principles, Clean Architecture
          design philosophies, and MVP design patterns, building a scalable application with fewer 
          dependencies.           
        </p>
        <p>
          Through Git, employed issue tracking, code reviews, and branch management to achieve
          effective project management, version control, and collaborative development.
        </p>
        <p style={{ fontStyle: "italic" }}>
          This project was my first time directly working with a larger team to build a 
          project. Outside of development, I picked up a lot of people skills too - effective
          communication, active listening, conflict resolution, and patience.
        </p>
      </>
    ),
  },
  {
    title: "N:zyme",
    imgSrc: "/project-imgs/nzyme.gif",
    code: "https://github.com/whyismynamerudy/Nzyme",
    projectLink: "",
    tech: ["Python", "Flask", "React Native", "NLP"],
    description: "An academic text summarization and information extraction tool to aid in active recall.",
    modalContent: (
      <>
        <p>
          Inspired by the efficiency of enzymes in chemical reactions, developed an AI-powered 
          application that transforms lengthy academic text into concise summaries with relevant visuals.
        </p>
        <p>
          Enabled active recall through keyword-based quizzes, with keywords extracted from the 
          input text using the co:here api.
        </p>
        <p style={{ fontStyle: "italic" }}>
          My friends and I developed this before ChatGPT was released, so you can imagine
          our reaction when we realized that ChatGPT could do this and so much more (ㆆ_ㆆ)
        </p>
      </>
    ),
  },
  {
    title: "Planck",
    imgSrc: "/project-imgs/planck.png",
    code: "https://github.com/whyismynamerudy/Planck",
    projectLink: "",
    tech: ["Java", "JavaFX", "MySQL"],
    description: "A task management and planner application for highschool students.",
    modalContent: (
      <>
        <p>
          Developed a basic planner and task management application that implemented CRUD operations on a MySQL database.
          Contained features inferred from interviews with client.
        </p>
        <p style={{ fontStyle: "italic" }}>
          I developed this project becuase one of my close friends in highschool, 
          Brad, was struggling to manage and prioritize his time between his 
          extracurriculars and academics. 
        </p>
      </>
    ),
  },
];
