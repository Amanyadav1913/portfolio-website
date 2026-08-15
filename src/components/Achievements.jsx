import React from "react";
import { motion } from "framer-motion";
import {
  FaAmazon,
  FaLinkedin,
  FaGithub,
  FaCode,
  FaTrophy,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const achievements = [
  {
    icon: <FaAmazon />,
    title: "Amazon Clone",
    description:
      "Built an Amazon-inspired e-commerce website with a responsive and modern user interface.",
    tag: "Project",
  },
  {
    icon: <FaLaptopCode />,
    title: "2+ UI Designs",
    description:
      "Created multiple modern and responsive UI designs with focus on clean layouts and user experience.",
    tag: "Design",
  },
  {
    icon: <FaLinkedin />,
    title: "2K+ LinkedIn Followers",
    description:
      "Built a developer network of 2,000+ followers by sharing coding, projects and learning progress.",
    tag: "Achievement",
  },
  {
    icon: <FaGithub />,
    title: "GitHub Projects",
    description:
      "Regularly upload and maintain coding projects, practice problems and development work on GitHub.",
    tag: "Coding",
  },
  {
    icon: <FaCode />,
    title: "Started DSA",
    description:
      "Started my Data Structures and Algorithms journey with a focus on problem solving and placements.",
    tag: "Learning",
  },
  {
    icon: <FaLaptopCode />,
    title: "Personal Portfolio",
    description:
      "Designed and developed my own responsive developer portfolio to showcase my skills and projects.",
    tag: "Web Development",
  },
  {
    icon: <FaGraduationCap />,
    title: "85% in Boards",
    description:
      "Achieved 85% marks in both Class 10 and Class 12 board examinations.",
    tag: "Academics",
  },
];

const floatingIcons = [
  "✦",
  "✧",
  "✦",
  "◆",
  "✧",
  "★",
  "✦",
  "◆",
  "@",
  "★",
  "#",
  "✦",
  "%",
  "✧",
  "★",
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative min-h-screen overflow-hidden bg-[#020617] px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-10 left-10 h-64 w-64 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="absolute right-10 top-1/3 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]" />

      {/* ================= FLOATING PARTICLES ================= */}

      {floatingIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-cyan-400/20"
          style={{
            left: `${5 + index * 9}%`,
            top: `${15 + ((index * 17) % 70)}%`,
            fontSize: `${14 + (index % 3) * 8}px`,
          }}
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 4 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {icon}
        </motion.div>
      ))}

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================= IMAGE ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: -40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

            {/* Image */}
            <motion.img
              src="https://cdn-icons-png.flaticon.com/512/3112/3112946.png"
              alt="Achievements"
              className="relative h-28 w-28 object-contain drop-shadow-[0_0_25px_rgba(34,211,238,0.5)] sm:h-36 sm:w-36"
              animate={{
                y: [0, -10, 0],
                rotate: [-3, 3, -3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Journey
          </p>

          <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A collection of my achievements, projects, learning milestones
            and progress throughout my development journey.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
          />
        </motion.div>

        {/* ================= CARDS ================= */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative"
            >
              {/* Hover Glow */}

              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 blur-sm transition duration-500 group-hover:opacity-60" />

              {/* Card */}

              <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-400/40 group-hover:bg-white/[0.07]">
                {/* Background circle */}

                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-cyan-400/10" />

                {/* Icon */}

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.15,
                  }}
                  className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-400 transition-all duration-300 group-hover:bg-cyan-400/20 group-hover:text-cyan-300"
                >
                  {achievement.icon}
                </motion.div>

                {/* Tag */}

                <span className="mb-3 inline-block rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-xs font-medium text-purple-300">
                  {achievement.tag}
                </span>

                {/* Title */}

                <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                  {achievement.title}
                </h3>

                {/* Description */}

                <p className="text-sm leading-6 text-gray-400">
                  {achievement.description}
                </p>

                {/* Bottom line */}

                <div className="mt-6 h-[1px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= BOTTOM ACHIEVEMENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <div className="flex items-center gap-4 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 px-6 py-4 backdrop-blur-xl">
            <motion.div
              animate={{
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <FaTrophy className="text-3xl text-yellow-400" />
            </motion.div>

            <div>
              <p className="text-sm font-semibold text-white">
                Always Learning, Always Growing 🚀
              </p>
              <p className="text-xs text-gray-400">
                More achievements are on the way...
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;