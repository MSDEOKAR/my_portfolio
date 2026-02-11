import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Palette, Zap, Users } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful interfaces with attention to detail",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in agile teams and cross-functional groups",
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-30"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm a passionate Full Stack Developer and recent PG-DAC graduate from CDAC
                  Acts Pune with Grade A. I hold a B.Tech in Electronics and Computer Engineering
                  from Sanjivani College of Engineering.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  With 900+ hours of intensive training in Advanced Computing, I specialize in
                  building robust web applications using modern technologies. I'm experienced in
                  both frontend and backend development, with a focus on creating efficient and
                  scalable solutions.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["React.js", "Spring Boot", "Java", "MySQL", "C#", "ASP.NET"].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-600/30"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-slate-800 rounded-xl p-4 sm:p-6 border border-slate-700 relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, borderColor: "rgb(59, 130, 246)" }}
              >
                <motion.div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-600/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-600/30 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="text-blue-400" size={20} />
                </motion.div>
                <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{feature.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}