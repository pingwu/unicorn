// ============================================================
// DIGITAL RESUME TEMPLATE
// ============================================================
// Optimized for job seekers and career professionals
// Focus: ATS-friendly, achievements, professional history
// See docs/PRD-TEMPLATES.md for full requirements
// ============================================================

export default function ResumeTemplate() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      {/* ============================================================ */}
      {/* NAVIGATION                                                    */}
      {/* ============================================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-xl font-bold tracking-tight font-display text-slate-900 dark:text-white">
              John Smith
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#experience" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#skills" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#education" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Education</a>
            <a href="#projects" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Projects</a>
            <a href="/resume.pdf" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </nav>

      {/* ============================================================ */}
      {/* HERO - Professional Summary                                   */}
      {/* ============================================================ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/4"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Photo (optional) */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center">
                  <span className="text-slate-400 dark:text-slate-600 text-sm">Photo</span>
                </div>
              </div>

              <div className="flex-grow">
                <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-2">
                  John Smith
                </h1>
                <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-4">
                  Senior Software Engineer
                </p>

                {/* Quick info */}
                <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    San Francisco, CA
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    john@email.com
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Open to Remote
                  </div>
                </div>

                {/* Professional Summary */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  [Your Title] with [X] years of experience in [domain/industry].
                  Specialized in [key skills/technologies]. Known for [key achievement or value proposition].
                  Seeking [target role] opportunities where I can [what you want to contribute].
                </p>

                {/* Social/Professional links */}
                <div className="flex gap-3 mt-6">
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* EXPERIENCE - Work History                                     */}
      {/* ============================================================ */}
      <section id="experience" className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Work Experience
            </h2>

            <div className="space-y-8">
              {/* Job 1 - Current */}
              <div className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">[Job Title]</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">[Company Name]</p>
                  </div>
                  <div className="text-sm text-slate-500 whitespace-nowrap">
                    Jan 2022 - Present • [City, State]
                  </div>
                </div>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span><strong>Led</strong> [initiative] resulting in [quantified outcome, e.g., 40% increase in efficiency]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span><strong>Architected</strong> [system/feature] that [impact, e.g., reduced costs by $500K annually]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span><strong>Mentored</strong> [number] junior engineers, improving team velocity by [percentage]</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['React', 'TypeScript', 'AWS', 'Node.js'].map((tech) => (
                    <span key={tech} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Job 2 */}
              <div className="relative pl-8 pb-8 border-l-2 border-slate-200 dark:border-slate-700">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">[Previous Job Title]</h3>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">[Company Name]</p>
                  </div>
                  <div className="text-sm text-slate-500 whitespace-nowrap">
                    Jun 2019 - Dec 2021 • [City, State]
                  </div>
                </div>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span><strong>Built</strong> [product/feature] serving [number] users with [performance metric]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span><strong>Improved</strong> [metric] by [percentage] through [method/approach]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span><strong>Collaborated</strong> with [teams/stakeholders] to [achieve outcome]</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['Python', 'Django', 'PostgreSQL', 'Docker'].map((tech) => (
                    <span key={tech} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Job 3 */}
              <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">[Earlier Job Title]</h3>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">[Company Name]</p>
                  </div>
                  <div className="text-sm text-slate-500 whitespace-nowrap">
                    Aug 2017 - May 2019 • [City, State]
                  </div>
                </div>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span><strong>Developed</strong> [feature/product] that [impact]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span><strong>Contributed</strong> to [project] resulting in [outcome]</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['JavaScript', 'Java', 'MySQL'].map((tech) => (
                    <span key={tech} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SKILLS - Technical Skills Matrix                              */}
      {/* ============================================================ */}
      <section id="skills" className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Skills & Expertise
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Languages */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Languages</h3>
                <div className="space-y-3">
                  {[
                    { name: 'TypeScript/JavaScript', level: 95 },
                    { name: 'Python', level: 85 },
                    { name: 'Go', level: 70 },
                    { name: 'SQL', level: 80 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                        <span className="text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Node.js', 'Express', 'Django', 'FastAPI', 'TailwindCSS', 'GraphQL'].map((skill) => (
                    <span key={skill} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'GitHub Actions'].map((skill) => (
                    <span key={skill} className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1.5 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Databases & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Git', 'Jira', 'Figma'].map((skill) => (
                    <span key={skill} className="bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1.5 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* EDUCATION                                                     */}
      {/* ============================================================ */}
      <section id="education" className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Education
            </h2>

            <div className="space-y-6">
              {/* Degree 1 */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">[Degree Name], [Major]</h3>
                    <p className="text-blue-600 dark:text-blue-400">[University Name]</p>
                  </div>
                  <div className="text-sm text-slate-500">2013 - 2017</div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  GPA: 3.8/4.0 • Dean&apos;s List • [Relevant coursework or honors]
                </p>
              </div>

              {/* Certifications */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Certifications</h3>
                <div className="space-y-3">
                  {[
                    { name: 'AWS Solutions Architect - Professional', issuer: 'Amazon Web Services', year: '2023' },
                    { name: 'Google Cloud Professional Developer', issuer: 'Google', year: '2022' },
                    { name: '[Other Certification]', issuer: '[Issuer]', year: '2021' },
                  ].map((cert, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <div>
                        <span className="text-slate-700 dark:text-slate-300">{cert.name}</span>
                        <span className="text-slate-500 ml-2">• {cert.issuer}</span>
                      </div>
                      <span className="text-slate-500">{cert.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PROJECTS (Optional)                                           */}
      {/* ============================================================ */}
      <section id="projects" className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Notable Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Project 1 */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">[Project Name]</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  [Brief description of what the project does and the problem it solves]
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'Node.js', 'MongoDB'].map((tech) => (
                    <span key={tech} className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">[Project Name]</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  [Brief description of what the project does and the problem it solves]
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'FastAPI', 'PostgreSQL'].map((tech) => (
                    <span key={tech} className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CONTACT                                                       */}
      {/* ============================================================ */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-blue-100 mb-8">
              Open to new opportunities and interesting conversations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:your@email.com"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-600 bg-white hover:bg-blue-50 rounded-xl transition-all"
              >
                your@email.com
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-all"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-600 dark:text-slate-400">
              © {new Date().getFullYear()} [Your Name]. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
