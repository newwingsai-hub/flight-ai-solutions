import { Link } from 'react-router-dom';
import { Linkedin, Mail, Github } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="https://static.wixstatic.com/media/415bd8_828540bddcbb4bd8b4e2904e8e70dc3f~mv2.png"
                width={40}
                height={40}
                className="w-10 h-10"
                originWidth={665}
                originHeight={633} />
              <span className="font-heading text-xl font-bold text-foreground">NewWings</span>
            </div>
            <p className="font-paragraph text-sm text-foreground/60 leading-relaxed">
              Intelligent flight optimization for sustainable aviation. A student innovation for the Conrad Challenge.
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

              </li>
            </ul>
          </div>
          {/* More Links */}

          <div>
            <h3 className="font-heading text-base font-semibold text-foreground mb-4">Connect</h3>
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-paragraph">
                Contact Us
              </Button>
            </Link>
          </div>
          {/* Contact & Social */}
        </div>
        {/* Bottom Bar */}

      </div>
    </footer>
  );
}
