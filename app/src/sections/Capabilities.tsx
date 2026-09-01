import { useInView } from '@/hooks/useInView';
import { Globe, Share2, BarChart3, Film } from 'lucide-react';

const capabilities = [
  {
    icon: Globe,
    title: 'DIGITAL MARKETING STRATEGY',
    skills: ['Consumer Insight', 'Market Strategy', 'Localization', 'Cross-border'],
  },
  {
    icon: Share2,
    title: 'CONTENT & GROWTH',
    skills: ['Content Strategy', 'Short-form', 'IP Strategy', 'Platform Growth'],
  },
  {
    icon: BarChart3,
    title: 'DATA & PERFORMANCE',
    skills: ['Analytics', 'Funnel', 'Conversion', 'Dashboard', 'ROI'],
  },
  {
    icon: Film,
    title: 'GLOBAL DIGITAL MARKET & AI',
    skills: ['Douyin', 'Xiaohongshu', 'Instagram', 'TikTok Shop', 'China Digital Ecosystem', 'Generative AI'],
  },
];

function CapabilityCard({
  capability,
  index,
}: {
  capability: (typeof capabilities)[0];
  index: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const Icon = capability.icon;
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-800 ease-expo-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${200 + index * 150}ms` }}
    >
      <div
        className={`relative bg-white p-8 lg:p-10 h-full transition-all duration-400 ease-expo-out group-hover:shadow-card-hover group-hover:-translate-y-2 ${
          isEven ? 'lg:-rotate-1' : 'lg:rotate-1'
        } group-hover:rotate-0`}
        style={{
          clipPath: 'polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0 50%)',
        }}
      >
        {/* Icon */}
        <div
          className={`inline-flex items-center justify-center w-14 h-14 mb-6 bg-portfolio-black text-white transition-all duration-600 ease-spring ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{ transitionDelay: `${400 + index * 150}ms` }}
        >
          <Icon size={24} />
        </div>

        {/* Title */}
        <h3 className="text-subtitle text-portfolio-black mb-6 group-hover:translate-x-1 transition-transform duration-400 ease-expo-out">
          {capability.title}
        </h3>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {capability.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-medium text-portfolio-dark-grey bg-portfolio-bg rounded-full transition-all duration-300 group-hover:bg-portfolio-light-grey"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-portfolio-light-grey/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}

export function Capabilities() {
  const { ref: headerRef, isInView: headerInView } = useInView<HTMLDivElement>({ threshold: 0.5 });

  return (
    <section className="py-24 lg:py-32 bg-portfolio-bg">
      <div className="section-padding">
        <div className="container-wide">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 lg:mb-20 transition-all duration-800 ease-expo-out ${
              headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">
              전문 분야
            </span>
            <h2 className="text-headline text-portfolio-black">역량</h2>
          </div>

          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {capabilities.map((capability, index) => (
              <CapabilityCard key={capability.title} capability={capability} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
