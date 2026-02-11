import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      type: "education",
      icon: GraduationCap,
      title: "PG Diploma in Advanced Computing",
      organization: "CDAC Acts Pune",
      period: "Aug 2025",
      grade: "Grade A",
      description: [
        "Completed 900-hour full-time course in Advanced Computing",
        "Skilled in C++, Java, Data Structures, Web Tech, DBMS, .NET",
        "Hands-on in Software Dev, OOPs, and OS concepts",
        "Built projects using Java & web technologies",
      ],
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "B.Tech in Electronics and Computer Engineering",
      organization: "Sanjivani College Of Engineering",
      location: "Maharashtra, India",
      period: "June 2024",
      description: [
        "Specialized in Electronics and Computer Engineering",
        "Strong foundation in programming and software development",
      ],
    },
    {
      type: "internship",
      icon: Briefcase,
      title: "Employability Skill Development Program Intern",
      organization: "Zesar RPG Foundation",
      period: "Feb 2023",
      description: [
        "Developed robust applications using Core Java principles",
        "Managed MySQL databases ensuring data integrity",
        "Created dynamic web solutions using JSP",
        "Optimized database queries for enhanced performance",
      ],
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Diploma in Computer Technology",
      organization: "Sanjivani KBP Polytechnic",
      location: "Maharashtra, India",
      period: "Aug 2021",
      description: [
        "Foundation in computer programming and technology",
        "Developed strong technical and analytical skills",
      ],
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Education & Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic journey and professional experience
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 -translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-6 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full border-2 sm:border-4 border-slate-950 z-10 transform -translate-x-1/2"
                    whileHover={{ scale: 1.5 }}
                  />

                  {/* Content card */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8 lg:pr-12" : "md:pl-8 lg:pl-12"} pl-12 sm:pl-16 md:pl-0`}>
                    <motion.div
                      className="bg-slate-900 rounded-2xl p-4 sm:p-6 border border-slate-800"
                      whileHover={{ y: -5, borderColor: "rgb(59, 130, 246)" }}
                    >
                      <div className="flex items-start gap-3 sm:gap-4 mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                          <exp.icon className="text-blue-400" size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 break-words">{exp.title}</h3>
                          <p className="text-sm sm:text-base text-blue-400 font-semibold break-words">{exp.organization}</p>
                          {exp.location && (
                            <p className="text-gray-500 text-sm">{exp.location}</p>
                          )}
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2">
                            <p className="text-gray-400 text-xs sm:text-sm">{exp.period}</p>
                            {exp.grade && (
                              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-600/20 text-green-400 text-xs rounded-full border border-green-600/30">
                                {exp.grade}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((point, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
