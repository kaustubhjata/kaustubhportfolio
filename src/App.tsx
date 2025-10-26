import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import svgPaths from "./imports/svg-v8kkqdcb60";
import imgImage from "figma:asset/0707e6b2022462187b7b2dab43ed95bab6b24a66.png";
import imgPortrait from "figma:asset/37c4a0e079275d891cfef432ef778f614110d504.png";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
// Correct image imports
import LockBoxImage from './assets/LockBox.png';
import PulseImage from './assets/Pulse.png';
import ASISImage from './assets/ASIS.png';
import PhishguardImage from './assets/Phishguard.png';
import MoskaImage from './assets/Moska.png';
import TambolaImage from './assets/tambola blurred.png';
import KausImage from './assets/kaus.jpg';

export default function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background min-h-screen w-full transition-colors duration-300">
      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 bg-background z-50 border-b border-border transition-colors duration-300"
        animate={{
          y: isVisible ? 0 : -100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-8 py-4 flex justify-between items-center gap-2 flex-wrap">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="bg-muted px-3 py-1.5 rounded-[7.82px] text-foreground text-[14px] hover:bg-accent transition-colors flex items-center gap-2"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          {/* Navigation */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => scrollToSection("about")}
              className="bg-muted px-3 py-1.5 rounded-[7.82px] font-['Inter:Regular',_sans-serif] text-foreground text-[14px] hover:bg-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="bg-muted px-3 py-1.5 rounded-[7.82px] font-['Inter:Regular',_sans-serif] text-foreground text-[14px] hover:bg-accent transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-muted px-3 py-1.5 rounded-[7.82px] font-['Inter:Regular',_sans-serif] text-foreground text-[14px] hover:bg-accent transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-muted px-3 py-1.5 rounded-[7.82px] font-['Inter:Regular',_sans-serif] text-foreground text-[14px] hover:bg-accent transition-colors"
            >
              Contact me!
            </button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section with Animated Name */}
      <section className="relative bg-[#7f7b7b] dark:bg-[#2a2a2a] mt-[60px] min-h-screen overflow-hidden border-t border-b border-border flex items-center justify-center transition-colors duration-300">
        {/* Animated Background Text - Layer 1 (Top, lightest, moving right) */}
        <div className="absolute top-[5%] left-0 right-0 flex items-center overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [-1000, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(10)].map((_, i) => (
              <p
                key={i}
                className="font-['Gravitas_One',_serif] text-[#0c0c0d] text-[50px] tracking-[-2.16px] opacity-12 px-8"
              >
                J L KAUSTUBH
              </p>
            ))}
          </motion.div>
        </div>

        {/* Animated Background Text - Layer 2 (Upper middle, light, moving left) */}
        <div className="absolute top-[20%] left-0 right-0 flex items-center overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(10)].map((_, i) => (
              <p
                key={i}
                className="font-['Gravitas_One',_serif] text-[#0c0c0d] text-[56px] tracking-[-2.16px] opacity-18 px-8"

              >
                J L KAUSTUBH
              </p>
            ))}
          </motion.div>
        </div>

        {/* Animated Background Text - Layer 3 (Middle, medium, moving right) */}
        <div className="absolute top-[35%] left-0 right-0 flex items-center overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [-1000, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(10)].map((_, i) => (
              <p
                key={i}
                className="font-['Gravitas_One',_serif] text-[#0c0c0d] text-[56px] tracking-[-2.16px] opacity-18 px-8"
              >
                J L KAUSTUBH
              </p>
            ))}
          </motion.div>
        </div>

        {/* Animated Background Text - Layer 4 (Center, main darkest, moving left) */}
        <div className="absolute top-[50%] -translate-y-1/2 left-0 right-0 flex items-center overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(10)].map((_, i) => (
              <p key={i} className="font-heading text-[#0c0c0d] text-[56px] tracking-[-2.16px] opacity-25 px-8">
                J L KAUSTUBH
              </p>

            ))}
          </motion.div>
        </div>

        {/* Animated Background Text - Layer 5 (Lower middle, medium, moving right) */}
        <div className="absolute top-[65%] left-0 right-0 flex items-center overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [-1000, 0],
            }}
            transition={{
              duration: 23,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(10)].map((_, i) => (
              <p
                key={i}
                className="font-['Monoton',_cursive] text-[#0c0c0d] text-[60px] tracking-[-2.16px] opacity-22 px-8"
              >
                J L KAUSTUBH
              </p>
            ))}
          </motion.div>
        </div>

        {/* Animated Background Text - Layer 6 (Bottom, lightest, moving left) */}
        <div className="absolute top-[80%] left-0 right-0 flex items-center overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(10)].map((_, i) => (
              <p
                key={i}
                className="font-['Monoton',_cursive] text-[#0c0c0d] text-[54px] tracking-[-2.16px] opacity-15 px-8"
              >
                J L KAUSTUBH
              </p>
            ))}
          </motion.div>
        </div>

        <section className="relative w-full h-screen overflow-hidden group">
          <img
            src={imgPortrait}
            alt="JL Kaustubh"
            className="absolute inset-0 w-full h-full object-cover object-center z-0 
               transition-all duration-700 ease-in-out 
               group-hover:scale-110 group-hover:outline group-hover:outline-4 group-hover:outline-black"
          />

          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-8">
            {/* <p className="text-lg max-w-xl text-bottom">
      Developer • Designer • Creator
    </p> */}
          </div>
        </section>


        {/* CLOSE THE OUTER HERO SECTION HERE */}
      </section>
      {/* About Me Section */}
      <section
        id="about"
        className="max-w-[1200px] mx-auto px-16 py-16"
      >
        <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-foreground text-[24px] tracking-[-0.48px] mb-12">
          About me!
        </h2>

        <div className="bg-card border border-border rounded-[8px] p-6 flex gap-6 flex-wrap transition-colors duration-300">
          <div className="min-w-[160px] size-[160px] bg-muted relative shrink-0 overflow-hidden rounded-[4px]">
            {/* Image now uses object-cover to fill the box, cropping if aspect ratios differ */}
            <img
              src={KausImage}
              alt="Portrait of JL Kaustubh"
              className="absolute object-cover w-full h-full" // Changed to w-full h-full and object-cover
            />
          </div>

          <div className="flex-1 min-w-[240px]">
            <div className="font-['Inter:Regular',_sans-serif] text-muted-foreground text-[16px] leading-[1.4]">
              <p className="mb-4">
                I'm not just a developer; I like to design, take
                photos, race, make music, and occasionally try
                doing all of it at once. I'm driven by curiosity
                and the idea of making life a little easier (and
                cooler) through the things I create.
              </p>
              <p className="mb-4">
                Right now, I'm learning how to use tech to
                simplify my own world, one project at a time. I
                don't have it all figured out yet, but that's
                part of the fun. Every line of code, every idea,
                every experiment gets me closer.
              </p>
              <p>
                Anyway, enough about me, go ahead and explore
                what I've been working on.
                <br />
                (You already know where to find me below 👇)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="max-w-[1200px] mx-auto px-16 py-16"
      >
        <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-foreground text-[24px] tracking-[-0.48px] mb-12">
          Skills
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-[8px] p-12 transition-colors duration-300"
        >
          {/* UPDATED: Set to a 2x2 grid (md:grid-cols-2) and removed the extra column for LG screens (lg:grid-cols-2)
            The grid is inside a parent motion.div for overall section animation.
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-10">

            {/* Web Development - Animates from LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-center p-6 border border-border rounded-lg bg-background shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="font-['Inter:Semi_Bold',_sans-serif] text-foreground text-[18px] mb-2">
                Web Development
              </p>
              <p className="font-['Inter:Regular',_sans-serif] text-muted-foreground text-[16px] leading-[1.5]">
                React, TypeScript, Tailwind CSS, Next.js, HTML5,
                CSS3
              </p>
            </motion.div>

            {/* AI & Machine Learning - Animates from RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-center p-6 border border-border rounded-lg bg-background shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="font-['Inter:Semi_Bold',_sans-serif] text-foreground text-[18px] mb-2">
                AI & Machine Learning
              </p>
              <p className="font-['Inter:Regular',_sans-serif] text-muted-foreground text-[16px] leading-[1.5]">
                Python, TensorFlow, NLP, Chatbots, OpenAI APIs
              </p>
            </motion.div>

            {/* UI / UX & Design - Animates from LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-center p-6 border border-border rounded-lg bg-background shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="font-['Inter:Semi_Bold',_sans-serif] text-foreground text-[18px] mb-2">
                UI / UX & Design
              </p>
              <p className="font-['Inter:Regular',_sans-serif] text-muted-foreground text-[16px] leading-[1.5]">
                Figma, Wireframing, Prototyping, Design Systems,
                Accessibility, User Research
              </p>
            </motion.div>

            {/* Management & Organization - Animates from RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-center p-6 border border-border rounded-lg bg-background shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="font-['Inter:Semi_Bold',_sans-serif] text-foreground text-[18px] mb-2">
                Management & Organization
              </p>
              <p className="font-['Inter:Regular',_sans-serif] text-muted-foreground text-[16px] leading-[1.5]">
                Project Planning, Agile Workflow, Team
                Collaboration, Communication, Problem Solving
              </p>
            </motion.div>
          </div>

          {/* Skill Badges */}
          <div className="flex flex-wrap gap-3 justify-center pt-6 border-t border-border">
            {/* Helper function to get the URL for each skill */}
            {(() => {
              const getSkillUrl = (skill: string): string => {
                switch (skill) {
                  case "JavaScript": return "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
                  case "TypeScript": return "https://www.typescriptlang.org/";
                  case "React": return "https://react.dev/";
                  case "Tailwind CSS": return "https://tailwindcss.com/";
                  case "Next.js": return "https://nextjs.org/";
                  case "HTML5": return "https://developer.mozilla.org/en-US/docs/Web/HTML";
                  case "CSS3": return "https://developer.mozilla.org/en-US/docs/Web/CSS";
                  case "Python": return "https://www.python.org/";
                  case "Node.js": return "https://nodejs.org/en";
                  case "Express": return "https://expressjs.com/";
                  case "MongoDB": return "https://www.mongodb.com/";
                  case "PostgreSQL": return "https://www.postgresql.org/";
                  case "TensorFlow": return "https://www.tensorflow.org/";
                  case "REST APIs": return "https://restfulapi.net/";
                  case "Figma": return "https://www.figma.com/";
                  case "UI/UX Design": return "https://careerfoundry.com/en/blog/ux-design/what-is-ui-ux-design/"; // Conceptual link
                  case "Git": return "https://git-scm.com/";
                  case "Docker": return "https://www.docker.com/";
                  case "AWS": return "https://aws.amazon.com/certification/";
                  case "Team Leadership": return "#"; // Placeholder for soft skills
                  case "Agile Workflow": return "https://www.atlassian.com/agile";
                  case "Communication": return "#"; // Placeholder for soft skills
                  default: return "#";
                }
              };

              const skills = [
                "JavaScript",
                "TypeScript",
                "React",
                "Tailwind CSS", // Added missing skill for a direct link
                "Next.js", // Added missing skill for a direct link
                "Python",
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "TensorFlow",
                "REST APIs",
                "Figma",
                "UI/UX Design",
                "Git",
                "Docker",
                "AWS",
                "Team Leadership",
                "Agile Workflow",
                "Communication",
              ];

              return skills.map((skill, index) => {
                const url = getSkillUrl(skill);
                const isPlaceholder = url === "#";

                // Wrap the badge in an anchor tag 
                return (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Only change cursor if it's a real link
                    className={isPlaceholder ? 'cursor-default' : 'hover:bg-primary/20'}
                  >
                    <span
                      className="bg-muted px-4 py-2 rounded-full font-['Inter:Regular',_sans-serif] text-foreground text-[14px] transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  </a>
                );
              });
            })()}
          </div>
        </motion.div>
        <style>
          {`
      /* Fix for the badges: Added a transition property for smoother hover movement and shadow. */
      .hover\\:bg-primary\\/20 > span {
        transition: all 0.25s ease-in-out; /* Smoother transition for transform and box-shadow */
      }
      .hover\\:bg-primary\\/20:hover > span {
        box-shadow: 0 6px 10px -2px rgba(0, 0, 0, 0.15), 0 3px 6px -3px rgba(0, 0, 0, 0.08); /* Slightly stronger shadow */
        transform: translateY(-2px); /* Slightly more noticeable lift */
      }
      `}
        </style>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-16">
        <div className="max-w-[1200px] mx-auto px-16">
          <h2 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-foreground text-[24px] tracking-[-0.48px] mb-12">
            Projects
          </h2>
        </div>

        {/* Scrolling Projects Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12"
            animate={{
              x: [0, -2400],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Render projects twice for seamless loop */}
            {[...Array(2)].map((_, setIndex) => (
              <div
                key={setIndex}
                className="flex gap-12 shrink-0"
              >
                {/* ***PROJECT CARD LIST - ALL FIXED*** */}
                <a href="https://lockbox-global-share.lovable.app/" target="_blank" rel="noopener noreferrer">
                  <ProjectCard
                    title="LockBox"
                    description="A secure online space for storing and managing files. Users can upload, organize, and access documents safely, with custom permissions and real-time updates ensuring privacy and control."
                    imageSrc={LockBoxImage}
                  />
                </a>

                <a href="https://github.com/kaustubhjata/pulse.app" target="_blank" rel="noopener noreferrer">
                  <ProjectCard
                    title="Pulse"
                    description="An AI-powered wellness platform that helps students track moods, write journals, and join chatrooms to find people. Suggests helpful resources and includes a voice-based assistant for easy interaction."
                    imageSrc={PulseImage}
                  />
                </a>

                <a href="https://github.com/kaustubhjata/asis" target="_blank" rel="noopener noreferrer">
                  <ProjectCard
                    title="ASIS"
                    description="AI Based system to create custom podcasts and summaries of documents for students to understand concepts easily and accurately. Chatbot to answer detailed questions."
                    imageSrc={ASISImage}
                  />
                </a>

                <a href="https://phishguard360.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ProjectCard
                    title="PhishGuard - 360"
                    description="Detect a phishing website! Just paste the URL and we'll show you if its legit."
                    imageSrc={PhishguardImage}
                  />
                </a>

                <a href="https://portfolio-mokshavemulahehe.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ProjectCard
                    title="Personal Portfolios"
                    description="Haha! I Put this in without my friend knowing, don't tell him. He never paid me lol."
                    imageSrc={MoskaImage}
                  />
                </a>

                {/* Tambola card now wrapped in <a> tag with a placeholder link */}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ProjectCard
                    title="Online Tambola"
                    description="Play Tambola online in sessions and rooms like Scribble. Still a work in progress but you'll see this here soon!"
                    imageSrc={TambolaImage}
                  />
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

{/* Contact/Footer Section */}
{/* Contact/Footer Section */}
      <footer
        id="contact"
        className="max-w-[1200px] mx-auto px-16 py-16 border-t border-border"
      >
        <div className="flex flex-col gap-8">
            
          {/* Social Icons & CTA Container */}
          <div className="flex flex-wrap items-center justify-between gap-6">
            
            {/* Social Icons */}
            <div className="flex gap-6 items-center justify-start">
              
              {/* 1. X/Twitter */}
              <a
                href="https://x.com/kaustubhjl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="X (formerly Twitter)"
              >
                <div className="h-[24px] w-[23.98px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <path d={svgPaths.p16d01100} className="fill-foreground" />
                    </g>
                  </svg>
                </div>
              </a>

              {/* 2. Instagram */}
              <a
                href="https://www.instagram.com/kaustubh_jata/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="Instagram"
              >
                <div className="size-[24px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <path d={svgPaths.p3c382d72} className="fill-foreground" />
                    </g>
                  </svg>
                </div>
              </a>

              {/* 3. LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jl-kaustubh/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="LinkedIn"
              >
                <div className="size-[24px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 24 24"
                  >
                    <g>
                      <path d={svgPaths.p167f5280} className="fill-foreground" />
                    </g>
                  </svg>
                </div>
              </a>

              {/* 4. GitHub */}
              <a
    href="https://github.com/kaustubhjata"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-70 transition-opacity"
    aria-label="GitHub"
  >
    <div className="size-[24px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g>
          {/* ASSUMPTION: This path now points to the GitHub icon data */}
          <path d={svgPaths.p13f17d00} className="fill-foreground" />
        </g>
      </svg>
    </div>
  </a>
            </div>

            {/* Mail Me Section - CTA */}
            <div className="flex items-center">
              <a 
                href="mailto:jlkaustubh@gmail.com"
                className="bg-primary text-white px-4 py-2 rounded-full font-['Inter:Semi_Bold',_sans-serif] text-[16px] hover:bg-primary/80 transition-colors shadow-md hover:shadow-lg"
              >
                Let's Connect! 📩
              </a>
            </div>
          </div>

          {/* Attribution Line - CORRECTED */}
          <div className="w-full text-center pt-8 border-t border-border/50">
            <p className="font-['Inter:Regular',_sans-serif] text-muted-foreground text-[14px]">
              Made with &lt;3 by Kaus
            </p>
          </div>
        </div>
      </footer>
    </div>);
}

// ----------------------------------------------------------------------
// ProjectCard Component Definition (MUST be in the same file or imported)
// ----------------------------------------------------------------------
function ProjectCard({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc: string;
}) {
  return (
    <div className="bg-card border border-border rounded-[8px] p-6 w-[380px] shrink-0 hover:shadow-lg transition-all duration-300">
      {/* Container is 160x160, uses black background, and clips the image */}
      <div className="min-w-[160px] size-[160px] bg-black relative mb-4 overflow-hidden rounded-[4px]">
        <img
          src={imageSrc}
          alt={`Image for ${title} project`}
          // object-cover ensures the image fills the container
          className="absolute max-w-none object-cover size-full" 
        />
      </div>

      <div>
        <h3 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-foreground text-[24px] tracking-[-0.48px] mb-2">
          {title}
        </h3>
        <p className="font-['Inter:Regular',_sans-serif] text-muted-foreground text-[16px] leading-[1.4]">
          {description}
        </p>
      </div>
    </div>
  );
}