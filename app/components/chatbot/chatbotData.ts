export interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

export const FAQ_QUESTIONS = [
    "Tell me about Mahesh",
    "What are your top skills?",
    "Tell me about your projects",
    "What's your educational background?",
    "How can I contact you?",
];

const KNOWLEDGE_BASE = {
    about: "Mahesh Deokar is a Full Stack Software Developer specializing in building scalable web applications. He is a PG-DAC graduate (Grade A) with a background in Electronics and Computer Engineering. He is passionate about solving complex problems and building robust software solutions.",
    skills: "Mahesh has expertise across the full stack:\n• Frontend: React.js, JavaScript, HTML/CSS, JSP\n• Backend: Java, Spring Boot, Node.js, C#, ASP.NET\n• Databases: MySQL, Hibernate\n• Tools: Git, Postman, REST APIs",
    projects: "His notable projects include:\n1. ClockIn HR Assistance App: An automated attendance and payroll system using React and Spring Boot.\n2. Multi-Modal Sentiment Analysis: An AI system for emotion detection in text, audio, and video using Python and ML.\n3. Full Stack Web Apps: Various Java EE and JSP applications developed during internships.",
    education: "Mahesh has a solid academic foundation:\n• PG-DAC (Post Graduate Diploma in Advanced Computing) from CDAC Acts Pune - Aug 2025 (Grade A)\n• B.Tech in Electronics and Computer Engineering from Sanjivani College of Engineering - June 2024\n• Diploma in Computer Technology from Sanjivani KBP Polytechnic - Aug 2021",
    experience: "Mahesh served as an Employability Skill Development Program Intern at Zesar RPG Foundation (Feb 2023), where he developed applications using Core Java, JSP, and MySQL, focusing on database optimization and dynamic web solutions.",
    contact: "You can reach Mahesh through several channels:\n• Email: maheshdeokar913@gmail.com\n• Phone: +91 7972611294\n• Location: Maharashtra, India\n• Socials: LinkedIn and GitHub (available in the Hero section)",
    availability: "Mahesh is currently available for full-time positions, freelance projects, and collaborative software development opportunities.",
};

export function getBotResponse(input: string): string {
    const query = input.toLowerCase();

    // Greeting check
    if (query.match(/^(hi|hello|hey|greetings|hola|good morning|good evening|good afternoon)/)) {
        return "Hello! I'm Mahesh's virtual assistant. I can tell you about his skills, projects, experience, or education. What would you like to know?";
    }

    // Multi-keyword matching for higher accuracy
    if (query.includes("about") || query.includes("who") || query.includes("summary") || query.includes("introduce") || query.includes("yourself")) {
        return KNOWLEDGE_BASE.about;
    }
    if (query.includes("skill") || query.includes("stack") || query.includes("tech") || query.includes("expert") || query.includes("know") || query.includes("proficient") || query.includes("language")) {
        return KNOWLEDGE_BASE.skills;
    }
    if (query.includes("project") || query.includes("portfolio") || query.includes("build") || query.includes("made") || query.includes("create") || query.includes("develop")) {
        return KNOWLEDGE_BASE.projects;
    }
    if (query.includes("education") || query.includes("study") || query.includes("college") || query.includes("degree") || query.includes("university") || query.includes("graduate") || query.includes("cdac") || query.includes("barch") || query.includes("btech") || query.includes("diploma")) {
        return KNOWLEDGE_BASE.education;
    }
    if (query.includes("experience") || query.includes("intern") || query.includes("job") || query.includes("history") || query.includes("zesar") || query.includes("rpg")) {
        return KNOWLEDGE_BASE.experience;
    }
    if (query.includes("contact") || query.includes("email") || query.includes("reach") || query.includes("phone") || query.includes("call") || query.includes("message") || query.includes("social") || query.includes("linkedin") || query.includes("github") || query.includes("mail")) {
        return KNOWLEDGE_BASE.contact;
    }
    if (query.includes("available") || query.includes("hire") || query.includes("opportunity") || query.includes("open to") || query.includes("job") || query.includes("work")) {
        return KNOWLEDGE_BASE.availability;
    }
    if (query.includes("thanks") || query.includes("thank you") || query.includes("great") || query.includes("awesome") || query.includes("cool") || query.includes("nice")) {
        return "You're very welcome! Let me know if you have any other questions about Mahesh.";
    }

    return "I'm not quite sure about that. Try asking about Mahesh's skills, projects, experience, or how to contact him!";
}
