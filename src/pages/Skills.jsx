import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiC, SiCplusplus } from "react-icons/si";
import { MdOutlineDataObject } from "react-icons/md";
import { SiTailwindcss } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "text-orange-500",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "text-yellow-400",
  },
  {
    name: "TailwindCss",
    icon: <SiTailwindcss/>,
    color: "text-yellow-400",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    color: "text-purple-500",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
  },
  {
    name: "C",
    icon: <SiC />,
    color: "text-blue-400",
  },
  {
    name: "C++",
    icon: <SiCplusplus />,
    color: "text-blue-500",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-white",
  },
  {
    name: "DSA",
    icon: <MdOutlineDataObject />,
    color: "text-green-400",
  },
  {
    name: "Vs Code",
    icon: <DiVisualstudio />,
    color: "text-blue-400",
  },
];

const floatingCode = [
  "</>",
  "const",
  "{}",
  "<div>",
  "React",
  "Git",
  "HTML",
  "CSS",
  "JS",
  "npm",
  "function()",
  "return",
  "=>",
  "useState",
  "useEffect",
];

export default function Skills() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-24">

      {/* Animated Background */}

      <div className="absolute inset-0 overflow-hidden">

        {floatingCode.map((item, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: [0.1, 0.25, 0.1],
              y: [-50, -900],
              x: [0, 30, -30, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: index,
            }}
            className="absolute text-cyan-400/20 font-mono font-bold"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${18 + Math.random() * 18}px`,
            }}
          >
            {item}
          </motion.span>
        ))}

        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full -top-40 -left-32"></div>

        <div className="absolute w-[450px] h-[450px] bg-purple-500/10 blur-[150px] rounded-full bottom-0 right-0"></div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[8px] text-cyan-400 text-sm">
            My Skills
          </p>

          <h2 className="text-5xl font-extrabold text-white mt-3">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Passionate about building modern web applications while continuously
            improving my problem-solving abilities and software development
            skills.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .08,
              }}
              whileHover={{
                y: -12,
                scale: 1.05,
              }}
              className="group relative"
            >

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 blur-xl opacity-0 group-hover:opacity-60 transition duration-500"></div>

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center transition duration-500 group-hover:border-cyan-400/50">

                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: .8 }}
                  className={`text-6xl ${skill.color}`}
                >
                  {skill.icon}
                </motion.div>

                <h3 className="mt-6 text-white text-xl font-semibold">
                  {skill.name}
                </h3>

                <div className="w-12 h-1 rounded-full bg-cyan-400 mt-4 group-hover:w-20 transition-all duration-500"></div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}