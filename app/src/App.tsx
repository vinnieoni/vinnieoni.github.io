import { useState, useEffect } from 'react';
import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { Projects } from '@/sections/Projects';
import { Capabilities } from '@/sections/Capabilities';
import { About } from '@/sections/About';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { CaseStudy } from '@/sections/CaseStudy';
import { MoomooCaseStudy } from '@/sections/MoomooCaseStudy';
import { MedicalCaseStudy } from '@/sections/MedicalCaseStudy';
import { HealingbreezeCaseStudy } from '@/sections/HealingbreezeCaseStudy';
import { ElrejuCaseStudy } from '@/sections/ElrejuCaseStudy';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'casestudy' | 'moomoo' | 'medical' | 'healingbreeze' | 'elreju'>('home');

  useEffect(() => {
    // Check URL hash for case study
    if (window.location.hash === '#casestudy') {
      setCurrentPage('casestudy');
    } else if (window.location.hash === '#moomoo') {
      setCurrentPage('moomoo');
    } else if (window.location.hash === '#medical') {
      setCurrentPage('medical');
    } else if (window.location.hash === '#healingbreeze') {
      setCurrentPage('healingbreeze');
    } else if (window.location.hash === '#elreju') {
      setCurrentPage('elreju');
    }

    // Listen for hash changes
    const handleHashChange = () => {
      if (window.location.hash === '#casestudy') {
        setCurrentPage('casestudy');
      } else if (window.location.hash === '#moomoo') {
        setCurrentPage('moomoo');
      } else if (window.location.hash === '#medical') {
        setCurrentPage('medical');
      } else if (window.location.hash === '#healingbreeze') {
        setCurrentPage('healingbreeze');
      } else if (window.location.hash === '#elreju') {
        setCurrentPage('elreju');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentPage === 'casestudy') {
    return <CaseStudy />;
  }

  if (currentPage === 'moomoo') {
    return <MoomooCaseStudy />;
  }

  if (currentPage === 'medical') {
    return <MedicalCaseStudy />;
  }

  if (currentPage === 'healingbreeze') {
    return <HealingbreezeCaseStudy />;
  }

  if (currentPage === 'elreju') {
    return <ElrejuCaseStudy />;
  }

  return (
    <div className="min-h-screen bg-portfolio-bg">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
