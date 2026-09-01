import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowDown, ExternalLink } from 'lucide-react';

const challenges = [
  {
    title: 'PLATFORM',
    description: '플랫폼별 콘텐츠 소비 방식의 차이',
  },
  {
    title: 'LOCALIZATION',
    description: '시장별 메시지와 콘텐츠 문법의 차이',
  },
  {
    title: 'PERFORMANCE',
    description: '콘텐츠 반응과 실제 마케팅 성과 연결의 어려움',
  },
];

const channelFlow = ['ZERO', 'TEST', 'LEARN', 'GROW'];

const contentChannelSystem = [
  { title: 'BRAND ACCOUNT', label: 'Official Brand Communication' },
  { title: 'EXPERT IP', label: 'Professional / Doctor Content' },
  { title: 'PEOPLE IP', label: 'Founder / Employee Personality Content' },
  { title: 'CREATOR', label: 'Collaboration Content' },
  { title: 'TREND', label: 'Culture / Real-time Trend Content' },
  { title: 'TESTING', label: 'New Account / Format Testing' },
];

const operatingFlow = ['INSIGHT', 'STRATEGY', 'LOCALIZED EXECUTION', 'DISTRIBUTION', 'ANALYSIS'];

const concernKeywords = [
  { keyword: '여드름 #痘痘', value: 50.8, display: '50.8억' },
  { keyword: '모공 거칠음 #毛孔粗大', value: 20.1, display: '20.1억' },
  { keyword: '물광 피부 #水光肌', value: 14.3, display: '14.3억' },
  { keyword: '모공 청소 #毛孔清洁', value: 8.9, display: '8.9억' },
  { keyword: '여드름 흉터 #痘坑', value: 7.9, display: '7.9억' },
  { keyword: '모공 #毛孔', value: 7.8, display: '7.8억' },
  { keyword: '흉터 복원 #痘坑修复', value: 2.9, display: '2.9억' },
];

const procedureKeywords = [
  { keyword: '황금마이크로니들 RF #黄金微针射频', display: '1.7억' },
  { keyword: '울쎄라 #美版超声刀', display: '42.8만' },
];

const dashboardLayers = [
  {
    num: '01',
    title: 'CHANNEL & CONTENT',
    items: ['Audience Response', 'Content / Format Performance'],
  },
  {
    num: '02',
    title: 'ACQUISITION & CONVERSION',
    items: ['DB / Lead', 'Reservation / Conversion'],
  },
  {
    num: '03',
    title: 'CREATOR & CAMPAIGN',
    items: ['Influencer Performance', 'Campaign / ROI Monitoring'],
  },
];

const aiContentWorkflow = ['PROMPT DESIGN', 'AI DRAFT', 'QC · NATURALNESS / MEDICAL ACCURACY / AD COMPLIANCE', 'REVISION (v1→v3)'];

const guSitcomEpisodes = [
  { ep: 'EP1', title: '직업병', logline: '길에서 남 얼굴만 분석하던 원장이, 진짜 전문가 앞에서 역으로 분석당한다' },
  { ep: 'EP2', title: '자의식 과잉', logline: '직원들이 다 자신을 좋아한다 착각하지만, 실제 관심은 0' },
  { ep: 'EP3', title: '진상 동종업계', logline: '근거·데이터만 캐묻던 진상 손님의 정체는 동종업계 원장' },
  { ep: 'EP4', title: '피해망상', logline: '비싼 시술 팔 거라 잔뜩 경계했는데, "지금은 안 하셔도 됩니다"에 오히려 당황' },
  { ep: 'EP5', title: '두 살 어린데', logline: '나이 자랑 → 길거리·직원·환자 즉석 투표에서 만장일치 패배' },
];

const dataFlow = [
  'CONTENT',
  'ENGAGEMENT',
  'CHANNEL',
  'DB / LEAD',
  'RESERVATION',
  'ANALYSIS',
  'DECISION',
];

function SectionHeader({
  num,
  title,
  caption,
  light = false,
}: {
  num: string;
  title: string;
  caption: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12 lg:mb-16">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="text-caption tracking-[0.2em] text-portfolio-grey">{num}</span>
        <span className="text-caption text-portfolio-grey tracking-[0.2em]">{caption}</span>
      </div>
      <h2
        className={`text-display leading-[1.1] whitespace-pre-line ${
          light ? 'text-white' : 'text-portfolio-black'
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

export function HealingbreezeCaseStudy() {
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

      {/* Hero */}
      <section className="min-h-[80vh] flex items-center pt-24 pb-16 bg-portfolio-black text-white">
        <div className="section-padding w-full">
          <div className="container-wide">
            <div
              className={`mb-8 transition-all duration-600 ease-expo-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <span className="text-caption text-portfolio-grey tracking-[0.3em]">
                MAIN CASE STUDY — CROSS-BORDER DIGITAL MARKETING & GROWTH
              </span>
            </div>

            <h1
              className={`text-caption text-portfolio-grey tracking-[0.2em] mb-4 transition-all duration-600 ease-expo-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              HEALINGBREEZE / GU
            </h1>

            <p
              className={`text-display text-white leading-[1.1] mb-8 transition-all duration-800 ease-expo-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              Building a Cross-border
              <br />
              Digital Growth System
            </p>

            <p
              className={`text-body-large text-portfolio-grey max-w-2xl leading-relaxed mb-12 transition-all duration-700 ease-expo-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              한국 메디컬 뷰티 브랜드의 중국 디지털 시장 진입을 위해 신규 채널 구축부터 콘텐츠 전략,
              플랫폼 운영, 성과 분석까지 연결하는 Cross-border Marketing System을 구축했습니다.
            </p>

            {/* Meta */}
            <div
              className={`grid sm:grid-cols-3 gap-8 pt-8 border-t border-white/20 transition-all duration-700 ease-expo-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '0.8s' }}
            >
              <div>
                <span className="text-caption text-portfolio-grey tracking-[0.15em] block mb-2">PERIOD</span>
                <p className="text-body text-white font-medium">2026.05.18 – Present</p>
              </div>
              <div>
                <span className="text-caption text-portfolio-grey tracking-[0.15em] block mb-2">ROLE</span>
                <p className="text-body text-white font-medium">Cross-border Digital Marketing</p>
              </div>
              <div>
                <span className="text-caption text-portfolio-grey tracking-[0.15em] block mb-2">SCOPE</span>
                <p className="text-body text-white font-medium">
                  Douyin · Xiaohongshu · Content Strategy · Channel Growth · Performance · Data
                </p>
              </div>
            </div>

            {/* Career Progression Strip */}
            <div
              className={`mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-caption tracking-[0.15em] text-portfolio-grey transition-all duration-700 ease-expo-out ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '1s' }}
            >
              {['CHANNEL', 'CONTENT', 'GROWTH', 'PERFORMANCE', 'DATA', 'DECISION MAKING'].map((step, i, arr) => (
                <span key={step} className="flex items-center gap-3">
                  <span className="text-white">{step}</span>
                  {i < arr.length - 1 && <span>→</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 01 BUSINESS CONTEXT & CHALLENGE */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <SectionHeader
              num="01"
              caption="BUSINESS CONTEXT & CHALLENGE"
              title={'FROM KOREA\nTO A NEW DIGITAL MARKET'}
            />
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
              <p className="text-body-large text-portfolio-dark-grey leading-relaxed">
                국내 대표 메디컬 뷰티 플랫폼 '강남언니'를 운영하는 힐링페이퍼 계열 Healthcare MSO
                HEALINGBREEZE에서 GU 브랜드의 Cross-border Digital Marketing을 담당했습니다.
              </p>

              {/* Simple Context Diagram */}
              <div className="bg-portfolio-bg p-8 lg:p-10">
                <div className="space-y-0">
                  <div className="border border-portfolio-light-grey bg-white p-5">
                    <p className="text-body font-semibold text-portfolio-black">HEALINGPAPER</p>
                    <p className="text-small text-portfolio-grey">강남언니</p>
                  </div>
                  <div className="flex justify-center py-1">
                    <ArrowDown size={16} className="text-portfolio-grey" />
                  </div>
                  <div className="border border-portfolio-light-grey bg-white p-5">
                    <p className="text-body font-semibold text-portfolio-black">HEALINGBREEZE</p>
                    <p className="text-small text-portfolio-grey">Healthcare MSO</p>
                  </div>
                  <div className="flex justify-center py-1">
                    <ArrowDown size={16} className="text-portfolio-grey" />
                  </div>
                  <div className="border-2 border-portfolio-black bg-white p-5">
                    <p className="text-body font-semibold text-portfolio-black">GU</p>
                    <p className="text-small text-portfolio-grey">Medical Beauty Brand</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Challenges */}
            <div className="grid md:grid-cols-3 gap-px bg-portfolio-light-grey border border-portfolio-light-grey">
              {challenges.map((c) => (
                <div key={c.title} className="bg-white p-6 lg:p-8">
                  <h3 className="text-body font-bold text-portfolio-black tracking-[0.1em] mb-2">
                    {c.title}
                  </h3>
                  <p className="text-body text-portfolio-dark-grey">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 MARKET INTELLIGENCE → THE STRATEGY */}
      <section className="py-24 lg:py-32 bg-portfolio-black text-white">
        <div className="section-padding">
          <div className="container-wide">
            <SectionHeader
              num="02"
              caption="MARKET INTELLIGENCE → THE STRATEGY"
              title={'FROM SEARCH SIGNALS\nTO MARKETING STRATEGY'}
              light
            />

            {/* Market Intelligence — inline evidence block */}
            <div className="mb-20">
              <p className="text-body-large text-portfolio-light-grey max-w-3xl leading-relaxed mb-12">
                Xiaohongshu 검색 데이터를 분석한 결과, 특정 시술명보다 여드름·모공·흉터·물광 피부와 같은
                피부 고민 및 기대 결과 키워드에서 높은 탐색 수요가 확인되었습니다.
              </p>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-12">
                {/* Concern keywords — ranked bars */}
                <div>
                  <span className="text-caption text-portfolio-grey tracking-[0.2em] block mb-8">
                    CONCERN / OUTCOME KEYWORDS — XIAOHONGSHU SEARCH VOLUME
                  </span>
                  <div className="space-y-5">
                    {concernKeywords.map((k) => (
                      <div key={k.keyword}>
                        <div className="flex items-baseline justify-between gap-4 mb-2">
                          <span className="text-body text-white">{k.keyword}</span>
                          <span className="text-body font-bold text-white tracking-tight">{k.display}</span>
                        </div>
                        <div className="h-1.5 bg-white/10">
                          <div
                            className="h-full bg-white"
                            style={{ width: `${(k.value / 50.8) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Insight + strategic shift */}
                <div>
                  <span className="text-caption text-portfolio-grey tracking-[0.2em] block mb-8">
                    PROCEDURE-NAME KEYWORDS
                  </span>
                  <div className="space-y-4 mb-12">
                    {procedureKeywords.map((k) => (
                      <div
                        key={k.keyword}
                        className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4"
                      >
                        <span className="text-body text-portfolio-grey">{k.keyword}</span>
                        <span className="text-body font-bold text-portfolio-grey tracking-tight">
                          {k.display}
                        </span>
                      </div>
                    ))}
                  </div>

                  <span className="text-caption text-portfolio-grey tracking-[0.2em] block mb-6">
                    STRATEGIC SHIFT
                  </span>
                  <div className="flex items-center gap-4 text-body font-bold tracking-wide mb-4">
                    <span className="text-portfolio-grey line-through decoration-white/40">
                      PROCEDURE-LED
                    </span>
                    <span className="text-portfolio-grey">→</span>
                    <span className="text-white">NEED / OUTCOME-LED CONTENT</span>
                  </div>
                  <p className="text-body text-portfolio-light-grey leading-relaxed">
                    시술명 자체보다 '모공 개선', '여드름 흉터 개선', '물광 피부'와 같은 고민·결과 중심의
                    소비자 언어를 콘텐츠 커뮤니케이션에 반영했습니다.
                  </p>
                  <p className="text-small text-portfolio-grey mt-8">
                    위 수치는 조사 시점 수집 데이터 기준이며, 시술별 인기도의 직접 비교를 의미하지 않습니다.
                  </p>
                </div>
              </div>

              <p className="text-caption text-portfolio-grey tracking-[0.2em]">
                RESEARCH SCOPE — Consumer Search · Competitor · Seasonal Trend · Platform Trend
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 0→1 CHANNEL BUILDING */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <SectionHeader num="03" caption="0→1 CHANNEL BUILDING" title={'STARTING\nFROM ZERO'} />
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <p className="text-body-large text-portfolio-dark-grey leading-relaxed mb-12">
                  기존 팔로워 기반이 없는 신규 Douyin 계정에서 시작해 계정 세팅, 초기 콘텐츠 테스트, 운영
                  구조 및 Audience Building을 직접 진행했습니다.
                </p>

                {/* Visual Flow */}
                <div className="grid grid-cols-2 sm:grid-cols-4 border border-portfolio-light-grey">
                  {channelFlow.map((step, i) => (
                    <div
                      key={step}
                      className={`p-5 text-center ${i < channelFlow.length - 1 ? 'border-r border-portfolio-light-grey' : ''} ${i >= 2 ? 'max-sm:border-t max-sm:border-portfolio-light-grey' : ''} ${i === 2 ? 'max-sm:border-r-0' : ''}`}
                    >
                      <p className="text-2xl lg:text-3xl font-bold text-portfolio-black tracking-tight">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>

                {/* GU Main Douyin Account Performance */}
                <div className="mt-12 bg-portfolio-black text-white p-8 lg:p-10">
                  <span className="text-caption text-portfolio-grey tracking-[0.2em] block mb-8">
                    GU MAIN DOUYIN ACCOUNT — 현재 확인된 성과
                  </span>
                  <div className="flex flex-wrap gap-12">
                    <div>
                      <p className="text-5xl lg:text-6xl font-bold tracking-tight mb-2">2,145</p>
                      <p className="text-caption text-portfolio-grey tracking-[0.2em]">FOLLOWERS</p>
                    </div>
                    <div>
                      <p className="text-5xl lg:text-6xl font-bold tracking-tight mb-2">22K+</p>
                      <p className="text-caption text-portfolio-grey tracking-[0.2em]">LIKES</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Screenshot */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-[360px]">
                  <div className="aspect-[9/16] overflow-hidden bg-portfolio-bg border border-portfolio-light-grey">
                    <img
                      src="/gu-douyin-main.png"
                      alt="GU Main Douyin Account"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="text-caption text-portfolio-grey tracking-[0.15em] mt-4 text-center">
                    GU MAIN DOUYIN ACCOUNT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 CONTENT & CHANNEL SYSTEM */}
      <section className="py-24 lg:py-32 bg-portfolio-bg">
        <div className="section-padding">
          <div className="container-wide">
            <SectionHeader
              num="04"
              caption="CONTENT & CHANNEL SYSTEM"
              title={'FROM A BRAND ACCOUNT\nTO A CONTENT ECOSYSTEM'}
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {contentChannelSystem.map((item, index) => (
                <div
                  key={item.title}
                  className={`p-6 lg:p-8 ${
                    index === 0
                      ? 'bg-portfolio-black text-white'
                      : 'bg-white border border-portfolio-light-grey'
                  }`}
                >
                  <h3
                    className={`text-body font-bold tracking-[0.1em] mb-1 ${
                      index === 0 ? 'text-white' : 'text-portfolio-black'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-small ${
                      index === 0 ? 'text-portfolio-grey' : 'text-portfolio-grey'
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Compact Channel Strip */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6">
              {[
                { src: '/gu-xhs-founder.png', label: 'PEOPLE IP — XIAOHONGSHU' },
                { src: '/gu-xhs-expert.png', label: 'EXPERT IP — XIAOHONGSHU' },
                { src: '/gu-douyin-assistant.png', label: 'TESTING — DOUYIN' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="aspect-[9/16] overflow-hidden bg-white border border-portfolio-light-grey">
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="text-caption text-portfolio-grey tracking-[0.15em] mt-3">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 AI-ASSISTED CONTENT PRODUCTION */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <SectionHeader
              num="05"
              caption="AI-ASSISTED CONTENT PRODUCTION"
              title={'SCALING CONTENT\nWITH GENERATIVE AI'}
            />
            <p className="text-body-large text-portfolio-dark-grey max-w-3xl leading-relaxed mb-12">
              콘텐츠 제작 볼륨을 늘리기 위해 생성형 AI를 활용한 기획·대본 프로덕션 프로세스를
              구축했습니다. 기획 의도부터 촬영 가능한 콘티, 대사까지 AI와 협업해 초안을 제작하고,
              자연스러움·의료 정보 정확성·의료광고 규정 준수 기준으로 반복 검수했습니다.
            </p>

            {/* Workflow */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-3 mb-16">
              {aiContentWorkflow.map((step, i) => (
                <span key={step} className="flex items-center gap-3">
                  <span className="px-4 py-3 border border-portfolio-black text-caption font-semibold tracking-[0.1em] text-portfolio-black">
                    {step}
                  </span>
                  {i < aiContentWorkflow.length - 1 && (
                    <span className="text-portfolio-grey">→</span>
                  )}
                </span>
              ))}
            </div>

            {/* Example project */}
            <div className="bg-portfolio-black text-white p-8 lg:p-12 mb-12">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] block mb-4">
                EXAMPLE — "지유클리닉 잠입 수사" 시리즈
              </span>
              <h3 className="text-title text-white mb-4 leading-snug">
                라이벌 원장이 매번 정탐하러 왔다가 매번 무너지는 6부작 스케치 코미디
              </h3>
              <p className="text-body text-portfolio-light-grey leading-relaxed mb-8">
                병원 홍보물이 아니라 캐릭터 중심 시트콤으로 기획했습니다. Douyin · Instagram Reels
                (글로벌) · Meta 광고 · 바이럴 계정까지 멀티 채널 배포를 전제로 컷별 콘티와 대사를
                촬영 가능한 수준으로 작성했습니다.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {guSitcomEpisodes.map((e) => (
                  <div key={e.ep} className="border border-white/20 p-4">
                    <span className="text-caption text-portfolio-grey tracking-[0.15em] block mb-2">
                      {e.ep}
                    </span>
                    <p className="text-small font-bold text-white mb-2">{e.title}</p>
                    <p className="text-[11px] text-portfolio-grey leading-relaxed">{e.logline}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Flagship episode evidence */}
            <div className="bg-portfolio-bg border border-portfolio-light-grey p-8 lg:p-12 mb-12">
              <div className="flex items-baseline justify-between gap-4 mb-6">
                <span className="text-caption text-portfolio-grey tracking-[0.2em]">EP6 · 대표 회차</span>
                <span className="text-caption text-portfolio-grey tracking-[0.15em]">남자의 자존심</span>
              </div>
              <p className="text-body text-portfolio-dark-grey leading-relaxed mb-6">
                체력·에너지에 자신만만하던 라이벌 원장이, 원장님의 '일상 디테일' 질문 하나하나에
                무너지는 구조. 성 기능·전신 효과 언급은 0회 — 대신 "5층은 걸어 올라가세요?" 같은
                일상 질문만으로 남성 시청자의 공감을 정면으로 겨냥했습니다.
              </p>
              <div className="space-y-2 mb-6 text-body text-portfolio-black">
                <p><span className="text-portfolio-grey">원장:</span> "5층은 걸어 올라가세요?"</p>
                <p><span className="text-portfolio-grey">라이벌 원장:</span> "…엘리베이터 있는데요?"</p>
                <p><span className="text-portfolio-grey">원장:</span> "술 다음 날, 하루로 안 풀리시죠."</p>
                <p><span className="text-portfolio-grey">라이벌 원장:</span> (작게) "…이틀."</p>
              </div>
              <p className="text-caption text-portfolio-black font-semibold border-t border-portfolio-light-grey pt-4">
                컴플라이언스 노트: 전신 효과·기능 개선을 직접 약속하지 않고, 피부에 드러난 피로·노화
                신호만 근거로 제안 — 의료광고 심의 리스크를 대본 단계에서 사전 통제.
              </p>
            </div>

            <p className="text-small text-portfolio-grey max-w-2xl leading-relaxed">
              이 시리즈는 촬영 전 기획 단계이며, 실제 시술명·효능 표현은 클리닉 메뉴 확인과 의료광고
              심의를 거쳐 확정됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* 06 SELECTED CONTENT PERFORMANCE */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <SectionHeader
              num="06"
              caption="SELECTED CONTENT PERFORMANCE"
              title={'SELECTED CONTENT\nPERFORMANCE'}
            />

            {/* Cases Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {[
                {
                  num: 'CASE 01',
                  title: 'CREATOR / VLOG CONTENT',
                  platform: 'DOUYIN',
                  format: 'Creator Collaboration / Travel Vlog',
                  metrics: [
                    { value: '21K', label: 'VIEWS' },
                    { value: '3.2K+', label: 'LIKES' },
                    { value: '600+', label: 'SHARES' },
                  ],
                  description:
                    '한국 여행 경험 안에서 브랜드 접점을 자연스럽게 연결한 크리에이터형 Native Vlog 콘텐츠를 운영했습니다.',
                  image: '/hb-case1.png',
                  imagePosition: '50% 83%',
                  postUrl: 'https://v.douyin.com/14ZibrnM2Mk/',
                  highlight: false,
                },
                {
                  num: 'CASE 02',
                  title: 'HIGH-ENGAGEMENT CREATOR CONTENT',
                  platform: 'DOUYIN',
                  format: 'Creator / Medical Beauty Content',
                  metrics: [
                    { value: '23K', label: 'VIEWS' },
                    { value: '11K', label: 'LIKES' },
                    { value: '1.2K', label: 'SHARES' },
                    { value: '325', label: 'SAVES' },
                    { value: '131', label: 'COMMENTS' },
                  ],
                  description:
                    '한국 피부과 경험과 현지 사용자 관심 포인트를 결합하고, Hook·제목·편집 문법을 플랫폼에 맞춰 현지화했습니다.',
                  image: '/hb-case2.png',
                  imagePosition: '50% 76%',
                  postUrl: 'https://v.douyin.com/s8LHvBwlPlE/',
                  highlight: true,
                },
                {
                  num: 'CASE 03',
                  title: 'TREND-DRIVEN LOCALIZED CONTENT',
                  platform: 'XIAOHONGSHU',
                  format: 'Celebrity / Face Analysis — 张凌赫 얼굴 라인 분석',
                  metrics: [
                    { value: '15K', label: 'VIEWS' },
                    { value: '224', label: 'LIKES' },
                    { value: '86', label: 'SAVES' },
                    { value: '4', label: 'COMMENTS' },
                  ],
                  description:
                    '관심도가 높은 연예인·외모 트렌드를 메디컬 뷰티 정보와 연결해 현지 콘텐츠 문법에 맞춰 로컬라이징했습니다.',
                  image: '/hb-case3.png',
                  imagePosition: '50% 76%',
                  postUrl: 'http://xhslink.com/o/9ip3fBR6fms',
                  highlight: false,
                },
                {
                  num: 'CASE 04',
                  title: 'REAL-TIME TREND CONTENT',
                  platform: 'DOUYIN',
                  format: 'Trend / K-pop IP Content — CORTIS 원장 코멘터리',
                  metrics: [
                    { value: '15K', label: 'VIEWS' },
                    { value: '337', label: 'LIKES' },
                    { value: '14', label: 'SAVES' },
                    { value: '6', label: 'COMMENTS' },
                  ],
                  description:
                    '실시간 K-pop·SNS 트렌드를 빠르게 콘텐츠화하는 Short-form 기획·제작·배포 프로세스를 실행했습니다.',
                  image: '/hb-case4.jpg',
                  imagePosition: '50% 64%',
                  postUrl: 'https://v.douyin.com/GGp94qgjiC4/',
                  highlight: false,
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className={`bg-portfolio-bg border ${
                    item.highlight ? 'border-2 border-portfolio-black' : 'border-portfolio-light-grey'
                  }`}
                >
                  {/* Screenshot */}
                  <div className="aspect-[9/16] max-h-[560px] w-full overflow-hidden bg-portfolio-black">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: item.imagePosition }}
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex items-baseline justify-between gap-4 mb-6">
                      <span className="text-caption text-portfolio-grey tracking-[0.2em]">{item.num}</span>
                      <span className="text-caption text-portfolio-grey tracking-[0.15em]">
                        {item.platform} · {item.format}
                      </span>
                    </div>
                    <h3 className="text-title text-portfolio-black mb-6 tracking-wide">{item.title}</h3>
                    {/* Metrics */}
                    <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8 pb-8 border-b border-portfolio-light-grey">
                      {item.metrics.map((m) => (
                        <div key={m.label}>
                          <p className="text-3xl lg:text-4xl font-bold text-portfolio-black tracking-tight">
                            {m.value}
                          </p>
                          <p className="text-caption text-portfolio-grey tracking-[0.15em] mt-1">{m.label}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-body text-portfolio-dark-grey leading-relaxed">{item.description}</p>
                    <a
                      href={item.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 mt-6 text-small text-portfolio-grey hover:text-portfolio-black transition-colors"
                    >
                      <span className="border-b border-portfolio-light-grey group-hover/link:border-portfolio-black transition-colors tracking-[0.1em]">
                        ORIGINAL POST
                      </span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Content Operating Logic — Compact Flow */}
            <div className="mt-20 lg:mt-24 bg-portfolio-black text-white p-8 lg:p-12">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] block mb-8">
                CONTENT OPERATING LOGIC
              </span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-caption font-semibold tracking-[0.15em] mb-8">
                {operatingFlow.map((step, i) => (
                  <span key={step} className="flex items-center gap-3">
                    <span className="text-white px-4 py-2 border border-white/40">{step}</span>
                    {i < operatingFlow.length - 1 && <span className="text-portfolio-grey">→</span>}
                  </span>
                ))}
              </div>
              <p className="text-body text-portfolio-light-grey max-w-3xl leading-relaxed">
                시장·트렌드 인사이트를 콘텐츠로 실행하고, Organic 운영과 선택적 Paid Amplification 후 성과
                데이터를 다음 콘텐츠 전략에 반영했습니다.
              </p>
              <p className="text-small text-portfolio-grey mt-6 pt-6 border-t border-white/20">
                Selective Dou+ Paid Amplification used on selected content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 07 DATA & PERFORMANCE */}
      <section className="py-24 lg:py-32 bg-portfolio-bg">
        <div className="section-padding">
          <div className="container-wide">
            <SectionHeader
              num="07"
              caption="DATA & PERFORMANCE SYSTEM"
              title={'FROM CONTENT METRICS\nTO BUSINESS SIGNALS'}
            />
            <p className="text-body-large text-portfolio-dark-grey max-w-3xl leading-relaxed mb-16">
              조회수와 좋아요를 넘어, 채널·콘텐츠·크리에이터·DB·예약 데이터를 연결해 Marketing Performance를
              확인할 수 있는 구조를 설계했습니다.
            </p>

            {/* Business Question */}
            <div className="bg-portfolio-black text-white p-8 lg:p-14 mb-20">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] block mb-6">
                THE BUSINESS QUESTION
              </span>
              <h3 className="text-headline text-white leading-[1.15]">
                HOW DO MARKETING ACTIVITIES
                <br />
                CONNECT TO CUSTOMER ACQUISITION?
              </h3>
            </div>

            {/* Dashboard — Main Visual */}
            <div className="mb-20">
              <div className="border border-portfolio-light-grey overflow-hidden">
                <img
                  src="/hb-dashboard.png"
                  alt="Marketing Performance Dashboard"
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-8 flex flex-wrap items-start gap-6 lg:gap-10">
                <a
                  href="https://vinnieoni.github.io/hb-china-dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-portfolio-black text-portfolio-black text-sm font-semibold tracking-[0.15em] transition-all duration-300 hover:bg-portfolio-black hover:text-white"
                >
                  <span>VIEW LIVE DASHBOARD</span>
                  <ExternalLink
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
                <div className="max-w-md">
                  <p className="text-caption font-semibold text-portfolio-black tracking-[0.15em] mb-2">
                    PORTFOLIO DEMO · SYNTHETIC DATA
                  </p>
                  <p className="text-small text-portfolio-grey leading-relaxed">
                    실제 프로젝트의 측정 구조와 분석 로직을 기반으로 설계했으며, 보안을 위해 공개 버전의
                    수치는 Synthetic Data로 대체했습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Three Business Layers */}
            <div className="mb-20">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] block mb-8">
                DASHBOARD STRUCTURE — THREE BUSINESS LAYERS
              </span>
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {dashboardLayers.map((layer) => (
                  <div key={layer.num} className="bg-white border-t-2 border-portfolio-black p-8">
                    <span className="text-caption text-portfolio-grey tracking-[0.2em] block mb-4">
                      {layer.num}
                    </span>
                    <h4 className="text-body font-bold text-portfolio-black tracking-wide leading-snug mb-6">
                      {layer.title}
                    </h4>
                    <ul className="space-y-3 pt-6 border-t border-portfolio-light-grey">
                      {layer.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-body text-portfolio-dark-grey"
                        >
                          <span className="w-1.5 h-1.5 bg-portfolio-black rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Flow */}
            <div className="mb-20">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] block mb-8">DATA FLOW</span>
              <div className="flex flex-wrap items-center gap-y-4">
                {dataFlow.map((step, i) => (
                  <div key={step} className="flex items-center">
                    <div className="px-6 py-4 border border-portfolio-black text-caption font-semibold tracking-[0.15em] text-portfolio-black">
                      {step}
                    </div>
                    {i < dataFlow.length - 1 && <span className="mx-3 text-portfolio-grey">→</span>}
                  </div>
                ))}
              </div>
              <p className="text-body text-portfolio-dark-grey max-w-3xl leading-relaxed mt-8">
                콘텐츠 반응을 단순 조회수로 끝내지 않고 고객 유입 및 전환 데이터와 연결하여 다음 마케팅
                의사결정에 활용할 수 있는 구조를 설계했습니다.
              </p>
            </div>

            {/* My Role */}
            <div className="pt-8 border-t border-portfolio-light-grey">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] block mb-4">MY ROLE</span>
              <p className="text-body-large text-portfolio-black font-medium leading-relaxed">
                Market Research · Strategy · Content Planning · Channel Operation · Performance Analysis ·
                Dashboard Planning & Building · AI-assisted Creative Execution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 08 WHAT THIS PROJECT PROVES */}
      <section className="py-24 lg:py-32 bg-portfolio-black text-white">
        <div className="section-padding">
          <div className="container-wide">
            <SectionHeader
              num="08"
              caption="WHAT THIS PROJECT PROVES"
              title={'FROM CONTENT EXECUTION\nTO DATA-DRIVEN DIGITAL MARKETING'}
              light
            />
            <p className="text-body-large text-portfolio-light-grey max-w-3xl leading-relaxed">
              시장 이해를 기반으로 채널 구축, 콘텐츠 실행, 퍼포먼스 분석, 데이터 기반 의사결정까지 연결하는
              Digital Marketing Cycle을 직접 설계하고 운영했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="py-20 bg-portfolio-bg">
        <div className="section-padding">
          <div className="container-wide flex justify-center">
            <button
              onClick={handleBack}
              className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-portfolio-black text-portfolio-black text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-portfolio-black hover:text-white"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>프로젝트로 돌아가기</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
