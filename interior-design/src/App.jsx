import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import PortfolioGrid from './components/PortfolioGrid';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#131313] select-none scroll-smooth">

      <NavBar />
      <Hero />
      <About />
      <Services />
      <Process />
      <PortfolioGrid />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;