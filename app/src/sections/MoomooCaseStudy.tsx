import { useEffect, useState } from 'react';
import { ArrowLeft, Sparkles, Layers, Film, Lightbulb } from 'lucide-react';

// Program gallery — other works within the same capstone program
const programGallery = [
  {
    image: '/moomoo-program/program-echos-meles.jpg',
    title: 'échos mélés 2025',
    desc: '뇌파·센서·드로잉·AI 컴포지션을 결합한 퍼포먼스 & 개인전 (서울)',
  },
  {
    image: '/moomoo-program/program-diotima-diorama.jpg',
    title: 'Diotima Diorama',
    desc: '로봇을 주제로 한 개념설치미술 프로젝트 (서울)',
  },
  {
    image: '/moomoo-program/program-water-shape-sound.jpg',
    title: '물의 모양, 물의 소리',
    desc: '작품발표회 — 피아노·첼로·구체악기 라이브 퍼포먼스',
  },
  {
    image: '/moomoo-program/program-coart-diversity.jpg',
    title: 'Celebrating Diversity',
    desc: 'Co-art Studio(호주) 국제 교류전 — 성균관대학교 × Co-art Studio',
  },
];

// Character Data (MOOMOO — personal deliverable)
const characters = [
  { name: 'MOOMOO', role: '주인공 / 시간의 관찰자', image: '/moomoo-main.png' },
  { name: '스승 거북이', role: '지혜와 전통의 상징', image: '/moomoo-master.jpg' },
  { name: '토끼 화가', role: '창의성과 예술의 상징', image: '/moomoo-rabbit.jpg' },
  { name: '원숭이 엔지니어', role: '기술과 발명의 상징', image: '/moomoo-monkey.jpg' },
  { name: '하마 학자', role: '지식과 기록의 상징', image: '/moomoo-hippo.jpg' },
  { name: '메카 MOOMOO', role: '기술과 진화의 상징', image: '/moomoo-mecha.jpg' },
];

const workflowSteps = [
  { step: '01', title: '컨셉 디자인', description: '캐릭터 세계관 및 비주얼 콘셉트 설계', icon: Lightbulb },
  { step: '02', title: 'AI 이미지 생성', description: 'Midjourney, Seedance 등 AI 도구로 캐릭터·장면 생성', icon: Sparkles },
  { step: '03', title: '비주얼 선별', description: '스타일 일관성을 위한 이미지 선별 및 품질 관리', icon: Layers },
  { step: '04', title: '편집 및 구성', description: '영상 편집을 통한 스토리 흐름 구성', icon: Film },
];

const stats = [
  { value: '2개국', label: '한국 · 호주 연계' },
  { value: '4개월', label: '프로그램 기간' },
  { value: '1', label: 'AI 영상 작품 해외 전시' },
  { value: '6', label: 'AI 캐릭터 디자인' },
];

const keyInsights = [
  { title: '협업과 개인 작업의 병행', insight: '국내 팀 협업(기획·촬영·설치·운영)과 개인 창작(AI 영상)을 동시에 수행하며 역할 전환 능력을 키웠습니다.' },
  { title: '문화적 맥락을 넘는 협업', insight: '언어와 배경이 다른 호주 현지 예술가들과 짧은 기간 안에 전시를 함께 만들어가는 국제 협업 경험을 쌓았습니다.' },
  { title: 'AI + Human 워크플로우', insight: 'AI 생성 능력과 사람의 기획·선별·편집을 결합하는 하이브리드 제작 방식이 가장 효과적이었습니다.' },
  { title: '장애예술에 대한 이해', insight: '장애예술가들과의 협업을 통해 접근성과 표현 방식에 대한 새로운 관점을 얻었습니다.' },
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

      {/* 1. Hero */}
      <section className="min-h-[70vh] flex items-center pt-24 pb-16">
        <div className="section-padding w-full">
          <div className="container-wide">
            <div className="max-w-3xl">
              <div className={`mb-6 transition-all duration-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.2s' }}>
                <span className="text-caption text-portfolio-grey tracking-[0.2em]">성균관대학교 다원예술 캡스톤디자인 · 2025.09 – 2025.12</span>
              </div>

              <h1 className={`text-display text-portfolio-black mb-6 leading-tight transition-all duration-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
                다원예술 캡스톤디자인
              </h1>

              <p className={`text-subtitle text-portfolio-dark-grey transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.5s' }}>
                장애예술을 주제로 한 한국-호주 연계 다원예술 프로젝트 — 국내 협업 프로덕션부터 호주 Flinders University 전시까지
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">프로젝트 개요</span>
                <h2 className="text-headline text-portfolio-black mb-6">Overview</h2>
                <p className="text-body-large text-portfolio-dark-grey leading-relaxed">
                  장애예술을 주제로 한국과 호주를 연계한 다원예술 프로젝트에 참여했습니다. 국내
                  장애예술가들과 협업하여 전시·공연 기획, 촬영, 작품 설치 및 현장 운영 등 프로젝트
                  전 과정을 수행했으며, 호주 Flinders University 및 Co-art Studio에서 현지
                  예술가들과 전시·교류 프로젝트를 진행했습니다.
                </p>
              </div>

              <div className="bg-portfolio-bg p-8">
                <h3 className="text-subtitle text-portfolio-black mb-6">프로젝트 정보</h3>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-portfolio-light-grey">
                    <span className="text-body text-portfolio-grey">활동명</span>
                    <span className="text-body text-portfolio-black text-right">다원예술 캡스톤디자인</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-portfolio-light-grey">
                    <span className="text-body text-portfolio-grey">활동 기간</span>
                    <span className="text-body text-portfolio-black">2025.09 – 2025.12</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-portfolio-light-grey">
                    <span className="text-body text-portfolio-grey">주관</span>
                    <span className="text-body text-portfolio-black">성균관대학교</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-portfolio-light-grey">
                    <span className="text-body text-portfolio-grey">국제 파트너</span>
                    <span className="text-body text-portfolio-black text-right">Flinders University<br />Co-art Studio (Australia)</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-body text-portfolio-grey">주제</span>
                    <span className="text-body text-portfolio-black">장애예술 · 국제 교류</span>
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
            <div className="max-w-3xl mb-10">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">담당 업무</span>
              <h2 className="text-headline text-portfolio-black mb-4">My Role</h2>
              <p className="text-body-large text-portfolio-dark-grey leading-relaxed">
                국내 협업 프로덕션과 해외 교류, 개인 창작까지 세 축을 함께 수행했습니다.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6">
                <span className="text-caption text-portfolio-grey tracking-[0.15em] block mb-3">국내 협업</span>
                <ul className="space-y-3">
                  {['전시·공연 기획', '촬영', '작품 설치', '현장 운영'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-body text-portfolio-dark-grey">
                      <span className="w-1.5 h-1.5 bg-portfolio-black rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6">
                <span className="text-caption text-portfolio-grey tracking-[0.15em] block mb-3">해외 교류</span>
                <ul className="space-y-3">
                  {['Flinders University 전시 참여', 'Co-art Studio 현지 예술가 교류', '국제 전시 현장 운영'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-body text-portfolio-dark-grey">
                      <span className="w-1.5 h-1.5 bg-portfolio-black rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6">
                <span className="text-caption text-portfolio-grey tracking-[0.15em] block mb-3">개인 창작</span>
                <ul className="space-y-3">
                  {['생성형 AI 기반 개인 영상 작품 기획·제작', 'Flinders University 전시 출품'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-body text-portfolio-dark-grey">
                      <span className="w-1.5 h-1.5 bg-portfolio-black rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Program Gallery */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mb-10">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">프로그램 갤러리</span>
              <h2 className="text-headline text-portfolio-black mb-4">Program Gallery</h2>
              <p className="text-body-large text-portfolio-dark-grey leading-relaxed">
                같은 프로그램 안에서 함께 진행된 전시·공연들입니다. 장애예술을 주제로 다양한
                장르(퍼포먼스, 설치미술, 음악, 국제 교류전)가 병행됐습니다.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {programGallery.map((item) => (
                <div key={item.title} className="bg-portfolio-bg overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden bg-white">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-subtitle text-portfolio-black mb-2">{item.title}</h3>
                    <p className="text-small text-portfolio-dark-grey">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Personal Deliverable — MOOMOO */}
      <section className="py-20 bg-portfolio-black text-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mb-10">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">개인 결과물</span>
              <h2 className="text-headline text-white mb-4">MOOMOO: The Gate of Time</h2>
              <p className="text-body-large text-portfolio-light-grey leading-relaxed">
                이 프로그램에서 제가 개인 결과물로 기획·제작한 생성형 AI 기반 영상 작품입니다.
                다양한 국적의 관객들에게 한국의 전통 문화를 소개하고 싶다는 생각에서 출발해, 거북이·토끼 등
                한국 설화 속 동물 상징을 세계관에 녹여 넣었으며, 이러한 전통적 소재를 AI 기반의 미래적 비주얼로 재해석했습니다.
              </p>
            </div>

            {/* Video */}
            <div className="mb-12">
              <div className="aspect-video bg-black w-full max-w-4xl mx-auto">
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

            {/* Characters */}
            <p className="text-small text-portfolio-grey leading-relaxed mb-6 max-w-2xl">
              각 캐릭터는 한국 전통 설화 속 동물 상징 — 거북이의 지혜, 토끼의 기지와 창의성 —
              에서 모티프를 가져와, 미래적이고 기술적인 세계관으로 재해석했습니다.
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-12">
              {characters.map((character) => (
                <div key={character.name} className="bg-white/5 border border-white/10">
                  <div className="aspect-square overflow-hidden bg-white/5">
                    <img src={character.image} alt={character.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="p-3">
                    <p className="text-[11px] text-portfolio-grey mb-0.5">{character.role}</p>
                    <p className="text-small font-bold text-white">{character.name}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Workflow */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {workflowSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="border border-white/20 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon size={16} className="text-portfolio-grey" />
                      <span className="text-caption text-portfolio-grey tracking-[0.1em]">{step.step}</span>
                    </div>
                    <h3 className="text-body font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-small text-portfolio-light-grey leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Results */}
      <section className="py-20 bg-portfolio-bg">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mb-12">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">성과</span>
              <h2 className="text-headline text-portfolio-black">Results</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white p-8 text-center">
                  <div className="text-3xl font-bold text-portfolio-black mb-2">{stat.value}</div>
                  <div className="text-body text-portfolio-dark-grey">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Key Insights */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mb-12">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">주요 인사이트</span>
              <h2 className="text-headline text-portfolio-black">Key Insights</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {keyInsights.map((item) => (
                <div key={item.title} className="bg-portfolio-bg p-8">
                  <h3 className="text-subtitle text-portfolio-black mb-4">{item.title}</h3>
                  <p className="text-body text-portfolio-dark-grey leading-relaxed">{item.insight}</p>
                </div>
              ))}
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
