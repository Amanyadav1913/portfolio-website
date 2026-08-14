import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/project" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-4 sm:px-6 pt-2">
      <nav
        className="
          max-w-7xl mx-auto
          rounded-3xl
          border border-cyan-400/20
          bg-black/30
          backdrop-blur-xl
          shadow-[0_0_30px_rgba(34,211,238,0.08)]
        "
      >
        <div className="px-3 sm:px-4 lg:px-6">

          {/* Main Navbar */}
          <div className="h-14 sm:h-16 flex items-center justify-between">

            {/* Logo */}
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="group"
            >
              <h1
                className="
                  text-2xl sm:text-3xl
                  font-extrabold
                  tracking-wide
                  text-white
                  transition duration-300
                  group-hover:scale-105
                "
              >
                Amanydv
                <span
                  className="
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  .dev
                </span>
              </h1>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    relative
                    text-base lg:text-lg
                    font-semibold
                    transition-all duration-300

                    ${
                      isActive
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-cyan-400"
                    }

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-cyan-400
                    after:shadow-[0_0_10px_#22d3ee]
                    after:transition-all
                    after:duration-300
                    hover:after:w-full

                    ${
                      isActive
                        ? "after:w-full"
                        : ""
                    }
                    `
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                md:hidden
                p-2
                rounded-xl
                border border-cyan-400/20
                bg-white/5
                text-white
                text-2xl
                hover:text-cyan-400
                hover:border-cyan-400/50
                hover:bg-cyan-400/10
                transition-all duration-300
              "
              aria-label="Toggle navigation"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`
              md:hidden
              overflow-hidden
              transition-all duration-500

              ${
                isOpen
                  ? "max-h-96 opacity-100 pb-5"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div
              className="
                flex flex-col gap-2
                pt-3
                border-t border-cyan-400/10
              "
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `
                    px-4 py-3
                    rounded-xl
                    font-semibold
                    transition-all duration-300

                    ${
                      isActive
                        ? `
                          text-cyan-400
                          bg-cyan-400/10
                          border border-cyan-400/20
                          shadow-[0_0_15px_rgba(34,211,238,0.1)]
                        `
                        : `
                          text-gray-300
                          hover:text-cyan-400
                          hover:bg-white/5
                          hover:border-cyan-400/20
                          border border-transparent
                        `
                    }
                    `
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
