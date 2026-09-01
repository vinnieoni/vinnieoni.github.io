import { useInView } from '@/hooks/useInView';
import { MapPin, GraduationCap, Languages } from 'lucide-react';

const details = [
  {
    icon: MapPin,
    label: '위치',
    value: '서울, 대한민국',
  },
  {
    icon: GraduationCap,
    label: '학력',
    value: '영화학과 석사',
  },
  {
    icon: Languages,
    label: '언어',
    value: '中文 Native · 한국어 TOPIK 6급 · English',
  },
];

export function About() {
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.15 });
  const { ref: imageRef, isInView: imageInView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-portfolio-bg overflow-hidden"
    >
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
            {/* Image Column */}
            <div
              ref={imageRef}
              className="lg:col-span-2 relative flex justify-center lg:justify-start"
            >
              <div
                className={`relative transition-all duration-1000 ease-expo-out ${
                  imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                }`}
              >
                {/* Image Container */}
                <div className="relative w-[280px] sm:w-[320px] lg:w-full max-w-[380px] aspect-[4/5] overflow-hidden group">
                  <img
                    src="/profile.jpg"
                    alt="서문청"
                    className="w-full h-full object-cover group-hover:scale-103 transition-all duration-700 ease-expo-out"
                  />
                </div>

                {/* Floating Frame */}
                <div
                  className={`absolute -bottom-4 -right-4 w-full h-full border-2 border-portfolio-black -z-10 transition-all duration-800 ease-expo-out ${
                    imageInView
                      ? 'opacity-100 translate-x-5 translate-y-5'
                      : 'opacity-0 translate-x-10 translate-y-10'
                  }`}
                  style={{ transitionDelay: '0.3s' }}
                />

                {/* Decorative Element */}
                <div
                  className={`absolute -top-6 -left-6 w-24 h-24 border border-portfolio-light-grey transition-all duration-800 ease-expo-out ${
                    imageInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}
                  style={{ transitionDelay: '0.5s' }}
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-3 lg:pl-8">
              {/* Eyebrow */}
              <div
                className={`mb-4 transition-all duration-600 ease-expo-out ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: '0.2s' }}
              >
                <span className="text-caption text-portfolio-grey tracking-[0.2em]">
                  ABOUT ME
                </span>
              </div>

              {/* Name */}
              <h2
                className={`text-headline text-portfolio-black mb-2 transition-all duration-700 ease-expo-out ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.3s' }}
              >
                서문청
              </h2>

              {/* Title */}
              <p
                className={`text-subtitle text-portfolio-dark-grey mb-8 transition-all duration-600 ease-expo-out ${
                  isInView ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
                }`}
                style={{ transitionDelay: '0.5s' }}
              >
                Digital Marketing Strategist
              </p>

              {/* Bio */}
              <div className="space-y-4 mb-10">
                {[
                  '한국을 기반으로 Cross-border Digital Marketing 실무를 수행하며, 중국 디지털 생태계에 대한 시장 이해와 Douyin·Xiaohongshu 등 주요 플랫폼 실행 경험을 보유하고 있습니다.',
                  '시장 조사와 전략 수립부터 콘텐츠 실행, 성과 분석, 마케팅 데이터 시스템 구축까지 연결합니다. Generative AI는 콘텐츠 실행과 업무 효율화를 위한 실무 도구로 활용합니다.',
                ].map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-body-large text-portfolio-dark-grey leading-relaxed transition-all duration-500 ease-expo-out ${
                      isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                    style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Details */}
              <div
                className={`grid sm:grid-cols-3 gap-6 pt-8 border-t border-portfolio-light-grey transition-all duration-600 ease-expo-out ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.9s' }}
              >
                {details.map((detail, index) => {
                  const Icon = detail.icon;
                  return (
                    <div
                      key={detail.label}
                      className="transition-all duration-500 ease-expo-out"
                      style={{ transitionDelay: `${1 + index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={16} className="text-portfolio-grey" />
                        <span className="text-small text-portfolio-grey">{detail.label}</span>
                      </div>
                      <p className="text-body font-medium text-portfolio-black">{detail.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
