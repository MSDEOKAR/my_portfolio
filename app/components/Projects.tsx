import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "ClockIn HR Assistance App",
      description:
        "HR management app that tracks employee attendance, manages leave requests, and generates monthly payslips based on actual working days with centralized dashboard.",
      image: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzcwODEzNjc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["ReactJS", "Spring Boot", "MySQL", "REST API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Sentiment Analysis Using Multi-Modal AI",
      description:
        "Multimodal Sentiment Detection system using the MELD Dataset. Analyzes emotions in text, audio, and video data with advanced machine learning techniques.",
      image: "https://images.unsplash.com/photo-1762279389053-d5a30239ae45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzcwNzQ4MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Python", "Machine Learning", "MELD Dataset", "AI"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Full Stack Web Applications",
      description:
        "Various web applications developed during PG-DAC course and internships, showcasing expertise in Java EE, JSP, and database management with MySQL.",
      image: "https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzcwNzU2ODg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Java", "JSP", "MySQL", "Hibernate"],
      liveUrl: "#",
      githubUrl: "#",
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
          <h2 className="text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <motion.div
                className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 h-full"
                whileHover={{ y: -10, borderColor: "rgb(59, 130, 246)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredProject === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />

                  <motion.div
                    className="absolute inset-0 bg-blue-600/90 flex items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredProject === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a
                      href={project.liveUrl}
                      className="w-12 h-12 rounded-full bg-white text-blue-600 flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="w-12 h-12 rounded-full bg-white text-blue-600 flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: -360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full border border-blue-600/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}