import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { PiTreeStructureFill } from "react-icons/pi";

const icons = [
  { icon: <FaReact />, top: "15%", left: "12%", delay: 0 },
  { icon: <FaNodeJs />, top: "25%", right: "15%", delay: 2 },
  { icon: <FaGitAlt />, bottom: "15%", left: "18%", delay: 1 },
  { icon: <FaHtml5 />, top: "60%", left: "10%", delay: 3 },
  { icon: <FaCss3Alt />, top: "70%", right: "12%", delay: 4 },
  { icon: <FaJsSquare />, top: "45%", left: "45%", delay: 1.5 },
  { icon: <SiTailwindcss />, bottom: "20%", right: "25%", delay: 2.5 },
  { icon: <SiMongodb />, top: "18%", left: "70%", delay: 3.5 },
  { icon: <PiTreeStructureFill />, top: "45%", left: "55%", delay: 3.5 },
];

export default function Home() {
  return (
    <section className="relative min-h-screen bg-[#050816] overflow-hidden flex items-center justify-center">

      {/* Background Gradient  */}

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>

      {/* Blur Circle */}

      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full -top-32 -left-24"></div>

      <div className="absolute w-[450px] h-[450px] bg-purple-500/10 blur-[150px] rounded-full bottom-0 right-0"></div>

      {/* Animated Tech Icons */}

      {icons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ y: 0 }}
          animate={{ y: [-20, 20, -20] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: item.delay,
          }}
          className="absolute text-cyan-400 text-5xl opacity-20"
          style={{
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            right: item.right,
          }}
        >
          {item.icon}
        </motion.div>
      ))}


      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Hero Content */}

      <div className="relative z-10 text-center px-6 max-w-5xl">

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold"
        >
          <span className="text-white">Hi, I'm </span>

          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Aman Yadav
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mt-8 text-gray-300 text-lg md:text-2xl leading-9"
        >
          Software Developer • Frontend Developer • Problem Solver
          <br />
          Building Modern Web Applications with React, Tailwind & JavaScript
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .8 }}
          className="mt-10 flex justify-center"
        > 
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

  {/* Documents Button */}
  <Link to="/documents" className="w-full sm:w-auto">
    <button
      className="
        w-full sm:w-48
        h-14
        rounded-full
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        text-white
        font-semibold
        shadow-lg
        shadow-cyan-500/30
        hover:scale-105
        transition-all
        duration-300
        hover:shadow-cyan-400/50
      "
    >
      📄 View Documents
    </button>
  </Link>

  {/* Achievements Button */}
  <Link to="/achievements" className="w-full sm:w-auto">
    <button
      className="
        w-full sm:w-48
        h-14
        rounded-full
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        text-white
        font-semibold
        shadow-lg
        shadow-cyan-500/30
        hover:scale-105
        transition-all
        duration-300
        hover:shadow-cyan-400/50
      "
    >
      🏆 Achievements
    </button>
  </Link>

</div>
        </motion.div>

      </div>
    </section>
  );
}