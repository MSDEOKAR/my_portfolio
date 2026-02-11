import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "HTML/CSS", level: 92 },
        { name: "JSP", level: 85 },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Backend",
      skills: [
        { name: "Java", level: 92 },
        { name: "Spring Boot", level: 88 },
        { name: "Node.js", level: 82 },
        { name: "C#/ASP.NET", level: 80 },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Database & Tools",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "Hibernate", level: 85 },
        { name: "Git", level: 88 },
        { name: "Postman API", level: 90 },
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              whileHover={{ y: -10, borderColor: "rgb(59, 130, 246)" }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <motion.span
                        className="text-blue-400 font-semibold"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          ease: "easeOut",
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/30"
                          animate={{
                            x: ["0%", "100%"],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          style={{
                            background:
                              "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}