import { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, Play } from 'lucide-react';

// Platform Data
const platformData = [
  { 
    name: 'Xiaohongshu', 
    nameKr: '샤오홍슈',
    followers: 1039, 
    engagement: 5386,
    url: 'https://xhslink.com/m/8fC4fhUyY1y',
    image: '/platform-xiaohongshu.jpg',
  },
  { 
    name: 'Douyin', 
    nameKr: '도우인',
    followers: 492, 
    engagement: 5431,
    url: 'https://v.douyin.com/eyW7rW2UVNQ/',
    image: '/platform-douyin.jpg',
  },
  { 
    name: 'Kuaishou', 
    nameKr: '콰이쇼우',
    followers: 612, 
    engagement: 2000,
    url: 'https://v.kuaishou.com/KbVmQmkI',
    image: '/platform-kuaishou.jpg',
  },
  { 
    name: 'Weibo', 
    nameKr: '웨이보',
    followers: 1, 
    engagement: 4932,
    url: 'https://weibo.com/u/7962177383',
    image: '/platform-weibo.jpg',
  },
];

export function CaseStudy() {
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
                <span className="text-caption text-portfolio-grey tracking-[0.2em]">디지털 콘텐츠 마케팅</span>
              </div>
              
              <h1 className={`text-display text-portfolio-black mb-6 leading-tight transition-all duration-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
                탕화공부 마라탕 코리아
              </h1>
              
              <p className={`text-subtitle text-portfolio-dark-grey transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.5s' }}>
                중국 SNS 플랫폼 기반 디지털 콘텐츠 마케팅
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Project Overview */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">프로젝트 개요</span>
              <h2 className="text-headline text-portfolio-black mb-6">Project Overview</h2>
              <p className="text-body-large text-portfolio-dark-grey leading-relaxed">
                한국에서 운영되는 중국 마라탕 브랜드의 중국어권 소비자 대상 디지털 콘텐츠 마케팅 프로젝트입니다. 
                4개 주요 중국 SNS 플랫폼을 동시 운영하며 브랜드 인지도 상승과 신뢰 기반 콘텐츠 마케팅을 실행했습니다.
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
                  '숏폼 영상 콘텐츠 기획 및 제작',
                  'Xiaohongshu / Douyin / Kuaishou / Weibo 채널 운영',
                  '다중 플랫폼 콘텐츠 배포 관리',
                  '브랜드 스토리 콘텐츠 제작',
                  '가맹점 인터뷰 및 창업 스토리 콘텐츠 제작',
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

      {/* 4. Strategy */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">전략</span>
              <h2 className="text-headline text-portfolio-black mb-6">Strategy</h2>
              <p className="text-body-large text-portfolio-dark-grey leading-relaxed mb-8">
                플랫폼별 특성을 분석하여 각 채널에 최적화된 콘텐츠 전략을 수립했습니다.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { platform: '샤오홍슈', focus: '라이프스타일 & 리뷰 중심', target: '20대 여성, 맛집 탐방러' },
                  { platform: '도우인', focus: '숏폼 비디오 바이럴', target: '10-20대 Z세대' },
                  { platform: '콰이쇼우', focus: '먹방 및 직원 일상', target: '전 연령 대중층' },
                  { platform: '웨이보', focus: '브랜드 공식 채널', target: '브랜드 팔로워' },
                ].map((item) => (
                  <div key={item.platform} className="bg-portfolio-bg p-6">
                    <div className="text-lg font-bold text-portfolio-black mb-2">{item.platform}</div>
                    <div className="text-body text-portfolio-dark-grey mb-1">{item.focus}</div>
                    <div className="text-small text-portfolio-grey">{item.target}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Execution */}
      <section className="py-20 bg-portfolio-bg">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">실행</span>
              <h2 className="text-headline text-portfolio-black mb-8">Execution</h2>
              
              <div className="space-y-6">
                {[
                  { step: '01', title: '콘텐츠 기획', desc: '플랫폼별 콘텐츠 캘린더 수립 및 월별 테마 기획' },
                  { step: '02', title: '제작 및 배포', desc: '숏폼 영상 제작 및 각 플랫폼 최적화 형식으로 배포' },
                  { step: '03', title: '커뮤니티 운영', desc: '댓글 응대, DM 관리, 팔로워 인터랙션' },
                  { step: '04', title: '데이터 분석', desc: '주간/월간 성과 리포트 작성 및 전략 조정' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6 items-start bg-white p-6">
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

      {/* 6. Results */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mb-12">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">성과</span>
              <h2 className="text-headline text-portfolio-black mb-6">Results</h2>
              <p className="text-body-large text-portfolio-dark-grey leading-relaxed">
                약 2년간 SNS 채널 운영을 통해 다음과 같은 성과를 달성했습니다.
              </p>
            </div>
            
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { value: '800+', label: '숏폼 콘텐츠 제작' },
                { value: '450,000+', label: '총 조회수' },
                { value: '2,100+', label: '누적 팔로워' },
                { value: '2.7%', label: '평균 참여율' },
              ].map((stat) => (
                <div key={stat.label} className="bg-portfolio-bg p-6 text-center">
                  <div className="text-3xl font-bold text-portfolio-black mb-2">{stat.value}</div>
                  <div className="text-small text-portfolio-grey">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Platform List */}
            <div className="text-center">
              <p className="text-body text-portfolio-grey">운영 플랫폼</p>
              <p className="text-subtitle text-portfolio-black mt-2">Xiaohongshu / Douyin / Kuaishou / Weibo</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Platform Channels */}
      <section className="py-20 bg-portfolio-bg">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mb-12">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">운영 채널</span>
              <h2 className="text-headline text-portfolio-black">Platform Channels</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {platformData.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white overflow-hidden hover:shadow-card-hover transition-all duration-400"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-portfolio-light-grey">
                    <img
                      src={platform.image}
                      alt={`${platform.nameKr} 프로필`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-portfolio-black">{platform.nameKr}</span>
                      <ExternalLink size={16} className="text-portfolio-grey group-hover:text-portfolio-black transition-colors" />
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span><strong>{platform.followers.toLocaleString()}</strong> 팔로워</span>
                      <span><strong>{platform.engagement.toLocaleString()}</strong> 참여</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Content Examples */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="container-wide">
            <div className="max-w-3xl mb-12">
              <span className="text-caption text-portfolio-grey tracking-[0.2em] mb-4 block">콘텐츠 사례</span>
              <h2 className="text-headline text-portfolio-black">Content Examples</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Example 1 - Kuaishou */}
              <div className="bg-portfolio-bg overflow-hidden">
                <div className="aspect-video overflow-hidden bg-black relative">
                  <img
                    src="/content-example1.jpg"
                    alt="가맹 창업 지원 콘텐츠"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <a 
                      href="https://v.kuaishou.com/7ERMjim1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Play size={24} className="text-portfolio-black ml-1" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-[#FF6600] text-white text-xs font-medium">Kuaishou</span>
                  </div>
                  <h3 className="text-subtitle text-portfolio-black mb-2">가맹 창업 지원 콘텐츠</h3>
                  <p className="text-body text-portfolio-dark-grey mb-4">
                    탕화공부와 하나은행 협력 창업 지원 프로그램을 설명하는 영상. 약 35,000 조회수 기록.
                  </p>
                  <a 
                    href="https://v.kuaishou.com/7ERMjim1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-portfolio-black hover:text-portfolio-grey transition-colors"
                  >
                    <Play size={14} />
                    영상 보기
                  </a>
                </div>
              </div>

              {/* Example 2 - Xiaohongshu */}
              <div className="bg-portfolio-bg overflow-hidden">
                <div className="aspect-video overflow-hidden bg-black relative">
                  <img
                    src="/content-example2.jpg"
                    alt="40세 창업 스토리"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <a 
                      href="http://xhslink.com/o/6S9RWiY04Yg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Play size={24} className="text-portfolio-black ml-1" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-[#FF2442] text-white text-xs font-medium">Xiaohongshu</span>
                  </div>
                  <h3 className="text-subtitle text-portfolio-black mb-2">40세 창업 스토리</h3>
                  <p className="text-body text-portfolio-dark-grey mb-4">
                    가맹점주의 실제 창업 경험을 스토리 형식으로 전달하여 브랜드 신뢰도를 높이는 콘텐츠.
                  </p>
                  <a 
                    href="http://xhslink.com/o/6S9RWiY04Yg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-portfolio-black hover:text-portfolio-grey transition-colors"
                  >
                    <Play size={14} />
                    영상 보기
                  </a>
                </div>
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
