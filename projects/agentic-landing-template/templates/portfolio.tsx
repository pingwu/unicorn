// ============================================================
// PORTFOLIO TEMPLATE
// ============================================================
// Optimized for designers, developers, and creative professionals
// Focus: Work showcase, visual appeal, skill demonstration
// See docs/PRD-TEMPLATES.md for full requirements
// ============================================================

export default function PortfolioTemplate() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      {/* ============================================================ */}
      {/* NAVIGATION                                                    */}
      {/* ============================================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm">
              JD
            </div>
            <span className="text-xl font-bold tracking-tight font-display text-slate-900 dark:text-white">
              Jane Doe
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 transition-colors">Work</a>
            <a href="#skills" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 transition-colors">Skills</a>
            <a href="#about" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 transition-colors">About</a>
            <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* ============================================================ */}
      {/* HERO - Creative Focus with Featured Work Preview              */}
      {/* ============================================================ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-purple-100/50 dark:bg-purple-900/10 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-pink-100/50 dark:bg-pink-900/10 rounded-full blur-3xl opacity-70 -translate-x-1/3 translate-y-1/4"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Open for Freelance Work
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-6">
              I Design & Build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Digital Experiences
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 font-medium">
              [Your Specialty] Designer & Developer
            </p>

            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              I create [type of work] that [key benefit]. Currently at [Company] or Freelancing.
              Previously worked with [Notable Client/Company].
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#work" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-xl transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
                View My Work
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-all">
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FEATURED WORK - Visual Portfolio Grid                         */}
      {/* ============================================================ */}
      <section id="work" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Selected Work
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                A curated collection of projects I&apos;m proud of
              </p>
            </div>

            {/* Project Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 - Large Feature */}
              <div className="md:col-span-2 group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 aspect-[21/9]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 text-8xl font-bold">Featured Project</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">[Project Name]</h3>
                      <p className="text-white/80">[Brief description]</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded">UI/UX</span>
                    <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-2 py-0.5 rounded">Web App</span>
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded">2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">[Project Name]</h3>
                  <p className="text-slate-600 dark:text-slate-400">[Role] • [Brief outcome or impact]</p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 aspect-[4/3]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 text-6xl font-bold">02</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-1">[Project Name]</h3>
                      <p className="text-white/80 text-sm">[Brief description]</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">Mobile</span>
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded">2024</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">[Project Name]</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">[Role] • [Brief outcome]</p>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 aspect-[4/3]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 text-6xl font-bold">03</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-1">[Project Name]</h3>
                      <p className="text-white/80 text-sm">[Brief description]</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded">Branding</span>
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded">2023</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">[Project Name]</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">[Role] • [Brief outcome]</p>
                </div>
              </div>

              {/* Project 4 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 aspect-[4/3]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 text-6xl font-bold">04</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-1">[Project Name]</h3>
                      <p className="text-white/80 text-sm">[Brief description]</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-0.5 rounded">Dashboard</span>
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded">2023</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">[Project Name]</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">[Role] • [Brief outcome]</p>
                </div>
              </div>

              {/* Project 5 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 aspect-[4/3]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 text-6xl font-bold">05</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-1">[Project Name]</h3>
                      <p className="text-white/80 text-sm">[Brief description]</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded">E-commerce</span>
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded">2023</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">[Project Name]</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">[Role] • [Brief outcome]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PROJECT DETAIL SECTION (Example of how to show a project)     */}
      {/* ============================================================ */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Project Deep Dive
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Featured case study
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h4 className="text-sm font-medium text-slate-500 mb-2">CLIENT</h4>
                  <p className="font-semibold text-slate-900 dark:text-white">[Client Name]</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-500 mb-2">ROLE</h4>
                  <p className="font-semibold text-slate-900 dark:text-white">[Your Role]</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-500 mb-2">YEAR</h4>
                  <p className="font-semibold text-slate-900 dark:text-white">[Year]</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">The Challenge</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    [Describe the problem or challenge the client was facing. What was the context?
                    What were they trying to achieve? What constraints existed?]
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">The Approach</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    [Describe your process and methodology. What steps did you take? What research
                    did you conduct? How did you iterate? What tools did you use?]
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">The Solution</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    [Describe the final deliverable. What did you create? How does it work?
                    What makes it effective?]
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">+150%</div>
                    <div className="text-sm text-slate-500">User Engagement</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">-40%</div>
                    <div className="text-sm text-slate-500">Bounce Rate</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">2x</div>
                    <div className="text-sm text-slate-500">Conversion</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">4.9</div>
                    <div className="text-sm text-slate-500">App Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SKILLS - Technical Capabilities                               */}
      {/* ============================================================ */}
      <section id="skills" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Skills & Tools
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                The technologies and tools I work with
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Design Skills */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Design</h3>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'After Effects'].map((skill) => (
                    <span key={skill} className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-sm border border-slate-200 dark:border-slate-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Development Skills */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL'].map((skill) => (
                    <span key={skill} className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-sm border border-slate-200 dark:border-slate-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Other Skills */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Other</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Framer Motion', 'Webflow', 'Notion', 'Linear', 'Vercel'].map((skill) => (
                    <span key={skill} className="bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-sm border border-slate-200 dark:border-slate-600">
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
      {/* ABOUT - Personal Story                                        */}
      {/* ============================================================ */}
      <section id="about" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl flex items-center justify-center">
                  <span className="text-slate-400 dark:text-slate-600">Your Photo</span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-6">
                  About Me
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                  [Your personal story - how you got into design/development, what drives you]
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  [Your design philosophy or approach to work. What makes you different?]
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  When I&apos;m not [working], you&apos;ll find me [hobbies/interests]. I believe [personal value or belief].
                </p>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Based in [City, Country]
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Open to Remote Work
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* EXPERIENCE (Optional - for those seeking employment)          */}
      {/* ============================================================ */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Experience
              </h2>
            </div>

            <div className="space-y-8">
              {[
                { role: '[Current Role]', company: '[Company]', period: '2022 - Present', description: '[Brief description of responsibilities and impact]' },
                { role: '[Previous Role]', company: '[Company]', period: '2020 - 2022', description: '[Brief description of responsibilities and impact]' },
                { role: '[Earlier Role]', company: '[Company]', period: '2018 - 2020', description: '[Brief description of responsibilities and impact]' },
              ].map((job, i) => (
                <div key={i} className="flex gap-6 pb-8 border-b border-slate-200 dark:border-slate-800 last:border-0">
                  <div className="hidden md:block w-32 flex-shrink-0 text-sm text-slate-500">{job.period}</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{job.role}</h3>
                    <p className="text-purple-600 dark:text-purple-400 mb-2">{job.company}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{job.description}</p>
                    <p className="md:hidden text-sm text-slate-500 mt-2">{job.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CONTACT                                                       */}
      {/* ============================================================ */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Let&apos;s Create Something Amazing
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Have a project in mind? I&apos;d love to hear about it.
            </p>
            <a
              href="mailto:your@email.com"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-purple-600 bg-white hover:bg-purple-50 rounded-xl transition-all shadow-lg"
            >
              your@email.com
            </a>

            <div className="flex justify-center gap-4 mt-8">
              <a href="https://dribbble.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
                </svg>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
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
              Designed & Built by [Your Name] © {new Date().getFullYear()}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Made with Next.js & Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
