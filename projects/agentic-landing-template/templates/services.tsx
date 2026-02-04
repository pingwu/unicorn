// ============================================================
// CONSULTING SERVICES TEMPLATE
// ============================================================
// Optimized for consultants, freelancers, and service providers
// Focus: Lead generation, credibility, service tiers, conversion
// See docs/PRD-TEMPLATES.md for full requirements
// ============================================================

export default function ServicesTemplate() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      {/* ============================================================ */}
      {/* NAVIGATION                                                    */}
      {/* ============================================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-sm">
              SC
            </div>
            <span className="text-xl font-bold tracking-tight font-display text-slate-900 dark:text-white">
              Sarah Chen
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Services</a>
            <a href="#results" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">Results</a>
            <a href="#about" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">About</a>
            <a href="#faq" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">FAQ</a>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Book Strategy Call
            </a>
          </div>
        </div>
      </nav>

      {/* ============================================================ */}
      {/* HERO - Consultant Focus                                       */}
      {/* Key: Clear value proposition, credibility indicators          */}
      {/* ============================================================ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-indigo-100/50 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-70 -translate-x-1/3 translate-y-1/4"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Credibility badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              15+ Years Helping [Industry] Leaders
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-6">
              Transform Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                [Key Problem]
              </span>
              {' '}Into Results
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 font-medium">
              [Specialty] Consultant for [Target Audience]
            </p>

            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              I help [target clients] achieve [specific outcome] through [your methodology].
              Average client sees [key metric] within [timeframe].
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                50+ Client Engagements
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                $10M+ Revenue Generated
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                98% Client Satisfaction
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
                Book Your Strategy Call
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#results" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-all">
                See Client Results
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CLIENT LOGOS - Social Proof                                   */}
      {/* ============================================================ */}
      <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm text-slate-500 mb-8">Trusted by leaders at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {/* Replace with actual client logos */}
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company) => (
              <div key={company} className="text-xl font-bold text-slate-400 dark:text-slate-600">{company}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SERVICES - Three Tiers (DIY/DWY/DFY)                         */}
      {/* ============================================================ */}
      <section id="services" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                How We Can Work Together
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Choose the engagement level that matches your needs and budget
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Tier 1: DIY / Self-Paced */}
              <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all hover:shadow-xl">
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">SELF-PACED</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">[Course/Guide Name]</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Learn my proven framework at your own pace with comprehensive materials.
                </p>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  $497
                  <span className="text-base font-normal text-slate-500"> one-time</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {['Complete video curriculum', 'Templates & frameworks', 'Private community access', 'Email support'].map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="block w-full text-center py-3 px-6 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-xl font-medium transition-colors">
                  Get Started
                </a>
              </div>

              {/* Tier 2: DWY / Coaching (Featured) */}
              <div className="relative group bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-blue-500 shadow-xl shadow-blue-500/10">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">COACHING</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">[Program Name]</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Work alongside me with personalized guidance and accountability.
                </p>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  $2,500
                  <span className="text-base font-normal text-slate-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {['Everything in Self-Paced', 'Weekly 1:1 coaching calls', 'Slack/Voxer access', 'Custom action plans', 'Priority review & feedback'].map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="block w-full text-center py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors">
                  Apply Now
                </a>
              </div>

              {/* Tier 3: DFY / Done-For-You */}
              <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all hover:shadow-xl">
                <div className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-2">DONE-FOR-YOU</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">[Retainer/Project Name]</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Full-service engagement where I handle everything for you.
                </p>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Custom
                  <span className="text-base font-normal text-slate-500"> pricing</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {['Full strategic planning', 'Implementation support', 'Dedicated attention', 'Ongoing optimization', 'Executive-level partnership'].map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="block w-full text-center py-3 px-6 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-xl font-medium transition-colors">
                  Discuss Your Needs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CASE STUDIES - Proof of Results                               */}
      {/* ============================================================ */}
      <section id="results" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Client Success Stories
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Real results from real clients
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Case Study 1 */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">[Industry] • [Company Size]</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">&ldquo;[Client Quote About Transformation]&rdquo;</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Challenge</div>
                    <p className="text-slate-600 dark:text-slate-400">[What problem they faced]</p>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Solution</div>
                    <p className="text-slate-600 dark:text-slate-400">[What you did together]</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 p-4 bg-white dark:bg-slate-700 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">+150%</div>
                    <div className="text-sm text-slate-500">[Metric 1]</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">$500K</div>
                    <div className="text-sm text-slate-500">[Metric 2]</div>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">[Client Name]</div>
                    <div className="text-sm text-slate-500">[Title], [Company]</div>
                  </div>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
                <div className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-4">[Industry] • [Company Size]</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">&ldquo;[Client Quote About Results]&rdquo;</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Challenge</div>
                    <p className="text-slate-600 dark:text-slate-400">[What problem they faced]</p>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Solution</div>
                    <p className="text-slate-600 dark:text-slate-400">[What you did together]</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 p-4 bg-white dark:bg-slate-700 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">3x</div>
                    <div className="text-sm text-slate-500">[Metric 1]</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">60 days</div>
                    <div className="text-sm text-slate-500">[Metric 2]</div>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">[Client Name]</div>
                    <div className="text-sm text-slate-500">[Title], [Company]</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TESTIMONIALS - Social Proof                                   */}
      {/* ============================================================ */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                What Clients Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    &ldquo;[Specific testimonial about results and experience working together]&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-600"></div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white text-sm">[Name]</div>
                      <div className="text-xs text-slate-500">[Title], [Company]</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ABOUT - Authority & Credibility                               */}
      {/* ============================================================ */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-6">
                  Hi, I&apos;m [Your Name]
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                  [Your origin story - how you got here and why you do this work]
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  [Your unique methodology or approach - what makes you different]
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-slate-700 dark:text-slate-300">[Credential 1 - education or certification]</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-slate-700 dark:text-slate-300">[Credential 2 - notable experience]</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-slate-700 dark:text-slate-300">[Credential 3 - awards or recognition]</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl flex items-center justify-center">
                  <span className="text-slate-400 dark:text-slate-600">Your Photo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ - Address Objections                                      */}
      {/* ============================================================ */}
      <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Common Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What makes you different from other [consultants/coaches]?",
                  a: "[Your unique value proposition - specific methodology, experience, or results]"
                },
                {
                  q: "How long does it typically take to see results?",
                  a: "[Honest timeline with context - what factors affect timeline]"
                },
                {
                  q: "What kind of commitment is required?",
                  a: "[Time investment expected from client - meetings, homework, etc.]"
                },
                {
                  q: "Do you work with [specific niche]?",
                  a: "[Your ideal client profile and any specializations]"
                },
                {
                  q: "What if it doesn't work for me?",
                  a: "[Your guarantee or how you ensure fit before working together]"
                },
                {
                  q: "Do you offer payment plans?",
                  a: "[Your payment options and flexibility]"
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA - Final Conversion                                        */}
      {/* ============================================================ */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Ready to [Achieve Desired Outcome]?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let&apos;s discuss your goals and see if we&apos;re a good fit.
            </p>
            <a
              href="https://calendly.com/yourusername"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white hover:bg-blue-50 rounded-xl transition-all shadow-lg"
            >
              Book Your Free Strategy Call
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-blue-200 text-sm mt-4">No obligation. No pressure. Just a conversation.</p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CONTACT                                                       */}
      {/* ============================================================ */}
      <section id="contact" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Have questions? Reach out directly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://calendly.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-500/25"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Call
              </a>
              <a
                href="mailto:your@email.com"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                your@email.com
              </a>
            </div>

            <div className="flex justify-center gap-4">
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
              © {new Date().getFullYear()} [Your Name]. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
