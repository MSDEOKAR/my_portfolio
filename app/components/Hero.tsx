import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profilePic from "../../profile.jpg";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column: Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Hi, I'm{" "}
                <motion.span
                  className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Mahesh Deokar
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Full Stack Software Developer
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              PG-DAC Graduate specializing in Full Stack Development with expertise in
              React, Spring Boot, and modern web technologies. Passionate about building
              scalable applications and solving complex problems.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 w-full sm:w-auto"
                whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button
                className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold flex items-center justify-center gap-2 w-full sm:w-auto"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Resume
              </motion.button>
            </motion.div>

            <motion.div
              className="flex gap-4 sm:gap-6 justify-center sm:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { Icon: Github, href: "https://github.com/MaheshDeokar" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/mahesh-deokar" },
                { Icon: Mail, href: "mailto:maheshdeokar913@gmail.com" },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white"
                  whileHover={{ scale: 1.2, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Profile Picture with premium square styling */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <motion.div
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Background blurs adjusted for square shape */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2.5rem] blur-2xl opacity-30 animate-pulse" />

              <div className="relative w-full h-full rounded-[2rem] border-2 border-white/20 p-3 backdrop-blur-sm bg-white/5 overflow-hidden">
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden border-2 border-blue-500/50">
                  <img
                    src={profilePic}
                    alt="Mahesh Deokar"
                    className="w-full h-full object-cover object-top transform hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Decorative square animation frames */}
              <motion.div
                className="absolute -inset-3 border-2 border-blue-400/30 rounded-[2.5rem]"
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-1 border border-purple-400/20 rounded-[2rem]"
                animate={{ rotate: [0, -90, -180, -270, -360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}