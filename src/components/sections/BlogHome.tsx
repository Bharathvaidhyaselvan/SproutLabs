import { motion } from 'motion/react';
import { SectionHeading } from '../common/SectionHeading';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: "5 Ways to Integrate STEM Learning at Home",
    category: "STEM Learning Tips",
    date: "Oct 12, 2023",
    excerpt: "Practical and fun ways parents can encourage scientific thinking and experimentation using everyday household items.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Why Coding is the New Essential Skill for Kids",
    category: "Innovation in Education",
    date: "Nov 05, 2023",
    excerpt: "Understanding why digital literacy and programming logic are becoming as fundamental as reading and writing.",
    image: "https://images.unsplash.com/photo-1515524738708-327f6b0037a7?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Building Confidence Through Robotics Competitions",
    category: "Student Success Stories",
    date: "Dec 18, 2023",
    excerpt: "How challenge-based learning and teamwork in robotics competitions help students develop resilience and leadership.",
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=600&auto=format&fit=crop"
  }
];

export default function BlogHome({ showViewAll = true }: { showViewAll?: boolean }) {
  return (
    <section className="relative bg-white py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading 
          eyebrow="Our Blogs"
          title="Insights, Ideas, and Learning Stories"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-[32px] border border-brand-paleblue bg-brand-offwhite shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-teal backdrop-blur">
                  {blog.category}
                </div>
              </div>
              
              <div className="flex flex-1 flex-col p-6">
                <span className="mb-3 text-sm font-medium text-brand-orange">{blog.date}</span>
                <h3 className="mb-3 line-clamp-2 font-heading text-xl font-bold text-brand-navy">
                  {blog.title}
                </h3>
                <p className="mb-6 flex-1 line-clamp-3 text-sm leading-relaxed text-brand-navy/70">
                  {blog.excerpt}
                </p>
                
                <Link to="/blog" className="mt-auto inline-flex items-center gap-2 font-bold text-brand-teal transition-colors group-hover:text-brand-orange">
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {showViewAll && (
          <div className="mt-12 text-center">
            <Link to="/blog" className="inline-flex items-center justify-center rounded-full border-2 border-brand-navy bg-transparent px-8 py-3.5 font-bold text-brand-navy transition-all duration-300 hover:bg-brand-navy hover:text-white">
              View All Posts
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
