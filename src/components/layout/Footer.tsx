import { Link } from 'react-router-dom';
import { Linkedin, Mail, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-light-blue rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-heading text-xl font-bold text-foreground">FlightAI</span>
            </div>
            <p className="font-paragraph text-sm text-foreground/60 leading-relaxed">
              AI-powered flight optimization for sustainable aviation. A student innovation for the Conrad Challenge.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-base font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="font-paragraph text-sm text-foreground/60 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/problem" className="font-paragraph text-sm text-foreground/60 hover:text-primary transition-colors">
                  The Problem
                </Link>
              </li>
              <li>
                <Link to="/solution" className="font-paragraph text-sm text-foreground/60 hover:text-primary transition-colors">
                  Our Solution
                </Link>
              </li>
              <li>
                <Link to="/impact" className="font-paragraph text-sm text-foreground/60 hover:text-primary transition-colors">
                  Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-heading text-base font-semibold text-foreground mb-4">Learn More</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/market" className="font-paragraph text-sm text-foreground/60 hover:text-primary transition-colors">
                  Market & Use Cases
                </Link>
              </li>
              <li>
                <Link to="/team" className="font-paragraph text-sm text-foreground/60 hover:text-primary transition-colors">
                  About the Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-paragraph text-sm text-foreground/60 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-heading text-base font-semibold text-foreground mb-4">Connect</h3>
            <div className="space-y-4">
              <p className="font-paragraph text-sm text-foreground/60">
                <Mail className="inline w-4 h-4 mr-2" />
                contact@flightai.com
              </p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-foreground/5 hover:bg-primary/20 flex items-center justify-center text-foreground/60 hover:text-primary transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-foreground/5 hover:bg-primary/20 flex items-center justify-center text-foreground/60 hover:text-primary transition-all"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-foreground/40">
              © {currentYear} FlightAI. All rights reserved.
            </p>
            <p className="font-paragraph text-sm text-foreground/40">
              A Conrad Challenge Innovation Project
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
