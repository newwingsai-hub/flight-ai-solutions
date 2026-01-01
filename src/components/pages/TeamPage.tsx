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

                    </div>
                  )}

                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Our Values */}
      {/* Our Journey */}
      {/* CTA */}
      <Footer />
    </div>
  );
}
