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
              <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-none">
                <p className="font-paragraph text-sm text-gray-400">
                  <span className="text-primary font-semibold">Disclaimer:</span> All values presented are industry-based estimates designed to illustrate the scale of challenges in hybrid-electric aviation. These figures are not guaranteed and may vary significantly based on specific fleet configurations, operational patterns, and market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- SOLUTION SECTION: "THE CORRECTION" --- */}
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
              <p className="font-paragraph text-xl text-gray-400">
                Our proprietary AI doesn't just monitor systems; it actively pilots the energy strategy. 
                Real-time decisions for routing, power blending, and regeneration.
              </p>
            </AnimatedElement>
          </div>

          {/* Feature Grid - Asymmetrical */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
            {/* Large Feature 1 */}
            <div className="md:col-span-7 md:row-span-2 relative group overflow-hidden rounded-none border border-white/10 bg-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Image 
                src="https://static.wixstatic.com/media/415bd8_d91b05bc8f7c45a5a41c7d0afe43e8d6~mv2.png?originWidth=1152&originHeight=768" 
                alt="AI Cockpit Interface" 
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full bg-gradient-to-t from-black/90 to-transparent">
                <Cpu className="w-10 h-10 text-primary mb-6" />
                <h3 className="font-heading text-3xl text-white mb-4">Dynamic Energy Blending</h3>
                <p className="font-paragraph text-gray-300 max-w-md">
                  Algorithms that calculate the precise millisecond to switch between electric and fuel propulsion, maximizing battery life and minimizing burn.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="md:col-span-5 md:row-span-1 relative group overflow-hidden border border-white/10 bg-white/5 p-8 flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Globe className="w-24 h-24 text-light-blue" />
              </div>
              <div>
                <h3 className="font-heading text-2xl text-white mb-4">4D Trajectory Optimization</h3>
                <p className="font-paragraph text-gray-400 text-sm">
                  Adjusts flight paths in real-time based on wind patterns, air traffic, and battery thermal states.
                </p>
              </div>

            </div>

            {/* Feature 3 */}
            <div className="md:col-span-5 md:row-span-1 relative group overflow-hidden border border-white/10 bg-white/5 p-8 flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Activity className="w-24 h-24 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-2xl text-white mb-4">Predictive Maintenance</h3>
                <p className="font-paragraph text-gray-400 text-sm">
                  Uses flight data to predict battery degradation and system stress before they become critical failures.
                </p>
              </div>
              <div className="mt-8 flex gap-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="h-1 flex-1 bg-primary/20">

                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/solution">

            </Link>
          </div>
        </div>
      </section>
      {/* --- IMPACT SECTION: STICKY SCROLL --- */}
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
                  val: "5 to 10 %",
                  label: "Fuel Reduction",
                  desc: "Average fuel savings per flight on hybrid-electric regional routes.",
                  color: "text-primary"
                },
                {
                  val: "8 to 15 %",
                  label: "Battery Life Extension",
                  desc: "Through thermal-aware discharge cycles and optimized regeneration.",
                  color: "text-light-blue"
                },
                {
                  val: "20 %",
                  label: "Reduction in CO₂ emissions",
                  desc: "In simulated stress tests across 10,000 flight hours.",
                  color: "text-white"
                }
              ].map((stat, idx) => (
                <AnimatedElement key={idx} className="glass-panel p-12 border-l-4 border-l-primary">
                  <div className={`font-heading text-8xl md:text-9xl font-bold ${stat.color} mb-4`}>
                    {stat.val}
                  </div>
                  <h3 className="font-heading text-2xl text-white mb-4 uppercase tracking-widest">{stat.label}</h3>

                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* --- MARKET USE CASES: HORIZONTAL SCROLL FEEL --- */}
      {/* --- TEAM TEASER --- */}
      {/* --- CTA SECTION --- */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 relative z-10">
          <div className="bg-black/40 backdrop-blur-xl border border-primary/20 p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <AnimatedElement>
              <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                READY FOR <br />
                TAKEOFF?
              </h2>
              <p className="font-paragraph text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                Partner with us to pilot the future of sustainable aviation. 
                Let's optimize your fleet for the electric era.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact">
                  <Button className="h-16 px-12 bg-primary text-black hover:bg-primary/90 font-heading text-xl tracking-wide rounded-none">
                    Initiate Contact
                  </Button>
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}