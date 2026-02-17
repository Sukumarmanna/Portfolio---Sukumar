import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Zap, Eye } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">About Me</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I am a Computer Science Engineering student and Security Researcher dedicated to building secure, high-performance web applications. My expertise bridges the gap between Frontend Development (React, Next.js) and Cybersecurity (VAPT, System Auditing).
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Currently, as a Security Intern at NIELIT, I focus on identifying vulnerabilities and hardening system infrastructure. My professional background includes a rapid progression at TCS iON, where I evolved from an Invigilator to an IT Manager, managing complex server room operations and network nodes. Beyond coding and security, I am also a Data Visualization enthusiast skilled in PowerBI and Tableau.
            </p>
          </div>
          <div className="space-y-4">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Role</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">Security Intern at NIELIT</div>
                <p className="text-xs text-muted-foreground">Focusing on VAPT and System Auditing.</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Key Experience</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">IT Manager at TCS iON</div>
                <p className="text-xs text-muted-foreground">Managed server operations & network infrastructure.</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Core Skills</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">React, Next.js & Data Viz</div>
                <p className="text-xs text-muted-foreground">Building applications and deriving insights.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
