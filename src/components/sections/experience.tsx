"use client";
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const experienceCategories = [
  {
    title: "Core Technical Internships",
    items: [
      {
        role: "System and Software Security Intern (Paid)",
        organization: "NIELIT, Gorakhpur",
        duration: "Jan 2026 – Present",
        details: [
          "Vulnerability assessments",
          "Security audits",
          "Infrastructure security workflows",
        ],
      },
      {
        role: "Intern at Amroha Police Cyber Cell (UP)",
        organization: "Amroha Police",
        duration: "Jun 2025 – Jun 2025",
        details: [
          "Digital Forensics",
          "OSINT",
          "Cyber law",
          "Forensic Investigation",
        ],
      },
    ],
  },
  {
    title: "Technical Operations (TCS iON)",
    items: [
      {
        role: "IT Manager (System Operator)",
        organization: "TCS iON",
        duration: "Sep 2025 – Present",
        details: [
          "Managing server room operations",
          "System configurations",
          "Network nodes",
        ],
      },
      {
        role: "Exam Lab Supervisor iDZ",
        organization: "TCS iON",
        duration: "Aug 2025 – Present",
        details: [
          "Overseeing digital examination infrastructure",
          "Coordinating lab staff",
        ],
      },
      {
        role: "Exam Lab Invigilator iDZ",
        organization: "TCS iON",
        duration: "Jun 2025 – Aug 2025",
        details: [
          "Providing technical support for candidate terminals",
          "Ensuring exam integrity",
        ],
      },
    ],
  },
  {
    title: "Specialized Training & Simulations",
    items: [
      {
        role: "Cybersecurity Analyst (Tata Group)",
        organization: "Job Simulation",
        duration: "Apr 2025",
        details: ["Cyber threat analysis", "security analyst workflows"],
      },
      {
        role: "Cyber Security Analyst (TheSmartBridge)",
        organization: "Virtual Internship",
        duration: "Feb 2025 – Mar 2025",
        details: [
          "Vulnerability Assessment",
          "Threat Intelligence (CTI)",
          "Cyber Defense",
        ],
      },
      {
        role: "Data Visualization Intern (Tata Group)",
        organization: "Virtual Internship",
        duration: "Jul 2024 – Aug 2024",
        details: [
          "PowerBI, Tableau",
          "Data Cleaning for business insights",
        ],
      },
       {
        role: "Cyber Security Foundation (IBM)",
        organization: "Training",
        duration: "Sep 2024 - Oct 2024",
        details: ["Phishing, Networking", "Internet Protocol (IP) fundamentals"],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-headline">
          Professional Experience
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {experienceCategories.map((category, index) => (
            <div key={index} className="space-y-8">
              <h3 className="text-2xl font-bold text-primary text-center lg:text-left">
                {category.title}
              </h3>
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border border-primary/30 hover:border-primary transition-colors duration-300 shadow-lg shadow-primary/5">
                    <CardHeader>
                      <CardTitle className="text-xl">{item.role}</CardTitle>
                      <CardDescription>
                        {item.organization} &bull; {item.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                        {item.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
