import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#020617] via-[#071128] to-black flex items-center justify-center px-6 py-20">

      {/* ================= Animated Night Background ================= */}

      <div className="absolute inset-0 overflow-hidden">

        {[...Array(80)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 5}s`,
              opacity: Math.random(),
            }}
          />
        ))}

        {/* Shooting Stars */}

        <div className="shooting shooting1"></div>
        <div className="shooting shooting2"></div>
        <div className="shooting shooting3"></div>
        <div className="shooting shooting4"></div>
        <div className="shooting shooting5"></div>
      </div>

      {/* Glow */}

      <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[180px]"></div>

      {/* ================= Content ================= */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl w-full"
      >
        <motion.div
          whileHover={{
            scale: 1.03,
            rotateX: 3,
            rotateY: 3,
          }}
          transition={{ duration: .4 }}
          className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-14 shadow-2xl hover:border-cyan-400/60 hover:shadow-cyan-500/30 transition-all duration-700"
        >

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}

            <div>

              <motion.h2
                whileHover={{ x: 8 }}
                className="text-5xl font-extrabold text-white mb-6"
              >
                About <span className="text-cyan-400">Me</span>
              </motion.h2>

              <p className="text-gray-300 leading-8 text-lg">
                I'm a passionate software developer who enjoys transforming
                ideas into modern, responsive, and user-friendly web
                applications. I love solving real-world problems through clean
                code and continuously improving my skills by building projects
                and exploring new technologies.
              </p>

              <p className="mt-6 text-gray-400 leading-8">
                My focus is on creating high-performance web applications using
                modern JavaScript technologies while writing scalable,
                maintainable, and efficient code. I'm always excited to learn,
                collaborate, and contribute to impactful projects.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                {[
                   "C++",
                  "React",
                  "JavaScript",
                  "Tailwind CSS",
                  "Node.js",
                  "Responsive UI",
                  "Git",
                  "GitHub",
                 
                ].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{
                      scale: 1.15,
                      y: -6,
                    }}
                    className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 cursor-pointer transition"
                  >
                    {skill}
                  </motion.div>
                ))}

              </div>

            </div>

            {/* Right */}

            <motion.div
              whileHover={{
                scale: 1.0,               
              }}
              className="relative"
            >

              <div className="rounded-3xl bg-gradient-to-br from-cyan-500/20 via-transparent to-indigo-500/20 p-8 border border-white/10">

                <div className="grid gap-6">

                  {[
                    {
                      title: "Experience",
                      value: "Building Projects",
                    },
                    {
                      title: "Learning",
                      value: "DSA • React • Backend",
                    },
                    {
                      title: "Goal",
                      value: "Software Engineer",
                    },
                    {
                      title: "Passion",
                      value: "Problem Solving",
                    },
                  ].map((item) => (
                    <motion.div
                      key={item.title}
                      whileHover={{
                        x: 10,
                        backgroundColor: "rgba(34,211,238,.08)",
                      }}
                      className="rounded-xl border border-white/10 p-5 transition-all duration-300 cursor-pointer"
                    >
                      <h3 className="text-cyan-300 text-lg font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-gray-300 mt-2">
                        {item.value}
                      </p>

                    </motion.div>
                  ))}

                </div>

              </div>

            </motion.div>

          </div>

        </motion.div>

      </motion.div>

      {/* ================= CSS ================= */}

      <style>{`

      .shooting{
      position:absolute;
      width:180px;
      height:2px;
      background:linear-gradient(90deg,#fff,transparent);
      transform:rotate(-35deg);
      animation:shoot 6s linear infinite;
      opacity:.8;
      }

      .shooting1{
      top:12%;
      left:-20%;
      animation-delay:0s;
      }

      .shooting2{
      top:38%;
      left:-30%;
      animation-delay:2s;
      }

      .shooting3{
      top:65%;
      left:-40%;
      animation-delay:4s;
      }

      @keyframes shoot{

      0%{
      transform:translateX(0) translateY(0) rotate(-35deg);
      opacity:0;
      }

      10%{
      opacity:1;
      }

      100%{
      transform:translateX(1700px) translateY(500px) rotate(-35deg);
      opacity:0;
      }

      }

      `}</style>

    </section>
  );
}