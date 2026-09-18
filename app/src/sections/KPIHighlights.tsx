import { useEffect, useState, useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { Film, Eye, Users, TrendingUp } from 'lucide-react';

const stats = [
  {
    number: 200,
    suffix: '+',
    label: '콘텐츠 제작',
    icon: Film,
  },
  {
    number: 450,
    suffix: 'K+',
    label: '총 조회수',
    icon: Eye,
  },
  {
    number: 2100,
    suffix: '+',
    label: '팔로워 확보',
    icon: Users,
  },
  {
    number: 2.7,
    suffix: '%',
    label: '평균 참여율',
    icon: TrendingUp,
    isDecimal: true,
  },
];

function AnimatedNumber({
  value,
  suffix,
  isDecimal,
  isInView,
}: {
  value: number;
  suffix: string;
  isDecimal?: boolean;
  isInView: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out expo
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = easeOut * value;

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isInView, value]);

  const formattedValue = isDecimal
    ? displayValue.toFixed(1)
    : Math.floor(displayValue).toLocaleString();

  return (
    <span>
      {formattedValue}
      {suffix}
    </span>
  );
}

function StatCard({
  stat,
  index,
  isInView,
}: {
  stat: (typeof stats)[0];
  index: number;
  isInView: boolean;
}) {
  const Icon = stat.icon;

  return (
    <div
      className={`relative text-center p-8 transition-all duration-800 ease-expo-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${400 + index * 150}ms` }}
    >
      {/* Icon */}
      <div
        className={`inline-flex items-center justify-center w-12 h-12 mb-6 bg-portfolio-black text-white rounded-full transition-all duration-600 ease-spring ${
          isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{ transitionDelay: `${600 + index * 150}ms` }}
      >
        <Icon size={20} />
      </div>

      {/* Number */}
      <div className="text-display text-portfolio-black mb-2 tabular-nums">
        <AnimatedNumber
          value={stat.number}
          suffix={stat.suffix}
          isDecimal={stat.isDecimal}
          isInView={isInView}
        />
      </div>

      {/* Label */}
      <p
        className={`text-body text-portfolio-grey transition-all duration-500 ease-expo-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: `${800 + index * 150}ms` }}
      >
        {stat.label}
      </p>
    </div>
  );
}

export function KPIHighlights() {
  const { ref: sectionRef, isInView } = useInView<HTMLElement>({ threshold: 0.2 });
  const { ref: headerRef, isInView: headerInView } = useInView<HTMLDivElement>({ threshold: 0.5 });

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-portfolio-bg relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-portfolio-light-grey/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-portfolio-light-grey/20" />
      </div>

      <div className="section-padding relative z-10">
        <div className="container-wide">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 lg:mb-20 transition-all duration-800 ease-expo-out ${
              headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">
              성과 지표
            </span>
            <h2 className="text-headline text-portfolio-black">Performance Metrics</h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} isInView={isInView} />
            ))}
          </div>

          {/* Connecting Line SVG */}
          <svg
            className="absolute top-1/2 left-0 w-full h-px pointer-events-none hidden lg:block"
            style={{ transform: 'translateY(-50%)' }}
          >
            <line
              x1="15%"
              y1="0"
              x2="85%"
              y2="0"
              stroke="#E0E0E0"
              strokeWidth="1"
              strokeDasharray="8 8"
              className={`transition-all duration-1500 ease-out ${
                isInView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                strokeDashoffset: isInView ? 0 : 1000,
                transitionDelay: '0.2s',
              }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
