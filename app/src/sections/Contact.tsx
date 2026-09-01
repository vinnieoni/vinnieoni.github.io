import { useInView } from '@/hooks/useInView';
import { Mail, MapPin, Linkedin, Instagram, Palette } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Palette, label: 'Behance', href: '#' },
];

export function Contact() {
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-portfolio-bg relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-portfolio-light-grey/20 transition-all duration-1000 ease-expo-out ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{ transitionDelay: '0.5s' }}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-portfolio-light-grey/30 transition-all duration-1000 ease-expo-out ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{ transitionDelay: '0.7s' }}
        />
      </div>

      <div className="section-padding relative z-10">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            {/* Eyebrow */}
            <div
              className={`mb-6 transition-all duration-600 ease-expo-out ${
                isInView ? 'opacity-100 tracking-[0.2em]' : 'opacity-0 tracking-[0.5em]'
              }`}
            >
              <span className="text-caption text-portfolio-grey">연락처</span>
            </div>

            {/* Title */}
            <h2
              className={`text-headline text-portfolio-black mb-6 transition-all duration-800 ease-expo-out ${
                isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '0.15s' }}
            >
              함께 일해요
            </h2>

            {/* Description */}
            <p
              className={`text-body-large text-portfolio-dark-grey mb-12 transition-all duration-500 ease-expo-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '0.35s' }}
            >
              AI 미디어, 크로스볼더 마케팅, 디지털 전략 프로젝트에 대해 언제든 연락 주세요.
            </p>

            {/* Email */}
            <div
              className={`mb-8 transition-all duration-600 ease-expo-out ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              <a
                href="mailto:wenqing9912@gmail.com"
                className="group inline-flex items-center gap-3 text-xl font-medium text-portfolio-black underline-animate"
              >
                <Mail size={20} className="text-portfolio-grey group-hover:text-portfolio-black transition-colors" />
                <span>wenqing9912@gmail.com</span>
              </a>
            </div>

            {/* Location */}
            <div
              className={`mb-10 transition-all duration-600 ease-expo-out ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              <div className="inline-flex items-center gap-2 text-body text-portfolio-grey">
                <MapPin size={16} />
                <span>서울, 대한민국</span>
              </div>
            </div>

            {/* Social Links */}
            <div
              className={`flex items-center justify-center gap-4 mb-12 transition-all duration-500 ease-expo-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.7s' }}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 ease-expo-out hover:-translate-y-1"
                    aria-label={social.label}
                    style={{ transitionDelay: `${0.75 + index * 0.05}s` }}
                  >
                    <Icon
                      size={20}
                      className="text-portfolio-grey group-hover:text-portfolio-black transition-colors"
                    />
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <div
              className={`transition-all duration-700 ease-spring ${
                isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
              style={{ transitionDelay: '0.9s' }}
            >
              <a
                href="mailto:wenqing9912@gmail.com"
                className="group relative inline-flex items-center gap-2 px-10 py-4 bg-portfolio-black text-portfolio-white text-sm font-semibold tracking-wide overflow-hidden transition-all duration-300 ease-expo-out hover:shadow-button hover:-translate-y-1 hover:scale-105 active:scale-98"
              >
                <span className="relative z-10">메일 본문</span>
                <span className="absolute inset-0 bg-portfolio-dark-grey transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-expo-out" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
