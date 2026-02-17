"use client";
import { useState, useRef, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { phishGuardAIExplainer, type PhishGuardAIExplainerOutput } from '@/ai/flows/phish-guard-ai-explainer';
import { Bot, Loader2, Send, User } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

type Message = {
  role: 'user' | 'ai';
  content: string;
};

const caseStudy = {
  problem: "The ever-growing threat of phishing attacks which can lead to significant data breaches, financial loss, and erosion of trust. Traditional methods for detecting these malicious URLs are often not fast enough to provide real-time protection for users.",
  solution: "This project is a full-stack application designed to classify URLs as either legitimate or phishing attempts in real-time. It features a responsive user interface built with HTML, CSS, and JavaScript, and a powerful backend driven by a Python-based Decision Tree machine learning model. This allows users to get immediate feedback on the safety of a URL.",
  tech: "Frontend: HTML, CSS, and JavaScript. Backend: Python, which hosts the machine learning model. Machine Learning Model: A Decision Tree algorithm was chosen for its high accuracy and interpretability in classifying URLs.",
  result: "The Phishing URL Detection System is a practical tool that enhances web security. It provides an effective, proactive defense against phishing threats by offering real-time URL analysis. This project demonstrates a strong capability in building full-stack applications with integrated machine learning solutions."
};

export default function PhishGuardModal({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: (open: boolean) => void }) {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: question };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setQuestion('');

    try {
      const response: PhishGuardAIExplainerOutput = await phishGuardAIExplainer({ question });
      const aiMessage: Message = { role: 'ai', content: response.explanation };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("AI explainer failed:", error);
      const errorMessage: Message = { role: 'ai', content: "Sorry, I couldn't process that request. Please try again." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    const viewport = scrollAreaRef.current?.querySelector('div[data-radix-scroll-area-viewport]');
    if (viewport) {
      setTimeout(() => {
        viewport.scrollTop = viewport.scrollHeight;
      }, 100);
    }
  }, [messages]);


  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">Phishing URL Detection: AI-Powered Case Study</DialogTitle>
          <DialogDescription>
            Explore the project details and ask the AI assistant anything about it.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow overflow-hidden">
          <ScrollArea className="h-full pr-4">
            <div className="space-y-4 text-sm">
              <h3 className="font-bold text-lg text-primary">The Problem</h3>
              <p className="text-muted-foreground">{caseStudy.problem}</p>
              <h3 className="font-bold text-lg text-primary">The Solution</h3>
              <p className="text-muted-foreground">{caseStudy.solution}</p>
              <h3 className="font-bold text-lg text-primary">The Tech Stack</h3>
              <p className="text-muted-foreground">{caseStudy.tech}</p>
              <h3 className="font-bold text-lg text-primary">The Result</h3>
              <p className="text-muted-foreground">{caseStudy.result}</p>
            </div>
          </ScrollArea>
          <div className="flex flex-col h-full border-l border-border pl-6">
            <ScrollArea className="flex-grow mb-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                    {msg.role === 'ai' && <Bot className="w-6 h-6 text-primary flex-shrink-0" />}
                    <div className={`rounded-lg p-3 max-w-sm break-words ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                      {msg.content}
                    </div>
                     {msg.role === 'user' && <User className="w-6 h-6 text-muted-foreground flex-shrink-0" />}
                  </div>
                ))}
                {isLoading && (
                   <div className="flex items-start gap-3">
                      <Bot className="w-6 h-6 text-primary flex-shrink-0" />
                      <div className="rounded-lg p-3 bg-muted">
                        <Loader2 className="w-5 h-5 animate-spin" />
                      </div>
                   </div>
                )}
                 {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground p-4">
                        <Bot className="w-12 h-12 mb-4" />
                        <p>Ask me about the project's tech, model, or outcomes!</p>
                        <p className="text-xs mt-2">e.g., "What algorithm does it use?"</p>
                    </div>
                 )}
              </div>
            </ScrollArea>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask the AI about the project..."
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading || !question.trim()}>
                {isLoading ? <Loader2 className="animate-spin" /> : <Send />}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
