"use client";

import Image from 'next/image';
import { Github, Linkedin, Mail, ExternalLink, ShieldCheck, Code, Server, BarChart3, Send, MapPin } from 'lucide-react';
import { useState } from 'react';

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
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // YAHAN APNI WEB3FORMS ACCESS KEY PASTE KAREIN
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <div className="bg-[#020617] font-sans text-slate-200">
      
      {/* HEADER */}
      <header id="home" className="relative h-screen w-full flex items-center overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0">
          <Image src="/cyber-bg.jpg" alt="Cyber Background" fill className="object-cover opacity-100" priority />
        </div>

        <nav className="absolute top-0 w-full z-30 px-10 py-8 flex justify-end items-center max-w-7xl mx-auto left-0 right-0">
          <div className="flex space-x-8 md:space-x-12">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-sm font-bold hover:text-green-400 transition-colors uppercase tracking-widest text-white drop-shadow-lg">
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-10 md:px-20 gap-10">
          {/* LEFT SIDE: Fixed Zoom for Profile Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur opacity-40 animate-pulse"></div>
              <div className="relative h-72 w-72 md:h-[480px] md:w-[480px] rounded-full border-4 border-green-500 overflow-hidden shadow-[0_0_60px_rgba(16,185,129,0.6)] bg-slate-900/40">
                <Image 
                  src="/profile.jpg" 
                  alt="Sukumar Manna" 
                  fill 
                  className="object-cover object-top scale-90 transition-transform duration-500 group-hover:scale-100" 
                  priority 
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-right">
            <div className="mb-4">
              <span className="text-green-400 font-mono tracking-[0.4em] uppercase text-xs md:text-sm bg-black/60 px-3 py-1 rounded border border-green-500/30">Verified Security Admin</span>
            </div>
            <h1 className="text-5xl md:text-[7rem] lg:text-[8.5rem] font-black tracking-tighter text-white leading-[0.85] uppercase drop-shadow-2xl">
              SUKUMAR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 uppercase"> MANNA </span>
            </h1>
            <p className="mt-8 text-lg md:text-2xl text-white font-medium tracking-wide italic max-w-xl md:ml-auto drop-shadow-lg bg-black/30 p-2 rounded-lg">
              "Securing the infrastructure, designing the experience."
            </p>
            <div className="mt-10 flex justify-center md:justify-end gap-6">
              <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all">Works</a>
              <a href="#contact" className="px-8 py-3 border-2 border-green-500 bg-black/40 hover:bg-green-500/20 text-green-400 font-bold rounded-full transition-all">Contact</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20">
        
        {/* SKILLS SECTION */}
        <section id="skills" className="mb-40 scroll-mt-24">
          <h2 className="text-4xl font-bold mb-16 text-center text-white italic">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, i) => (
              <div key={i} className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl text-center hover:border-green-500 transition-all">
                <span className={`text-xl font-bold ${skill.color}`}>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* TRAINING SECTION */}
        <section id="training" className="mb-40 scroll-mt-24">
          <div className="flex items-center gap-4 mb-16 justify-center">
            <BarChart3 className="text-green-500" />
            <h2 className="text-4xl font-bold text-white tracking-tight">Specialized Training</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {specializedTraining.map((item, i) => (
              <div key={i} className="bg-slate-900/50 p-8 rounded-xl border border-slate-800 hover:border-blue-500 transition-all">
                <span className="text-xs font-bold text-green-500 uppercase tracking-widest">{item.duration}</span>
                <h3 className="text-2xl font-bold text-white mt-2">{item.title}</h3>
                <p className="text-blue-400 mb-4">{item.provider}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
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
                <p className="mt-6 text-slate-400 leading-relaxed italic">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="mb-40 scroll-mt-24">
           <h2 className="text-4xl font-bold mb-16 text-center text-white italic">Technical Works</h2>
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

        {/* CONTACT SECTION */}
        <section id="contact" className="mb-40 scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In <span className="text-green-400">Touch</span></h2>
            <p className="text-slate-400 max-w-lg mx-auto italic">Drop a message to discuss secure infrastructure or system auditing.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="space-y-6">
              <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl flex items-center gap-6 group hover:border-blue-500 transition-all">
                <div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-white font-medium text-sm md:text-base">226301213@gkv.ac.in</p>
                </div>
              </div>

              <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl flex items-center gap-6 group hover:border-green-500 transition-all">
                <div className="h-12 w-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">LinkedIn</p>
                  <p className="text-white font-medium text-sm md:text-base">sukumamanna6</p>
                </div>
              </div>

              <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl flex items-center gap-6 group hover:border-blue-500 transition-all">
                <div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-white font-medium text-sm md:text-base">Jamshedpur / Gorakhpur</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 p-10 bg-slate-900/40 border border-slate-800 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                 <ShieldCheck size={120} className="text-green-500" />
              </div>
              
              <form onSubmit={onSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input name="name" type="text" required placeholder="John Doe" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input name="email" type="email" required placeholder="john@example.com" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea name="message" required rows={4} placeholder="Your secure message..." className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-slate-950 font-black uppercase tracking-tighter py-4 rounded-xl transition-all active:scale-95">
                  Establish Connection <Send size={18} />
                </button>
                {result && <p className="mt-4 text-center text-sm font-bold text-green-400 animate-pulse">{result}</p>}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 border-t border-slate-900 py-20 text-center">
        <div className="flex justify-center gap-10 mb-12">
          <a href="#" className="p-4 bg-slate-900 rounded-full text-blue-400 hover:text-white hover:bg-blue-600 transition-all"><Github /></a>
          <a href="https://linkedin.com/in/sukumamanna6" className="p-4 bg-slate-900 rounded-full text-green-400 hover:text-white hover:bg-green-600 transition-all"><Linkedin /></a>
          <a href="mailto:226301213@gkv.ac.in" className="p-4 bg-slate-900 rounded-full text-blue-400 hover:text-white hover:bg-blue-600 transition-all"><Mail /></a>
        </div>
        <p className="text-slate-600 text-xs font-mono uppercase tracking-widest italic tracking-[0.2em]">Encrypted & Secure // ©Copyright 2026 Sukumar Manna</p>
      </footer>
    </div>
  );
}
