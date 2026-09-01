import { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

// Content Examples Data
const contentExamples = [
  {
    id: 1,
    platform: 'Xiaohongshu',
    platformKr: '샤오홍슈',
    title: '韩国皮肤科院长的日常',
    description: '한국 피부과 원장의 일상과 뷰티 팁을 공유하는 콘텐츠. 330+ 좋아요 및 저장 달성.',
    image: '/medical-content-1.jpg',
    url: 'https://xhslink.com/m/6bVxm8kmh7V',
    color: '#FF2442',
  },
  {
    id: 2,
    platform: 'Xiaohongshu',
    platformKr: '샤오홍슈',
    title: 'WhiteE牙科 콘텐츠',
    description: '한국 치과 정보 및 치료 후 주의사항 콘텐츠. 1384+ 좋아요 및 저장 달성.',
    image: '/medical-content-2.jpg',
    url: 'https://xhslink.com/m/93etjw5gZhY',
    color: '#FF2442',
  },
  {
    id: 3,
    platform: 'Xiaohongshu',
    platformKr: '샤오홍슈',
    title: '拔智齿后多久后不可以吸烟',
    description: '치과 치료 후 주의사항 정보형 콘텐츠. 263 좋아요, 398 댓글로 높은 참여율 기록.',
    image: '/medical-content-3.jpg',
    url: 'http://xhslink.com/o/8u1tTC15k9Q',
    color: '#FF2442',
  },
];

export function MedicalCaseStudy() {
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
                <span className="text-caption text-portfolio-grey tracking-[0.2em]">의료 콘텐츠 마케팅 / 중국 SNS 전략</span>
              </div>
              
              <h1 className={`text-display text-portfolio-black mb-6 leading-tight transition-all duration-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
                Korea Medical Content Marketing
              </h1>
              
              <p className={`text-subtitle text-portfolio-dark-grey transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.5s' }}>
                중국 타겟 의료 서비스 SNS 기반 콘텐츠 마케팅
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">프로젝트 개요</span>
              <h2 className="text-headline text-portfolio-black mb-6">Overview</h2>
              <p className="text-body-large text-portfolio-dark-grey leading-relaxed">
                한국 의료 서비스를 중국 사용자에게 전달하기 위한 SNS 기반 콘텐츠 마케팅 프로젝트
              </p>
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
                  '중국 SNS 콘텐츠 전략 기획',
                  '개인 IP / 병원 계정 동시 운영',
                  '숏폼 콘텐츠 제작 및 배포',
                  '콘텐츠 구조 설계 (유입 → 신뢰 → 전환)',
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
                  { title: '정보 부족', desc: '중국 사용자 대상 의료 정보 부족' },
                  { title: '신뢰 부족', desc: '한국 병원에 대한 신뢰 부족' },
                  { title: '홍보 제한', desc: '광고 규제로 직접적인 홍보 어려움' },
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
            <div className="max-w-3xl">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">전략</span>
              <h2 className="text-headline text-portfolio-black mb-6">Strategy</h2>
              <p className="text-body-large text-portfolio-dark-grey leading-relaxed mb-8">
                핵심 전략은 "신뢰 기반 콘텐츠 구조 설계"
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: '정보형 콘텐츠', desc: '검색 및 유입 확보' },
                  { title: '개인 IP 콘텐츠', desc: '신뢰 형성' },
                  { title: '병원 계정', desc: '정보 제공 및 전환 유도' },
                  { title: '계정 구조', desc: '유입–신뢰–전환 흐름 설계' },
                ].map((item) => (
                  <div key={item.title} className="bg-white p-6">
                    <div className="text-lg font-bold text-portfolio-black mb-2">{item.title}</div>
                    <div className="text-body text-portfolio-dark-grey">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Execution */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">실행</span>
              <h2 className="text-headline text-portfolio-black mb-8">Execution</h2>
              
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Xiaohongshu 중심 콘텐츠 제작', desc: '중국 사용자 선호 플랫폼 중심 콘텐츠 제작' },
                  { step: '02', title: '초기 계정 운영 및 콘텐츠 테스트', desc: '다양한 콘텐츠 형식 테스트 및 최적화' },
                  { step: '03', title: '댓글 / DM 기반 사용자 반응 수집', desc: '사용자 피드백 수집 및 분석' },
                  { step: '04', title: '반응 기반 콘텐츠 방향 반복 개선', desc: '데이터 기반 콘텐츠 방향 조정' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6 items-start bg-portfolio-bg p-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-portfolio-black text-white flex items-center justify-center text-lg font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-subtitle text-portfolio-black mb-1">{item.title}</h3>
                      <p className="text-body text-portfolio-dark-grey">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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
              <h2 className="text-headline text-portfolio-black mb-6">Results</h2>
            </div>
            
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { value: '3개', label: '운영 계정' },
                { value: '50+', label: '총 콘텐츠 제작' },
                { value: '800+', label: '최고 콘텐츠 반응' },
                { value: '초기 단계', label: '참여율 형성' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-6 text-center">
                  <div className="text-3xl font-bold text-portfolio-black mb-2">{stat.value}</div>
                  <div className="text-small text-portfolio-grey">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Additional Results */}
            <div className="bg-white p-8">
              <h3 className="text-subtitle text-portfolio-black mb-4">추가 성과</h3>
              <ul className="space-y-3">
                {[
                  '의료 콘텐츠 기반 초기 유입 확보',
                  '개인 IP 중심 신뢰 구조 검증 진행',
                  '콘텐츠 방향성 테스트 및 최적화 단계',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-body text-portfolio-dark-grey">
                    <span className="w-1.5 h-1.5 bg-portfolio-black rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Key Insights */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">핵심 인사이트</span>
              <h2 className="text-headline text-portfolio-black mb-8">Key Insights</h2>
              
              <div className="space-y-6">
                {[
                  { num: '1', title: '신뢰가 정보를 이긴다', desc: '의료 콘텐츠에서는 정볳다 신뢰가 더 중요한 요소로 작용' },
                  { num: '2', title: '개인 IP의 힘', desc: '개인 IP 기반 콘텐츠가 병원 계정보다 높은 반응을 보임' },
                  { num: '3', title: '구조 설계의 중요성', desc: '콘텐츠 구조 설계가 단순 업로드보다 성과에 큰 영향을 미침' },
                ].map((item) => (
                  <div key={item.num} className="flex gap-6 items-start bg-portfolio-bg p-6">
                    <div className="flex-shrink-0 w-10 h-10 bg-portfolio-black text-white flex items-center justify-center text-lg font-bold">
                      {item.num}
                    </div>
                    <div>
                      <h3 className="text-subtitle text-portfolio-black mb-1">{item.title}</h3>
                      <p className="text-body text-portfolio-dark-grey">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Content Examples */}
      <section className="py-20 bg-portfolio-bg">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mb-12">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">콘텐츠 사례</span>
              <h2 className="text-headline text-portfolio-black">Content Examples</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {contentExamples.map((content) => (
                <a
                  key={content.id}
                  href={content.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white overflow-hidden hover:shadow-card-hover transition-all duration-400"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-portfolio-light-grey">
                    <img
                      src={content.image}
                      alt={content.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span 
                        className="px-2 py-1 text-white text-xs font-medium"
                        style={{ backgroundColor: content.color }}
                      >
                        {content.platformKr}
                      </span>
                      <ExternalLink size={16} className="text-portfolio-grey group-hover:text-portfolio-black transition-colors" />
                    </div>
                    <h3 className="text-subtitle text-portfolio-black mb-2 line-clamp-2">{content.title}</h3>
                    <p className="text-small text-portfolio-dark-grey line-clamp-2">{content.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. One-Line Impact */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">한 줄 요약</span>
              <h2 className="text-headline text-portfolio-black mb-6">One-Line Impact</h2>
              
              <div className="bg-portfolio-black text-white p-8 lg:p-12">
                <p className="text-body-large leading-relaxed">
                  초기 단계에서 콘텐츠 반응을 통해<br />
                  의료 콘텐츠의 유입 및 신뢰 형성 구조를 검증함.
                </p>
              </div>
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
