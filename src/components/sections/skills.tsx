"use client";
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, ShieldCheck, Server } from 'lucide-react';

const skillsData = [
  {
    category: "Cybersecurity & SOC",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    skills: [
      { name: "OSINT & Threat Intelligence", level: 90 },
      { name: "SIEM & Log Analysis (Basic)", level: 80 },
      { name: "VAPT (Basic)", level: 75 },
      { name: "Incident Response", level: 85 },
    ],
  },
  {
    category: "Networking & Systems",
    icon: <Server className="w-8 h-8 text-primary" />,
    skills: [
      { name: "TCP/IP, DNS, HTTP/HTTPS", level: 95 },
      { name: "Network Scanning & Troubleshooting", level: 85 },
      { name: "Linux (Ubuntu/Kali)", level: 90 },
      { name: "Windows OS", level: 80 },
    ],
  },
  {
    category: "Programming & Tools",
    icon: <Code className="w-8 h-8 text-primary" />,
    skills: [
      { name: "Python, C, C++", level: 90 },
      { name: "HTML, CSS, JavaScript, API", level: 95 },
      { name: "Nmap, Wireshark, BurpSuite", level: 88 },
      { name: "PowerBI, Tableau, MSExcel", level: 78 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string, level: number }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-card-foreground">{name}</span>
        <span className="text-sm font-medium text-primary">{level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2.5">
        <motion.div
          className="bg-primary h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};


export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-headline">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {category.icon}
                    <CardTitle>{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  {category.skills.map(skill => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
