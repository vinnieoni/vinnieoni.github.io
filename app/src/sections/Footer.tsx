import { useInView } from '@/hooks/useInView';

const navLinks = [
  { label: '홈', href: '#home' },
  { label: '소개', href: '#about' },
  { label: '프로젝트', href: '#projects' },
  { label: '연락처', href: '#contact' },
];

export function Footer() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.5 });

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={ref} className="py-8 bg-portfolio-bg border-t border-portfolio-light-grey">
      <div className="section-padding">
        <div className="container-wide">
          {/* Divider Line Animation */}
          <div className="relative mb-8">
            <div
              className={`absolute top-0 left-1/2 -translate-x-1/2 h-px bg-portfolio-light-grey transition-all duration-800 ease-expo-out ${
                isInView ? 'w-full' : 'w-0'
              }`}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div
              className={`transition-all duration-500 ease-expo-out ${
                isInView ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <p className="text-small text-portfolio-grey">
                © 2024 서문청. All rights reserved.
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-6">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative text-small text-portfolio-dark-grey hover:text-portfolio-black transition-all duration-400 ease-expo-out group ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                  style={{ transitionDelay: `${0.35 + index * 0.05}s` }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-portfolio-black group-hover:w-full transition-all duration-300 ease-expo-out" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
