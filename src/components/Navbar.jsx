import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Skills", path: "/Skills" },
    { name: "Projects", path: "/Project" },
    { name: "Contact", path: "/Contact" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className="
          mx-auto
          mt-5
          w-[92%]
          max-w-7xl
          rounded-full
          border
          border-white/20
          bg-white/10
          backdrop-blur-lg
          transition-all
          duration-500
          hover:bg-transparent
          hover:border-cyan-400/40
          hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
        "
      >
        <div className="flex items-center justify-between px-8 py-4">

       { /* Logo */ }

          <h1 className="text-2xl font-extrabold tracking-wide text-white">
            Amanydv
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              .dev
            </span>
          </h1>

          { /* Navigation-bar */ }


          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-lg font-semibold transition-all duration-300
                  ${
                    isActive
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-400"
                  }
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-cyan-400
                  after:transition-all after:duration-300
                  hover:after:w-full`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
 