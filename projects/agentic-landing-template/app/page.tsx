// ============================================================
// AGENTIC LANDING PAGE TEMPLATE
// ============================================================
// Customize this file using natural language prompts with
// Gemini CLI or Claude Code. See README.md for prompt library.
// ============================================================

import { MobileNav } from "@/components/MobileNav";
import {
  CheckIcon,
  ArrowRightIcon,
  TrendingUpIcon,
  CalendarIcon,
  MailIcon,
  BeakerIcon,
  BriefcaseIcon,
  SparklesIcon,
  BookOpenIcon,
  UsersIcon,
  BoltIcon,
  LinkedInIcon,
  GitHubIcon,
  XTwitterIcon,
} from "@/components/Icons";

export default function Home() {
  return (
    <>
      {/* Skip link for accessibility - allows keyboard users to skip navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      {/* ============================================================ */}
      {/* NAVIGATION - Fixed header with logo and nav links            */}
      {/* Prompt: "Update the logo text to [Your Name]"               */}
      {/* ============================================================ */}
      <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-sm">
              RA
            </div>
            <span className="text-xl font-bold tracking-tight font-display text-slate-900 dark:text-white">
              Rod Alvero
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="/resume" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Resume
            </a>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </nav>

      {/* ============================================================ */}
      {/* HERO SECTION - Main headline and call to action              */}
      {/* ============================================================ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/modern-home-bg.jpg')" }}>
        {/* Overlay for dark mode effect and glassmorphism base */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        {/* Soft glow effects */}
        <div className="absolute -top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-1/4 right-1/4 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white mb-6 drop-shadow-lg">
              Find Your Dream House with Me
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#listings" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transform hover:scale-105 duration-300 ease-in-out">
                Browse Listing
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal-400 hover:bg-teal-500 rounded-xl transition-all shadow-lg shadow-teal-400/25 hover:shadow-teal-400/40 transform hover:scale-105 duration-300 ease-in-out">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FEATURED PROPERTIES SECTION                                  */}
      {/* ============================================================ */}
      <section id="listings" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-12 text-center">
              Featured Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Property Card 1 */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 group relative overflow-hidden backdrop-blur-sm">
                <img src="/images/properties/property-1.jpg" alt="Property Image 1" className="w-full h-48 object-cover rounded-t-2xl"/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Modern Loft</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    <span className="font-bold text-lg text-indigo-500">$750,000</span> &bull; New York, NY
                  </p>
                  <a href="#" className="inline-flex items-center text-indigo-500 hover:text-indigo-600 font-medium">
                    View Details
                    <ArrowRightIcon className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"/>
                  </a>
                </div>
              </div>

              {/* Property Card 2 */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 group relative overflow-hidden backdrop-blur-sm">
                <img src="/images/properties/property-2.jpg" alt="Property Image 2" className="w-full h-48 object-cover rounded-t-2xl"/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Spacious Family Home</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    <span className="font-bold text-lg text-indigo-500">$1,200,000</span> &bull; Los Angeles, CA
                  </p>
                  <a href="#" className="inline-flex items-center text-indigo-500 hover:text-indigo-600 font-medium">
                    View Details
                    <ArrowRightIcon className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"/>
                  </a>
                </div>
              </div>

              {/* Property Card 3 */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 group relative overflow-hidden backdrop-blur-sm">
                <img src="/images/properties/property-3.jpg" alt="Property Image 3" className="w-full h-48 object-cover rounded-t-2xl"/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Luxury Condo</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    <span className="font-bold text-lg text-indigo-500">$950,000</span> &bull; Miami, FL
                  </p>
                  <a href="#" className="inline-flex items-center text-indigo-500 hover:text-indigo-600 font-medium">
                    View Details
                    <ArrowRightIcon className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ABOUT THE AGENT SECTION                                      */}
      {/* ============================================================ */}
      <section id="about-agent" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img src="/images/agent-headshot.jpg" alt="Agent Headshot" className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-indigo-500"/>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                About Rod Alvero
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                I'm an engineer, systems thinker, and builder at heart. I design and build AI orchestration systems—the invisible layer that coordinates multiple AI agents, language models, and data sources into something that actually works in the real world. My goal is simple: make AI systems that serve people well, and help others learn to build them too.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                With a background in computer engineering and distributed systems, I bring a unique blend of technical expertise and a user-centric approach to real estate. I'm passionate about leveraging technology to simplify the home-buying process and connect clients with their ideal properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CALL-TO-ACTION BANNER                                        */}
      {/* ============================================================ */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 to-teal-400 text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact Rod Alvero today for a personalized consultation and take the first step towards your new property.
          </p>
          <a href="tel:+1-800-555-0199" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-indigo-800 bg-white hover:bg-gray-100 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 ease-in-out">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            +1 (800) 555-0199
          </a>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CONTACT INFORMATION                                          */}
      {/* ============================================================ */}
      <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Reach out to discuss your real estate needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="flex items-center gap-3 text-lg text-slate-700 dark:text-slate-300">
                <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                +1 (800) 555-0199
              </div>
              <div className="flex items-center gap-3 text-lg text-slate-700 dark:text-slate-300">
                <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                rodra@email.com
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ============================================================ */}
      {/* FOOTER - Minimal Luxury Footer                               */}
      {/* ============================================================ */}
      <footer className="py-8 bg-black dark:bg-black border-t border-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Rod Alvero. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
    </>
  );
}
