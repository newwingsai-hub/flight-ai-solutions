import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Plane, Package, Rocket, GraduationCap, Shield, Building2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BaseCrudService } from '@/integrations';
import { MarketUseCases } from '@/entities';
import { Image } from '@/components/ui/image';

export default function MarketPage() {
  const [useCases, setUseCases] = useState<MarketUseCases[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUseCases = async () => {
      try {
        const { items } = await BaseCrudService.getAll<MarketUseCases>('marketusecases');
        setUseCases(items);
      } catch (error) {
        console.error('Error fetching use cases:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUseCases();
  }, []);

  const defaultSegments = [
    {
      icon: Plane,
      title: 'Commercial Airlines',
      description:
        'Major airlines adopting hybrid-electric aircraft for short and medium-haul routes to reduce fuel costs and meet sustainability targets.',
      benefits: 'Reduce operating costs by 30%, lower emissions, improve brand reputation',
      color: 'text-primary',
      bgColor: 'bg-primary/20',
    },
    {
      icon: Package,
      title: 'Cargo Operators',
      description:
        'Freight companies using electric aircraft for last-mile delivery and regional cargo operations with optimized energy management.',
      benefits: 'Lower delivery costs, faster turnaround times, sustainable logistics',
      color: 'text-light-blue',
      bgColor: 'bg-light-blue/20',
    },
    {
      icon: Rocket,
      title: 'Advanced Air Mobility',
      description:
        'Urban air mobility and eVTOL operators requiring precise energy optimization for safe, efficient passenger and cargo transport.',
      benefits: 'Extended range, improved safety, optimized battery life',
      color: 'text-secondary',
      bgColor: 'bg-secondary/20',
    },
    {
      icon: GraduationCap,
      title: 'Flight Schools',
      description:
        'Training institutions using electric aircraft to reduce costs and teach next-generation pilots sustainable flight practices.',
      benefits: 'Lower training costs, modern curriculum, attract students',
      color: 'text-dark-green',
      bgColor: 'bg-dark-green/20',
    },
    {
      icon: Shield,
      title: 'Defense & Government',
      description:
        'Military and government agencies exploring hybrid-electric aircraft for reconnaissance, surveillance, and specialized missions.',
      benefits: 'Reduced fuel dependency, quieter operations, strategic advantage',
      color: 'text-destructive',
      bgColor: 'bg-destructive/20',
    },
    {
      icon: Building2,
      title: 'Private Aviation',
      description:
        'Business jet operators and charter services adopting sustainable technology while maintaining performance and luxury.',
      benefits: 'Premium sustainability, cost efficiency, competitive edge',
      color: 'text-primary',
      bgColor: 'bg-primary/20',
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="font-paragraph text-sm text-primary">Market Applications</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
              Market & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-blue">Use Cases</span>
            </h1>
            <p className="font-paragraph text-xl text-foreground/70 leading-relaxed">
              Our AI-powered flight optimization solution serves diverse aviation sectors, from commercial airlines to
              advanced air mobility operators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Market Segments from CMS */}
      {!loading && useCases.length > 0 && (
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
                Target <span className="text-primary">Markets</span>
              </h2>
              <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto">
                Serving the full spectrum of aviation operators
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-foreground/5 backdrop-blur-lg rounded-2xl border border-primary/10 overflow-hidden hover:border-primary/30 transition-all group"
                >
                  {useCase.segmentImage && (
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={useCase.segmentImage}
                        alt={useCase.segmentName || 'Market segment'}
                        width={600}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                      {useCase.segmentName}
                    </h3>
                    {useCase.segmentDescription && (
                      <p className="font-paragraph text-base text-foreground/60 mb-4 leading-relaxed">
                        {useCase.segmentDescription}
                      </p>
                    )}
                    {useCase.useCaseTitle && (
                      <div className="mb-3">
                        <h4 className="font-heading text-sm font-semibold text-primary mb-1">
                          {useCase.useCaseTitle}
                        </h4>
                      </div>
                    )}
                    {useCase.useCaseBenefits && (
                      <p className="font-paragraph text-sm text-foreground/60 leading-relaxed">
                        {useCase.useCaseBenefits}
                      </p>
                    )}
                    {useCase.keyBenefitHighlight && (
                      <div className="mt-4 pt-4 border-t border-primary/10">
                        <p className="font-paragraph text-sm font-semibold text-primary">
                          {useCase.keyBenefitHighlight}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Default Market Segments */}
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
              Industry <span className="text-primary">Applications</span>
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto">
              Our technology adapts to the unique needs of each aviation sector
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {defaultSegments.map((segment, index) => {
              const Icon = segment.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-foreground/5 backdrop-blur-lg rounded-2xl border border-primary/10 p-8 hover:border-primary/30 transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl ${segment.bgColor} flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${segment.color}`} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{segment.title}</h3>
                  <p className="font-paragraph text-base text-foreground/60 mb-4 leading-relaxed">
                    {segment.description}
                  </p>
                  <div className="pt-4 border-t border-primary/10">
                    <p className="font-paragraph text-sm text-primary font-semibold mb-1">Key Benefits:</p>
                    <p className="font-paragraph text-sm text-foreground/60">{segment.benefits}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
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
                A Growing <span className="text-primary">Market Opportunity</span>
              </h2>
              <p className="font-paragraph text-lg text-foreground/70 mb-6 leading-relaxed">
                The electric and hybrid-electric aircraft market is experiencing rapid growth, driven by environmental
                regulations, rising fuel costs, and technological advances.
              </p>
              <p className="font-paragraph text-lg text-foreground/70 mb-6 leading-relaxed">
                Industry analysts project the market will reach $27 billion by 2030, with thousands of hybrid and
                electric aircraft entering service across all sectors.
              </p>
              <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
                Our AI-powered optimization solution is positioned to become essential infrastructure for this emerging
                market.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-primary/10 to-light-blue/10 backdrop-blur-lg rounded-2xl border border-primary/20 p-12">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-8">Market Projections</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-paragraph text-sm text-foreground/70">Market Size (2030)</span>
                      <span className="font-heading text-2xl font-bold text-primary">$27B</span>
                    </div>
                    <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-light-blue"
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-paragraph text-sm text-foreground/70">Annual Growth Rate</span>
                      <span className="font-heading text-2xl font-bold text-light-blue">24%</span>
                    </div>
                    <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-light-blue to-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: '70%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-paragraph text-sm text-foreground/70">Aircraft in Service (2030)</span>
                      <span className="font-heading text-2xl font-bold text-dark-green">15K+</span>
                    </div>
                    <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-dark-green to-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.9 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Ready to Lead Your Industry?
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
              Join the sustainable aviation revolution with AI-powered flight optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/team" className="inline-block">
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-lg font-paragraph text-base transition-colors">
                  Meet Our Team
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
