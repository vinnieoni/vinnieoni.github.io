import { useEffect, useState } from 'react';
import { ArrowLeft, Sparkles, Layers, Film, Lightbulb, Target, Zap } from 'lucide-react';

// Character Data
const characters = [
  {
    name: 'MOOMOO',
    role: '주인공 / 시간의 관찰자',
    description: '시간과 관찰을 상징하는 프로젝트의 중심 캐릭터.',
    image: '/moomoo-main.png',
  },
  {
    name: '스승 거북이',
    role: '지혜와 전통의 상징',
    description: '오랜 세월의 지혜를 간직한 스승.',
    image: '/moomoo-master.jpg',
  },
  {
    name: '토끼 화가',
    role: '창의성과 예술의 상징',
    description: '예술적 감각과 창의성을 대표하는 캐릭터.',
    image: '/moomoo-rabbit.jpg',
  },
  {
    name: '원숭이 엔지니어',
    role: '기술과 발명의 상징',
    description: '기술적 혁신과 발명을 상징.',
    image: '/moomoo-monkey.jpg',
  },
  {
    name: '하마 학자',
    role: '지식과 기록의 상징',
    description: '지식의 수호자이자 기록자.',
    image: '/moomoo-hippo.jpg',
  },
  {
    name: '메카 MOOMOO',
    role: '기술과 진화의 상징',
    description: '미래 지향적인 기술과 진화를 상징하는 미래형 캐릭터.',
    image: '/moomoo-mecha.jpg',
  },
];

// AI Production Workflow Steps
const workflowSteps = [
  {
    step: '01',
    title: '컨셉 디자인',
    description: '캐릭터 세계관 및 비주얼 콘셉트 설계. 각 캐릭터의 역할과 상징성을 정의.',
    icon: Lightbulb,
  },
  {
    step: '02',
    title: 'AI 이미지 생성',
    description: 'Midjourney, Seedance 등 AI 도구를 활용한 캐릭터 및 장면 생성.',
    icon: Sparkles,
  },
  {
    step: '03',
    title: '비주얼 선별',
    description: '스타일 일관성을 유지하기 위한 이미지 선별 및 품질 관리.',
    icon: Layers,
  },
  {
    step: '04',
    title: '편집 및 구성',
    description: '영상 편집을 통해 스토리 흐름 구성 및 나이레이티브 완성.',
    icon: Film,
  },
];

// Future Development Items
const futureDevelopments = [
  {
    title: '애니메이션 시리즈',
    description: '캐릭터들의 스토리를 담은 단편 애니메이션 시리즈 제작.',
    icon: Film,
  },
  {
    title: 'AI 스토리텔링',
    description: 'AI 기반 스토리 생성 및 시각화 콘텐츠 확장.',
    icon: Sparkles,
  },
  {
    title: '인터랙티브 콘텐츠',
    description: '사용자 참여형 인터랙티브 디지털 콘텐츠.',
    icon: Zap,
  },
  {
    title: '캐릭터 IP',
    description: '캐릭터 IP 확장 - 굿즈, 게임, 브랜드 콜라볼레이션 등.',
    icon: Target,
  },
];

export function MoomooCaseStudy() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    window.location.hash = '';
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-portfolio-bg">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 glass">
        <div className="section-padding">
          <nav className="flex items-center justify-between">
            <button
              onClick={handleBack}
              className="group flex items-center gap-2 text-sm font-medium text-portfolio-black hover:text-portfolio-grey transition-colors"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span>프로젝트로 돌아가기</span>
            </button>
          </nav>
        </div>
      </header>

      {/* 1. Hero with Video */}
      <section className="min-h-screen flex flex-col justify-center pt-24 pb-16">
        <div className="section-padding w-full">
          <div className="container-wide">
            {/* Title Area */}
            <div className="max-w-3xl mb-12">
              <div className={`mb-6 transition-all duration-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.2s' }}>
                <span className="text-caption text-portfolio-grey tracking-[0.2em]">AI 캐릭터 IP 프로젝트</span>
              </div>
              
              <h1 className={`text-display text-portfolio-black mb-6 leading-tight transition-all duration-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
                MOOMOO:
                <br />The Gate of Time
              </h1>
              
              <p className={`text-subtitle text-portfolio-dark-grey transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.5s' }}>
                AI 기반 영상 및 캐릭터 IP 제작 프로젝트
              </p>
            </div>
            
            {/* Video Area - Large and Prominent */}
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.7s' }}>
              <div className="aspect-video bg-black w-full max-w-5xl mx-auto">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3F81TzosU1A"
                  title="MOOMOO: The Gate of Time"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Project Overview */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">프로젝트 개요</span>
                <h2 className="text-headline text-portfolio-black mb-6">Overview</h2>
                <p className="text-body-large text-portfolio-dark-grey leading-relaxed">
                  AI 이미지 생성 기술과 영상 편집을 활용하여 캐릭터 중심의 시각적 스토리텔링 콘텐츠를 제작하는 프로젝트입니다. 
                  단순한 AI 영상 제작을 넘어, 캐릭터와 세계관을 중심으로 한 시각적 콘텐츠 제작 실험을 진행했습니다.
                </p>
              </div>
              
              <div className="bg-portfolio-bg p-8">
                <h3 className="text-subtitle text-portfolio-black mb-6">프로젝트 정보</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-portfolio-light-grey">
                    <span className="text-body text-portfolio-grey">프로젝트 유형</span>
                    <span className="text-body text-portfolio-black">AI 기반 캐릭터 IP 제작</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-portfolio-light-grey">
                    <span className="text-body text-portfolio-grey">사용 기술</span>
                    <span className="text-body text-portfolio-black">Midjourney, Seedance</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-portfolio-light-grey">
                    <span className="text-body text-portfolio-grey">캐릭터 수</span>
                    <span className="text-body text-portfolio-black">6개 캐릭터</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-body text-portfolio-grey">출력물</span>
                    <span className="text-body text-portfolio-black">이미지 / 영상</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. My Role */}
      <section className="py-20 bg-portfolio-bg">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">담당 업무</span>
              <h2 className="text-headline text-portfolio-black mb-8">My Role</h2>
              
              <ul className="space-y-4">
                {[
                  '캐릭터 세계관 및 콘셉트 설계',
                  'AI 이미지 생성 및 프롬프트 엔지니어링',
                  '스타일 일관성을 위한 이미지 선별 및 품질 관리',
                  '영상 편집 및 스토리 흐름 구성',
                  '캐릭터 IP 전략 기획',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-body-large text-portfolio-dark-grey">
                    <span className="w-1.5 h-1.5 bg-portfolio-black rounded-full mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Problem */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">문제 상황</span>
              <h2 className="text-headline text-portfolio-black mb-6">Problem</h2>
              
              <div className="space-y-4">
                {[
                  { title: 'AI 콘텐츠의 한계', desc: 'AI 생성 콘텐츠의 스타일 일관성 유지 어려움' },
                  { title: '캐릭터 IP 개발', desc: '상징성과 스토리를 가진 캐릭터 IP 구축 필요' },
                  { title: '시각적 스토리텔링', desc: '이미지 중심의 나이레이티브 구성 과제' },
                ].map((item, index) => (
                  <div key={index} className="bg-portfolio-bg p-6">
                    <div className="text-lg font-bold text-portfolio-black mb-2">{item.title}</div>
                    <div className="text-body text-portfolio-dark-grey">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Strategy */}
      <section className="py-20 bg-portfolio-bg">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mb-12">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">전략</span>
              <h2 className="text-headline text-portfolio-black mb-6">Strategy</h2>
              <p className="text-body-large text-portfolio-dark-grey leading-relaxed mb-8">
                각 캐릭터는 고유한 상징성과 역할을 가지며, 전체 세계관의 일부를 담당합니다.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {characters.map((character) => (
                <div key={character.name} className="bg-white overflow-hidden">
                  <div className="aspect-square overflow-hidden bg-white">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-caption text-portfolio-grey tracking-wider mb-2 block">{character.role}</span>
                    <h3 className="text-subtitle text-portfolio-black mb-2">{character.name}</h3>
                    <p className="text-small text-portfolio-dark-grey">{character.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Execution */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mb-12">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">실행</span>
              <h2 className="text-headline text-portfolio-black mb-6">Execution</h2>
              <p className="text-body-large text-portfolio-dark-grey">
                AI 도구를 활용한 체계적인 콘텐츠 제작 워크플로우
              </p>
            </div>
            
            <div className="space-y-6">
              {workflowSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex gap-6 items-start bg-portfolio-bg p-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-portfolio-black text-white flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon size={20} className="text-portfolio-grey" />
                        <h3 className="text-subtitle text-portfolio-black">{step.title}</h3>
                      </div>
                      <p className="text-body text-portfolio-dark-grey">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Results */}
      <section className="py-20 bg-portfolio-bg">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mb-12">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">성과</span>
              <h2 className="text-headline text-portfolio-black">Results</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { value: '6', label: '캐릭터 디자인' },
                { value: '100+', label: 'AI 이미지 생성' },
                { value: '1', label: '프로젝트 영상' },
                { value: '4', label: '제작 단계' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-8 text-center">
                  <div className="text-4xl font-bold text-portfolio-black mb-2">{stat.value}</div>
                  <div className="text-body text-portfolio-dark-grey">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Key Insights */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mb-12">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">주요 인사이트</span>
              <h2 className="text-headline text-portfolio-black">Key Insights</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'AI 콘텐츠 제작의 효율성',
                  insight: 'AI 이미지 생성 도구를 활용하면 기존 대비 짧은 시간에 다양한 비주얼 컨셉을 탐색할 수 있었습니다.',
                },
                {
                  title: '스타일 일관성의 중요성',
                  insight: '여러 AI 생성 이미지 중에서도 세계관과 캐릭터 특성을 유지하는 이미지를 선별하는 과정이 중요했습니다.',
                },
                {
                  title: '캐릭터 중심 스토리텔링',
                  insight: '각 캐릭터에 고유한 상징성과 역할을 부여함으로써, 단순한 이미지 나열이 아닌 스토리가 있는 콘텐츠를 구성할 수 있었습니다.',
                },
                {
                  title: 'AI + Human Workflow',
                  insight: 'AI 도구의 생성 능력과 인간의 기획/선별/편집 능력을 결합하는 하이브리드 워크플로우가 최상의 결과를 만들어냈습니다.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-portfolio-bg p-8">
                  <h3 className="text-subtitle text-portfolio-black mb-4">{item.title}</h3>
                  <p className="text-body text-portfolio-dark-grey leading-relaxed">{item.insight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Reflection */}
      <section className="py-20 bg-portfolio-bg">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto">
              <div className="mb-12">
                <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">회고</span>
                <h2 className="text-headline text-portfolio-black">Reflection</h2>
              </div>
              
              <div className="bg-white p-8 mb-8">
                <h3 className="text-subtitle text-portfolio-black mb-6">성과 요약</h3>
                <p className="text-body-large text-portfolio-dark-grey leading-relaxed">
                  MOOMOO 프로젝트를 통해 AI 기반 콘텐츠 제작의 전체 워크플로우를 경험했습니다. 
                  컨셉 설계부터 AI 이미지 생성, 선별, 영상 편집까지 일련의 과정을 수행하며 
                  AI 콘텐츠 제작 역량을 입증했습니다.
                </p>
              </div>
              
              <div className="bg-white p-8 mb-8">
                <h3 className="text-subtitle text-portfolio-black mb-6">학습 포인트</h3>
                <ul className="space-y-3 text-body text-portfolio-dark-grey">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-portfolio-black rounded-full mt-2 flex-shrink-0" />
                    <span>AI 이미지 생성 프롬프트 엔지니어링의 중요성</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-portfolio-black rounded-full mt-2 flex-shrink-0" />
                    <span>스타일 일관성을 위한 이미지 선별 기준 수립</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-portfolio-black rounded-full mt-2 flex-shrink-0" />
                    <span>캐릭터 중심 스토리텔링 구성 방법</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-portfolio-black rounded-full mt-2 flex-shrink-0" />
                    <span>AI + Human 하이브리드 워크플로우 설계</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-portfolio-black text-white p-8 text-center">
                <Lightbulb className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <p className="text-body-large leading-relaxed">
                  이 프로젝트는 AI 기반 콘텐츠 제작의 가능성을 탐색하는 시작점입니다. 
                  앞으로 더 다양한 형태의 AI 콘텐츠와 인터랙티브 스토리텔링을 개발해 나가고자 합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Future Development */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mb-12">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">향후 확장 가능성</span>
              <h2 className="text-headline text-portfolio-black">Future Development</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {futureDevelopments.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-portfolio-bg p-8">
                    <div className="w-12 h-12 bg-portfolio-black text-white flex items-center justify-center mb-6">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-subtitle text-portfolio-black mb-3">{item.title}</h3>
                    <p className="text-body text-portfolio-dark-grey">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-portfolio-bg border-t border-portfolio-light-grey">
        <div className="section-padding">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-small text-portfolio-grey">© 2024 서문청. All rights reserved.</p>
              <button
                onClick={handleBack}
                className="text-small text-portfolio-dark-grey hover:text-portfolio-black transition-colors"
              >
                프로젝트로 돌아가기
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
