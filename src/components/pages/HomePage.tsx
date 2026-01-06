// HPI 1.6-V
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Zap, 
  TrendingDown, 
  Shield, 
  Wind, 
  Activity, 
  Globe, 
  Cpu, 
  BarChart3, 
  Plane,
  ChevronRight,
  Target
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

// --- Utility Components ---

type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          element.classList.add('is-visible');
        }, delay);
        observer.unobserve(element);
      }
    }, { threshold: 0.1 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref} className={`${className || ''} animate-reveal`}>{children}</div>;
};

const ParallaxText = ({ children, baseVelocity = 100 }: { children: string; baseVelocity: number }) => {
  const baseX = useRef(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useSpring(scrollY, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(scrollVelocity, [0, 1000], [0, 5], { clamp: false });
  const [x, setX] = useState(0);
  const xMotion = useSpring(x, { stiffness: 400, damping: 90 });

  useEffect(() => {
    let lastTime = performance.now();
    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      let moveBy = baseVelocity * (delta / 1000);
      
      // Apply velocity from scroll
      // This is a simplified version for stability
      baseX.current += moveBy; 
      
      // Wrap logic would go here for infinite scroll, 
      // but for this specific design we'll keep it simple
      setX(baseX.current % 100); // Just a placeholder for the effect logic
      requestAnimationFrame(animate);
    };
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [baseVelocity]);

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div className="font-heading text-[10rem] font-bold uppercase opacity-5 text-transparent stroke-text" style={{ x: xMotion }}>
        {children} {children} {children} {children}
      </motion.div>
    </div>
  );
};

// --- Main Page Component ---

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-clip selection:bg-primary selection:text-primary-foreground">
      <style>{`
        .animate-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .glass-panel {
          background: rgba(18, 18, 18, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(100, 255, 218, 0.1);
        }
        .neon-glow {
          box-shadow: 0 0 20px rgba(100, 255, 218, 0.15);
        }
        .grid-bg {
          background-size: 50px 50px;
          background-image: linear-gradient(to right, rgba(100, 255, 218, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(100, 255, 218, 0.05) 1px, transparent 1px);
        }
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        .clip-diagonal-reverse {
          clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
        }
        .stroke-text {
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.1);
        }
      `}</style>
      <Header />
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <motion.div 
          className="absolute inset-0 z-0 grid-bg"
          style={{ y: yBackground }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10 pointer-events-none" />

        {/* Abstract Flight Paths */}
        <div className="absolute inset-0 z-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
            <motion.path
              d="M-100,800 C300,700 600,850 900,400 S1500,100 1600,0"
              fill="none"
              stroke="#64FFDA"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M-100,600 C200,650 500,500 800,600 S1300,800 1600,700"
              fill="none"
              stroke="#29ABE2"
              strokeWidth="1"
              strokeDasharray="10 10"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
            />
          </svg>
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-20 max-w-[120rem] w-full mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          style={{ opacity: opacityHero }}
        >
          <div className="lg:col-span-8">
            <AnimatedElement delay={100}>
              <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-8 text-white">
                FLIGHT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-light-blue to-primary bg-[length:200%_auto] animate-gradient">
                  OPTIMIZED
                </span>
              </h1>
            </AnimatedElement>

            <AnimatedElement delay={200}>
              <p className="font-paragraph text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed border-l-2 border-primary/30 pl-6">{"AI that masters the complexity of hybrid-electric aviation. Real-time energy management for a sustainable sky."}</p>
            </AnimatedElement>

            <AnimatedElement delay={300}>
              <div className="flex flex-wrap gap-6">
                <Link to="/solution">
                  <Button className="h-14 px-8 bg-primary text-black hover:bg-primary/90 rounded-none border-r-4 border-white font-heading text-lg tracking-wide transition-all hover:translate-x-1">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">

                </Link>
              </div>
            </AnimatedElement>
          </div>

          {/* Hero Visual - Abstract Radar/Data */}
          <div className="lg:col-span-4 hidden lg:block relative h-[600px]">
             <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite] opacity-20" />
             <div className="absolute inset-12 border border-light-blue/20 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-20" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64 glass-panel rounded-full flex items-center justify-center">
                  <Plane className="w-24 h-24 text-primary/80" />

                </div>
             </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-8 flex items-center gap-4 z-20">

        </div>
      </section>
      {/* --- PROBLEM SECTION: "THE TURBULENCE" --- */}
      <section className="relative py-32 bg-background z-20 clip-diagonal">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-destructive/5 to-transparent pointer-events-none" />
        
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left: Sticky Title */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32">
                <AnimatedElement>
                  <div className="flex items-center gap-3 mb-6">

                  </div>
                  <h2 className="font-heading text-5xl md:text-6xl font-bold text-white mb-8">
                    THE <br />
                    <span className="text-white/30">ENERGY</span> <br />
                    GAP
                  </h2>
                  <p className="font-paragraph text-lg text-gray-400 leading-relaxed mb-8">
                    Hybrid aviation promises a greener future, but current energy management systems are failing to deliver. The complexity gap is costing millions.
                  </p>
                  <Link to="/problem">
                    <Button variant="link" className="text-destructive p-0 h-auto font-heading text-lg hover:text-destructive/80">
                      Analyze The Problem <ChevronRight className="ml-1 w-4 h-4" />
                    </Button>
                  </Link>
                </AnimatedElement>
              </div>
            </div>

            {/* Right: Problem Cards */}
            <div className="lg:col-span-8 space-y-8">
              {[
                {
                  title: "Inefficient Power Distribution",
                  desc: "Manual switching between fuel and battery is imprecise, leading to wasted energy reserves and suboptimal flight profiles.",
                  stat: "10–15%",
                  statLabel: "Energy Inefficiency Potential",
                  disclaimer: "Estimated efficiency losses in hybrid-electric aircraft due to non-optimized energy management.",
                  icon: Zap
                },
                {
                  title: "Escalating Operational Costs",
                  desc: "Without predictive modeling, fuel consumption remains high even in hybrid aircraft, negating the potential ROI of electrification.",
                  stat: "$500K–1.5M",
                  statLabel: "Annual Excess Operating Costs (Mid-Size Fleet)",
                  disclaimer: "Estimate varies based on fleet size, fuel prices, and flight hours.",
                  icon: BarChart3
                },
                {
                  title: "Increasing Carbon Compliance Risk",
                  desc: "Regulatory pressure is growing. Current systems may struggle to meet future emissions standards without advanced optimization software.",
                  stat: "Rising",
                  statLabel: "Regulatory Pressure",
                  disclaimer: "Industry-based estimate highlighting the scale of future compliance challenges.",
                  icon: Wind
                }
              ].map((item, idx) => (
                <AnimatedElement key={idx} delay={idx * 100}>
                  <div className="group relative bg-white/5 border border-white/10 p-8 md:p-12 hover:bg-white/10 transition-colors duration-500">
                    <div className="absolute top-0 left-0 w-1 h-0 bg-destructive group-hover:h-full transition-all duration-500" />
                    <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
                      <div>
                        <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
                          <item.icon className="w-6 h-6 text-destructive" />
                        </div>
                        <h3 className="font-heading text-2xl text-white mb-4">{item.title}</h3>
                        <p className="font-paragraph text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="text-right md:border-l md:border-white/10 md:pl-8 md:min-w-[140px]">
                        <div className="font-heading text-4xl font-bold text-destructive mb-1">{item.stat}</div>
                        <div className="font-mono text-xs text-gray-500 uppercase">{item.statLabel}</div>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/5">
                      <p className="font-paragraph text-xs text-gray-500 italic">{item.disclaimer}</p>
                    </div>
                  </div>
                </AnimatedElement>
              ))}

            </div>
          </div>
        </div>
      </section>
      {/* --- SOLUTION SECTION: "THE CORRECTION" --- */}
      <section className="relative bg-background py-32 border-t border-white/5">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* Sticky Left Content */}
            <div className="h-fit lg:sticky lg:top-32">
              <AnimatedElement>
                <h2 className="font-heading text-6xl md:text-8xl font-bold text-white mb-12 leading-none">
                  REAL <br />
                  WORLD <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-blue">IMPACT</span>
                </h2>

                <Link to="/impact">

                </Link>
              </AnimatedElement>
            </div>

            {/* Scrollable Right Content */}
            <div className="space-y-32 pt-12 lg:pt-0">
              {[
                {
                  val: "1 to 3 %",
                  label: "Fuel Reduction",
                  desc: "Average fuel savings per flight on hybrid-electric regional routes. Expected as soon as ordered and documented.",
                  color: "text-primary"
                },
                {
                  val: "500,000kg",
                  label: "CO₂ Emissions Removed",
                  desc: "Per aircraft per year. Plus an additional 1-3% reduction in CO₂ emissions.",
                  color: "text-light-blue",
                  subtext: "500,000kg of CO₂ emissions removed per aircraft per year"
                }
              ].map((stat, idx) => (
                <AnimatedElement key={idx} className="glass-panel p-12 border-l-4 border-l-primary">
                  <div className={`font-heading text-8xl md:text-9xl font-bold ${stat.color} mb-4`}>
                    {stat.val}
                  </div>
                  <h3 className="font-heading text-2xl text-white mb-4 uppercase tracking-widest">{stat.label}</h3>
                  <p className="font-paragraph text-gray-300">{stat.desc}</p>
                  {stat.subtext && (
                    <p className="font-paragraph text-sm text-gray-400 mt-4 italic">{stat.subtext}</p>
                  )}
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-32 bg-[#0A0A0A] z-10 -mt-20 pt-48">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />

        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <AnimatedElement>
              <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-8">
                INTELLIGENT <span className="text-primary">AUTONOMY</span>
              </h2>

            </AnimatedElement>
          </div>

          

          <div className="mt-16 text-center">
            <Link to="/solution">

            </Link>
          </div>
        </div>
      </section>
      {/* --- IMPACT SECTION: STICKY SCROLL --- */}
      {/* --- MARKET USE CASES: HORIZONTAL SCROLL FEEL --- */}
      {/* --- TEAM TEASER --- */}
      {/* --- AERION ENGINE SECTION --- */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background via-background/80 to-background">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Graphic/Visual */}
            <AnimatedElement className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Animated background elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute w-64 h-64 bg-light-blue/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
                
                {/* Engine graphic */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="glass-panel p-12 rounded-2xl border border-primary/30 neon-glow">
                    <Cpu className="w-32 h-32 text-primary animate-[spin_8s_linear_infinite]" />
                  </div>
                </div>
              </div>
            </AnimatedElement>

            {/* Right: Content */}
            <AnimatedElement delay={200}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-primary" />
                  <span className="font-heading text-sm uppercase tracking-widest text-primary">Introducing</span>
                </div>
                
                <h2 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-blue">Aerion</span> Engine
                </h2>
                
                <p className="font-paragraph text-lg text-gray-300 mb-8 leading-relaxed">
                  Our proprietary AI engine that powers real-time energy optimization for hybrid-electric aircraft. Aerion learns, adapts, and continuously improves flight efficiency with every mission.
                </p>
                
                <div className="space-y-4 mb-12">
                  {[
                    "Real-time energy management and predictive optimization",
                    "Autonomous switching between fuel and battery systems",
                    "Continuous learning from flight data and conditions"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <p className="font-paragraph text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button className="h-14 px-8 bg-primary text-black hover:bg-primary/90 rounded-none border-r-4 border-white font-heading text-lg tracking-wide transition-all hover:translate-x-1 w-full sm:w-auto">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/solution">
                    <Button variant="outline" className="h-14 px-8 border-2 border-primary/50 text-primary hover:bg-primary/10 rounded-none font-heading text-lg tracking-wide transition-all w-full sm:w-auto">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      {/* --- CTA SECTION --- */}

      <Footer />
    </div>
  );
}