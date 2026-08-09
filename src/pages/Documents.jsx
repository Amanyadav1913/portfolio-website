import { motion } from "framer-motion";
import { FileText, Award, Download, ExternalLink } from "lucide-react";

export default function Documents() {
  return (
    <section
      id="documents"
      className="relative overflow-hidden bg-[#050816] py-24 px-6"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#091227] to-[#050816]" />

      {/* Animated Study Icons */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Book */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [-8, 8, -8],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="absolute top-20 left-10 text-blue-400 text-6xl opacity-20"
        >
          📘
        </motion.div>

        {/* Notebook */}
        <motion.div
          animate={{
            y: [15, -15, 15],
            rotate: [5, -5, 5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute top-40 right-20 text-6xl opacity-20"
        >
          📓
        </motion.div>


          {/* Technology*/}
        <motion.div
          animate={{
            y: [10, -30, 25],
            rotate: [15, 5, 10],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="absolute top-40 right-120 text-6xl opacity-15"
         >
           💻
           </motion.div>
          {/* Growth*/}
        <motion.div
          animate={{
            y: [10, -30, -25],
            rotate: [10, 10, 10],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="absolute top-30 right-220 text-6xl opacity-25"
        >
          🚀
        </motion.div>


        {/* Graduation */}
        <motion.div
          animate={{
            y: [-15, 15, -15],
            rotate: [-6, 6, -6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute bottom-32 left-32 text-6xl opacity-20"
        >
          🎓
        </motion.div>

        {/* Pencil */}
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [10, -10, 10],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="absolute bottom-16 right-20 text-5xl opacity-20"
        >
          ✏️
        </motion.div>

        {/* Papers */}
        <motion.div
          animate={{
            y: [-18, 18, -18],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
          }}
          className="absolute top-1/2 left-1/2 text-6xl opacity-10"
        >
          📄
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white">
            My <span className="text-cyan-400">Documents</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Download my Resume and explore my Certificates that showcase
            my learning journey and achievements.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-10">

          {/* Resume */}

          <motion.div
            whileHover={{
              scale: 1.05,
              
            }}
            className="group relative rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 duration-500" />

            <div className="relative z-10">

              <div className="w-20 h-20 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6">
                <FileText className="text-cyan-400 w-10 h-10" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                Resume
              </h3>

              <p className="text-gray-400 mb-8">
                Download my latest resume containing my technical skills,
                education, projects and achievements.
              </p>

              <a
                href="/Documents/resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 duration-300 text-black font-semibold px-6 py-3 rounded-xl"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Certificates */}

          <motion.div
            whileHover={{
              scale: 1.05,
              
            }}
            className="group relative rounded-3xl border border-purple-500/20 bg-white/5 backdrop-blur-xl p-10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 duration-500" />

            <div className="relative z-10">

              <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                <Award className="text-purple-400 w-10 h-10" />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                Certificates
              </h3>

              <p className="text-gray-400 mb-8">
                Explore my certifications earned through various learning
                platforms and technical training.
              </p>

              <a
                href="/Documents/marksheet.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-400 duration-300 text-white font-semibold px-6 py-3 rounded-xl"
              >
                <ExternalLink size={20} />
                View Certificate
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}