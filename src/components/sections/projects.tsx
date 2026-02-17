"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, ShieldCheck, FileText } from 'lucide-react';
import PhishGuardModal from '@/components/phish-guard-modal';

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="projects" className="py-20 md:py-32 bg-card/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-headline">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-primary transition-colors duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Phishing URL Detection System</CardTitle>
                  </div>
                  <CardDescription>
                    A real-time, ML-powered phishing detection tool.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">
                    Developed a responsive user interface using HTML, CSS, and JavaScript. Integrated a Python-based Decision Tree machine learning model for phishing detection. Implemented input validation and a dashboard interface to enhance usability.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-primary-foreground bg-primary/80">HTML/CSS</span>
                    <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-primary-foreground bg-primary/80">JavaScript</span>
                    <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-primary-foreground bg-primary/80">Python</span>
                    <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-primary-foreground bg-primary/80">Machine Learning</span>
                  </div>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button onClick={() => setIsModalOpen(true)}>
                    AI Case Study <Bot className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-primary transition-colors duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <FileText className="w-8 h-8 text-primary" />
                    <CardTitle>SysLog Monitor</CardTitle>
                  </div>
                  <CardDescription>
                    A remote system auditor for forensic analysis.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                   <p className="text-muted-foreground mb-4">
                    Developed a Python-based background utility to log real-time keyboard inputs and capture automated system screenshots. Engineered a data transmission pipeline using the Telegram Bot API to deliver captured telemetry to a remote server via encrypted HTTPS.
                  </p>
                </CardContent>
                 <div className="p-6 pt-0">
                  <Button variant="outline" disabled>
                    View on GitHub <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      <PhishGuardModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
