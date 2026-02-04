// ============================================================
// ENTERPRISE INITIATIVE TEMPLATE
// ============================================================
// Optimized for internal communications, change management,
// and strategic initiative alignment
// Focus: Vision, benefits, roadmap, adoption, FAQ
// See docs/PRD-TEMPLATES.md for full requirements
// ============================================================

export default function EnterpriseTemplate() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      {/* ============================================================ */}
      {/* NAVIGATION                                                    */}
      {/* ============================================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
              CO
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight font-display text-slate-900 dark:text-white block leading-tight">
                [Initiative Name]
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Company Name</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#vision" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors">Vision</a>
            <a href="#benefits" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors">Benefits</a>
            <a href="#roadmap" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors">Roadmap</a>
            <a href="#faq" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors">FAQ</a>
            <a href="#get-involved" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Get Involved
            </a>
          </div>
        </div>
      </nav>

      {/* ============================================================ */}
      {/* HERO - Initiative Overview                                    */}
      {/* ============================================================ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-emerald-100/50 dark:bg-emerald-900/10 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-teal-100/50 dark:bg-teal-900/10 rounded-full blur-3xl opacity-70 -translate-x-1/3 translate-y-1/4"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Phase 2 Active • On Track
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-6">
              [Initiative Name]
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 font-medium">
              [Compelling tagline that captures the vision]
            </p>

            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              [One sentence explaining what this initiative is and why it matters to the organization]
            </p>

            {/* Executive Sponsor */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-500">Executive Sponsor</p>
                <p className="font-semibold text-slate-900 dark:text-white">[Name], [Title]</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#vision" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              <a href="#get-involved" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-all">
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* KEY METRICS DASHBOARD                                         */}
      {/* ============================================================ */}
      <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">[X]%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Adoption Rate</div>
                <div className="text-xs text-slate-500 mt-1">Target: [Y]%</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">[X]</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Teams Onboarded</div>
                <div className="text-xs text-slate-500 mt-1">of [Y] total</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">$[X]M</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Projected Savings</div>
                <div className="text-xs text-slate-500 mt-1">Year 1</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">[X]%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Employee Satisfaction</div>
                <div className="text-xs text-slate-500 mt-1">+[Y] vs baseline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* VISION & BUSINESS CONTEXT                                     */}
      {/* ============================================================ */}
      <section id="vision" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Why This Matters
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Understanding the context and vision behind this initiative
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* The Challenge */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">The Challenge</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  [Describe the current pain points, inefficiencies, or competitive pressures
                  that necessitate this change. Use data where possible.]
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    [Pain point 1 with impact metric]
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    [Pain point 2 with impact metric]
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    [Pain point 3 with impact metric]
                  </li>
                </ul>
              </div>

              {/* Our Vision */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  [Paint a picture of what success looks like. How will work be different?
                  What will employees experience? What outcomes will we achieve?]
                </p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    [Vision element 1 - specific improvement]
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    [Vision element 2 - specific improvement]
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    [Vision element 3 - specific improvement]
                  </li>
                </ul>
              </div>
            </div>

            {/* Strategic Alignment */}
            <div className="mt-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Strategic Alignment</h3>
              <p className="text-emerald-50 mb-4">
                This initiative directly supports our company&apos;s strategic priorities:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {['[Company OKR 1]', '[Company OKR 2]', '[Company OKR 3]'].map((okr, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-4">
                    <div className="text-sm text-emerald-100 mb-1">Strategic Priority {i + 1}</div>
                    <div className="font-semibold">{okr}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* BENEFITS BY STAKEHOLDER                                       */}
      {/* ============================================================ */}
      <section id="benefits" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                What&apos;s In It For You
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                How this initiative benefits everyone
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* For Employees */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
                <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">For Employees</h3>
                <ul className="space-y-3">
                  {[
                    '[Benefit 1 - daily work improvement]',
                    '[Benefit 2 - skill development]',
                    '[Benefit 3 - reduced friction]',
                    '[Benefit 4 - career opportunity]'
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* For Customers */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
                <div className="w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">For Customers</h3>
                <ul className="space-y-3">
                  {[
                    '[Benefit 1 - faster service]',
                    '[Benefit 2 - better experience]',
                    '[Benefit 3 - new capabilities]',
                    '[Benefit 4 - improved quality]'
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* For Business */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
                <div className="w-14 h-14 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">For the Business</h3>
                <ul className="space-y-3">
                  {[
                    '[Benefit 1 - cost reduction]',
                    '[Benefit 2 - revenue opportunity]',
                    '[Benefit 3 - competitive advantage]',
                    '[Benefit 4 - risk mitigation]'
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ROADMAP                                                       */}
      {/* ============================================================ */}
      <section id="roadmap" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Implementation Roadmap
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Our phased approach to achieving the vision
              </p>
            </div>

            <div className="space-y-6">
              {/* Phase 1 - Completed */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-emerald-500 dark:border-emerald-600">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">PHASE 1</span>
                        <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs px-2 py-0.5 rounded-full">Completed</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">[Phase Name] • Q1 2024</h3>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pl-16">
                  <p className="text-slate-600 dark:text-slate-400 mb-3">[What was accomplished in this phase]</p>
                  <div className="flex flex-wrap gap-2">
                    {['[Deliverable 1]', '[Deliverable 2]', '[Deliverable 3]'].map((d, i) => (
                      <span key={i} className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 text-sm px-3 py-1 rounded-lg">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phase 2 - Active */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border-2 border-blue-500 dark:border-blue-600 shadow-lg shadow-blue-500/10">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white relative">
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping"></span>
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">PHASE 2</span>
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-0.5 rounded-full">Active</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">[Phase Name] • Q2-Q3 2024</h3>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pl-16">
                  <p className="text-slate-600 dark:text-slate-400 mb-3">[What is being accomplished in this phase]</p>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600 dark:text-slate-400">Progress</span>
                      <span className="text-blue-600 dark:text-blue-400">65%</span>
                    </div>
                    <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['[Deliverable 1]', '[Deliverable 2]', '[Deliverable 3]'].map((d, i) => (
                      <span key={i} className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm px-3 py-1 rounded-lg">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phase 3 - Upcoming */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 opacity-80">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-500">PHASE 3</span>
                        <span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs px-2 py-0.5 rounded-full">Upcoming</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">[Phase Name] • Q4 2024</h3>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pl-16">
                  <p className="text-slate-600 dark:text-slate-400 mb-3">[What will be accomplished in this phase]</p>
                  <div className="flex flex-wrap gap-2">
                    {['[Planned Deliverable 1]', '[Planned Deliverable 2]'].map((d, i) => (
                      <span key={i} className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-sm px-3 py-1 rounded-lg">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phase 4 - Future */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 opacity-60">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500">
                      <span className="font-bold">4</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-500">PHASE 4</span>
                        <span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs px-2 py-0.5 rounded-full">Future</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">[Phase Name] • 2025</h3>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pl-16">
                  <p className="text-slate-500 dark:text-slate-500">[Brief description of future phase goals]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ                                                           */}
      {/* ============================================================ */}
      <section id="faq" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Answers to common concerns
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How will this affect my daily work?",
                  a: "[Honest answer about changes to daily routines. Be specific about what will change and what won't. Address training and support available.]"
                },
                {
                  q: "What training will be provided?",
                  a: "[Details about training programs, resources, and timeline. Include self-paced options and live sessions.]"
                },
                {
                  q: "What's the timeline for my team?",
                  a: "[Explain how rollout will happen across teams. When will specific departments be affected?]"
                },
                {
                  q: "Will this impact job roles or headcount?",
                  a: "[Be transparent about impact on roles. If automation is involved, explain how roles will evolve vs. be eliminated. Focus on reskilling opportunities.]"
                },
                {
                  q: "Who do I contact with questions or concerns?",
                  a: "[Provide clear escalation path - team leads, project champions, HR contacts, feedback channels.]"
                },
                {
                  q: "What if I have feedback or see issues?",
                  a: "[Explain feedback mechanisms - surveys, office hours, suggestion box, Slack channels, etc.]"
                }
              ].map((faq, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-4">Still have questions?</p>
              <a href="mailto:initiative-team@company.com" className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline">
                Contact the Initiative Team →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* GET INVOLVED                                                  */}
      {/* ============================================================ */}
      <section id="get-involved" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Get Involved
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Shape this initiative - we want your input
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Champion */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 text-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Become a Champion</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  Be a local advocate and help your team succeed with the transition
                </p>
                <div className="text-xs text-slate-500 mb-4">~2 hours/week commitment</div>
                <a href="#" className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 dark:hover:bg-amber-900/50 rounded-lg transition-colors">
                  Sign Up →
                </a>
              </div>

              {/* Pilot */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Join the Pilot</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  Be among the first to try new capabilities and provide feedback
                </p>
                <div className="text-xs text-slate-500 mb-4">Varies by pilot program</div>
                <a href="#" className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 rounded-lg transition-colors">
                  Learn More →
                </a>
              </div>

              {/* Feedback */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Share Feedback</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  Tell us what&apos;s working, what&apos;s not, and what you need
                </p>
                <div className="text-xs text-slate-500 mb-4">Anonymous options available</div>
                <a href="#" className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/30 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 rounded-lg transition-colors">
                  Submit Feedback →
                </a>
              </div>
            </div>

            {/* Communication Channels */}
            <div className="mt-12 bg-white dark:bg-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">Stay Connected</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-slate-900 dark:text-white font-medium mb-1">Slack Channel</div>
                  <a href="#" className="text-emerald-600 dark:text-emerald-400 text-sm hover:underline">#initiative-name</a>
                </div>
                <div>
                  <div className="text-slate-900 dark:text-white font-medium mb-1">Office Hours</div>
                  <span className="text-slate-500 text-sm">Thursdays 2-3pm</span>
                </div>
                <div>
                  <div className="text-slate-900 dark:text-white font-medium mb-1">Town Halls</div>
                  <span className="text-slate-500 text-sm">Monthly, first Friday</span>
                </div>
                <div>
                  <div className="text-slate-900 dark:text-white font-medium mb-1">Newsletter</div>
                  <a href="#" className="text-emerald-600 dark:text-emerald-400 text-sm hover:underline">Subscribe →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LEADERSHIP TEAM                                               */}
      {/* ============================================================ */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Leadership Team
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: '[Name]', role: 'Executive Sponsor', title: '[Title]' },
                { name: '[Name]', role: 'Program Lead', title: '[Title]' },
                { name: '[Name]', role: 'Change Management', title: '[Title]' },
                { name: '[Name]', role: 'Technical Lead', title: '[Title]' },
              ].map((person, i) => (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-700 mx-auto mb-4 flex items-center justify-center text-slate-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">{person.role}</div>
                  <div className="font-semibold text-slate-900 dark:text-white">{person.name}</div>
                  <div className="text-sm text-slate-500">{person.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-600 dark:text-slate-400">
              [Company Name] • [Initiative Name] • Last updated: {new Date().toLocaleDateString()}
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors">Resources</a>
              <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors">Contact</a>
              <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors">Intranet</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
