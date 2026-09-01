import { useEffect, useState } from 'react';
import { ArrowRight, Mail, Globe, Share2, Target, Sparkles } from 'lucide-react';

const glanceFacts = [
  { icon: Globe, label: 'MARKETS', value: 'Korea · China · US' },
  { icon: Share2, label: 'PLATFORMS', value: 'Douyin · Xiaohongshu · TikTok Shop · Instagram' },
  { icon: Target, label: 'FOCUS', value: 'New Channel Launch · Content Strategy' },
  { icon: Sparkles, label: 'TOOLS', value: 'Generative AI · BI Dashboarding' },
];

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-portfolio-bg"
    >
      <div className="section-padding w-full pt-24 pb-16">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-10rem)]">
            {/* Left Content - At a Glance */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div
                className={`relative w-full max-w-[400px] transition-all duration-1000 ease-expo-out ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '0.3s' }}
              >
                <div className="relative bg-white p-8 sm:p-10">
                  <span className="text-caption text-portfolio-grey tracking-[0.2em] block mb-8">
                    AT A GLANCE
                  </span>
                  <div className="space-y-7">
                    {glanceFacts.map((fact) => {
                      const Icon = fact.icon;
                      return (
                        <div key={fact.label}>
                          <div className="flex items-center gap-2 mb-2">
                            <Icon size={15} className="text-portfolio-grey" />
                            <span className="text-small text-portfolio-grey tracking-[0.1em]">
                              {fact.label}
                            </span>
                          </div>
                          <p className="text-body font-medium text-portfolio-black">{fact.value}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* Decorative Frame */}
                <div
                  className={`absolute -bottom-4 -right-4 w-full h-full border-2 border-portfolio-black -z-10 transition-all duration-800 ease-expo-out ${
                    isLoaded ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-4 translate-y-4'
                  }`}
                  style={{ transitionDelay: '0.6s' }}
                />
              </div>
            </div>

            {/* Right Content - Text */}
            <div className="flex flex-col justify-center order-1 lg:order-2">
              {/* Name */}
              <div
                className={`mb-4 transition-all duration-600 ease-expo-out ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: '0.2s' }}
              >
                <span className="text-caption text-portfolio-grey tracking-[0.2em]">
                  서문청
                </span>
              </div>

              {/* Main Title */}
              <h1 className="mb-6">
                <span
                  className={`block text-display text-portfolio-black leading-[1.15] transition-all duration-800 ease-expo-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: '0.4s' }}
                >
                  DIGITAL
                </span>
                <span
                  className={`block text-display text-portfolio-black leading-[1.15] transition-all duration-800 ease-expo-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: '0.5s' }}
                >
                  MARKETING
                </span>
                <span
                  className={`block text-display text-portfolio-black leading-[1.15] transition-all duration-800 ease-expo-out ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: '0.6s' }}
                >
                  STRATEGIST
                </span>
              </h1>

              {/* Keywords */}
              <p
                className={`text-small font-medium text-portfolio-black tracking-[0.15em] mb-6 transition-all duration-600 ease-expo-out ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: '0.7s' }}
              >
                Cross-border Growth · Content · Data · Gen AI
              </p>

              {/* Subtitle */}
              <p
                className={`text-body-large text-portfolio-dark-grey max-w-lg mb-10 leading-relaxed transition-all duration-700 ease-expo-out ${
                  isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-5 blur-sm'
                }`}
                style={{ transitionDelay: '0.8s' }}
              >
                시장과 소비자에 대한 이해를 바탕으로 콘텐츠 전략부터 실행, 데이터 분석까지 연결하는 디지털 마케터입니다.
              </p>

              {/* Small Info */}
              <p
                className={`text-caption text-portfolio-grey tracking-[0.15em] mb-10 -mt-4 transition-all duration-600 ease-expo-out ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: '0.9s' }}
              >
                Global Market Expertise · Korea-based Experience
              </p>

              {/* Buttons */}
              <div
                className={`flex flex-wrap gap-4 transition-all duration-600 ease-spring ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '1s' }}
              >
                <button
                  onClick={handleScrollToProjects}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-portfolio-black text-portfolio-white text-sm font-semibold tracking-wide overflow-hidden transition-all duration-300 ease-expo-out hover:shadow-button hover:-translate-y-1"
                >
                  <span className="relative z-10">View Projects</span>
                  <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  <span className="absolute inset-0 bg-portfolio-dark-grey transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-expo-out" />
                </button>
                <button
                  onClick={handleScrollToContact}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 border-2 border-portfolio-black text-portfolio-black text-sm font-semibold tracking-wide overflow-hidden transition-all duration-300 ease-expo-out hover:bg-portfolio-black hover:text-white hover:-translate-y-1"
                >
                  <span>Contact</span>
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
