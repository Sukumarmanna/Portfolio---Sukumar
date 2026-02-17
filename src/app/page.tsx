import Image from 'next/image';
import { Github, Linkedin, Mail, ExternalLink, ShieldCheck, Code, Server, BarChart3 } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const skills = [
  { name: "HTML", color: "text-blue-400" }, { name: "CSS", color: "text-blue-400" }, 
  { name: "JavaScript", color: "text-green-400" }, { name: "Python", color: "text-green-400" }, 
  { name: "React", color: "text-blue-400" }, { name: "Next.js", color: "text-blue-400" }, 
  { name: "Tableau", color: "text-green-400" }, { name: "PowerBI", color: "text-green-400" }
];

const experiences = [
    {
        role: "System & Software Security Intern",
        company: "NIELIT, Gorakhpur",
        duration: "Jan 2026 - Present",
        description: "Focusing on vulnerability assessments, security audits, and infrastructure hardening."
    },
    {
        role: "IT Manager (System Operator)",
        company: "TCS iON, Jamshedpur",
        duration: "Nov 2025 - Present",
        description: "Managing server room operations, ensuring 100% network uptime for 500+ nodes, and administering LAN/WAN connectivity."
    },
    {
        role: "Exam Lab Supervisor",
        company: "TCS iON, Jamshedpur",
        duration: "Aug 2025 - Present",
        description: "Managed high-stakes digital exam infrastructure and proctoring teams."
    },
    {
        role: "Exam Lab Invigilator",
        company: "TCS iON, Jamshedpur",
        duration: "Jun 2025 - Aug 2025",
        description: "Handled real-time technical troubleshooting for candidate terminals."
    }
];

const specializedTraining = [
    {
        title: "Cybersecurity Analyst",
        provider: "Tata Group",
        duration: "Apr 2025",
        details: "Job Simulation focused on cyber threat analysis and security workflows."
    },
    {
        title: "Cyber Security Analyst",
        provider: "TheSmartBridge",
        duration: "Feb 2025 - Mar 2025",
        details: "Specialized in Vulnerability Assessment, Threat Intelligence, and Cyber Defense."
    },
    {
        title: "Data Visualization Intern",
        provider: "Tata Group",
        duration: "Jul 2024 - Aug 2024",
        details: "Mastered PowerBI and Tableau for deriving actionable business insights."
    },
    {
        title: "Cyber Security Foundation",
        provider: "IBM",
        duration: "Sep 2024 - Oct 2024",
        details: "Fundamentals of Phishing, Networking, and Internet Protocol (IP)."
    }
];

const projects = [
    {
        name: "PhishGuard",
        description: "A responsive Next.js dashboard integrated with a Python-based ML model for real-time phishing detection.",
        stack: "Next.js, Tailwind CSS, Python, ML"
    },
    {
        name: "SysAudit",
        description: "A forensic monitoring utility built in Python for secure activity logging and remote telemetry via encrypted APIs.",
        stack: "Python, APIs, Encryption"
    }
];

export default function Home() {
  return (
    <div className="bg-[#020617] font-sans text-slate-200">
      
      {/* HEADER: Left 50% Photo | Right Name */}
      <header id="home" className="relative h-screen w-full flex items-center overflow-hidden bg-[#020617]">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image src="/assets/cyber-bg.jpg" alt="Cyber Background" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-[#020617]/80 to-[#020617]"></div>
        </div>

        {/* Right-Aligned Navigation */}
        <nav className="absolute top-0 w-full z-30 px-10 py-8 flex justify-end items-center max-w-7xl mx-auto left-0 right-0">
          <div className="flex space-x-8 md:space-x-12">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-sm font-bold hover:text-green-400 transition-colors uppercase tracking-widest text-slate-300">
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero Content Grid */}
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-10 md:px-20 gap-10">
          
          {/* LEFT SIDE: 50% Large Profile Circle */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur opacity-25 animate-pulse"></div>
              
              {/* Profile Image Circle */}
              <div className="relative h-72 w-72 md:h-[450px] md:w-[450px] rounded-full border-4 border-green-500 overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.3)] bg-slate-900">
                <Image 
                  src="/assets/profile.jpg" 
                  alt="Sukumar Manna" 
                  width={500} 
                  height={500} 
                  className="object-cover scale-105" 
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Bold Name & Identity */}
          <div className="w-full md:w-1/2 text-center md:text-right">
            <div className="mb-4">
              <span className="text-green-400 font-mono tracking-[0.4em] uppercase text-xs md:text-sm">Verified Security Admin</span>
            </div>
            <h1 className="text-5xl md:text-[7rem] lg:text-[8.5rem] font-black tracking-tighter text-white leading-[0.85] uppercase">
              SUKUMAR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">PORTFOLIO</span>
            </h1>
            <p className="mt-8 text-lg md:text-2xl text-blue-100/60 font-light tracking-wide italic max-w-xl md:ml-auto">
              "Securing the infrastructure, designing the experience."
            </p>
            
            <div className="mt-10 flex justify-center md:justify-end gap-6">
              <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-500/20">Works</a>
              <a href="#contact" className="px-8 py-3 border border-green-500/50 hover:bg-green-500/10 text-green-400 font-bold rounded-full transition-all">Contact</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20">
        
        {/* About Me Section */}
        <section id="about" className="mb-40 scroll-mt-24 text-center">
          <ShieldCheck className="mx-auto text-green-400 mb-8" size={56} />
          <h2 className="text-4xl font-bold mb-10 text-white italic">About Me</h2>
          <div className="max-w-4xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed space-y-6">
            <p>
              I am a <span className="text-blue-400 font-semibold">Computer Science Engineering student</span> and 
              <span className="text-green-400 font-semibold"> Security Researcher</span> dedicated to building secure, 
              high-performance web applications. My expertise bridges the gap between Frontend Development 
              (React, Next.js) and Cybersecurity (VAPT, System Auditing).
            </p>
            <p>
              Currently, as a <span className="text-green-400">Security Intern at NIELIT</span>, I focus on identifying 
              vulnerabilities and hardening system infrastructure. My professional background includes a rapid 
              progression at <span className="text-blue-400">TCS iON</span>, where I evolved from an Invigilator 
              to an <span className="text-blue-400 font-bold">IT Manager</span>, managing complex server room operations 
              and network nodes.
            </p>
            <p>
              Beyond coding and security, I am a <span className="text-green-400 font-semibold">Data Visualization enthusiast</span>, 
              skilled in using <span className="text-blue-300">PowerBI and Tableau</span> to derive actionable business insights.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-40 scroll-mt-24">
          <div className="flex items-center gap-4 mb-16 justify-center">
            <Server className="text-blue-500" />
            <h2 className="text-4xl font-bold text-white tracking-tight">Professional Journey</h2>
          </div>
          <div className="grid gap-8">
            {experiences.map((exp, i) => (
              <div key={i} className="bg-slate-900/30 p-8 rounded-2xl border border-slate-800 hover:border-green-500 transition-all group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-green-400">{exp.role}</h3>
                    <p className="text-blue-400 font-medium mt-1">{exp.company}</p>
                  </div>
                  <span className="text-sm font-mono text-slate-500 bg-slate-800/50 px-4 py-1 rounded-full">{exp.duration}</span>
                </div>
                <p className="mt-6 text-slate-400 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Specialized Training Section */}
        <section id="training" className="mb-40">
          <div className="flex items-center gap-4 mb-16 justify-center">
            <BarChart3 className="text-green-500" />
            <h2 className="text-4xl font-bold text-white tracking-tight">Specialized Training</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedTraining.map((item, i) => (
              <div key={i} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-blue-500 transition-all">
                <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">{item.duration}</span>
                <h3 className="text-lg font-bold text-white mt-2 leading-tight">{item.title}</h3>
                <p className="text-blue-400 text-sm mb-4">{item.provider}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-40 scroll-mt-24">
           <h2 className="text-4xl font-bold mb-16 text-center text-white">Technical <span className="text-green-500">Works</span></h2>
           <div className="grid md:grid-cols-2 gap-10">
              {projects.map((proj, i) => (
                <div key={i} className="p-10 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-blue-500 group transition-all">
                  <Code className="text-blue-500 mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">{proj.name}</h3>
                  <p className="text-slate-400 mb-8 text-lg">{proj.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-green-500 font-bold uppercase tracking-widest">{proj.stack}</span>
                    <ExternalLink size={18} className="text-slate-600 group-hover:text-white" />
                  </div>
                </div>
              ))}
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-20 text-center">
        <div className="flex justify-center gap-10 mb-12">
          <a href="#" className="p-4 bg-slate-900 rounded-full text-blue-400 hover:text-white hover:bg-blue-600 transition-all"><Github /></a>
          <a href="https://linkedin.com/in/sukumamanna6" className="p-4 bg-slate-900 rounded-full text-green-400 hover:text-white hover:bg-green-600 transition-all"><Linkedin /></a>
          <a href="mailto:226301213@gkv.ac.in" className="p-4 bg-slate-900 rounded-full text-blue-400 hover:text-white hover:bg-blue-600 transition-all"><Mail /></a>
        </div>
        <p className="text-slate-600 text-xs font-mono uppercase tracking-widest italic tracking-[0.2em]">Encrypted & Secure // 2026 Sukumar Manna</p>
      </footer>
    </div>
  );
}