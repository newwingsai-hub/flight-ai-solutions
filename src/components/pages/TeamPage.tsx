import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Users, Award, Linkedin, Target, Lightbulb, Rocket } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BaseCrudService } from '@/integrations';
import { TeamMembers } from '@/entities';
import { Image } from '@/components/ui/image';

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMembers[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const { items } = await BaseCrudService.getAll<TeamMembers>('teammembers');
        setTeamMembers(items);
      } catch (error) {
        console.error('Error fetching team members:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing boundaries with creative solutions to complex aviation challenges',
      color: 'text-primary',
      bgColor: 'bg-primary/20',
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'Focused on creating measurable environmental and economic benefits',
      color: 'text-dark-green',
      bgColor: 'bg-dark-green/20',
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'Committed to the highest standards in technology and execution',
      color: 'text-light-blue',
      bgColor: 'bg-light-blue/20',
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
              <Users className="w-4 h-4 text-primary" />
              <span className="font-paragraph text-sm text-primary">Student Innovation</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
              About Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-blue">Team</span>
            </h1>
            <p className="font-paragraph text-xl text-foreground/70 leading-relaxed">
              A passionate team of students creating innovative solutions for sustainable aviation as part of the Conrad
              Challenge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conrad Challenge Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-blue-900/5 to-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                The <span className="text-primary">Conrad Challenge</span>
              </h2>
              <p className="font-paragraph text-lg text-foreground/70 mb-6 leading-relaxed">
                The Conrad Challenge is a premier innovation competition that empowers students to create solutions to
                real-world problems. Named after astronaut Pete Conrad, it challenges young innovators to think big and
                develop products that can make a difference.
              </p>
              <p className="font-paragraph text-lg text-foreground/70 mb-6 leading-relaxed">
                Our team chose to tackle one of aviation's most pressing challenges: optimizing energy management in
                hybrid-electric aircraft. We saw an opportunity to combine our passion for technology with the urgent
                need for sustainable aviation solutions.
              </p>
              <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
                What started as a competition project has evolved into a comprehensive AI-powered solution with real
                potential to transform the aviation industry.
              </p>
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
                    className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-primary/30 blur-xl"
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
                    className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-light-blue/30 blur-xl"
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
                    <Award className="w-40 h-40 text-primary/40" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members from CMS */}
      {!loading && teamMembers.length > 0 && (
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
                Meet the <span className="text-primary">Team</span>
              </h2>
              <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto">
                Passionate students working together to revolutionize sustainable aviation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-foreground/5 backdrop-blur-lg rounded-2xl border border-primary/10 overflow-hidden hover:border-primary/30 transition-all group"
                >
                  {member.profilePicture && (
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={member.profilePicture}
                        alt={member.name || 'Team member'}
                        width={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">{member.name}</h3>
                    {member.role && (
                      <p className="font-paragraph text-base text-primary mb-3">{member.role}</p>
                    )}
                    {member.conradChallengeRole && (
                      <p className="font-paragraph text-sm text-foreground/60 mb-3">
                        Conrad Role: {member.conradChallengeRole}
                      </p>
                    )}
                    {member.background && (
                      <p className="font-paragraph text-sm text-foreground/60 mb-4 leading-relaxed">
                        {member.background}
                      </p>
                    )}
                    {member.linkedInUrl && (
                      <a
                        href={member.linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <Linkedin size={18} />
                        <span className="font-paragraph text-sm">Connect on LinkedIn</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Values */}
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
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto">
              The principles that guide our work and drive our innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-foreground/5 backdrop-blur-lg rounded-2xl border border-primary/10 p-8 hover:border-primary/30 transition-all text-center"
                >
                  <div className={`w-16 h-16 rounded-xl ${value.bgColor} flex items-center justify-center mx-auto mb-6`}>
                    <Icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="font-paragraph text-base text-foreground/60 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Our <span className="text-primary">Journey</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-foreground/5 backdrop-blur-lg rounded-2xl border border-primary/10 p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Research & Discovery</h3>
                <p className="font-paragraph text-base text-foreground/60 leading-relaxed">
                  We began by researching the challenges facing hybrid-electric aviation, interviewing industry experts,
                  and analyzing real flight data to understand the problem deeply.
                </p>
              </div>
              <div className="bg-foreground/5 backdrop-blur-lg rounded-2xl border border-primary/10 p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Development & Testing</h3>
                <p className="font-paragraph text-base text-foreground/60 leading-relaxed">
                  Our team developed machine learning algorithms, built prototypes, and tested our solution against
                  historical flight data to validate its effectiveness.
                </p>
              </div>
              <div className="bg-foreground/5 backdrop-blur-lg rounded-2xl border border-primary/10 p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Impact & Future</h3>
                <p className="font-paragraph text-base text-foreground/60 leading-relaxed">
                  Today, our AI-powered solution is ready to help aviation operators reduce emissions, lower costs, and
                  lead the transition to sustainable flight. We're excited about the future possibilities.
                </p>
              </div>
            </div>
          </motion.div>
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
              Want to Learn More?
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
              Get in touch to discuss partnerships, collaborations, or learn more about our innovation
            </p>
            <a href="/contact" className="inline-block">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-lg font-paragraph text-base transition-colors">
                Contact Us
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
