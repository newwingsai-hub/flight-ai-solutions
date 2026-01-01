import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BaseCrudService } from '@/integrations';
import { ContactSubmissions } from '@/entities';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    inquiryType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submission: ContactSubmissions = {
        _id: crypto.randomUUID(),
        fullName: formData.fullName,
        email: formData.email,
        subject: formData.subject,
        inquiryType: formData.inquiryType,
        message: formData.message,
        submissionDate: new Date().toISOString(),
      };

      await BaseCrudService.create('contactsubmissions', submission);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        inquiryType: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-blue-900/10">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Mail className="w-4 h-4 text-primary" />
              <span className="font-paragraph text-sm text-primary">Get in Touch</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light-blue">Us</span>
            </h1>
            <p className="font-paragraph text-xl text-foreground/70 leading-relaxed">
              Have questions about our AI-powered flight optimization solution? Interested in partnerships or
              collaborations? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Contact <span className="text-primary">Us</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Email Us</h3>
                    <p className="font-paragraph text-base text-foreground/60">contact@flightai.com</p>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {isSubmitted ? (
                <div className="bg-gradient-to-br from-dark-green/10 to-primary/10 backdrop-blur-lg rounded-2xl border border-primary/20 p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-dark-green/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-dark-green" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Message Sent!</h3>
                  <p className="font-paragraph text-base text-foreground/70 mb-8">
                    Thank you for reaching out. We'll get back to you within 24-48 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-paragraph"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-foreground/5 backdrop-blur-lg rounded-2xl border border-primary/10 p-8">
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="fullName" className="font-paragraph text-sm text-foreground mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        className="bg-background/50 border-primary/20 focus:border-primary text-foreground"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="font-paragraph text-sm text-foreground mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="bg-background/50 border-primary/20 focus:border-primary text-foreground"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="inquiryType" className="font-paragraph text-sm text-foreground mb-2 block">
                        Inquiry Type *
                      </Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleChange('inquiryType', value)} required>
                        <SelectTrigger className="bg-background/50 border-primary/20 focus:border-primary text-foreground">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="demo">Request a Demo</SelectItem>
                          <SelectItem value="technical">Technical Question</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="media">Media/Press</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="font-paragraph text-sm text-foreground mb-2 block">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        className="bg-background/50 border-primary/20 focus:border-primary text-foreground"
                        placeholder="Brief subject of your inquiry"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="font-paragraph text-sm text-foreground mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className="bg-background/50 border-primary/20 focus:border-primary text-foreground min-h-[150px]"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-lg font-paragraph text-base"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      {/* Additional Info */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-blue-900/5 to-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Interested in <span className="text-primary">Collaboration?</span>
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 mb-8 leading-relaxed">
              We're always looking for opportunities to collaborate with aviation companies, research institutions, and
              fellow innovators. Whether you're interested in testing our solution, exploring partnerships, or simply
              learning more about our technology, we'd love to connect.
            </p>
            <p className="font-paragraph text-base text-foreground/60">
              As a Conrad Challenge project, we're committed to making a real impact on sustainable aviation. Let's work
              together to build a cleaner, more efficient future for flight.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
