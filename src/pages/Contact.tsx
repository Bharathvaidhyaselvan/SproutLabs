import { motion } from 'motion/react';
import { WaveTop } from '../components/common/Waves';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '../components/common/Button';

export default function Contact() {
  return (
    <>
      {/* Inner Page Hero */}
      <section className="bg-brand-cream pt-20 pb-24 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-navy mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-brand-navy/70 text-sm font-bold uppercase tracking-wider"
          >
            <span>Home</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
            <span className="text-brand-teal">Contact Us</span>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 z-20 w-full">
          <WaveTop fill="fill-brand-offwhite" />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Info */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-3xl font-heading font-black text-brand-navy mb-4">Get In Touch</h2>
              <p className="text-brand-navy/70 text-lg leading-relaxed">
                Whether you're a school looking to integrate STEM, a parent wanting to know more about our clubs, or an educator wanting to collaborate, we'd love to hear from you.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-brand-cream flex items-center justify-center shrink-0 border border-brand-yellow/30">
                  <MapPin className="w-7 h-7 text-brand-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-brand-navy mb-2">Our Location</h3>
                  <p className="text-brand-navy/70 leading-relaxed">
                    SproutLabs <br/>
                    4/350, Valluvar Salai, Rayala Nagar,<br/>
                    Ramapuram, Chennai - 600056
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-brand-paleblue flex items-center justify-center shrink-0 border border-brand-teal/30">
                  <Phone className="w-7 h-7 text-brand-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-brand-navy mb-2">Phone Number</h3>
                  <a href="tel:+917397499945" className="text-brand-navy/70 leading-relaxed hover:text-brand-teal transition-colors">
                    +91 7397499945
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-brand-lavender flex items-center justify-center shrink-0 border border-purple-200">
                  <Mail className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-brand-navy mb-2">Email Address</h3>
                  <a href="mailto:learn@sproutlabs.in" className="text-brand-navy/70 leading-relaxed hover:text-purple-600 transition-colors">
                    learn@sproutlabs.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-brand-paleblue">
            <h3 className="text-2xl font-heading font-black text-brand-navy mb-8">Send an Enquiry</h3>

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-brand-navy">Name *</label>
                  <input type="text" id="name" className="px-5 py-4 rounded-2xl bg-brand-cream/50 border border-transparent focus:border-brand-teal focus:bg-white outline-none transition-all" placeholder="John Doe" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-brand-navy">Email *</label>
                  <input type="email" id="email" className="px-5 py-4 rounded-2xl bg-brand-cream/50 border border-transparent focus:border-brand-teal focus:bg-white outline-none transition-all" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-bold text-brand-navy">Phone Number *</label>
                  <input type="tel" id="phone" className="px-5 py-4 rounded-2xl bg-brand-cream/50 border border-transparent focus:border-brand-teal focus:bg-white outline-none transition-all" placeholder="+91 xxxxx xxxxx" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="institution" className="text-sm font-bold text-brand-navy">Institution (Optional)</label>
                  <input type="text" id="institution" className="px-5 py-4 rounded-2xl bg-brand-cream/50 border border-transparent focus:border-brand-teal focus:bg-white outline-none transition-all" placeholder="School / College Name" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="program" className="text-sm font-bold text-brand-navy">Preferred Program</label>
                <select id="program" className="px-5 py-4 rounded-2xl bg-brand-cream/50 border border-transparent focus:border-brand-teal focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                  <option value="">Select a program...</option>
                  <option value="stem">Foundational STEM Experiences</option>
                  <option value="coding">Coding and Digital Creativity</option>
                  <option value="innovation">Innovation and Design Thinking</option>
                  <option value="certified">Certified Three-Month Learning Pathways</option>
                  <option value="competitions">Competitions and Challenge-Based Learning</option>
                  <option value="custom">Custom Programs for Institutions</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-brand-navy">Message / Requirement *</label>
                <textarea id="message" rows={4} className="px-5 py-4 rounded-2xl bg-brand-cream/50 border border-transparent focus:border-brand-teal focus:bg-white outline-none transition-all resize-none" placeholder="Tell us how we can help..." required></textarea>
              </div>

              <Button type="submit" variant="primary" className="mt-4 gap-2 py-4">
                Send Enquiry
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}
