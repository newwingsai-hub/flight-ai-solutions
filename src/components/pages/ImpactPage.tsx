import { motion } from 'framer-motion';
import { Leaf, DollarSign, Shield, TrendingUp, Zap, Users } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ImpactPage() {
  const impactAreas = [
    {
      icon: Leaf,
      title: 'Environmental Impact',
      description: 'Significant reduction in carbon emissions and environmental footprint',
      stats: [
        { value: '25-40%', label: 'Reduction in CO2 emissions' },
        { value: '30%', label: 'Lower fuel consumption' },
        { value: '50%', label: 'Improved energy efficiency' },
      ],
      color: 'text-dark-green',
      bgColor: 'bg-dark-green/20',
    },
    {
      icon: DollarSign,
      title: 'Financial Impact',
      description: 'Substantial cost savings through optimized operations',
      stats: [
        { value: '$500K+', label: 'Annual savings per aircraft' },
        { value: '30%', label: 'Reduction in fuel costs' },
        { value: '20%', label: 'Extended battery life' },
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/20',
    },
    {
      icon: Shield,
      title: 'Safety & Reliability',
      description: 'Enhanced safety through predictive analytics and optimization',
      stats: [
        { value: '95%', label: 'Prediction accuracy' },
        { value: '40%', label: 'Fewer emergency situations' },
        { value: '100%', label: 'Regulatory compliance' },
      ],
      color: 'text-light-blue',
      bgColor: 'bg-light-blue/20',
    },
  ];

  const benefits = [
    {
      icon: Leaf,
      title: 'Cleaner Skies',
      description:
        'By optimizing energy usage, we help reduce aviation\'s carbon footprint and contribute to global sustainability goals.',
      color: 'text-dark-green',
    },
    {
      icon: TrendingUp,
      title: 'Better Performance',
      description:
        'Extended flight range, improved battery life, and enhanced overall aircraft performance through intelligent optimization.',
      color: 'text-primary',
    },
    {
      icon: Zap,
      title: 'Energy Independence',
      description:
        'Maximize the use of electric power, reducing reliance on conventional fuel and supporting the transition to sustainable aviation.',
      color: 'text-light-blue',
    },
    {
      icon: Users,
      title: 'Industry Leadership',
      description:
        'Early adopters gain competitive advantage and position themselves as leaders in sustainable aviation technology.',
      color: 'text-secondary',
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-green/10 border border-dark-green/20 mb-6">
              <Leaf className="w-4 h-4 text-dark-green" />
              <span className="font-paragraph text-sm text-dark-green">Measurable Impact</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark-green to-primary">Impact</span>
            </h1>
            <p className="font-paragraph text-xl text-foreground/70 leading-relaxed">
              Transforming aviation through AI-powered optimization that delivers real environmental, financial, and
              operational benefits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Impact Areas */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`w-16 h-16 rounded-xl ${area.bgColor} flex items-center justify-center mb-6`}>
                      <Icon className={`w-8 h-8 ${area.color}`} />
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">{area.title}</h2>
                    <p className="font-paragraph text-lg text-foreground/70 mb-8 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="grid grid-cols-3 gap-6">
                      {area.stats.map((stat, statIndex) => (
                        <div key={statIndex}>
                          <div className={`font-heading text-3xl md:text-4xl font-bold ${area.color} mb-2`}>
                            {stat.value}
                          </div>
                          <p className="font-paragraph text-sm text-foreground/60">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-light-blue/10 backdrop-blur-lg border border-primary/20 p-12 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <motion.div
                          className={`absolute top-1/4 left-1/4 w-20 h-20 rounded-full ${area.bgColor} blur-xl`}
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
                          className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-primary/30 blur-xl"
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
                          <Icon className={`w-40 h-40 ${area.color} opacity-40`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
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
              Beyond the <span className="text-primary">Numbers</span>
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto">
              Our solution delivers benefits that extend far beyond immediate cost savings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-foreground/5 backdrop-blur-lg rounded-2xl border border-primary/10 p-8 hover:border-primary/30 transition-all"
                >
                  <Icon className={`w-10 h-10 ${benefit.color} mb-4`} />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="font-paragraph text-base text-foreground/60 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real-World Impact */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="bg-gradient-to-br from-primary/10 to-light-blue/10 backdrop-blur-lg rounded-3xl border border-primary/20 p-12 lg:p-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Projected Annual Impact
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="text-center">
                <div className="font-heading text-5xl md:text-6xl font-bold text-dark-green mb-3">1M+</div>
                <p className="font-paragraph text-base text-foreground/70">Tons of CO2 reduced annually</p>
              </div>
              <div className="text-center">
                <div className="font-heading text-5xl md:text-6xl font-bold text-primary mb-3">$50M+</div>
                <p className="font-paragraph text-base text-foreground/70">In fuel cost savings</p>
              </div>
              <div className="text-center">
                <div className="font-heading text-5xl md:text-6xl font-bold text-light-blue mb-3">100+</div>
                <p className="font-paragraph text-base text-foreground/70">Aircraft optimized</p>
              </div>
              <div className="text-center">
                <div className="font-heading text-5xl md:text-6xl font-bold text-secondary mb-3">24/7</div>
                <p className="font-paragraph text-base text-foreground/70">Real-time optimization</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Long-term Vision */}
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
                Building a <span className="text-primary">Sustainable Future</span>
              </h2>
              <p className="font-paragraph text-lg text-foreground/70 mb-6 leading-relaxed">
                Our vision extends beyond individual aircraft. We're working toward a future where AI-powered
                optimization is standard across the entire aviation industry.
              </p>
              <p className="font-paragraph text-lg text-foreground/70 mb-6 leading-relaxed">
                As electric and hybrid-electric aircraft become more prevalent, our technology will play a crucial role
                in making sustainable aviation economically viable and operationally superior.
              </p>
              <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
                Every flight optimized is a step toward cleaner skies, lower costs, and a more sustainable future for
                aviation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-foreground/5 backdrop-blur-lg rounded-2xl border border-primary/10 p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Environmental Leadership</h3>
                <p className="font-paragraph text-sm text-foreground/60">
                  Helping the aviation industry meet and exceed carbon reduction targets
                </p>
              </div>
              <div className="bg-foreground/5 backdrop-blur-lg rounded-2xl border border-primary/10 p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Economic Viability</h3>
                <p className="font-paragraph text-sm text-foreground/60">
                  Making sustainable aviation financially attractive for operators
                </p>
              </div>
              <div className="bg-foreground/5 backdrop-blur-lg rounded-2xl border border-primary/10 p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Technological Innovation</h3>
                <p className="font-paragraph text-sm text-foreground/60">
                  Advancing AI and machine learning applications in aviation
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Us in Making an Impact
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
              Discover how our solution can transform your operations and contribute to a sustainable future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/market" className="inline-block">
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-lg font-paragraph text-base transition-colors">
                  Explore Use Cases
                </button>
              </a>
              <a href="/contact" className="inline-block">
                <button className="border border-primary text-primary hover:bg-primary/10 h-12 px-8 rounded-lg font-paragraph text-base transition-colors">
                  Get in Touch
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
