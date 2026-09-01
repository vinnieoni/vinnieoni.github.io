import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const problems = [
  { title: '해외 인지도 제로', desc: '국내에서만 판매되던 브랜드라 미국 시장에서는 인지도·리뷰가 전혀 없는 상태에서 시작' },
  { title: '리뷰 0건 리스크', desc: '아마존은 리뷰가 없으면 전환율이 크게 떨어지는 구간을 반드시 지나야 함' },
  { title: '채널 따로, 전략 따로', desc: '아마존과 TikTok Shop을 각각 운영하면 트래픽과 구매가 연결되지 않고 흩어짐' },
];

const competitors = [
  { id: 'A', tag: 'TikTok Shop 판매 최적화', desc: '팔로워는 적지만 인앱 결제 구조로 전환을 압도적으로 만들어내는 사례' },
  { id: 'B', tag: '의료진 권위 콘텐츠', desc: '전문가 콘텐츠 생태계로 카테고리 리더 포지션을 선점' },
  { id: 'C', tag: '인증 표기 주의 사례', desc: '인증 표기를 승인처럼 오인시키는 리스크 — 참고할 반면교사' },
  { id: 'D', tag: '리뷰·UGC 볼륨형', desc: '바이럴 콘텐츠 하나로 UGC가 몰리며 아마존 리뷰 지배력을 확보한 사례' },
];

const strategies = [
  { title: '채널 시너지 설계', desc: 'TikTok 콘텐츠로 트래픽을 만들고, 아마존 구매·리뷰로 전환되도록 두 채널을 하나로 연결' },
  { title: '리뷰 선확보', desc: '유료 마케팅보다 먼저 아마존 리뷰 15건 이상을 확보하는 것을 런칭 게이트로 설정' },
  { title: '백스페이스 선점', desc: '경쟁사 대부분이 다루지 않는 성분·포지셔닝을 먼저 점유해 차별화' },
];

const roadmapSteps = [
  { step: '01', title: 'Phase 0 · 검증', desc: 'TikTok 계정 세팅 + 아마존 리스팅 준비, 콘텐츠 훅 A/B 테스트로 리텐션 확인 — 매출 기대 없음' },
  { step: '02', title: 'Phase 1 · 런칭', desc: 'TikTok Shop 오픈과 아마존 리뷰 캠페인을 동시에 진행, 두 채널 트래픽을 서로 연결' },
  { step: '03', title: 'Phase 2 · 스케일', desc: '제휴 크리에이터 확대, 구독형 번들 도입, 두 채널 동시 프로모션으로 확장' },
  { step: '04', title: 'Expand · 확장', desc: '미국 시장에서 검증된 이후에만 영국·동남아 등 다음 국가로 진출' },
];

const stats = [
  { value: '1개월', label: '리서치 · 기획 기간' },
  { value: '4개', label: '경쟁사 심층 분석' },
  { value: '2개', label: 'Amazon · TikTok Shop 채널' },
  { value: '4단계', label: '실행 로드맵' },
];

const keyInsights = [
  { num: '1', title: '팔로워는 매출과 무관', desc: '팔로워가 적어도 콘텐츠 하나의 후킹력만으로 전환을 만들어내는 경쟁사 사례가 다수' },
  { num: '2', title: '리뷰가 곧 전환율', desc: '아마존은 리뷰 0건이면 전환율이 절반 이하로 떨어짐 — 광고보다 리뷰 확보가 먼저' },
  { num: '3', title: '두 채널을 하나로', desc: 'TikTok과 아마존을 따로 운영하지 않고, 콘텐츠→트래픽→구매·리뷰로 이어지게 설계하는 게 핵심' },
];

export function ElrejuCaseStudy() {
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
                <span className="text-caption text-portfolio-grey tracking-[0.2em]">글로벌 시장 진출 전략 기획</span>
              </div>

              <h1 className={`text-display text-portfolio-black mb-6 leading-tight transition-all duration-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
                ELREJU × KBSL
              </h1>

              <p className={`text-subtitle text-portfolio-dark-grey transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.5s' }}>
                국내 화장품 브랜드의 미국 Amazon · TikTok Shop 동시 입점을 위한 시장조사 및 마케팅 기획
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
                국내 화장품 브랜드 Elreju의 첫 해외 진출 프로젝트로, 미국 Amazon과 TikTok Shop에
                동시 입점해 글로벌 시장으로 확장하는 것이 목표였습니다. 진출 전 경쟁 구도 분석부터
                채널별 마케팅 기획, 단계별 실행 로드맵까지 Go-to-Market 전략 전 과정을 설계했습니다.
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
                  '글로벌 진출을 위한 시장·경쟁사 리서치',
                  'Amazon · TikTok Shop 채널별 마케팅 기획',
                  '콘텐츠 → 구매 전환 단계별 설계',
                  '단계별 실행 로드맵 수립',
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
                {problems.map((item, index) => (
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

      {/* 5. Competitor Analysis */}
      <section className="py-20 bg-portfolio-bg">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mb-10">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">경쟁사 분석</span>
              <h2 className="text-headline text-portfolio-black mb-6">Competitor Analysis</h2>
              <p className="text-body-large text-portfolio-dark-grey leading-relaxed">
                동일 카테고리에서 미국 시장에 이미 안착한 경쟁 브랜드 4곳을 선정해, 성장 동인과
                리스크 요인을 공개 데이터 기반으로 분석했습니다.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {competitors.map((c) => (
                <div key={c.id} className="bg-white p-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="w-8 h-8 rounded-full bg-portfolio-black text-white text-small font-bold flex items-center justify-center flex-shrink-0">
                      {c.id}
                    </span>
                    <span className="text-body font-bold text-portfolio-black">{c.tag}</span>
                  </div>
                  <p className="text-body text-portfolio-dark-grey pl-11">{c.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-small text-portfolio-grey leading-relaxed mt-6">
              브랜드명은 포트폴리오 공개를 위해 익명화했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Strategy */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">마케팅 전략</span>
              <h2 className="text-headline text-portfolio-black mb-6">Strategy</h2>
              <p className="text-body-large text-portfolio-dark-grey leading-relaxed mb-8">
                경쟁 구도 분석을 토대로, Amazon과 TikTok Shop을 개별 채널이 아닌 하나로 통합하는 전략을 수립했습니다.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {strategies.map((item) => (
                  <div key={item.title} className="bg-portfolio-bg p-6">
                    <div className="text-lg font-bold text-portfolio-black mb-2">{item.title}</div>
                    <div className="text-body text-portfolio-dark-grey">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Execution */}
      <section className="py-20 bg-portfolio-bg">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mb-12">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">실행 로드맵</span>
              <h2 className="text-headline text-portfolio-black mb-6">Execution</h2>
              <p className="text-body-large text-portfolio-dark-grey">
                한 번에 확장하지 않고, 매 단계마다 검증 후 다음 단계로 넘어가는 구조로 설계했습니다.
              </p>
            </div>

            <div className="space-y-6">
              {roadmapSteps.map((item) => (
                <div key={item.step} className="flex gap-6 items-start bg-white p-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-portfolio-black text-white flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-subtitle text-portfolio-black mb-3">{item.title}</h3>
                    <p className="text-body text-portfolio-dark-grey">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Deliverables */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mb-8">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">산출물</span>
              <h2 className="text-headline text-portfolio-black">Deliverables</h2>
            </div>
            <p className="text-small text-portfolio-grey max-w-2xl leading-relaxed mb-10">
              아직 캠페인 실행 전 단계로, 아래 수치는 실제 성과가 아니라 리서치를 통해 도출한
              전략 산출물의 규모입니다.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-portfolio-bg p-8 text-center">
                  <div className="text-4xl font-bold text-portfolio-black mb-2">{stat.value}</div>
                  <div className="text-body text-portfolio-dark-grey">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Key Insights */}
      <section className="py-20 bg-portfolio-bg">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mb-12">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">주요 인사이트</span>
              <h2 className="text-headline text-portfolio-black">Key Insights</h2>
            </div>

            <div className="space-y-6">
              {keyInsights.map((item) => (
                <div key={item.num} className="flex gap-6 items-start bg-white p-6">
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
                  국내 브랜드가 Amazon·TikTok Shop 두 채널로 동시에 글로벌 시장에 진입할 수 있도록,<br />
                  경쟁 구도 분석부터 채널 시너지 설계까지 마케팅 기획을 처음부터 끝까지 수립함.
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
