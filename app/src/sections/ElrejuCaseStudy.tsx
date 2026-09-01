import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const findings = [
  {
    num: '01',
    title: '팔로워 수가 아니라\n훅의 힘',
    description:
      "경쟁사 D는 팔로워 1,100여 명으로 리뷰 15,000+ 건을 만들었습니다. 바이럴 영상 단 1개(약 25K 조회수)가 전체를 견인했습니다. 알고리즘은 계정이 아니라 콘텐츠에 보상합니다.",
  },
  {
    num: '02',
    title: 'TikTok Shop 런칭 전\n리뷰 확보가 먼저',
    description:
      '리뷰 0건이면 전환율이 50% 이상 떨어집니다. 경쟁사 A는 리뷰 2,400여 건으로 월 3,000건 이상의 구매를 만들어냈습니다. Elreju는 Phase 1 런칭 전 15건 이상의 리뷰 확보가 필요합니다.',
  },
  {
    num: '03',
    title: '성분 백스페이스,\n지금 선점',
    description:
      '조사한 주요 경쟁사 중 단 1곳만 해당 성분을 언급했고(리뷰 20건 미만), 나머지는 전무했습니다. Elreju의 PDRN+PN 포뮬러는 사실상 무경쟁 백스페이스입니다.',
  },
];

const competitors = [
  {
    id: 'A',
    label: 'COMPETITOR A',
    tag: 'TikTok Shop-led',
    stats: ['700+ followers', '2,400+ reviews', '3K+ mo. sales'],
    note: 'UGC 크리에이터 네트워크 + TikTok Shop 인앱 결제로 낮은 팔로워 대비 최고 판매 전환을 만든 사례.',
    shop: 'TikTok Shop ✓',
    price: '$20–25/session',
    rating: '4.2★',
  },
  {
    id: 'B',
    label: 'COMPETITOR B',
    tag: 'MD-Authority Category Leader',
    stats: ['95K+ followers', '450K+ likes', '~55K peak views'],
    note: '의사 자문단 기반 교육형 콘텐츠 생태계(마이크로인퓨전 튜토리얼·FAQ·팁 시리즈)로 카테고리 리더십 확보.',
    shop: 'TikTok Shop ✓',
    price: '<$20/session',
    rating: 'MD authority',
  },
  {
    id: 'C',
    label: 'COMPETITOR C',
    tag: 'Compliance Warning Case',
    stats: ['~900 followers', '450+ reviews', '~350 views/video'],
    note: '제조 인증 번호를 규제 승인처럼 오인시키는 표기 리스크 사례. TikTok은 인지도용, 실제 전환은 타 채널에서.',
    shop: 'No TikTok Shop',
    price: '$37/session',
    rating: '4.0★',
  },
  {
    id: 'D',
    label: 'COMPETITOR D',
    tag: 'UGC / Amazon-First Proof Point',
    stats: ['1,100+ followers', '15K+ reviews', '~25K view viral video'],
    note: '바이럴 영상 1개가 UGC 홍수를 만들고, 그 UGC가 Amazon 리뷰 지배력으로 이어진 핵심 증거 사례.',
    shop: 'Amazon-first',
    price: '$18/session',
    rating: '4.8★',
  },
];

const funnelSteps = [
  { icon: '📹', title: 'Content', detail: 'Hook 0–3s · Demo 8–25s · Before/After', rate: '10–30%', rateLabel: 'algo reach' },
  { icon: '🔒', title: 'Trust', detail: 'No-filter B/A · Authority · Week series', rate: 'CTR 2–3%', rateLabel: 'link click' },
  { icon: '🛒', title: 'Click', detail: 'In-app checkout · Affiliate code', rate: 'CVR 1–3%', rateLabel: 'conversion' },
  { icon: '💳', title: 'Purchase', detail: 'OTP or subscription · Bundle upsell', rate: '', rateLabel: '' },
];

const simulationFlow = [
  { value: '100', label: 'CREATORS SENT' },
  { value: '50', label: 'VIDEOS POSTED' },
  { value: '500K', label: 'IMPRESSIONS' },
  { value: '15K', label: 'CLICKS' },
  { value: '150–450', label: 'PURCHASES' },
  { value: '~$25K', label: 'BASE GMV' },
];

const riskAssumptions = [
  {
    stat: '40–60%',
    title: 'UGC Post Rate',
    desc: '크리에이터 50명을 섭외해도 실제 게시는 20–30명. 멀티 브랜드 협업·낮은 브랜드 인지도가 우선순위를 낮춥니다.',
    fix: '100명 섭외 + 계약서에 게시 의무 명시.',
  },
  {
    stat: '10–30%',
    title: 'Algorithm Reach Rate',
    desc: '신규 계정은 초기 도달 풀이 좁습니다. 경쟁사 C는 공식 계정 평균 조회수가 350회 수준이고, 팔로워 95K인 경쟁사 B조차 500회대 영상이 존재합니다.',
    fix: '3초 리텐션 65% 이상인 영상만 유료 부스팅.',
  },
  {
    stat: '1–3%',
    title: 'Purchase CVR',
    desc: '리뷰 0건이면 전환율이 50% 이상 하락합니다. 경쟁사 A의 리뷰 2,400여 건이 월 3,000건 이상 구매를 견인하는 근거입니다.',
    fix: 'TikTok Shop 런칭 전 리뷰 15건 이상 확보.',
  },
  {
    stat: '6–10 wks',
    title: 'Content → Revenue Lag',
    desc: '알고리즘 확산(1–2주) + 소비자 고려(2–3주) + 재시청 결정(1–2주). 고관여 제품 특성상 충동구매가 없습니다.',
    fix: 'Phase 0의 4주는 검증 전용 — 매출 기대 없음.',
  },
];

const pricingComparison = [
  { label: 'Competitor D', value: '~$18' },
  { label: 'Competitor B', value: '<$20' },
  { label: 'Competitor A', value: '~$21' },
  { label: 'Elreju 🎯', value: '~$27', highlight: true },
  { label: 'Competitor E', value: '~$23' },
  { label: 'Competitor C', value: '~$37' },
  { label: 'Competitor F', value: '~$50' },
];

const elrejuPricingTiers = [
  { channel: 'B2B Clinic', price: '~$33', perSession: '—', cltv: 'Hospital supply' },
  { channel: 'OTP Retail', price: '~$80–90', perSession: '~$40–45', cltv: 'Single' },
  { channel: 'Influencer Promo', price: '~$54 max', perSession: '~$27 ⚠', cltv: '39% margin only' },
  { channel: '3mo Subscription', price: '~$60/mo', perSession: '~$30', cltv: '~$190' },
  { channel: '6mo Subscription', price: '~$53/mo', perSession: '~$27', cltv: '~$320', highlight: true },
];

const positioningPoints = [
  { icon: '🇰🇷', title: 'K-Beauty Clinical Bridge', desc: 'KBSL 병원 기원 + 글로벌 셀럽發 시술 트렌드 = 타이밍 적중' },
  { icon: '💉', title: 'Ingredient White Space', desc: '조사 범위 내 해당 성분을 다루는 경쟁사는 사실상 부재' },
  { icon: '🏆', title: '3-Country Certification Moat', desc: 'KR+US+EU 인증 — 경쟁사 중 이 조합을 갖춘 곳 없음' },
];

const gmvScenarios = [
  {
    label: 'CONSERVATIVE',
    value: '~$10K',
    range: '$8K – $12K',
    items: ['UGC 영상 20편 이하 (성공률 40%)', '3초 리텐션 60% 미만 — 훅 실패', '리뷰 5건 미만 — 전환 방어력 없음'],
    lever: '훅 품질이 관건',
  },
  {
    label: 'BASE',
    value: '~$25K',
    range: '$20K – $30K',
    items: ['UGC 영상 30–40편 (성공률 50–60%)', '3초 리텐션 65%+ (훅 2–3개 검증)', '리뷰 10–20건 확보'],
    lever: '리뷰 확보 속도가 관건',
  },
  {
    label: 'UPSIDE',
    value: '~$50K',
    range: '$45K – $60K',
    items: ['영상 40편+ 및 바이럴 1건(10만+ 조회)', '리뷰 30건+ (신뢰 임계점)', '번들 SKU 도입 · AOV $120+'],
    lever: '바이럴 발생 — 완전 통제 불가',
  },
];

const roadmapPhases = [
  {
    phase: 'PHASE 0',
    subtitle: 'Week 1–4 · 검증만, 매출 없음',
    items: ['TikTok Shop US 계정 + 인증 업로드', '콘텐츠 훅 5종 설계 후 3종 A/B 테스트', '유료 부스팅 소액 테스트 → 리텐션 측정', '시드 크리에이터 20–30명 사전 컨택'],
    gate: 'GO / NO-GO GATE',
  },
  {
    phase: 'PHASE 1',
    subtitle: 'Week 5–8 · 런칭',
    items: ['크리에이터 50명 섭외 + 개인 코드', 'TikTok Shop 스타터 키트 오픈', '리텐션 우수 영상에 소액 광고 집행', '첫 라이브 방송 (창업자 + 의료진)'],
  },
  {
    phase: 'PHASE 2',
    subtitle: 'Week 9–12 · 스케일',
    items: ['번들 SKU: 3개월/6개월 구독', '제휴 크리에이터 200명+, 등급제 공개', '해시태그 챌린지 런칭', '대형 라이브 방송'],
  },
  {
    phase: 'MONTH 4+',
    subtitle: 'Expand · 미국 검증 후',
    items: ['TikTok Shop 영국 진출', 'Amazon US FBA 진입', '동남아 이커머스 플랫폼', '한국 자국 플랫폼'],
  },
];

const decisionQA = [
  {
    q: '지금 바로 프로모션을 시작해도 되나?',
    a: 'NO. Phase 0를 먼저 실행해 리텐션 65%+, CTR 2%+를 검증해야 합니다. 경쟁사 C의 "팔로워 900명, 평균 조회 350회"가 경고 사례입니다.',
  },
  {
    q: '40% 할인가가 지속 가능한가?',
    a: '조건부. 정가가 먼저 자리 잡은 뒤에만 가능합니다. 할인가 기준으로는 매출총이익률이 27–32% 수준이라 구독 전환 20%+가 필요합니다.',
  },
  {
    q: '경쟁 대비 차별화가 실재하는가?',
    a: 'YES. 조사 범위 내에서 해당 성분을 다루는 경쟁사는 사실상 없었습니다. 3개국 인증 스택은 방어 가능한 진입장벽입니다.',
  },
  {
    q: '90일 GMV 목표는?',
    a: '3가지 시나리오. Conservative/Base/Upside 중 Phase 0 데이터를 보고 선택합니다. 런칭 전 단일 숫자에 미리 커밋하지 않습니다.',
  },
  {
    q: 'TikTok Shop US 진입 준비가 됐는가?',
    a: '체크리스트 4개 — 인증 업로드, 리뷰 15+, 광고 예산 확보, 시드 크리에이터 20–30명. 4개 모두 충족 시 진행.',
  },
  {
    q: '가장 먼저 봐야 할 지표는?',
    a: '4개 게이트 — 3초 리텐션 65%+ · 리뷰 10+ · CAC 목표 이내 · 구독 전환 20%+. 4개 모두 충족 시 스케일업 승인.',
  },
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
                1-MONTH STRATEGY SPRINT — GLOBAL eCOMMERCE
              </span>
            </div>

            <h1
              className={`text-caption text-portfolio-grey tracking-[0.2em] mb-4 transition-all duration-600 ease-expo-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              ELREJU × KBSL
            </h1>

            <p
              className={`text-display text-white leading-[1.1] mb-8 transition-all duration-800 ease-expo-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              Evidence-Based
              <br />
              Pre-Launch Market Entry Plan
            </p>

            <p
              className={`text-body-large text-portfolio-grey max-w-2xl leading-relaxed mb-8 transition-all duration-700 ease-expo-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              한국 병원 발(發) K-Beauty 브랜드의 미국 TikTok Shop 진출을 앞두고, 1개월간 공개 데이터
              기반 경쟁 분석부터 전환 구조 설계, 가격·GMV 시나리오 모델링, 실행 로드맵까지 연결하는
              Pre-Launch Go-to-Market Plan을 수립했습니다.
            </p>

            {/* Confidentiality note */}
            <p
              className={`text-small text-portfolio-grey max-w-2xl leading-relaxed mb-12 border-l-2 border-white/20 pl-4 transition-all duration-700 ease-expo-out ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '0.7s' }}
            >
              아직 캠페인이 실행되기 전 단계이며, 이 페이지에 나오는 GMV·전환율 수치는 모두 실제
              집행 결과가 아니라 시장조사 기반 예측·가설입니다. 실제 프로젝트는 클라이언트 대외비
              리포트이며, 포트폴리오 공개를 위해 경쟁사명과 일부 수치를 익명화·범위화했습니다.
              분석 구조와 전략 로직은 원본과 동일합니다.
            </p>

            {/* Meta */}
            <div
              className={`grid sm:grid-cols-3 gap-8 pt-8 border-t border-white/20 transition-all duration-700 ease-expo-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '0.8s' }}
            >
              <div>
                <span className="text-caption text-portfolio-grey tracking-[0.15em] block mb-2">DURATION</span>
                <p className="text-body text-white font-medium">1 Month · 2026.04</p>
              </div>
              <div>
                <span className="text-caption text-portfolio-grey tracking-[0.15em] block mb-2">DELIVERABLE</span>
                <p className="text-body text-white font-medium">Pre-Launch Strategy Deck (Evidence Layer v3.0)</p>
              </div>
              <div>
                <span className="text-caption text-portfolio-grey tracking-[0.15em] block mb-2">SCOPE</span>
                <p className="text-body text-white font-medium">
                  Competitive Intelligence · Conversion Modeling · Pricing · GMV Forecasting · Roadmap
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 EXECUTIVE SUMMARY */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <SectionHeader
              num="01"
              caption="EXECUTIVE SUMMARY"
              title={'THREE THINGS THAT DECIDE\nWHETHER ELREJU WINS'}
            />
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {findings.map((f) => (
                <div key={f.num} className="bg-portfolio-black text-white p-8 lg:p-10">
                  <span className="text-caption text-portfolio-grey tracking-[0.2em] block mb-6">
                    {f.num}
                  </span>
                  <h3 className="text-subtitle text-white mb-4 whitespace-pre-line leading-snug">
                    {f.title}
                  </h3>
                  <p className="text-body text-portfolio-light-grey leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>

            {/* Positioning strip */}
            <div className="grid sm:grid-cols-3 gap-4 lg:gap-6 mt-6 lg:mt-8">
              {positioningPoints.map((p) => (
                <div key={p.title} className="bg-portfolio-bg p-5 border-l-2 border-portfolio-black">
                  <p className="text-small font-bold text-portfolio-black mb-1">
                    {p.icon} {p.title}
                  </p>
                  <p className="text-caption text-portfolio-dark-grey leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 COMPETITIVE LANDSCAPE */}
      <section className="py-24 lg:py-32 bg-portfolio-black text-white">
        <div className="section-padding">
          <div className="container-wide">
            <SectionHeader
              num="02"
              caption="TIKTOK COMPETITIVE LANDSCAPE"
              title={'FOUR PLAYBOOKS,\nONE SYNTHESIS'}
              light
            />
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
              {competitors.map((c) => (
                <div key={c.id} className="border border-white/20 p-6 lg:p-8">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-body font-bold text-white tracking-[0.1em]">{c.label}</span>
                    <span className="text-caption text-portfolio-grey">{c.tag}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {c.stats.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 text-xs font-medium text-portfolio-light-grey border border-white/20"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="text-body text-portfolio-light-grey leading-relaxed mb-5">{c.note}</p>
                  <div className="flex flex-wrap gap-4 text-caption text-portfolio-grey pt-4 border-t border-white/10">
                    <span>{c.shop}</span>
                    <span>{c.price}</span>
                    <span>{c.rating}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white/5 border border-white/20 p-6 lg:p-8">
              <p className="text-body-large text-white leading-relaxed">
                <strong>핵심 인사이트:</strong> 팔로워 수는 매출과 비례하지 않습니다. Elreju의 전략은
                경쟁사 A의 TikTok Shop 결제 구조 + 경쟁사 B의 의료진 권위 + 경쟁사 D의 UGC 볼륨, 세
                요소를 종합했습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 CONVERSION ARCHITECTURE & RISK */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <SectionHeader
              num="03"
              caption="CONVERSION ARCHITECTURE"
              title={'CONTENT → TRUST\n→ CLICK → PURCHASE'}
            />

            {/* Funnel */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
              {funnelSteps.map((step, i) => (
                <div key={step.title} className="bg-portfolio-bg border border-portfolio-light-grey p-6 lg:p-8">
                  <span className="text-2xl block mb-4">{step.icon}</span>
                  <h3 className="text-body font-bold text-portfolio-black tracking-wide mb-3">
                    {step.title}
                  </h3>
                  <p className="text-small text-portfolio-dark-grey leading-relaxed mb-4">{step.detail}</p>
                  {step.rate && (
                    <p className="text-caption text-portfolio-grey tracking-[0.1em]">
                      {step.rate} <span className="text-portfolio-light-grey">· {step.rateLabel}</span>
                    </p>
                  )}
                  {i < funnelSteps.length - 1 && (
                    <ArrowRight size={16} className="hidden lg:block text-portfolio-light-grey mt-4" />
                  )}
                </div>
              ))}
            </div>

            {/* 90-day simulation */}
            <div className="bg-portfolio-black text-white p-8 lg:p-12 mb-20">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] block mb-8">
                90-DAY BASE SIMULATION (ILLUSTRATIVE)
              </span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-4">
                {simulationFlow.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-3">
                    <div className="text-center">
                      <p className="text-2xl lg:text-3xl font-bold tracking-tight">{step.value}</p>
                      <p className="text-[10px] text-portfolio-grey tracking-[0.1em] mt-1">{step.label}</p>
                    </div>
                    {i < simulationFlow.length - 1 && (
                      <ArrowRight size={16} className="text-portfolio-grey" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Reality check */}
            <span className="text-caption text-portfolio-grey tracking-[0.2em] block mb-8">
              ⚠ REALITY CHECK — FOUR ASSUMPTIONS THAT KILL CAMPAIGNS
            </span>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {riskAssumptions.map((r) => (
                <div key={r.title} className="bg-portfolio-bg border border-portfolio-light-grey p-6 lg:p-7">
                  <p className="text-2xl font-bold text-portfolio-black tracking-tight mb-2">{r.stat}</p>
                  <h4 className="text-body font-bold text-portfolio-black mb-3">{r.title}</h4>
                  <p className="text-small text-portfolio-dark-grey leading-relaxed mb-4">{r.desc}</p>
                  <p className="text-caption text-portfolio-black font-semibold border-t border-portfolio-light-grey pt-3">
                    Fix: {r.fix}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04 PRICING & GMV SCENARIOS */}
      <section className="py-24 lg:py-32 bg-portfolio-bg">
        <div className="section-padding">
          <div className="container-wide">
            <SectionHeader
              num="04"
              caption="PRICING STRATEGY"
              title={'WHERE ELREJU SITS\nIN THE MARKET'}
            />

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
              {/* Pricing comparison */}
              <div>
                <span className="text-caption text-portfolio-grey tracking-[0.2em] block mb-8">
                  COST PER SESSION — ACROSS MARKET (ILLUSTRATIVE)
                </span>
                <div className="space-y-4">
                  {pricingComparison.map((p) => (
                    <div key={p.label} className="flex items-center gap-4">
                      <span
                        className={`w-32 text-small ${
                          p.highlight ? 'font-bold text-portfolio-black' : 'text-portfolio-dark-grey'
                        }`}
                      >
                        {p.label}
                      </span>
                      <div className="flex-1 h-6 bg-white border border-portfolio-light-grey relative overflow-hidden">
                        <div
                          className={`h-full ${p.highlight ? 'bg-portfolio-black' : 'bg-portfolio-light-grey'}`}
                          style={{ width: `${(parseFloat(p.value.replace(/[^0-9.]/g, '')) / 50) * 100}%` }}
                        />
                      </div>
                      <span className="w-16 text-small font-semibold text-portfolio-black text-right">
                        {p.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Elreju pricing architecture */}
              <div>
                <span className="text-caption text-portfolio-grey tracking-[0.2em] block mb-8">
                  ELREJU PRICING ARCHITECTURE — BUNDLE FOR CLTV
                </span>
                <div className="space-y-px bg-portfolio-light-grey border border-portfolio-light-grey">
                  {elrejuPricingTiers.map((t) => (
                    <div
                      key={t.channel}
                      className={`grid grid-cols-3 gap-2 p-4 ${
                        t.highlight ? 'bg-portfolio-black text-white' : 'bg-white'
                      }`}
                    >
                      <span className={`text-small font-medium ${t.highlight ? 'text-white' : 'text-portfolio-black'}`}>
                        {t.channel}
                      </span>
                      <span className={`text-small ${t.highlight ? 'text-portfolio-grey' : 'text-portfolio-dark-grey'}`}>
                        {t.price}
                      </span>
                      <span className={`text-small text-right ${t.highlight ? 'text-white font-semibold' : 'text-portfolio-grey'}`}>
                        {t.cltv}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-small text-portfolio-grey leading-relaxed mt-6">
                  Critical: 프로모션가($54 수준) 기준 매출총이익률은 27–32%에 불과합니다. OTP
                  정가가 먼저 자리 잡아야 하고, 구독 전환율 20%+가 지속 가능성의 조건입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 GMV SCENARIOS */}
      <section className="py-24 lg:py-32 bg-portfolio-black text-white">
        <div className="section-padding">
          <div className="container-wide">
            <SectionHeader
              num="05"
              caption="90-DAY GMV SCENARIOS"
              title={'THREE OUTCOMES.\nONE DECISION VARIABLE: THE HOOK.'}
              light
            />
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
              {gmvScenarios.map((s) => (
                <div key={s.label} className="border border-white/20 p-6 lg:p-8">
                  <span className="text-caption text-portfolio-grey tracking-[0.2em] block mb-4">
                    {s.label}
                  </span>
                  <p className="text-4xl lg:text-5xl font-bold tracking-tight mb-1">{s.value}</p>
                  <p className="text-caption text-portfolio-grey mb-8">{s.range}</p>
                  <ul className="space-y-3 mb-8 pb-8 border-b border-white/10">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-small text-portfolio-light-grey">
                        <span className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-caption text-white font-semibold tracking-[0.1em]">🔑 {s.lever}</p>
                </div>
              ))}
            </div>
            <p className="text-body text-portfolio-grey max-w-3xl leading-relaxed">
              ⚡ Decision protocol: Phase 0(4주) 이후 3초 리텐션·CTR 데이터를 기준으로 달성 가능한
              시나리오를 선택합니다. 예산 배분은 그때 결정합니다 — 지금이 아닙니다.
            </p>
          </div>
        </div>
      </section>

      {/* 06 EXECUTION ROADMAP */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <SectionHeader
              num="06"
              caption="EXECUTION ROADMAP"
              title={'FOUR PHASES.\nVALIDATE BEFORE YOU SCALE.'}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10">
              {roadmapPhases.map((p) => (
                <div key={p.phase} className="bg-portfolio-bg border-t-2 border-portfolio-black p-6 lg:p-7">
                  <span className="text-caption font-bold text-portfolio-black tracking-[0.1em] block">
                    {p.phase}
                  </span>
                  <span className="text-caption text-portfolio-grey block mb-6">{p.subtitle}</span>
                  <ul className="space-y-3">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-small text-portfolio-dark-grey">
                        <span className="w-1 h-1 bg-portfolio-black rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {p.gate && (
                    <p className="text-caption font-bold text-portfolio-black mt-6 pt-4 border-t border-portfolio-light-grey">
                      {p.gate}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="bg-portfolio-black text-white p-6 lg:p-8">
              <p className="text-body text-portfolio-light-grey leading-relaxed">
                <strong className="text-white">Rule:</strong> 미국 검증 없이 여러 시장에 동시 진입하지
                않습니다. 경쟁사 B는 글로벌 확장 전에 미국에서 팔로워 95K를 먼저 만들었습니다. 자원
                분산은 데이터 희석 + 예산 낭비로 이어집니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 DECISION FRAMEWORK */}
      <section className="py-24 lg:py-32 bg-portfolio-bg">
        <div className="section-padding">
          <div className="container-wide">
            <SectionHeader
              num="06"
              caption="DECISION FRAMEWORK"
              title={'SIX QUESTIONS.\nSIX EVIDENCE-BASED ANSWERS.'}
            />
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
              {decisionQA.map((qa, i) => (
                <div key={qa.q} className="pb-8 border-b border-portfolio-light-grey">
                  <p className="text-caption font-bold text-portfolio-black tracking-[0.1em] mb-2">
                    Q{i + 1}
                  </p>
                  <p className="text-body font-semibold text-portfolio-black mb-2">{qa.q}</p>
                  <p className="text-small text-portfolio-dark-grey leading-relaxed">{qa.a}</p>
                </div>
              ))}
            </div>
            <div className="bg-portfolio-black text-white p-8 lg:p-12">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] block mb-4">
                THE VERDICT
              </span>
              <p className="text-body-large leading-relaxed">
                Elreju는 실재하는 백스페이스(성분 차별화), 신뢰할 수 있는 권위 스토리(KBSL), 그리고
                검증된 플레이북(경쟁사 A+B+D의 종합)을 갖고 있습니다. 리스크는 실행 순서입니다 —
                스케일업 전에 검증하고, 90일의 창은 승산이 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 07 WHAT THIS PROJECT PROVES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <SectionHeader
              num="07"
              caption="WHAT THIS PROJECT PROVES"
              title={'FROM MARKET DATA\nTO A SALES-READY DECISION'}
            />
            <p className="text-body-large text-portfolio-dark-grey max-w-3xl leading-relaxed">
              중국 단일 시장을 넘어, 미국이라는 신규 글로벌 시장에서 공개 데이터로 경쟁 구도를
              해체하고, 전환 퍼널과 가격·GMV 모델을 설계하고, 실행 순서를 게이트로 통제하는
              Evidence-Based Go-to-Market 전략을 처음부터 끝까지 직접 설계했습니다. 콘텐츠 실행을
              넘어, 매출·마진·리스크를 함께 보는 해외영업/비즈니스 관점의 의사결정 역량을
              보여주는 프로젝트입니다.
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
