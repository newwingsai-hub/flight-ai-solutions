import { motion } from 'framer-motion';
import { Brain, Zap, Route, TrendingDown, Database, Shield, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function SolutionPage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Decision Making',
      description:
        'Our machine learning algorithms analyze thousands of variables in real-time to make optimal energy management decisions.',
      color: 'text-primary',
      bgColor: 'bg-primary/20',
    },
    {
      icon: Zap,
      title: 'Smart Energy Distribution',
      description:
        'Intelligently decides when to use electric power, when to supplement with fuel, and how to recover energy through regenerative systems.',
      color: 'text-light-blue',
      bgColor: 'bg-light-blue/20',
    },
    {
      icon: Route,
      title: 'Dynamic Route Optimization',
      description:
        'Continuously adjusts flight paths, altitudes, and speeds based on weather, air traffic, and energy efficiency.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/20',
    },
    {
      icon: Database,
      title: 'Real Flight Data Training',
      description:
        'Trained on actual flight data from hybrid-electric aircraft to ensure accurate, reliable, and safe optimization.',
      color: 'text-dark-green',
      bgColor: 'bg-dark-green/20',
    },
  ];

  const benefits = [
    'Reduce fuel consumption by up to 30%',
    'Lower carbon emissions by 25-40%',
    'Extend flight range by 20%',
    'Improve battery life and efficiency',
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Data Collection',
      description:
        'The system continuously collects data from aircraft sensors, weather systems, air traffic control, and flight plans.',
    },
    {
      step: '02',
      title: 'AI Analysis',
      description:
        'Machine learning algorithms process this data in real-time, comparing it against thousands of historical flights and optimization models.',
    },
    {
      step: '03',
      title: 'Optimization',
      description:
        'The AI generates optimal recommendations for energy distribution, routing, altitude, and speed adjustments.',
    },
    {
      step: '04',
      title: 'Execution',
      description:
        'Recommendations are presented to pilots or automatically executed through integrated flight systems, with continuous monitoring and adjustment.',
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-blue">AI-Powered</span> Solution
            </h1>
            <p className="font-paragraph text-xl text-foreground/70 leading-relaxed">
              Proprietary software that uses machine learning and real flight data to optimize every aspect of
              hybrid-electric aircraft operations, from energy management to route planning.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Core Features */}
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
              Core <span className="text-primary">Features</span>
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto">
              Advanced AI capabilities designed specifically for hybrid-electric aviation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-foreground/5 backdrop-blur-lg rounded-2xl border border-primary/10 p-8 hover:border-primary/30 transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">{feature.title}</h3>
                  <p className="font-paragraph text-base text-foreground/60 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto">
              A seamless four-step process that delivers real-time optimization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-foreground/5 backdrop-blur-lg rounded-2xl border border-primary/10 p-8 h-full">
                  <div className="font-heading text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="font-paragraph text-sm text-foreground/60 leading-relaxed">{item.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Technology Stack */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-blue-900/5 to-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built on <span className="text-primary">Real Flight Data</span>
              </h2>
              <p className="font-paragraph text-lg text-foreground/70 mb-6 leading-relaxed">
                Our AI models are trained on thousands of hours of actual flight data from hybrid-electric aircraft,
                ensuring accuracy and reliability in real-world conditions.
              </p>
              <p className="font-paragraph text-lg text-foreground/70 mb-8 leading-relaxed">
                We use advanced machine learning techniques including neural networks, reinforcement learning, and
                predictive analytics to continuously improve optimization performance.
              </p>
              <div className="flex items-start gap-3 mb-4">

                <div>

                </div>
              </div>
              <div className="flex items-start gap-3">

                <div>

                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-light-blue/10 backdrop-blur-lg border border-primary/20 p-12 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-primary/30 blur-xl"
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
                    className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-light-blue/30 blur-xl"
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
                    <Brain className="w-32 h-32 text-primary/40" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Key <span className="text-primary">Benefits</span>
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto">
              Measurable improvements across all aspects of flight operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex items-start gap-3 bg-foreground/5 backdrop-blur-lg rounded-xl border border-primary/10 p-6 hover:border-primary/30 transition-all"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="font-paragraph text-sm text-foreground/80">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="bg-gradient-to-br from-primary/10 to-light-blue/10 backdrop-blur-lg rounded-3xl border border-primary/20 p-12 lg:p-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Optimize Your Fleet?
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
              Discover how our AI-powered solution can transform your hybrid-electric aircraft operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/impact" className="inline-block">
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-lg font-paragraph text-base transition-colors">
                  View Our Impact
                </button>
              </a>
              <a href="/contact" className="inline-block">
                <button className="border border-primary text-primary hover:bg-primary/10 h-12 px-8 rounded-lg font-paragraph text-base transition-colors">
                  Contact Us
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
