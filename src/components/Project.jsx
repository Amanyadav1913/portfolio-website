import { motion } from "framer-motion";
import {
     GitBranch,
  ExternalLink,
  Code2,
  Globe,
} from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio built using React, Tailwind CSS and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/Amanyadav1913/portfolio-website",
    live: "https://amanyadav1913.github.io/portfolio-website/",
  },
  {
    title: "Weather App",
    description:
      "Weather forecasting application using OpenWeather API with beautiful UI.",
    tech: ["React", "API", "CSS"],
    github:"https://github.com/Amanyadav1913/weather-app",
    live: "https://amanyadav1913.github.io/weather-app/",
  },
  {
    title: "Tic-Tac-Toe Game",
    description:
      "Task management application with local storage and responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Amanyadav1913/Tic-Tac-Toe-game",
    live: "https://amanyadav1913.github.io/Tic-Tac-Toe-game/",
  },
  {
    title: "Calculator",
    description:
      "Modern calculator using JavaScript with smooth animations.",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/Amanyadav1913/calculator",
    live: "https://amanyadav1913.github.io/calculator/",
  },
];

const codeLines = [
  "const developer = 'Aman';",
  "function code(){ return success; }",
  "git commit -m 'Build Projects'",
  "npm run dev",
  "console.log('Hello World');",
  "<React />",
  "const portfolio = true;",
  "useEffect(()=>{},[])",
  "git push origin main",
  "tailwindcss",
  "while(coding){ improve(); }",
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050816] py-24"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#071225] to-[#050816]" />

      {/* Coding Animation */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="absolute whitespace-nowrap text-cyan-400 font-mono text-sm animate-scrollCode"
            style={{
              top: `${index * 8}%`,
              animationDuration: `${18 + index}s`,
              animationDelay: `${index * 0.8}s`,
            }}
          >
            {codeLines.join("     ●     ")}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-center text-5xl font-bold text-white"
        >
          My
          <span className="text-cyan-400"> Projects</span>
        </motion.h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          Some of my recent projects built while learning modern web
          development and problem solving.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .15 }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="group relative rounded-3xl overflow-hidden"
            >

              {/* Glow */}
        <div className="absolute -inset-[1px] rounded-3xl bg-cyan-400 blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 h-full">

                {/* Icon */}

                <div className="flex justify-between items-center">

                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Code2 size={34} />
                  </div>

                  <Globe className="text-cyan-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mt-6">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-gray-900 hover:bg-cyan-500 transition px-5 py-3 rounded-xl text-white"
                  >
                    <GitBranch size={20} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition px-5 py-3 rounded-xl text-white"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}