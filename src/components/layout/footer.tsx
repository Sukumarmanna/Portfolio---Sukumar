import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: <Github />, href: "https://github.com/", name: "GitHub" },
  { icon: <Linkedin />, href: "https://linkedin.com/in/sukumamanna6", name: "LinkedIn" },
  { icon: <Mail />, href: "mailto:226301213@gkv.ac.in", name: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-card/20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sukumar Manna. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
