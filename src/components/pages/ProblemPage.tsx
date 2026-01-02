import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle, Zap, DollarSign, Cloud, Settings } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ProblemPage() {
  const challenges = [
    {
      icon: DollarSign,
      title: 'Rising Fuel Costs',
      description:
        'Aviation fuel prices continue to climb, putting pressure on operators to reduce consumption. Inefficient energy management in hybrid aircraft leads to unnecessary fuel burn and higher operational costs.',
      impact: 'Fuel and energy costs account for ~20–30% of airline operating expenses',
      color: 'text-destructive',
      bgColor: 'bg-destructive/20',
    },
    {
      icon: Cloud,
      title: 'Carbon Emissions',
      description:
        'The aviation industry contributes significantly to global emissions. Without optimized energy usage, hybrid-electric aircraft fail to deliver their full environmental potential.',
      impact: 'Aviation contributes 2–3% of global CO₂ emissions',
      color: 'text-light-blue',
      bgColor: 'bg-light-blue/20',
    },
    {
      icon: Settings,
      title: 'Complex Energy Management',
      description:
        'Pilots and operators face difficult real-time decisions about when to use electric power versus conventional fuel. Manual management is prone to errors and suboptimal choices.',
      impact: 'Manual energy management increases the risk of human error',
      color: 'text-secondary',
      bgColor: 'bg-secondary/20',
    },
    {
      icon: Zap,
      title: 'Battery Limitations',
      description:
        'Current battery technology has limited capacity and charging infrastructure. Poor energy recovery and inefficient power distribution reduce flight range and performance.',
      impact: 'Range limitations of 15–30% compared to conventional aircraft',
      color: 'text-primary',
      bgColor: 'bg-primary/20',
    },
    {
      icon: TrendingUp,
      title: 'Performance Trade-offs',
      description:
        'Balancing speed, range, payload, and energy efficiency requires constant optimization. Without AI assistance, operators struggle to find the optimal balance for each flight.',
      impact: 'Efficiency losses of up to 10–20% without optimized energy management',
      color: 'text-dark-green',
      bgColor: 'bg-dark-green/20',
    },
    {
      icon: AlertTriangle,
      title: 'Safety Concerns',
      description:
        'Improper energy management can lead to unexpected power shortages, reduced safety margins, and emergency situations. Reliable optimization is critical for safe operations.',
      impact: 'Improper energy management can increase safety risks',
      color: 'text-destructive',
      bgColor: 'bg-destructive/20',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-blue-900/10">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
              The Challenge in
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-destructive to-primary">
                Hybrid Aviation
              </span>
            </h1>
            <p className="font-paragraph text-xl text-foreground/70 leading-relaxed">
              Electric and hybrid-electric aircraft represent the future of sustainable aviation, but they face
              significant energy management challenges that prevent them from reaching their full potential.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Main Problem Statement */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Hybrid Aircraft Struggle
              </h2>
              <p className="font-paragraph text-lg text-foreground/70 mb-6 leading-relaxed">
                Hybrid-electric aircraft combine traditional fuel engines with electric motors and batteries. While this
                technology promises reduced emissions and lower costs, the reality is far more complex.
              </p>
              <p className="font-paragraph text-lg text-foreground/70 mb-6 leading-relaxed">
                Pilots must constantly decide: Should I use battery power or fuel? When should I recharge? What's the
                most efficient altitude and route? These split-second decisions directly impact fuel consumption,
                emissions, range, and safety.
              </p>
              <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
                Without intelligent optimization, hybrid aircraft fail to deliver on their promise of sustainability and
                efficiency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-destructive/10 to-primary/10 backdrop-blur-lg border border-primary/20 p-12 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-destructive/30 blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  <motion.div
                    className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-primary/30 blur-xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.5,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <AlertTriangle className="w-32 h-32 text-destructive/40" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Challenges Grid */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-blue-900/5 to-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Key <span className="text-primary">Challenges</span>
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto">
              The aviation industry faces multiple interconnected challenges that demand an intelligent solution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-foreground/5 backdrop-blur-lg rounded-2xl border border-primary/10 p-8 hover:border-primary/30 transition-all group"
                >
                  <div className={`w-14 h-14 rounded-xl ${challenge.bgColor} flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${challenge.color}`} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{challenge.title}</h3>
                  <p className="font-paragraph text-base text-foreground/60 mb-4 leading-relaxed">
                    {challenge.description}
                  </p>
                  <div className="pt-4 border-t border-primary/10">
                    <p className={`font-paragraph text-sm font-semibold ${challenge.color}`}>{challenge.impact}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Impact Statistics */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">

        </div>
      </section>
      {/* Conclusion */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Industry Needs a <span className="text-primary">Smarter Solution</span>
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
              These challenges can't be solved by human pilots alone. They require intelligent, real-time optimization
              powered by AI and machine learning. That's exactly what we've built.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
