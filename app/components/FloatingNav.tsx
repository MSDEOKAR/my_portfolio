import { motion, useScroll } from "motion/react";
import { useState, useEffect } from "react";
import { Home, User, Code, Briefcase, Mail } from "lucide-react";

export function FloatingNav() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState(0);

  const navItems = [
    { icon: Home, label: "Home" },
    { icon: User, label: "About" },
    { icon: Code, label: "Skills" },
    { icon: Briefcase, label: "Experience" },
    { icon: Briefcase, label: "Projects" },
    { icon: Mail, label: "Contact" },
  ];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const section = Math.floor(latest * navItems.length);
      setActiveSection(Math.min(section, navItems.length - 1));
    });

    return () => unsubscribe();
  }, [scrollYProgress, navItems.length]);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll("section");
    sections[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Floating navigation - Repositioned to Top-Center */}
      <motion.nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="bg-slate-900/40 backdrop-blur-xl rounded-full p-2 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-1 md:gap-3">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(index)}
                className="relative group p-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${activeSection === index
                      ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  <item.icon size={18} />
                  <span className="text-sm font-medium hidden md:block">{item.label}</span>
                </div>

                {/* Tooltip for mobile or small screens */}
                <motion.div
                  className="absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none md:hidden"
                >
                  {item.label}
                  <div className="absolute top-0 left-1/2 -translate-y-full -translate-x-1/2 border-8 border-transparent border-b-slate-800" />
                </motion.div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
}