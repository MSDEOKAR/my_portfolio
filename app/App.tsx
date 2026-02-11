import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { FloatingNav } from "./components/FloatingNav";
import { ChatBot } from "./components/chatbot/ChatBot";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <FloatingNav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <ChatBot />

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2026 Mahesh Deokar. Built with React & Motion. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}