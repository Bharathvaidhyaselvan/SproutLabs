import { SectionHeading } from '../common/SectionHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Parent of Grade 5 Student",
    text: "SproutLabs completely changed how my son sees learning. He used to find science boring, but the hands-on robotics workshops made him so excited to learn and build things himself.",
    rating: 5
  },
  {
    id: 2,
    name: "Dr. Rajesh K.",
    role: "School Principal",
    text: "Partnering with SproutLabs to set up our innovation club has been a fantastic decision. The curriculum is well-structured, and their facilitators are excellent with the students.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya T.",
    role: "Parent of Grade 8 Student",
    text: "The coding and digital creativity course gave my daughter the confidence to build her own app. I love that the focus is on practical creation, not just theory.",
    rating: 5
  },
  {
    id: 4,
    name: "Anil D.",
    role: "Academic Coordinator",
    text: "The weekend STEM workshops are always fully booked. SproutLabs brings a level of energy and practical expertise that perfectly complements our academic curriculum.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-brand-cream py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading 
          eyebrow="Testimonials"
          title="Parents' Words Are the Key to Happy Kids"
        />

        <div className="mt-16">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-bullet-custom',
              bulletActiveClass: 'swiper-bullet-custom-active',
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="testimonials-swiper !overflow-visible pb-14"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="!h-auto">
                <div className="mt-6 flex h-full min-h-[320px] flex-col rounded-[32px] border border-brand-paleblue bg-white p-8 pt-10 shadow-sm">
                  <div className="absolute -top-0 left-8 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-brand-yellow text-white shadow-sm">
                    <Quote className="h-6 w-6 fill-current" />
                  </div>
                  
                  <div className="relative mb-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="flex-1 text-brand-navy/80 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="mt-6 border-t border-brand-paleblue pt-6">
                    <h4 className="font-heading font-bold text-brand-navy">{testimonial.name}</h4>
                    <p className="text-sm text-brand-navy/60">{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <style>{`
            .testimonials-swiper .swiper-wrapper {
              align-items: stretch;
              display: flex;
            }
            .testimonials-swiper .swiper-slide {
              height: auto;
              display: flex;
              box-sizing: border-box;
            }
            .testimonials-swiper .swiper-slide > div {
              position: relative;
              width: 100%;
            }
            .testimonials-swiper .swiper-pagination {
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 0;
            }
            .swiper-bullet-custom {
              width: 10px;
              height: 10px;
              display: inline-block;
              border-radius: 50%;
              background: #73A9B6;
              opacity: 0.3;
              margin: 0 5px;
              cursor: pointer;
              transition: all 0.3s;
            }
            .swiper-bullet-custom-active {
              opacity: 1;
              width: 24px;
              border-radius: 5px;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
