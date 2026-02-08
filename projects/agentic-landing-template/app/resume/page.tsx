// ============================================================
// DIGITAL RESUME - John Smith
// ============================================================

import {
  CheckIcon,
  LinkedInIcon,
  GitHubIcon,
} from "@/components/Icons";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-sm">
                JS
              </div>
              <span className="text-xl font-bold tracking-tight font-display text-slate-900 dark:text-white">
                John Smith
              </span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Home</a>
            <a href="#experience" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#skills" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#education" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Education</a>
            <a href="mailto:john@email.com" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* HERO - Professional Summary */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/4"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-grow">
                <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-2">
                  John Smith
                </h1>
                <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-4">
                  AI Orchestration Architect
                </p>

                {/* Quick info */}
                <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Palo Alto, CA
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    john@email.com
                  </div>
                </div>

                {/* Professional Summary */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Engineer, systems thinker, and builder specializing in designing intelligent systems where AI agents collaborate to solve complex problems. Over nine years of experience building and rebuilding systems with a focus on orchestration layers that coordinate multiple AI models and data sources.
                </p>

                {/* Social links */}
                <div className="flex gap-3">
                  <a href="#" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                    <LinkedInIcon className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                    <GitHubIcon className="w-5 h-5" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Impact & Experience
            </h2>

            <div className="space-y-8">
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">AI Orchestration Platforms</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">Lead Architect</p>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Built multi-agent platforms processing millions of documents, saving thousands of hours of human review time.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Designed intelligent routing layers that reduced AI compute costs by over 50%.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Architected orchestration systems adopted across entire engineering organizations for production-grade AI.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Core Expertise
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">AI & Machine Learning</h3>
                <div className="flex flex-wrap gap-2">
                  {['Multi-Agent Systems', 'LLM Orchestration', 'RAG at Scale', 'Intelligent Routing', 'Prompt Engineering', 'Model Optimization'].map((skill) => (
                    <span key={skill} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Systems Engineering</h3>
                <div className="flex flex-wrap gap-2">
                  {['Distributed Systems', 'System Architecture', 'Cloud Infrastructure', 'API Design', 'Performance Tuning', 'Scalability'].map((skill) => (
                    <span key={skill} className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Education
            </h2>

            <div className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">M.S. in Computer Science</h3>
                    <p className="text-blue-600 dark:text-blue-400">Stanford University</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">B.S. in Computer Engineering</h3>
                    <p className="text-blue-600 dark:text-blue-400">University of Michigan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} John Smith. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
