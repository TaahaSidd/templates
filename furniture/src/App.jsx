import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import ProductGrid from './components/ProductGrid';
import AboutSection from './components/AboutSection';
import Features from './components/Features';
import Footer from './components/Footer';
import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Collections />
      <ProductGrid />
      <AboutSection />
      <Features />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;