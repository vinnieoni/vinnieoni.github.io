import { useInView } from '@/hooks/useInView';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  metrics: string;
  image: string | null;
  link: string | null;
  signals?: { value: string; label: string }[];
}

const projects: Project[] = [
  {
    id: 1,
    category: 'Cross-border Digital Marketing & Growth',
    title: 'HEALINGBREEZE / GU',
    description:
      "강남언니 운영사 힐링페이퍼 계열 Healthcare MSO — 0→1 중국 디지털 채널 구축부터 시장 조사, 콘텐츠 전략, 성장, 성과 분석까지",
    metrics: '2026.05.18 – Present',
    image: null,
    link: '#healingbreeze',
    signals: [
      { value: '0→1', label: 'DIGITAL CHANNEL BUILDING' },
      { value: '2.1K+', label: 'DOUYIN AUDIENCE' },
      { value: '22K+', label: 'ACCOUNT LIKES' },
      { value: '4', label: 'CHINA DIGITAL PLATFORMS' },
    ],
  },
  {
    id: 2,
    category: 'China SNS Growth & Localization',
    title: '탕화공부 마라탕 코리아',
    description: '중국 SNS 플랫폼 기반 디지털 마케팅 전략 수행',
    metrics: '166+ 콘텐츠 · 4개 플랫폼 동시 운영',
    image: '/tang-logo.jpg',
    link: '#casestudy',
  },
  {
    id: 3,
    category: 'AI Character IP & Creative Technology',
    title: 'MOOMOO: The Gate of Time',
    description: 'AI 기반 캐릭터 디자인 및 시각적 스토리텔링 프로젝트',
    metrics: '6개 캐릭터 · AI 이미지 생성 · 영상 제작',
    image: '/moomoo-cover.png',
    link: '#moomoo',
  },
  {
    id: 4,
    category: '의료 콘텐츠 마케팅',
    title: 'Korea Medical Content Marketing',
    description: '중국 타겟 의료 서비스 SNS 기반 콘텐츠 마케팅',
    metrics: '3개 계정 · 50+ 콘텐츠 · 800+ 반응',
    image: '/medical-content-1.jpg',
    link: '#medical',
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const isEven = index % 2 === 0;
  const isCaseStudy = project.link !== null;

  const cardContent = (
    <>
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-expo-out group-hover:scale-108"
          />
        ) : (
          /* Typographic Cover for main case study */
          <div className="w-full h-full bg-portfolio-black flex flex-col items-center justify-center gap-3 px-8 text-center">
            <span className="text-caption text-portfolio-grey tracking-[0.2em]">MAIN CASE STUDY</span>
            <span className="text-2xl lg:text-3xl font-bold text-white tracking-tight">HEALINGBREEZE / GU</span>
            <span className="text-small text-portfolio-grey">Building a Cross-border Digital Growth System</span>
          </div>
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 ease-expo-out" />
        
        {/* View Project Button */}
        {isCaseStudy && (
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-expo-out transform translate-y-2 group-hover:translate-y-0">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <ArrowUpRight size={20} className="text-portfolio-black" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        {/* Category */}
        <div className="relative mb-4 overflow-hidden">
          <span className="text-caption text-portfolio-grey">{project.category}</span>
          <div className="absolute bottom-0 left-0 w-0 h-px bg-portfolio-black group-hover:w-full transition-all duration-400 ease-expo-out" />
        </div>

        {/* Title */}
        <h3 className="text-title text-portfolio-black mb-3 group-hover:translate-x-1 transition-transform duration-400 ease-expo-out">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-body text-portfolio-dark-grey mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="flex items-center gap-2 text-small text-portfolio-grey">
          <span className="w-1.5 h-1.5 rounded-full bg-portfolio-black" />
          <span>{project.metrics}</span>
        </div>

        {/* Key Signals */}
        {project.signals && (
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-px bg-portfolio-light-grey border border-portfolio-light-grey">
            {project.signals.map((signal) => (
              <div key={signal.label} className="bg-portfolio-bg px-3 py-4 text-center">
                <p className="text-lg font-bold text-portfolio-black tracking-tight">{signal.value}</p>
                <p className="text-[10px] text-portfolio-grey tracking-[0.1em] mt-1">{signal.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-900 ease-expo-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {isCaseStudy ? (
        <a
          href={project.link!}
          className={`block relative overflow-hidden bg-white transition-all duration-400 ease-expo-out group-hover:shadow-card-hover group-hover:-translate-y-3 ${
            isEven ? 'mt-0' : 'lg:mt-20'
          }`}
        >
          {cardContent}
        </a>
      ) : (
        <div
          className={`relative overflow-hidden bg-white transition-all duration-400 ease-expo-out group-hover:shadow-card-hover group-hover:-translate-y-3 ${
            isEven ? 'mt-0' : 'lg:mt-20'
          }`}
        >
          {cardContent}
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const { ref: headerRef, isInView: headerInView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section id="projects" className="py-24 lg:py-32 bg-portfolio-bg">
      <div className="section-padding">
        <div className="container-wide">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`mb-16 lg:mb-24 transition-all duration-800 ease-expo-out ${
              headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                {/* Eyebrow */}
                <div className="relative inline-block mb-4">
                  <span className="text-caption text-portfolio-grey tracking-[0.2em]">
                    SELECTED WORK
                  </span>
                  <div
                    className={`absolute -bottom-1 left-0 h-px bg-portfolio-black transition-all duration-600 ease-expo-out ${
                      headerInView ? 'w-full' : 'w-0'
                    }`}
                    style={{ transitionDelay: '0.3s' }}
                  />
                </div>

                {/* Title */}
                <h2 className="text-headline text-portfolio-black">프로젝트</h2>
              </div>

              <p className="text-body-large text-portfolio-dark-grey max-w-md">
                디지털 마케팅과 크로스보더 성장을 중심으로 한 전략·실행 프로젝트를 소개합니다.
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
