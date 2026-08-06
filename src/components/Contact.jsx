import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
 
  


export default function Contact() {
  return (
  

    <section className="relative min-h-screen overflow-hidden bg-[#050816] py-24 px-6">

      {/* ================= Animated Background ================= */}

      <div className="absolute inset-0 overflow-hidden">

        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-cyan-400/20 animate-ping"
            style={{
              width: `${Math.random() * 8 + 5}px`,
              height: `${Math.random() * 8 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></span>
        ))}

        {[...Array(10)].map((_, i) => (
          <FaEnvelope
            key={i}
            className="absolute text-cyan-500/20 animate-bounce"
            style={{
              fontSize: `${20 + Math.random() * 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* ================= Content ================= */}

      <div className="relative z-10 max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <p className="text-center text-gray-400 mt-5 mb-16">
         I'm always interested in discussing new opportunities, collaborations, or creative ideas. Feel free to reach out!
        </p>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* ================= Left Side ================= */}

          <div className="space-y-6">

            {/* Email */}

            <a
              href="mailto:milamanku12090@gmail.com"
              className="group flex items-center gap-5 p-6 rounded-3xl
              bg-white/5 backdrop-blur-lg border border-cyan-500/20
              hover:border-cyan-400 transition duration-500
              hover:-translate-y-2 hover:shadow-[0_0_40px_#22d3ee]"
            >
              <FaEnvelope className="text-3xl text-cyan-400 group-hover:rotate-12 transition" />

              <div>
                <h3 className="text-white font-bold">Email</h3>
                <p className="text-gray-400">
                  amanku12090@gmail.com
                </p>
              </div>
            </a>

            {/* Github */}

            <a
              href="https://github.com/Amanyadav1913"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 p-6 rounded-3xl
              bg-white/5 backdrop-blur-lg border border-cyan-500/20
              hover:border-cyan-400 transition duration-500
              hover:-translate-y-2 hover:shadow-[0_0_40px_#22d3ee]"
            >
              <FaGithub className="text-3xl text-white group-hover:rotate-12 transition" />

              <div>
                <h3 className="text-white font-bold">GitHub</h3>
                <p className="text-gray-400">
                  github.com/Amanyadav1913
                </p>
              </div>
            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/amanyadav86"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 p-6 rounded-3xl
              bg-white/5 backdrop-blur-lg border border-cyan-500/20
              hover:border-cyan-400 transition duration-500
              hover:-translate-y-2 hover:shadow-[0_0_40px_#22d3ee]"
            >
              <FaLinkedin className="text-3xl text-blue-500 group-hover:rotate-12 transition" />

              <div>
                <h3 className="text-white font-bold">LinkedIn</h3>
                <p className="text-gray-400">
                  linkedin.com/in/amanyadav86
                </p>
              </div>
            </a>

         
<a
  href="tel:+91 7479406956"
  className="group flex items-center gap-5 p-6 rounded-3xl
  bg-white/5 backdrop-blur-lg border border-cyan-500/20
  hover:border-cyan-400 transition duration-500
  hover:-translate-y-2 hover:shadow-[0_0_40px_#22d3ee]"
>
  <FaPhone className="text-3xl text-green-500 group-hover:rotate-12 transition" />

  <div>
    <h3 className="text-white font-bold">Phone</h3>
    <p className="text-gray-400">
      +91  74794 06956
    </p>
  </div>
</a>

          
            {/* leetcode profile */}
            <a
              href="https://leetcode.com/u/Amanyadav9955/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 p-6 rounded-3xl
              bg-white/5 backdrop-blur-lg border border-cyan-500/20
              hover:border-cyan-400 transition duration-500
              hover:-translate-y-2 hover:shadow-[0_0_40px_#22d3ee]"
            >
              <SiLeetcode className="text-3xl text-green-500 group-hover:rotate-12 transition" />

              <div>
                <h3 className="text-white font-bold">LeetCode</h3>
                <p className="text-gray-400">
                 @Amanyadav9955
                </p>
              </div>
            </a>

          </div>

          {/* ================= Contact Form ================= */}

          <div
            className="rounded-3xl bg-white/5 backdrop-blur-lg
            border border-cyan-500/20 p-8
            hover:shadow-[0_0_50px_#22d3ee]
            transition duration-500"
          >

            <h3 className="text-3xl font-bold text-white mb-8">
              Send Me a Message
            </h3>

            <form method="POST"
              encType="text/plain"
              className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl bg-[#101b35]
                border border-cyan-500/30
                p-4 text-white
                outline-none
                focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl bg-[#101b35]
                border border-cyan-500/30
                p-4 text-white
                outline-none
                focus:border-cyan-400"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full rounded-xl bg-[#101b35]
                border border-cyan-500/30
                p-4 text-white
                outline-none
                resize-none
                focus:border-cyan-400"
              ></textarea>

              <button
              onClick={() =>alert("This contact form is currently a UI demo. Please contact me via Email or LinkedIn.")}
                
                type="button"          
                className="group w-full rounded-xl
                bg-cyan-500
                hover:bg-cyan-400
                py-4
                font-bold
                text-black
                transition
                duration-500
                flex justify-center items-center gap-3"
               > 
                Send Message

                <FaPaperPlane className="group-hover:translate-x-2 transition" />
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
    
  );
}