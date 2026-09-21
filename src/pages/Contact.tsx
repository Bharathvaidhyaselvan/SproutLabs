import { motion } from 'motion/react';
import { WaveTop } from '../components/common/Waves';
import { MapPin, Phone, Mail } from 'lucide-react';
import { EnquiryForm } from '../components/enquiry/EnquiryForm';

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
                    SproutLabs <br />
                    4/350, Valluvar Salai, Rayala Nagar,<br />
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
                  <a
                    href="tel:+917397499945"
                    className="text-brand-navy/70 leading-relaxed hover:text-brand-teal transition-colors"
                  >
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
                  <a
                    href="mailto:learn@sproutlabs.in"
                    className="text-brand-navy/70 leading-relaxed hover:text-purple-600 transition-colors"
                  >
                    learn@sproutlabs.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-brand-paleblue">
            <h3 className="text-2xl font-heading font-black text-brand-navy mb-8">Send an Enquiry</h3>
            <EnquiryForm idPrefix="contact-enquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
